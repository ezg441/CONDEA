/**
 * CONDEA — YouTube Yorum Zekâsı Web App (Google Apps Script)
 * Backend: Google Sheet'i canlı okur/yazar, Make webhook'unu SUNUCU tarafında
 * tetikler (API anahtarı tarayıcıya hiç düşmez), gerçek Google girişi kullanır.
 */

// ============ AYARLAR (CONFIG) ============
const CONFIG = {
  SHEET_ID: 'BURAYA_GOOGLE_SHEET_ID',
  SHEET_NAME: 'Sayfa1',
  WEBHOOK_URL: 'BURAYA_MAKE_WEBHOOK_URL',
  API_KEY: 'BURAYA_GIZLI_ANAHTAR',      // sunucuda kalır, gizli
  CHANNEL_NAME: 'Unseen Archives',
  REPORT_EMAIL: '',
  ADMIN_EMAIL: '',   // hata bildirimlerinin gideceği adres (boşsa sadece "Hatalar" sekmesine yazılır)
  GEMINI_API_KEY: '',
  GEMINI_MODEL: 'gemini-2.5-flash'
};

// ============ HATA YÖNETİMİ / LOGLAMA (Error Handling) ============
// Hata olduğunda sistem kilitlenmez: hata "Hatalar" sekmesine yazılır,
// ADMIN_EMAIL doluysa yöneticiye bildirim maili gider.
function _logError(where, message) {
  try {
    var ss = SpreadsheetApp.openById(CONFIG.SHEET_ID);
    var sh = ss.getSheetByName('Hatalar');
    if (!sh) { sh = ss.insertSheet('Hatalar'); sh.getRange(1, 1, 1, 3).setValues([['Tarih', 'Yer', 'Hata']]); }
    sh.appendRow([new Date(), String(where), String(message)]);
    SpreadsheetApp.flush();
    if (CONFIG.ADMIN_EMAIL) {
      MailApp.sendEmail(CONFIG.ADMIN_EMAIL, 'Condea ⚠ Hata: ' + where,
        'Yer: ' + where + '\nHata: ' + message + '\nZaman: ' + new Date());
    }
  } catch (e) { /* loglama bile başarısızsa sessiz geç */ }
}

// ============ KANALLAR (Sheet tabanlı — siteden yönetilir) ============
function _channelsSheet() {
  var ss = SpreadsheetApp.openById(CONFIG.SHEET_ID);
  var sh = ss.getSheetByName('Kanallar');
  if (!sh) {
    sh = ss.insertSheet('Kanallar');
    sh.getRange(1, 1, 1, 4).setValues([['Key', 'Etiket', 'VeriSekmesi', 'AyarSekmesi']]);
    sh.getRange(2, 1, 1, 4).setValues([['unseen', CONFIG.CHANNEL_NAME, CONFIG.SHEET_NAME, 'Ayarlar']]);
  }
  return sh;
}

function getChannels() {
  var vals = _channelsSheet().getDataRange().getValues().slice(1);
  return vals.filter(function (r) { return r[0]; })
    .map(function (r) { return { key: String(r[0]), label: String(r[1]) }; });
}

function _channelRow(channelKey) {
  var vals = _channelsSheet().getDataRange().getValues().slice(1).filter(function (r) { return r[0]; });
  var r = vals.filter(function (x) { return String(x[0]) === channelKey; })[0] || vals[0];
  return {
    key: String(r[0]), label: String(r[1]),
    dataSheet: String(r[2] || CONFIG.SHEET_NAME),
    settingsSheet: String(r[3] || 'Ayarlar')
  };
}

function _resolveSheet(channelKey) {
  var cr = _channelRow(channelKey);
  return { sheet: SpreadsheetApp.openById(CONFIG.SHEET_ID).getSheetByName(cr.dataSheet), label: cr.label };
}

function addChannel(obj) {
  if (!obj || !obj.label) return { ok: false, message: 'Kanal adı gerekli.' };
  var ss = SpreadsheetApp.openById(CONFIG.SHEET_ID);
  var key = String(obj.label).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 18) + '-' + Math.floor(Math.random() * 900 + 100);
  var dataName = obj.dataSheet || ('Veri_' + key);
  var setName = obj.settingsSheet || ('Ayar_' + key);

  if (!ss.getSheetByName(dataName)) {
    var nd = ss.insertSheet(dataName);
    var src = ss.getSheetByName(CONFIG.SHEET_NAME);
    if (src) nd.getRange(1, 1, 1, 12).setValues(src.getRange(1, 1, 1, 12).getValues());
  }
  if (!ss.getSheetByName(setName)) {
    var na = ss.insertSheet(setName);
    na.getRange(1, 1, 8, 2).setValues([
      ['Kanal Adı', obj.label],
      ['Kanal Konusu', ''],
      ['Özel Konu Kelimesi', ''],
      ['Özel Konu Kelimesi', ''],
      ['AI Kanal Cümlesi', 'Sen ' + obj.label + ' adlı bir YouTube kanalının analiz asistanısın.'],
      ['Rapor Sıklığı', 'Günlük'],
      ['İçerik İsteği Bölümü', 'Evet'],
      ['Eleştiri Bölümü', 'Evet']
    ]);
  }
  _channelsSheet().appendRow([key, obj.label, dataName, setName]);
  return { ok: true, key: key, label: obj.label };
}

// ============ ÖRNEK VERİ (demo) — sadece demo kanallar, Unseen korunur ============
const REAL_CHANNEL_KEY = 'unseen';  // jüri kanalı: mock/sıfırlama yasak

function seedSampleComments(channelKey) {
  if (channelKey === REAL_CHANNEL_KEY) return { ok: false, message: 'Ana kanala (Unseen Archives) örnek veri eklenmez.' };
  var sh = _resolveSheet(channelKey).sheet;
  if (!sh) return { ok: false, message: 'Kanal sekmesi bulunamadı.' };
  var now = new Date();
  var rows = [
    ['demo-1', 'Bu kanalı yeni keşfettim, içerikler harika! Devamını bekliyorum.', '@demo_izleyici', 'Olumlu', 'Beğeni/Teşekkür',
      'Çok teşekkürler! Desteğin bizim için çok değerli, yeni içerikler yolda. 🙏', 'Aramıza hoş geldin! 🙌 Sıkı dur, güzel şeyler geliyor.', 'bekliyor', now, 42, '', 'Övgü'],
    ['demo-2', 'Bir sonraki videoda kamera ayarlarını anlatır mısınız?', '@merakli_uretici', 'Nötr', 'Yeni İçerik Önerisi/Soru',
      'Harika fikir! Kamera ayarları konusunu listeye ekledik, yakında geliyor. 🎥', 'Süper öneri! 📸 Kamera ayarları videosu geliyor, takipte kal.', 'bekliyor', now, 30, '', 'İçerik İsteği'],
    ['demo-3', 'Ses kalitesi bu videoda biraz düşüktü, bazı yerleri anlayamadım.', '@dikkatli_dinleyici', 'Olumsuz', 'Eleştiri/Şikâyet',
      'Geri bildirimin için teşekkürler, bir sonraki videoda ses seviyelerini dengeleyeceğiz.', 'Haklısın, uyardığın için sağ ol! Sesi düzelteceğiz. 🔧', 'bekliyor', now, 18, '', 'Yergi'],
    ['demo-4', 'Please make a video about this topic in English too!', '@global_fan', 'Nötr', 'Yeni İçerik Önerisi/Soru',
      'Thanks for the suggestion! An English version is on our radar. 🌍', 'Great idea! English content is coming — stay tuned! 🌍', 'bekliyor', now, 25, '', 'İçerik İsteği'],
    ['demo-5', 'Emeğine sağlık, anlatımın çok akıcı ve keyifli.', '@sadik_takipci', 'Olumlu', 'Beğeni/Teşekkür',
      'Çok teşekkürler! Böyle yorumlar motivasyonumuz. 🖤', 'Ne güzel yazmışsın, teşekkürler! 🖤 İyi ki varsın.', 'bekliyor', now, 55, '', 'Övgü']
  ];
  sh.getRange(sh.getLastRow() + 1, 1, rows.length, rows[0].length).setValues(rows);
  SpreadsheetApp.flush();
  return { ok: true, message: rows.length + ' örnek yorum eklendi.' };
}

// Bir demo kanalın TÜM yorum verisini sıfırla (Unseen korunur)
function clearChannelData(channelKey) {
  if (channelKey === REAL_CHANNEL_KEY) return { ok: false, message: 'Ana kanal (Unseen Archives) sıfırlanamaz.' };
  var sh = _resolveSheet(channelKey).sheet;
  if (!sh) return { ok: false, message: 'Kanal bulunamadı.' };
  var last = sh.getLastRow();
  if (last > 1) sh.deleteRows(2, last - 1);
  SpreadsheetApp.flush();
  return { ok: true, message: 'Kanal verisi sıfırlandı.' };
}

// Bir kanaldaki demo-* (sahte ID'li) satırları siler
function removeDemoRows(channelKey) {
  var sh = _resolveSheet(channelKey).sheet;
  if (!sh) return { ok: false, message: 'Kanal bulunamadı.' };
  var last = sh.getLastRow(), silinen = 0;
  for (var r = last; r >= 2; r--) {
    if (/^demo-/i.test(String(sh.getRange(r, 1).getValue() || ''))) { sh.deleteRow(r); silinen++; }
  }
  SpreadsheetApp.flush();
  return { ok: true, message: silinen + ' demo satırı silindi.' };
}

// Editörde BİR KEZ çalıştır: Unseen Archives'teki demo/mock yorumları temizler
function temizleUnseenDemo() { return removeDemoRows(REAL_CHANNEL_KEY); }

// ============ AYARLAR (siteden oku/yaz) ============
function getSettings(channelKey) {
  var cr = _channelRow(channelKey);
  var sh = SpreadsheetApp.openById(CONFIG.SHEET_ID).getSheetByName(cr.settingsSheet);
  if (!sh) return { error: 'Ayarlar sekmesi (' + cr.settingsSheet + ') bulunamadı.' };
  function b(row) { return String(sh.getRange(row, 2).getValue() || ''); }
  return {
    kanalAdi: b(1), kanalKonusu: b(2), ozelKonu: b(3), aiCumle: b(5),
    raporSikligi: b(6), icerikBolumu: b(7), elestiriBolumu: b(8),
    ekAlici: b(9)   // B9: kalıcı ek rapor alıcısı
  };
}

// Ek rapor alıcısını Ayarlar B9'a kaydet (kalıcı)
function _saveExtraEmail(channelKey, email) {
  try {
    var cr = _channelRow(channelKey);
    var sh = SpreadsheetApp.openById(CONFIG.SHEET_ID).getSheetByName(cr.settingsSheet);
    if (sh) { sh.getRange(9, 1).setValue('Ek Rapor Alıcısı'); sh.getRange(9, 2).setValue(email); SpreadsheetApp.flush(); }
  } catch (e) { _logError('_saveExtraEmail', e.message); }
}

// ============ ABONELER (karşılama ekranından mail girerek rapora abone olanlar) ============
function subscribeEmail(channelKey, email) {
  if (!email || !/\S+@\S+\.\S+/.test(email)) return { ok: false };
  try {
    var ss = SpreadsheetApp.openById(CONFIG.SHEET_ID);
    var sh = ss.getSheetByName('Aboneler');
    if (!sh) { sh = ss.insertSheet('Aboneler'); sh.getRange(1, 1, 1, 3).setValues([['Tarih', 'E-posta', 'Kanal']]); }
    var em = String(email).trim();
    var existing = sh.getDataRange().getValues().slice(1).map(function (r) {
      return String(r[1]).trim().toLowerCase() + '|' + String(r[2]);
    });
    var key = em.toLowerCase() + '|' + (channelKey || '');
    if (existing.indexOf(key) === -1) sh.appendRow([new Date(), em, channelKey || '']);
    SpreadsheetApp.flush();
    return { ok: true, email: em };
  } catch (e) { _logError('subscribeEmail', e.message); return { ok: false }; }
}

function _getSubscribers(channelKey) {
  try {
    var sh = SpreadsheetApp.openById(CONFIG.SHEET_ID).getSheetByName('Aboneler');
    if (!sh) return [];
    return sh.getDataRange().getValues().slice(1)
      .filter(function (r) { return r[1] && String(r[2]) === String(channelKey); })
      .map(function (r) { return String(r[1]).trim(); });
  } catch (e) { return []; }
}

// Aboneliği/e-postayı SİL — silindikten sonra rapor gitmez (veri gizliliği)
function unsubscribeEmail(channelKey, email) {
  if (!email) return { ok: false, message: 'E-posta gerekli.' };
  try {
    var em = String(email).trim().toLowerCase();
    var ss = SpreadsheetApp.openById(CONFIG.SHEET_ID);
    var removed = 0;
    var sh = ss.getSheetByName('Aboneler');
    if (sh) {
      for (var r = sh.getLastRow(); r >= 2; r--) {
        if (String(sh.getRange(r, 2).getValue()).trim().toLowerCase() === em) { sh.deleteRow(r); removed++; }
      }
    }
    // Kayıtlı ek alıcı (B9) da eşleşirse temizle
    try {
      var cr = _channelRow(channelKey);
      var s2 = ss.getSheetByName(cr.settingsSheet);
      if (s2 && String(s2.getRange(9, 2).getValue()).trim().toLowerCase() === em) s2.getRange(9, 2).setValue('');
    } catch (e) {}
    SpreadsheetApp.flush();
    return { ok: true, message: removed > 0 ? 'E-postan silindi, artık rapor gönderilmeyecek.' : 'Bu e-posta kayıtlı değildi.' };
  } catch (e) { _logError('unsubscribeEmail', e.message); return { ok: false, message: 'Silinemedi: ' + e.message }; }
}

// Owner: dönem sonunda tüm abone kayıtlarını temizle
function clearAllSubscribers() {
  try {
    var sh = SpreadsheetApp.openById(CONFIG.SHEET_ID).getSheetByName('Aboneler');
    if (sh && sh.getLastRow() > 1) sh.deleteRows(2, sh.getLastRow() - 1);
    SpreadsheetApp.flush();
    return { ok: true, message: 'Tüm abone kayıtları silindi.' };
  } catch (e) { return { ok: false }; }
}

function saveSettings(channelKey, s) {
  var cr = _channelRow(channelKey);
  var sh = SpreadsheetApp.openById(CONFIG.SHEET_ID).getSheetByName(cr.settingsSheet);
  if (!sh) return { ok: false, message: 'Ayarlar sekmesi yok.' };
  sh.getRange(1, 2).setValue(s.kanalAdi || '');
  sh.getRange(2, 2).setValue(s.kanalKonusu || '');
  sh.getRange(3, 2).setValue(s.ozelKonu || '');
  sh.getRange(4, 2).setValue(s.ozelKonu || '');
  sh.getRange(5, 2).setValue('Sen ' + (s.kanalAdi || '') + ' adlı, ' + (s.kanalKonusu || '') + ' anlatan bir YouTube kanalının analiz asistanısın.');
  sh.getRange(6, 2).setValue(s.raporSikligi || 'Günlük');
  sh.getRange(7, 2).setValue(s.icerikBolumu || 'Evet');
  sh.getRange(8, 2).setValue(s.elestiriBolumu || 'Evet');
  SpreadsheetApp.flush();
  return { ok: true, message: 'Ayarlar kaydedildi.' };
}

// Sütun indeksleri (0 tabanlı)
const COL = {
  commentId: 0, text: 1, author: 2, duygu: 3, niyet: 4,
  taslakA: 5, taslakB: 6, durum: 7, publishedAt: 8, likeCount: 9, ozelKonu: 10, kategori: 11
};

// ============ WEB APP GİRİŞ NOKTASI ============
function doGet() {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('Condea — Yorum Zekâsı')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(filename) { return HtmlService.createHtmlOutputFromFile(filename).getContent(); }

function getCurrentUser() {
  const email = Session.getActiveUser().getEmail();
  return email || 'kullanıcı';
}

// ============ SHEET'İ CANLI OKU ============
function getDashboardData(channelKey) {
  const resolved = _resolveSheet(channelKey);
  const sh = resolved.sheet;
  const values = sh.getDataRange().getValues();
  const rows = values.slice(1);

  const comments = [];
  let contentReq = 0, criticism = 0, praise = 0, spam = 0;

  rows.forEach(function (r, i) {
    const id = String(r[COL.commentId] || '').trim();
    if (!id) return;
    const niyet = String(r[COL.niyet] || '');
    const kategori = String(r[COL.kategori] || '');
    const isSpam = /spam|reklam/i.test(niyet) || /spam|reklam/i.test(kategori);
    if (isSpam) { spam++; return; }
    if (/içerik|öneri|soru/i.test(niyet) || /içerik/i.test(kategori)) contentReq++;
    if (/eleştiri|şikâyet|şikayet|yergi/i.test(niyet) || /eleştiri/i.test(kategori)) criticism++;
    if (/beğeni|teşekkür|övgü/i.test(niyet) || /övgü/i.test(kategori)) praise++;
    comments.push({
      rowNumber: i + 2, id: id,
      text: String(r[COL.text] || ''), author: String(r[COL.author] || ''),
      duygu: String(r[COL.duygu] || ''), niyet: niyet,
      taslakA: String(r[COL.taslakA] || ''), taslakB: String(r[COL.taslakB] || ''),
      durum: String(r[COL.durum] || 'bekliyor'), likeCount: Number(r[COL.likeCount] || 0),
      ozelKonu: String(r[COL.ozelKonu] || ''), kategori: kategori,
      publishedAt: _toIso(r[COL.publishedAt])
    });
  });

  comments.sort(function (a, b) { return b.likeCount - a.likeCount; });

  return {
    user: getCurrentUser(), channel: resolved.label,
    channels: getChannels(), channelKey: _channelRow(channelKey).key,
    kpis: { total: comments.length, contentReq: contentReq, criticism: criticism, praise: praise, spam: spam },
    comments: comments
  };
}

// ============ ONAYLA ============
function approveComment(rowNumber, channelKey) {
  const sh = _resolveSheet(channelKey).sheet;
  sh.getRange(rowNumber, COL.durum + 1).setValue('onaylandı');
  SpreadsheetApp.flush();
  return { ok: true, rowNumber: rowNumber, durum: 'onaylandı' };
}

function approveWithDraft(rowNumber, draftText, channelKey) {
  const sh = _resolveSheet(channelKey).sheet;
  if (draftText) sh.getRange(rowNumber, COL.taslakA + 1).setValue(draftText);
  sh.getRange(rowNumber, COL.durum + 1).setValue('onaylandı');
  SpreadsheetApp.flush();
  _pingWebhook({ action: 'reply', rowNumber: rowNumber });
  return { ok: true, rowNumber: rowNumber, durum: 'onaylandı', message: '✓ Onaylandı — yanıt kanaldan yayınlanıyor.' };
}

// Make yanıt senaryosunu webhook ile tetikle. Başlık adı Make'in beklediği: x-make-apikey
function _pingWebhook(payload) {
  if (!CONFIG.WEBHOOK_URL) return;
  try {
    UrlFetchApp.fetch(CONFIG.WEBHOOK_URL, {
      method: 'post',
      contentType: 'application/json',
      headers: { 'x-make-apikey': CONFIG.API_KEY },
      payload: JSON.stringify(payload || {}),
      muteHttpExceptions: true
    });
  } catch (e) { /* yoksay */ }
}

// ============ RAPOR ÜRET (Make webhook — legacy) ============
function generateReport() {
  const email = getCurrentUser();
  const payload = { action: 'report', email: email, channel: CONFIG.CHANNEL_NAME, triggeredAt: new Date().toISOString() };
  const options = {
    method: 'post', contentType: 'application/json',
    headers: { 'x-make-apikey': CONFIG.API_KEY },
    payload: JSON.stringify(payload), muteHttpExceptions: true
  };
  try {
    const res = UrlFetchApp.fetch(CONFIG.WEBHOOK_URL, options);
    const code = res.getResponseCode();
    if (code >= 200 && code < 300) return { ok: true, message: 'Rapor tetiklendi. E-postana birazdan düşecek.' };
    _logError('generateReport', 'HTTP ' + code);
    return { ok: false, message: 'Make yanıtı: ' + code + '. Webhook açık mı kontrol et.' };
  } catch (err) {
    _logError('generateReport', err.message);
    return { ok: false, message: 'Bağlantı hatası: ' + err.message };
  }
}

// ============ DÖNEM ============
const PERIODS = {
  day:   { days: 1,   label: 'Günlük (son 24 saat)' },
  week:  { days: 7,   label: 'Haftalık (son 7 gün)' },
  month: { days: 30,  label: 'Aylık (son 30 gün)' },
  all:   { days: 0,   label: 'Tüm zamanlar' }
};
function getPeriods() { return Object.keys(PERIODS).map(function (k) { return { key: k, label: PERIODS[k].label }; }); }

function _toIso(v) {
  if (!v) return '';
  var d = (v instanceof Date) ? v : new Date(v);
  return isNaN(d.getTime()) ? '' : d.toISOString();
}

function _inPeriod(iso, period) {
  if (!period || period === 'all') return true;
  if (!iso) return true;
  var d = new Date(iso);
  if (isNaN(d.getTime())) return true;
  var days = (PERIODS[period] || PERIODS.all).days;
  if (!days) return true;
  return (new Date().getTime() - d.getTime()) <= days * 86400000;
}

// Bir ÖNCEKİ dönem penceresi (trend karşılaştırması için)
function _inPrevPeriod(iso, period) {
  if (!period || period === 'all' || !iso) return false;
  var d = new Date(iso);
  if (isNaN(d.getTime())) return false;
  var days = (PERIODS[period] || PERIODS.all).days;
  if (!days) return false;
  var age = new Date().getTime() - d.getTime();
  return age > days * 86400000 && age <= 2 * days * 86400000;
}

function _computeKpis(comments) {
  var k = { total: comments.length, contentReq: 0, criticism: 0, praise: 0, spam: 0 };
  comments.forEach(function (c) {
    var s = (c.niyet + ' ' + c.kategori).toLowerCase();
    if (/içerik|öneri|soru/.test(s)) k.contentReq++;
    if (/eleştiri|şikâyet|şikayet|yergi/.test(s)) k.criticism++;
    if (/beğeni|teşekkür|övgü/.test(s)) k.praise++;
  });
  return k;
}

// ============ KAPSAM ============
const SCOPES = { full: 'Tümü', content: 'Sadece İçerik İstekleri', praise: 'Sadece Övgüler', crit: 'Sadece Eleştiriler', ovguyergi: 'Övgü + Yergi' };
function getScopes() { return Object.keys(SCOPES).map(function (k) { return { key: k, label: SCOPES[k] }; }); }
function _matchScope(c, scope) {
  var s = (c.niyet + ' ' + c.kategori).toLowerCase();
  if (scope === 'content') return /içerik|öneri|soru/.test(s);
  if (scope === 'crit') return /eleştiri|şikâyet|şikayet|yergi/.test(s);
  if (scope === 'praise') return /beğeni|teşekkür|övgü/.test(s);
  if (scope === 'ovguyergi') return /beğeni|teşekkür|övgü|eleştiri|şikâyet|şikayet|yergi/.test(s);
  return true;
}

// ============ RAPOR ============
function getReport(channelKey, period, scope) {
  period = period || 'week';
  scope = scope || 'full';
  const data = getDashboardData(channelKey);
  const comments = data.comments.filter(function (c) { return _inPeriod(c.publishedAt, period); });

  function pick(cat, n) {
    return comments.filter(function (c) {
      var s = (c.niyet + ' ' + c.kategori).toLowerCase();
      if (cat === 'content') return /içerik|öneri|soru/.test(s);
      if (cat === 'crit') return /eleştiri|şikâyet|şikayet|yergi/.test(s);
      if (cat === 'praise') return /beğeni|teşekkür|övgü/.test(s);
      return false;
    }).slice(0, n);
  }

  const kpis = _computeKpis(comments);
  let olumlu = 0, olumsuz = 0, notr = 0;
  comments.forEach(function (c) {
    var d = (c.duygu || '').toLowerCase();
    if (/olumlu|positive|pozitif/.test(d)) olumlu++;
    else if (/olumsuz|negative|negatif/.test(d)) olumsuz++;
    else notr++;
  });

  let summary = '';
  if (CONFIG.GEMINI_API_KEY && comments.length) summary = geminiSummary(comments);

  // TREND: bir önceki dönemle karşılaştırma
  var prevComments = data.comments.filter(function (c) { return _inPrevPeriod(c.publishedAt, period); });
  var prevK = _computeKpis(prevComments);
  function tr(now, prev) {
    var pct = prev > 0 ? Math.round((now - prev) / prev * 100) : (now > 0 ? 100 : 0);
    return { now: now, prev: prev, pct: pct };
  }
  var trend = (period === 'all') ? null : {
    total: tr(kpis.total, prevK.total),
    contentReq: tr(kpis.contentReq, prevK.contentReq),
    criticism: tr(kpis.criticism, prevK.criticism),
    praise: tr(kpis.praise, prevK.praise)
  };

  // AYARLAR: hangi bölümler rapora/mail'e girsin (İçerik İsteği / Eleştiri Evet/Hayır)
  var st = {};
  try { st = getSettings(channelKey) || {}; } catch (e) {}
  var showContent = (!st.icerikBolumu) ? true : /evet/i.test(st.icerikBolumu);
  var showCrit = (!st.elestiriBolumu) ? true : /evet/i.test(st.elestiriBolumu);

  return {
    channel: data.channel,
    date: Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'd MMMM yyyy'),
    period: period, periodLabel: (PERIODS[period] || PERIODS.all).label, periods: getPeriods(),
    scope: scope, scopeLabel: SCOPES[scope] || SCOPES.full, scopes: getScopes(),
    kpis: kpis, summary: summary, trend: trend, sections: { content: showContent, crit: showCrit }, extraEmail: st.ekAlici || '',
    charts: { sentiment: [olumlu, olumsuz, notr], cats: [kpis.praise, kpis.criticism, kpis.contentReq] },
    topContent: pick('content', 5), topCriticism: pick('crit', 3), topPraise: pick('praise', 5),
    all: comments.filter(function (c) { return _matchScope(c, scope); })
  };
}

// ============ RAPORU MAIL OLARAK GÖNDER ============
function emailReport(channelKey, mode, period, scope, extraEmail) {
  var r = getReport(channelKey, period, scope);
  var to = CONFIG.REPORT_EMAIL || Session.getEffectiveUser().getEmail();
  var recipients = [];
  if (to) recipients.push(to);

  // Kayıtlı ek alıcı (Ayarlar B9) — otomatik raporda da geçerli
  var saved = '';
  try { saved = (getSettings(channelKey) || {}).ekAlici || ''; } catch (e) {}
  if (saved && /\S+@\S+\.\S+/.test(saved)) recipients.push(saved.trim());

  // Aboneler (karşılama ekranından mail girerek giriş yapanlar) — otomatik raporda da geçerli
  _getSubscribers(channelKey).forEach(function (s) { if (/\S+@\S+\.\S+/.test(s)) recipients.push(s.trim()); });

  // Rapordaki "Ek e-posta" — TEK SEFERLİK (kaydedilmez, otomatik listeye girmez)
  if (extraEmail && /\S+@\S+\.\S+/.test(extraEmail)) {
    recipients.push(String(extraEmail).trim());
  }
  // Tekrarları temizle
  recipients = recipients.filter(function (v, i, a) { return v && a.indexOf(v) === i; });
  if (!recipients.length) return { ok: false, message: 'Alıcı e-posta bulunamadı.' };
  try {
    MailApp.sendEmail(recipients.join(','), 'Condea — ' + r.channel + ' Raporu · ' + r.periodLabel,
      'Bu e-posta HTML biçimindedir.',
      { htmlBody: _buildReportHtml(r, mode || 'short'), name: 'Condea' });
    return { ok: true, message: '✓ Rapor gönderildi: ' + recipients.join(', ') };
  } catch (e) {
    _logError('emailReport', e.message);
    return { ok: false, message: 'Gönderilemedi: ' + e.message };
  }
}

// ============ GİRİŞ KAYDI ============
function logLogin() {
  try {
    var email = Session.getActiveUser().getEmail() || 'anonim';
    var ss = SpreadsheetApp.openById(CONFIG.SHEET_ID);
    var sh = ss.getSheetByName('Girişler');
    if (!sh) { sh = ss.insertSheet('Girişler'); sh.getRange(1, 1, 1, 2).setValues([['Tarih', 'E-posta']]); }
    sh.appendRow([new Date(), email]);
    return { ok: true, email: email };
  } catch (e) { return { ok: false }; }
}

// ============ OTOMATİK ZAMANLI RAPOR ============
function sendScheduledReports() {
  var now = new Date();
  var dow = now.getDay(), dom = now.getDate();
  getChannels().forEach(function (ch) {
    var s = getSettings(ch.key);
    var freq = String(s.raporSikligi || '').toLowerCase();
    var send = false, period = 'day';
    if (/günlük|gunluk|daily/.test(freq)) { send = true; period = 'day'; }
    else if (/haftalık|haftalik|weekly/.test(freq)) { send = (dow === 1); period = 'week'; }
    else if (/aylık|aylik|monthly/.test(freq)) { send = (dom === 1); period = 'month'; }
    if (send) {
      try { emailReport(ch.key, 'short', period); }
      catch (e) { _logError('sendScheduledReports:' + ch.key, e.message); }
    }
  });
}

function kurOtomatikRapor() {
  ScriptApp.getProjectTriggers().forEach(function (t) {
    if (t.getHandlerFunction() === 'sendScheduledReports') ScriptApp.deleteTrigger(t);
  });
  ScriptApp.newTrigger('sendScheduledReports').timeBased().everyDays(1).atHour(9).create();
  return '✓ Otomatik rapor kuruldu: her sabah 09:00 kontrol edilir.';
}

// ============ RAPOR HTML ============
function _esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (m) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[m]; }); }

function _bar(label, value, total, color) {
  var pct = total > 0 ? Math.round(value / total * 100) : 0;
  return '<tr><td style="padding:6px 0;font-size:12px;color:#555;width:110px;">' + label + '</td>' +
    '<td style="padding:6px 0;"><table width="100%" cellpadding="0" cellspacing="0"><tr>' +
    '<td width="' + pct + '%" style="background:' + color + ';height:14px;border-radius:7px;font-size:0;line-height:0;">&nbsp;</td>' +
    '<td style="font-size:0;line-height:0;">&nbsp;</td></tr></table></td>' +
    '<td style="padding:6px 0 6px 10px;font-size:12px;color:#888;width:60px;text-align:right;">' + value + ' · %' + pct + '</td></tr>';
}

function _item(c, crit) {
  return '<tr><td style="padding:0 0 12px;"><table width="100%" cellpadding="0" cellspacing="0" style="background:' +
    (crit ? '#fff8f5;border:1px solid #f3ddd2;border-left:4px solid #e0703a' : '#faf9f7;border:1px solid #ececec') +
    ';border-radius:12px;"><tr><td style="padding:15px 18px;">' +
    '<p style="margin:0;font-size:14px;line-height:1.55;color:#1a1a1a;">' + _esc(c.text) + '</p>' +
    '<p style="margin:9px 0 0;font-size:12px;color:#999;">' + _esc(c.author) + ' &nbsp;·&nbsp; ♥ ' + c.likeCount + '</p>' +
    (!crit && c.taslakA ? '<table width="100%" cellpadding="0" cellspacing="0" style="margin-top:12px;background:#eef7f1;border-radius:9px;"><tr><td style="padding:10px 12px;font-size:12px;color:#1f7a4d;line-height:1.5;"><strong>↳ Önerilen yanıt&nbsp;&nbsp;</strong>' + _esc(c.taslakA) + '</td></tr></table>' : '') +
    '</td></tr></table></td></tr>';
}

function _buildReportHtml(r, mode) {
  var k = r.kpis, s = r.charts.sentiment, tot = s[0] + s[1] + s[2];
  var h = '<!DOCTYPE html><html lang="tr"><body style="margin:0;padding:0;background:#e9ebef;font-family:\'Segoe UI\',Helvetica,Arial,sans-serif;">' +
    '<table width="100%" cellpadding="0" cellspacing="0" style="background:#e9ebef;padding:32px 12px;"><tr><td align="center">' +
    '<table width="620" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:20px;overflow:hidden;">' +
    '<tr><td style="height:5px;background:#c4302b;font-size:0;line-height:0;">&nbsp;</td></tr>' +
    '<tr><td style="background:#1b1b22;padding:34px 36px 30px;">' +
    '<p style="margin:0 0 10px;font-size:12px;letter-spacing:4px;color:#c4302b;font-weight:700;">C O N D E A</p>' +
    '<p style="margin:0 0 14px;font-size:13px;color:#9a9aa8;font-style:italic;">Keşfet. Yakala. Yayınla.</p>' +
    '<h1 style="margin:0;color:#fff;font-size:25px;font-weight:600;">' + (mode === 'long' ? 'Detaylı İçerik Raporu' : 'İçerik Özeti') + '</h1>' +
    '<p style="margin:12px 0 0;color:#8f8f9c;font-size:13px;">' + _esc(r.channel) + ' &nbsp;·&nbsp; ' + r.date + '</p>' +
    '<p style="margin:14px 0 0;display:inline-block;background:#2a2a34;color:#c9c9d4;font-size:11px;padding:6px 12px;border-radius:20px;">📅 ' + _esc(r.periodLabel) +
    (r.scope && r.scope !== 'full' ? ' &nbsp;·&nbsp; 🏷 ' + _esc(r.scopeLabel) : '') + '</p></td></tr>';

  h += '<tr><td style="padding:26px 36px 8px;"><table width="100%" cellpadding="0" cellspacing="0"><tr>' +
    _kpiCell(k.total, 'Toplam') + _kpiCell(k.contentReq, 'İçerik İsteği') +
    _kpiCell(k.criticism, 'Yergi') + _kpiCell(k.praise, 'Övgü') + '</tr></table></td></tr>';

  // TREND satırı (geçen döneme göre)
  if (r.trend) {
    h += '<tr><td style="padding:4px 36px 6px;"><table width="100%" cellpadding="0" cellspacing="0" style="background:#f6f6f8;border-radius:12px;"><tr>' +
      '<td style="padding:12px 16px;font-size:12px;color:#555;line-height:1.9;">' +
      '<strong style="color:#1b1b22;">📈 Geçen döneme göre &nbsp;</strong>' +
      _trendChip('Toplam', r.trend.total) + _trendChip('İçerik', r.trend.contentReq) +
      _trendChip('Yergi', r.trend.criticism) + _trendChip('Övgü', r.trend.praise) +
      '</td></tr></table></td></tr>';
  }

  h += '<tr><td style="padding:18px 36px 6px;"><p style="margin:0 0 10px;font-size:13px;font-weight:700;color:#1b1b22;">📊 Duygu Dağılımı</p>' +
    '<table width="100%" cellpadding="0" cellspacing="0">' +
    _bar('Olumlu', s[0], tot, '#4a90e2') + _bar('Olumsuz', s[1], tot, '#e0453f') + _bar('Nötr', s[2], tot, '#c9a227') +
    '</table></td></tr>';

  if (r.summary) {
    h += '<tr><td style="padding:22px 36px 4px;"><table width="100%" cellpadding="0" cellspacing="0" style="background:#faf6f2;border:1px solid #f0e6dc;border-left:4px solid #c4302b;border-radius:14px;"><tr>' +
      '<td style="padding:18px 20px;font-size:14px;color:#33333a;line-height:1.75;white-space:pre-line;">' +
      '<span style="display:block;margin-bottom:10px;font-size:11px;letter-spacing:1.5px;color:#c4302b;font-weight:700;">✦ YAPAY ZEKÂ ÖZETİ</span>' +
      _esc(r.summary) + '</td></tr></table></td></tr>';
  }

  if (mode === 'long') {
    h += '<tr><td style="padding:26px 36px 6px;font-size:16px;color:#1b1b22;font-weight:700;">🗂 Tüm Yorumlar (' + r.all.length + ')</td></tr>' +
      '<tr><td style="padding:14px 36px 30px;"><table width="100%" cellpadding="0" cellspacing="0">';
    if (r.all.length) r.all.forEach(function (c) { h += _item(c, /eleştiri|şikâyet|yergi/i.test(c.niyet)); });
    else h += '<tr><td style="font-size:13px;color:#999;">Bu dönemde yorum yok.</td></tr>';
    h += '</table></td></tr>';
  } else {
    var sec = function (title, arr, crit, emptyMsg) {
      var x = '<tr><td style="padding:22px 36px 6px;font-size:16px;color:#1b1b22;font-weight:700;">' + title + '</td></tr>' +
        '<tr><td style="padding:14px 36px 6px;"><table width="100%" cellpadding="0" cellspacing="0">';
      if (arr.length) arr.forEach(function (c) { x += _item(c, crit); });
      else x += '<tr><td style="font-size:13px;color:#999;">' + emptyMsg + '</td></tr>';
      return x + '</table></td></tr>';
    };
    var sc = r.scope;
    var g = r.sections || { content: true, crit: true };
    if (sc === 'content') h += sec('🎬 En Çok İstenen İçerikler', r.topContent, false, 'Bu dönem içerik isteği yok.');
    else if (sc === 'praise') h += sec('★ Öne Çıkan Övgüler', r.topPraise, false, 'Bu dönem övgü yok.');
    else if (sc === 'crit') h += sec('⚑ Dikkat Çeken Eleştiriler', r.topCriticism, true, 'Bu dönem eleştiri yok.');
    else if (sc === 'ovguyergi') { h += sec('★ Öne Çıkan Övgüler', r.topPraise, false, 'Bu dönem övgü yok.'); if (g.crit) h += sec('⚑ Dikkat Çeken Eleştiriler', r.topCriticism, true, 'Bu dönem eleştiri yok.'); }
    else { if (g.content) h += sec('🎬 En Çok İstenen İçerikler', r.topContent, false, 'Bu dönem içerik isteği yok.'); if (g.crit) h += sec('⚑ Dikkat Çeken Eleştiriler', r.topCriticism, true, 'Bu dönem eleştiri yok.'); }
  }

  h += '<tr><td style="background:#1b1b22;padding:24px 36px;text-align:center;">' +
    '<p style="margin:0;color:#c4302b;font-size:12px;letter-spacing:3px;font-weight:700;">C O N D E A</p>' +
    '<p style="margin:8px 0 0;color:#6f6f7c;font-size:11px;">Bu rapor yorumlarınız analiz edilerek otomatik oluşturuldu.</p>' +
    '</td></tr></table></td></tr></table></body></html>';
  return h;
}

function _kpiCell(n, l) {
  return '<td width="25%" align="center" style="padding:8px;"><div style="background:#f6f6f8;border-radius:12px;padding:14px 6px;">' +
    '<div style="font-size:21px;font-weight:800;color:#1b1b22;">' + (n || 0) + '</div>' +
    '<div style="font-size:10px;color:#8a8a99;margin-top:3px;">' + l + '</div></div></td>';
}

function _trendChip(label, t) {
  var up = t.now > t.prev, down = t.now < t.prev;
  var arrow = up ? '▲' : (down ? '▼' : '▬');
  var color = up ? '#2a8c5a' : (down ? '#c4302b' : '#999');
  return '<span style="display:inline-block;margin-right:16px;white-space:nowrap;">' + label + ': <strong style="color:#1b1b22;">' + t.now + '</strong> ' +
    '<span style="color:' + color + ';font-weight:700;">' + arrow + ' ' + (t.pct >= 0 ? '+' : '') + t.pct + '%</span> ' +
    '<span style="color:#aaa;">(geçen ' + t.prev + ')</span></span>';
}

function geminiSummary(comments) {
  const lines = comments.slice(0, 30).map(function (c) { return '[' + c.niyet + '] ' + c.text; }).join('\n');
  const prompt = CONFIG.CHANNEL_NAME + ' adlı YouTube kanalının analiz asistanısın. ' +
    'Aşağıdaki yorumlara dayanarak SADECE TÜRKÇE yaz:\n' +
    'ÖZET: Genel hava ve en çok istenen konular (2-3 cümle).\n' +
    'ÖNERİLEN VİDEOLAR:\n1. (başlık)\n2. (başlık)\n3. (başlık)\n\nYorumlar:\n' + lines;
  const url = 'https://generativelanguage.googleapis.com/v1beta/models/' + CONFIG.GEMINI_MODEL + ':generateContent?key=' + CONFIG.GEMINI_API_KEY;
  const options = { method: 'post', contentType: 'application/json', payload: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }), muteHttpExceptions: true };
  try {
    const res = UrlFetchApp.fetch(url, options);
    if (res.getResponseCode() !== 200) return '';
    const json = JSON.parse(res.getContentText());
    return json.candidates[0].content.parts[0].text || '';
  } catch (e) { return ''; }
}

<!DOCTYPE html>
<html lang="tr">
<head>
<base target="_top">
<meta charset="UTF-8">
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"></script>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --bg: #0f0f14; --card: #1a1a22; --card2: #22222c; --line: #2c2c38;
    --red: #e0453f; --red-d: #c4302b; --txt: #ececf1; --mut: #8a8a99;
    --green: #2ec08a; --green-bg: #15281f; --amber: #e0863a;
  }
  body { font-family: -apple-system, 'Segoe UI', Roboto, sans-serif; background: var(--bg); color: var(--txt); -webkit-font-smoothing: antialiased; }

  .top { position: sticky; top: 0; z-index: 20; background: rgba(15,15,20,.85); backdrop-filter: blur(12px); border-bottom: 1px solid var(--line); }
  .top-in { max-width: 940px; margin: 0 auto; padding: 16px 22px; display: flex; align-items: center; gap: 16px; }
  .brand { font-size: 13px; letter-spacing: 3px; font-weight: 800; color: var(--red); }
  .brand small { display: block; font-size: 11px; letter-spacing: .3px; color: var(--mut); font-weight: 500; margin-top: 2px; }
  .spacer { flex: 1; }
  #channelSel { background: var(--card); color: var(--txt); border: 1px solid var(--line); border-radius: 10px; padding: 8px 12px; font-size: 13px; cursor: pointer; }
  #channelSel:focus { outline: none; border-color: var(--red-d); }
  #sortSel { background: var(--card); color: var(--txt); border: 1px solid var(--line); border-radius: 20px; padding: 8px 14px; font-size: 13px; cursor: pointer; margin-left: auto; }
  #sortSel:focus { outline: none; border-color: var(--red-d); }
  .hbtn { background: var(--card); color: var(--txt); border: 1px solid var(--line); border-radius: 10px; padding: 8px 12px; font-size: 12px; cursor: pointer; white-space: nowrap; }
  .hbtn:hover { border-color: var(--red-d); }
  .user { font-size: 12px; color: var(--mut); text-align: right; line-height: 1.4; }
  .user b { color: var(--txt); font-weight: 600; }
  .btn-report { background: var(--red-d); color: #fff; border: none; border-radius: 12px; padding: 11px 18px; font-size: 13px; font-weight: 700; cursor: pointer; transition: transform .1s, background .2s; white-space: nowrap; }
  .btn-report:hover { background: var(--red); }
  .btn-report:active { transform: scale(.96); }
  .btn-report:disabled { opacity: .55; cursor: default; }

  .wrap { max-width: 940px; margin: 0 auto; padding: 24px 22px 60px; }

  .kpis { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 22px; }
  .kpi { background: var(--card); border: 1px solid var(--line); border-radius: 16px; padding: 16px 18px; }
  .kpi .n { font-size: 26px; font-weight: 800; }
  .kpi .l { font-size: 11px; color: var(--mut); margin-top: 4px; letter-spacing: .3px; }
  .kpi.r .n { color: var(--red); }
  .kpi.g .n { color: var(--green); }
  .kpi.a .n { color: var(--amber); }

  .tabs { display: flex; gap: 8px; margin-bottom: 18px; flex-wrap: wrap; align-items: center; }
  .tab { background: var(--card); border: 1px solid var(--line); color: var(--mut); border-radius: 20px; padding: 8px 16px; font-size: 13px; cursor: pointer; transition: all .15s; }
  .tab.on { background: var(--red-d); border-color: var(--red-d); color: #fff; font-weight: 600; }

  .card { background: var(--card); border: 1px solid var(--line); border-radius: 16px; padding: 18px 20px; margin-bottom: 14px; }
  .c-head { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; flex-wrap: wrap; }
  .badge { font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 20px; }
  .b-content { background: #1c2b3a; color: #6bb0ff; }
  .b-crit { background: #2f2015; color: var(--amber); }
  .b-praise { background: var(--green-bg); color: var(--green); }
  .b-neutral { background: #26262f; color: var(--mut); }
  .likes { font-size: 12px; color: var(--mut); }
  .author { font-size: 12px; color: var(--mut); margin-left: auto; }
  .c-text { font-size: 15px; line-height: 1.55; margin-bottom: 14px; }
  .special { display: inline-block; font-size: 11px; color: var(--amber); background: #2a1f12; padding: 3px 9px; border-radius: 6px; margin-bottom: 12px; }

  .tone { display: flex; gap: 8px; margin-bottom: 10px; }
  .tone button { flex: 0 0 auto; background: var(--card2); border: 1px solid var(--line); color: var(--mut); border-radius: 9px; padding: 7px 14px; font-size: 12px; cursor: pointer; transition: all .15s; }
  .tone button.on { background: #2a2333; border-color: var(--red-d); color: #fff; }
  .draft { width: 100%; min-height: 62px; background: var(--card2); border: 1px solid var(--line); color: var(--txt); border-radius: 10px; padding: 11px 13px; font-size: 13px; line-height: 1.5; resize: vertical; font-family: inherit; }
  .draft:focus { outline: none; border-color: var(--red-d); }
  .c-foot { display: flex; align-items: center; gap: 12px; margin-top: 12px; }
  .btn-approve { background: var(--green); color: #06231a; border: none; border-radius: 11px; padding: 11px 20px; font-size: 13px; font-weight: 800; cursor: pointer; transition: transform .1s, opacity .2s; }
  .btn-approve:hover { opacity: .9; }
  .btn-approve:active { transform: scale(.96); }
  .status-tag { font-size: 12px; font-weight: 700; padding: 6px 14px; border-radius: 10px; }
  .st-onay { background: #2a2114; color: var(--amber); }
  .st-gonder { background: var(--green-bg); color: var(--green); }
  .st-fail { background: #2a1416; color: #ff8a84; }

  .center { text-align: center; padding: 70px 20px; color: var(--mut); }
  .spin { width: 34px; height: 34px; border: 3px solid var(--line); border-top-color: var(--red); border-radius: 50%; margin: 0 auto 16px; animation: sp 1s linear infinite; }
  @keyframes sp { to { transform: rotate(360deg); } }
  .empty { text-align: center; padding: 50px 20px; color: var(--mut); font-size: 14px; }

  #toast { position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%) translateY(120px); background: #fff; color: #111; padding: 14px 22px; border-radius: 14px; font-size: 14px; font-weight: 600; box-shadow: 0 10px 40px rgba(0,0,0,.4); transition: transform .3s cubic-bezier(.2,.9,.3,1); z-index: 50; max-width: 90%; }
  #toast.show { transform: translateX(-50%) translateY(0); }
  #toast.ok { background: #e9fbf3; color: #1a7a53; }
  #toast.err { background: #fdeceb; color: #b02a25; }

  #welcome { position: fixed; inset: 0; z-index: 60; background: radial-gradient(circle at 50% 30%, #1c1c26, #0b0b10 70%); display: flex; align-items: center; justify-content: center; text-align: center; padding: 24px; transition: opacity .4s; }
  #welcome.hide { opacity: 0; pointer-events: none; }
  .w-card { max-width: 380px; }
  .w-logo { font-size: 15px; letter-spacing: 6px; font-weight: 800; color: var(--red); margin-bottom: 8px; }
  .w-slogan { font-size: 14px; color: var(--txt); font-style: italic; margin-bottom: 6px; }
  .w-h { font-size: 27px; font-weight: 800; line-height: 1.25; margin-bottom: 12px; }
  .w-mail { font-size: 13px; color: var(--mut); margin-bottom: 30px; }
  .w-mail b { color: var(--txt); }
  .w-input { display: block; width: 300px; max-width: 90%; margin: 0 auto 16px; background: var(--card2); border: 1px solid var(--line); color: var(--txt); border-radius: 12px; padding: 13px 16px; font-size: 14px; text-align: center; }
  .w-input:focus { outline: none; border-color: var(--red-d); }
  .w-btn { background: var(--red-d); color: #fff; border: none; border-radius: 14px; padding: 15px 34px; font-size: 15px; font-weight: 700; cursor: pointer; transition: transform .1s, background .2s; }
  .w-btn:hover { background: var(--red); } .w-btn:active { transform: scale(.96); }
  .w-dot { width: 26px; height: 26px; border: 3px solid var(--line); border-top-color: var(--red); border-radius: 50%; margin: 8px auto 0; animation: sp 1s linear infinite; }

  #report { position: fixed; inset: 0; z-index: 55; background: rgba(6,6,10,.75); backdrop-filter: blur(4px); display: none; overflow-y: auto; padding: 30px 16px; }
  #report.show { display: block; }
  .r-sheet { max-width: 620px; margin: 0 auto; background: var(--card); border: 1px solid var(--line); border-radius: 20px; overflow: hidden; }
  .r-hd { background: #16161d; padding: 26px 28px; position: relative; }
  .r-hd .x { position: absolute; top: 18px; right: 20px; background: none; border: none; color: var(--mut); font-size: 24px; cursor: pointer; line-height: 1; }
  .r-brand { font-size: 11px; letter-spacing: 4px; color: var(--red); font-weight: 800; }
  .r-hd h2 { font-size: 22px; margin-top: 10px; }
  .r-hd .r-date { font-size: 12px; color: var(--mut); margin-top: 6px; }
  .r-body { padding: 24px 28px 30px; }
  .r-kpis { display: grid; grid-template-columns: repeat(4,1fr); gap: 8px; margin-bottom: 22px; }
  .r-kpi { background: var(--card2); border-radius: 12px; padding: 12px 10px; text-align: center; }
  .r-kpi .n { font-size: 20px; font-weight: 800; } .r-kpi .l { font-size: 10px; color: var(--mut); margin-top: 3px; }
  .r-trend { background: var(--card2); border-radius: 12px; padding: 12px 14px; margin-bottom: 22px; font-size: 12px; color: var(--mut); line-height: 2; }
  .r-trend b { color: var(--txt); }
  .tr-chip { display: inline-block; margin-right: 16px; white-space: nowrap; }
  .tr-chip b { color: var(--txt); }
  .r-ai { background: #211a15; border-left: 3px solid var(--red); border-radius: 12px; padding: 16px 18px; margin-bottom: 24px; }
  .r-ai .t { font-size: 11px; letter-spacing: 1px; color: var(--red); font-weight: 700; margin-bottom: 8px; }
  .r-ai .body { font-size: 13px; line-height: 1.7; color: #d7d7de; white-space: pre-line; }
  .r-sec-t { font-size: 14px; font-weight: 700; margin: 4px 0 12px; }
  .r-item { border-bottom: 1px solid var(--line); padding: 12px 0; }
  .r-item:last-child { border-bottom: none; }
  .r-item .txt { font-size: 14px; line-height: 1.5; }
  .r-item .meta { font-size: 11px; color: var(--mut); margin-top: 5px; }
  .r-item .rep { font-size: 12px; color: var(--green); background: var(--green-bg); border-radius: 8px; padding: 8px 10px; margin-top: 8px; line-height: 1.5; }
  .r-crit { border-left: 3px solid var(--amber); padding-left: 12px; margin-bottom: 8px; }
  .r-ctrls { display: flex; align-items: center; gap: 8px; margin-top: 16px; flex-wrap: wrap; }
  #rPeriod, #rScope { background: var(--card2); color: var(--txt); border: 1px solid var(--line); border-radius: 10px; padding: 8px 12px; font-size: 12px; cursor: pointer; }
  #rPeriod:focus, #rScope:focus { outline: none; border-color: var(--red-d); }
  #rExtra { background: var(--card2); color: var(--txt); border: 1px solid var(--line); border-radius: 10px; padding: 8px 12px; font-size: 12px; width: 170px; }
  #rExtra:focus { outline: none; border-color: var(--red-d); }
  .r-seg { display: inline-flex; background: var(--card2); border: 1px solid var(--line); border-radius: 10px; overflow: hidden; }
  .r-seg button { background: none; border: none; color: var(--mut); padding: 8px 14px; font-size: 12px; cursor: pointer; }
  .r-seg button.on { background: var(--red-d); color: #fff; font-weight: 700; }
  .r-mail { background: #1c2b3a; color: #6bb0ff; border: 1px solid #2a4560; border-radius: 10px; padding: 8px 14px; font-size: 12px; font-weight: 700; cursor: pointer; margin-left: auto; }
  .r-mail:hover { background: #223a52; }
  .r-charts { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 24px; }
  .r-chart { background: var(--card2); border-radius: 12px; padding: 12px; min-width: 0; }
  .r-chart h4 { font-size: 11px; color: var(--mut); font-weight: 600; margin-bottom: 8px; text-align: center; }
  .r-chart canvas { width: 100% !important; height: 170px !important; }

  .mask { position: fixed; inset: 0; z-index: 58; background: rgba(6,6,10,.75); backdrop-filter: blur(4px); display: none; align-items: flex-start; justify-content: center; overflow-y: auto; padding: 40px 16px; }
  .mask.show { display: flex; }
  .mbox { width: 100%; max-width: 460px; background: var(--card); border: 1px solid var(--line); border-radius: 18px; overflow: hidden; }
  .mbox .mhd { background: #16161d; padding: 20px 24px; position: relative; }
  .mbox .mhd h3 { font-size: 17px; } .mbox .mhd p { font-size: 12px; color: var(--mut); margin-top: 4px; }
  .mbox .mhd .x { position: absolute; top: 16px; right: 18px; background: none; border: none; color: var(--mut); font-size: 22px; cursor: pointer; }
  .mbody { padding: 20px 24px 24px; }
  .fld { margin-bottom: 15px; }
  .fld label { display: block; font-size: 12px; color: var(--mut); margin-bottom: 6px; }
  .fld input, .fld select, .fld textarea { width: 100%; background: var(--card2); border: 1px solid var(--line); color: var(--txt); border-radius: 10px; padding: 10px 12px; font-size: 13px; font-family: inherit; }
  .fld input:focus, .fld select:focus, .fld textarea:focus { outline: none; border-color: var(--red-d); }
  .msave { width: 100%; background: var(--red-d); color: #fff; border: none; border-radius: 12px; padding: 13px; font-size: 14px; font-weight: 700; cursor: pointer; margin-top: 6px; }
  .msave:hover { background: var(--red); }

  @media (max-width: 640px) {
    .r-kpis { grid-template-columns: repeat(2,1fr); }
    .r-charts { grid-template-columns: 1fr; }
    .kpis { grid-template-columns: repeat(2, 1fr); }
    .top-in { flex-wrap: wrap; }
    #sortSel { margin-left: 0; }
  }
</style>
</head>
<body>

<div id="welcome">
  <div class="w-card">
    <div class="w-logo">C O N D E A</div>
    <div class="w-slogan">Keşfet. Yakala. Yayınla.</div>
    <div class="w-h">Hoş geldin 👋</div>
    <div class="w-mail" id="wMail">Giriş doğrulanıyor…</div>
    <input id="wEmail" class="w-input" style="display:none" placeholder="E-postan (günlük/haftalık rapor aboneliği)">
    <button class="w-btn" id="wBtn" style="display:none" onclick="enter()">Panele Gir →</button>
    <div id="wUnsub" style="display:none;margin-top:16px;font-size:12px;color:#8a8a99;cursor:pointer;text-decoration:underline;" onclick="unsub()">E-postamı ve rapor aboneliğimi sil</div>
    <div class="w-dot" id="wDot"></div>
  </div>
</div>

<div class="top">
  <div class="top-in">
    <div class="brand">CONDEA<small id="channelName">Keşfet · Yakala · Yayınla</small></div>
    <select id="channelSel" onchange="changeChannel(this.value)" title="Kanal seç"></select>
    <button class="hbtn" onclick="openChannelAdd()" title="Yeni kanal ekle">＋ Kanal</button>
    <button class="hbtn" id="mockBtn" onclick="seedCurrent(this)" style="display:none" title="Bu demo kanala örnek/mock veri ekle">✨ Mock Veri</button>
    <button class="hbtn" id="resetBtn" onclick="resetChannel(this)" style="display:none" title="Bu demo kanalın verisini sıfırla">🗑 Sıfırla</button>
    <div class="spacer"></div>
    <div class="user" id="userBox">…</div>
    <button class="hbtn" onclick="refresh()" title="Yorumları yenile">🔄 Yenile</button>
    <button class="hbtn" onclick="openSettings()" title="Kanal ayarları">⚙ Ayarlar</button>
    <button class="btn-report" id="reportBtn" onclick="doReport()">📊 Rapor Üret</button>
  </div>
</div>

<div class="wrap">
  <div class="kpis" id="kpis"></div>
  <div class="tabs" id="tabs"></div>
  <div id="list">
    <div class="center"><div class="spin"></div>Canlı yorumlar yükleniyor…</div>
  </div>
</div>

<div id="report">
  <div class="r-sheet">
    <div class="r-hd">
      <button class="x" onclick="closeReport()">×</button>
      <div class="r-brand">C O N D E A · HAFTALIK RAPOR</div>
      <h2 id="rTitle">Haftalık İçerik Özeti</h2>
      <div class="r-date" id="rDate"></div>
    </div>
    <div class="r-body" id="rBody">
      <div class="center"><div class="spin"></div>Rapor hazırlanıyor…</div>
    </div>
  </div>
</div>

<div class="mask" id="settingsMask">
  <div class="mbox">
    <div class="mhd">
      <button class="x" onclick="closeMask('settingsMask')">×</button>
      <h3>⚙ Kanal Ayarları</h3>
      <p id="setSub">Bu kanalın tüm ayarları buradan yönetilir.</p>
    </div>
    <div class="mbody" id="settingsBody">
      <div class="center"><div class="spin"></div>Ayarlar yükleniyor…</div>
    </div>
  </div>
</div>

<div class="mask" id="channelMask">
  <div class="mbox">
    <div class="mhd">
      <button class="x" onclick="closeMask('channelMask')">×</button>
      <h3>＋ Yeni Kanal Ekle</h3>
      <p>Yeni kanal ekleyip menüden geçiş yapabilirsin.</p>
    </div>
    <div class="mbody">
      <div class="fld"><label>Kanal adı</label><input id="chLabel" placeholder="Örn: İkinci Kanal"></div>
      <p style="font-size:12px;color:var(--mut);line-height:1.6;margin:-4px 0 16px;">Kanalı ekleyince o kanalın yorum ve ayar sekmeleri Sheet'te otomatik oluşturulur; başka bir şey girmene gerek yok.</p>
      <button class="msave" id="chSaveBtn" onclick="submitChannel()">Kanalı Ekle</button>
    </div>
  </div>
</div>

<div id="toast"></div>

<script>
  var STATE = { comments: [], filter: 'all', sort: 'date_desc', tone: {}, channelKey: null, report: null, reportMode: 'short', reportPeriod: 'week', reportScope: 'full', charts: {}, extraEmail: '', userEmail: '' };

  google.script.run.logLogin();

  google.script.run
    .withSuccessHandler(onData)
    .withFailureHandler(showLoadError)
    .getDashboardData();

  function showLoadError(e) {
    var msg = (e && e.message) ? e.message : String(e);
    document.getElementById('wDot').style.display = 'none';
    document.getElementById('wMail').innerHTML =
      '<div style="background:#2a1416;border:1px solid #5a2b2b;color:#ff8a84;padding:14px 16px;border-radius:12px;font-size:13px;line-height:1.6;text-align:left;">' +
      '<b>Veri alınamadı.</b><br>' + esc(msg) +
      '<br><br><span style="color:#8a8a99;">Muhtemel sebep: Deploy ayarında <b>Execute as</b> "Me" değil.</span></div>';
    document.getElementById('list').innerHTML = '<div class="empty">Veri alınamadı: ' + esc(msg) + '</div>';
  }

  function onData(d) {
    document.getElementById('userBox').innerHTML = 'Giriş: <b>' + esc(STATE.userEmail || d.user) + '</b>';
    STATE.comments = d.comments || [];
    STATE.channelKey = d.channelKey;
    renderChannels(d.channels, d.channelKey);
    renderKpis(d.kpis);
    renderTabs();
    renderList();
    // Mock/Sıfırla butonları SADECE demo kanalda (Unseen = jüri kanalı, gizli)
    var demoCh = (d.channelKey && d.channelKey !== 'unseen');
    document.getElementById('mockBtn').style.display = demoCh ? 'inline-block' : 'none';
    document.getElementById('resetBtn').style.display = demoCh ? 'inline-block' : 'none';
    // Karşılama ekranı
    document.getElementById('wMail').innerHTML = 'Giriş yapan: <b>' + esc(STATE.userEmail || d.user) + '</b>';
    document.getElementById('wDot').style.display = 'none';
    document.getElementById('wBtn').style.display = 'inline-block';
    document.getElementById('wEmail').style.display = 'block';
    document.getElementById('wUnsub').style.display = 'block';
    if (STATE.userEmail) document.getElementById('wEmail').value = STATE.userEmail;
  }

  function renderChannels(channels, sel) {
    var s = document.getElementById('channelSel');
    if (!channels || !channels.length) { s.style.display = 'none'; return; }
    s.innerHTML = channels.map(function (c) {
      return '<option value="' + c.key + '"' + (c.key === sel ? ' selected' : '') + '>' + esc(c.label) + '</option>';
    }).join('');
  }

  function changeChannel(key) {
    STATE.channelKey = key;
    STATE.tone = {};
    document.getElementById('list').innerHTML = '<div class="center"><div class="spin"></div>Kanal yükleniyor…</div>';
    google.script.run.withSuccessHandler(onData).withFailureHandler(function (e) {
      document.getElementById('list').innerHTML = '<div class="empty">Yüklenemedi: ' + (e && e.message ? e.message : e) + '</div>';
    }).getDashboardData(key);
  }

  function enter() {
    var em = document.getElementById('wEmail') ? document.getElementById('wEmail').value.trim() : '';
    if (em) {
      STATE.userEmail = em;
      STATE.extraEmail = STATE.extraEmail || em;
      document.getElementById('userBox').innerHTML = 'Giriş: <b>' + esc(em) + '</b>';
      google.script.run.subscribeEmail(STATE.channelKey, em);   // rapor aboneliği (kalıcı)
    }
    document.getElementById('welcome').classList.add('hide');
  }

  function unsub() {
    var em = document.getElementById('wEmail') ? document.getElementById('wEmail').value.trim() : '';
    if (!em) { toast('err', 'Silmek için e-postanı yaz.'); return; }
    if (!confirm(em + ' adresini ve rapor aboneliğini silmek istediğine emin misin?')) return;
    google.script.run
      .withSuccessHandler(function (res) {
        toast(res.ok ? 'ok' : 'err', res.message);
        if (res.ok) { document.getElementById('wEmail').value = ''; STATE.userEmail = ''; STATE.extraEmail = ''; }
      })
      .withFailureHandler(function (e) { toast('err', e && e.message ? e.message : e); })
      .unsubscribeEmail(STATE.channelKey, em);
  }

  function resetChannel(btn) {
    if (!confirm('Bu demo kanalın TÜM yorum verisi silinecek. Emin misin?')) return;
    btn.disabled = true; btn.textContent = 'Sıfırlanıyor…';
    google.script.run
      .withSuccessHandler(function (res) { btn.disabled = false; btn.textContent = '🗑 Sıfırla'; toast(res.ok ? 'ok' : 'err', res.message); refresh(); })
      .withFailureHandler(function (e) { btn.disabled = false; btn.textContent = '🗑 Sıfırla'; toast('err', e && e.message ? e.message : e); })
      .clearChannelData(STATE.channelKey);
  }

  function renderKpis(k) {
    document.getElementById('kpis').innerHTML =
      kpi('', k.total, 'Toplam Yorum') +
      kpi('r', k.contentReq, 'İçerik İsteği') +
      kpi('a', k.criticism, 'Eleştiri') +
      kpi('g', k.praise, 'Beğeni / Övgü');
  }
  function kpi(c, n, l) { return '<div class="kpi ' + c + '"><div class="n">' + n + '</div><div class="l">' + l + '</div></div>'; }

  function renderTabs() {
    var defs = [['all', 'Tümü'], ['content', 'İçerik İstekleri'], ['crit', 'Eleştiriler'], ['praise', 'Beğeni']];
    var tabsHtml = defs.map(function (t) {
      return '<div class="tab ' + (STATE.filter === t[0] ? 'on' : '') + '" onclick="setFilter(\'' + t[0] + '\')">' + t[1] + '</div>';
    }).join('');
    var sorts = [['date_desc', '🕒 En yeni'], ['date_asc', '🕒 En eski'], ['likes_desc', '👍 En çok beğeni'], ['likes_asc', '👍 En az beğeni'], ['status', '⏳ Bekleyenler önce']];
    var sortHtml = '<select id="sortSel" onchange="setSort(this.value)" title="Sırala">' + sorts.map(function (s) {
      return '<option value="' + s[0] + '"' + (STATE.sort === s[0] ? ' selected' : '') + '>' + s[1] + '</option>';
    }).join('') + '</select>';
    document.getElementById('tabs').innerHTML = tabsHtml + sortHtml;
  }
  function setFilter(f) { STATE.filter = f; renderTabs(); renderList(); }
  function setSort(v) { STATE.sort = v; renderList(); }
  function sortComments(arr) {
    var s = STATE.sort || 'date_desc';
    return arr.slice().sort(function (x, y) {
      if (s === 'likes_desc') return y.likeCount - x.likeCount;
      if (s === 'likes_asc') return x.likeCount - y.likeCount;
      if (s === 'date_asc') return (x.publishedAt || '').localeCompare(y.publishedAt || '');
      if (s === 'status') { var o = { 'bekliyor': 0, 'onaylandı': 1, 'gönderildi': 2 }; return (o[x.durum] == null ? 9 : o[x.durum]) - (o[y.durum] == null ? 9 : o[y.durum]); }
      return (y.publishedAt || '').localeCompare(x.publishedAt || '');
    });
  }

  function catOf(c) {
    var s = (c.niyet + ' ' + c.kategori).toLowerCase();
    if (/içerik|öneri|soru/.test(s)) return 'content';
    if (/eleştiri|şikâyet|şikayet|yergi/.test(s)) return 'crit';
    if (/beğeni|teşekkür|övgü/.test(s)) return 'praise';
    return 'neutral';
  }

  function renderList() {
    if (!STATE.comments.length) {
      document.getElementById('list').innerHTML =
        '<div class="empty" style="padding:60px 20px;">Bu kanalda henüz yorum yok.<br>' +
        '<span style="font-size:12px;color:#8a8a99;">Canlı YouTube bağlantısı ürünleşmede eklenecek.</span><br><br>' +
        '<button class="btn-approve" onclick="seedChannel(this)">✨ Örnek verilerle doldur (demo)</button></div>';
      return;
    }
    var arr = STATE.comments.filter(function (c) { return STATE.filter === 'all' || catOf(c) === STATE.filter; });
    arr = sortComments(arr);
    if (!arr.length) { document.getElementById('list').innerHTML = '<div class="empty">Bu kategoride yorum yok.</div>'; return; }
    document.getElementById('list').innerHTML = arr.map(cardHtml).join('');
  }

  function seedChannel(btn) {
    btn.disabled = true; btn.textContent = 'Ekleniyor…';
    google.script.run
      .withSuccessHandler(function (res) { toast(res.ok ? 'ok' : 'err', res.message); refresh(); })
      .withFailureHandler(function (e) { btn.disabled = false; toast('err', e && e.message ? e.message : e); })
      .seedSampleComments(STATE.channelKey);
  }
  function seedCurrent(btn) {
    if (btn) { btn.disabled = true; btn.textContent = 'Ekleniyor…'; }
    google.script.run
      .withSuccessHandler(function (res) {
        if (btn) { btn.disabled = false; btn.textContent = '✨ Mock Veri'; }
        toast(res.ok ? 'ok' : 'err', res.message); refresh();
      })
      .withFailureHandler(function (e) {
        if (btn) { btn.disabled = false; btn.textContent = '✨ Mock Veri'; }
        toast('err', e && e.message ? e.message : e);
      })
      .seedSampleComments(STATE.channelKey);
  }

  function cardHtml(c) {
    var cat = catOf(c);
    var badge = { content: ['b-content', '🎬 İçerik İsteği'], crit: ['b-crit', '⚑ Eleştiri'], praise: ['b-praise', '★ Beğeni'], neutral: ['b-neutral', 'Nötr'] }[cat];
    var s = (c.durum || 'bekliyor').toLowerCase();
    var pending = /^bekliyor/.test(s) || s === '';
    var tone = STATE.tone[c.rowNumber] || 'A';
    var draft = tone === 'B' ? c.taslakB : c.taslakA;

    var foot;
    if (pending) {
      foot = '<button class="btn-approve" onclick="approve(' + c.rowNumber + ')">✓ Onayla ve Yanıtla</button>';
    } else {
      var cls, label;
      if (/gönderildi/.test(s)) { cls = 'st-gonder'; label = '✓ Yanıtlandı'; }
      else if (/gönderilemedi|hata/.test(s)) { cls = 'st-fail'; label = '⚠ Gönderilemedi'; }
      else if (/onaylandı/.test(s)) { cls = 'st-onay'; label = '⏳ Cevaplanmak üzere sırada'; }
      else { cls = 'st-onay'; label = esc(c.durum); }
      foot = '<span class="status-tag ' + cls + '">' + label + '</span>';
    }

    var draftBlock = !pending ? '' :
      '<div class="tone">' +
        '<button class="' + (tone === 'A' ? 'on' : '') + '" onclick="setTone(' + c.rowNumber + ',\'A\')">Kurumsal</button>' +
        '<button class="' + (tone === 'B' ? 'on' : '') + '" onclick="setTone(' + c.rowNumber + ',\'B\')">Samimi</button>' +
      '</div>' +
      '<textarea class="draft" id="draft-' + c.rowNumber + '">' + esc(draft) + '</textarea>';

    return '<div class="card" id="card-' + c.rowNumber + '">' +
      '<div class="c-head">' +
        '<span class="badge ' + badge[0] + '">' + badge[1] + '</span>' +
        '<span class="likes">👍 ' + c.likeCount + '</span>' +
        '<span class="author">' + esc(c.author) + '</span>' +
      '</div>' +
      '<div class="c-text">' + esc(c.text) + '</div>' +
      (c.ozelKonu ? '<div class="special">🔎 Özel konu: ' + esc(c.ozelKonu) + '</div>' : '') +
      draftBlock +
      '<div class="c-foot">' + foot + '</div>' +
    '</div>';
  }

  function setTone(row, t) {
    STATE.tone[row] = t;
    var c = STATE.comments.filter(function (x) { return x.rowNumber === row; })[0];
    var ta = document.getElementById('draft-' + row);
    if (c && ta) ta.value = (t === 'B' ? c.taslakB : c.taslakA);
    var card = document.getElementById('card-' + row);
    var btns = card.querySelectorAll('.tone button');
    btns[0].className = t === 'A' ? 'on' : '';
    btns[1].className = t === 'B' ? 'on' : '';
  }

  function approve(row) {
    var ta = document.getElementById('draft-' + row);
    var text = ta ? ta.value : '';
    var card = document.getElementById('card-' + row);
    var btn = card.querySelector('.btn-approve');
    btn.disabled = true; btn.textContent = 'Gönderiliyor…';
    google.script.run
      .withSuccessHandler(function (res) {
        var c = STATE.comments.filter(function (x) { return x.rowNumber === row; })[0];
        if (c) c.durum = (res && res.durum) || 'onaylandı';
        renderList();
        toast(res && res.ok ? 'ok' : 'err', (res && res.message) ? res.message : 'İşlem tamamlandı.');
      })
      .withFailureHandler(function (e) {
        btn.disabled = false; btn.textContent = '✓ Onayla ve Yanıtla';
        toast('err', 'Hata: ' + (e && e.message ? e.message : e));
      })
      .approveWithDraft(row, text, STATE.channelKey);
  }

  function doReport() {
    STATE.reportMode = 'short';
    document.getElementById('report').classList.add('show');
    fetchReport();
  }

  function fetchReport() {
    var b = document.getElementById('reportBtn');
    b.disabled = true; b.textContent = 'Hazırlanıyor…';
    document.getElementById('rBody').innerHTML = '<div class="center"><div class="spin"></div>Rapor hazırlanıyor…</div>';
    google.script.run
      .withSuccessHandler(function (r) {
        b.disabled = false; b.textContent = '📊 Rapor Üret';
        STATE.report = r;
        renderReport();
      })
      .withFailureHandler(function (e) {
        b.disabled = false; b.textContent = '📊 Rapor Üret';
        document.getElementById('rBody').innerHTML = '<div class="empty">Rapor üretilemedi: ' + (e && e.message ? e.message : e) + '</div>';
      })
      .getReport(STATE.channelKey, STATE.reportPeriod, STATE.reportScope);
  }

  function setReportMode(m) { STATE.reportMode = m; renderReport(); }
  function setReportPeriod(p) { STATE.reportPeriod = p; fetchReport(); }
  function setReportScope(sc) { STATE.reportScope = sc; fetchReport(); }

  function renderReport() {
    var r = STATE.report; if (!r) return;
    var mode = STATE.reportMode, k = r.kpis || {};
    document.getElementById('rDate').textContent = (r.channel || '') + ' · ' + (r.date || '') + ' · 📅 ' + (r.periodLabel || '') + (r.scope && r.scope !== 'full' ? ' · 🏷 ' + r.scopeLabel : '');
    var html = '';

    var perOpts = (r.periods || []).map(function (p) {
      return '<option value="' + p.key + '"' + (p.key === STATE.reportPeriod ? ' selected' : '') + '>' + esc(p.label) + '</option>';
    }).join('');
    var scOpts = (r.scopes || []).map(function (p) {
      return '<option value="' + p.key + '"' + (p.key === STATE.reportScope ? ' selected' : '') + '>' + esc(p.label) + '</option>';
    }).join('');

    html += '<div class="r-ctrls">' +
      '<select id="rPeriod" onchange="setReportPeriod(this.value)" title="Dönem">' + perOpts + '</select>' +
      '<select id="rScope" onchange="setReportScope(this.value)" title="Kapsam">' + scOpts + '</select>' +
      '<div class="r-seg">' +
      '<button class="' + (mode === 'short' ? 'on' : '') + '" onclick="setReportMode(\'short\')">Kısa</button>' +
      '<button class="' + (mode === 'long' ? 'on' : '') + '" onclick="setReportMode(\'long\')">Uzun</button></div>' +
      '<input id="rExtra" placeholder="Ek e-posta (tek seferlik)" title="Bu raporu bir kez de bu adrese gönderir. Kaydedilmez; kalıcı almak için karşılama ekranından abone ol." value="' + esc(STATE.extraEmail || '') + '">' +
      '<button class="r-mail" id="rMailBtn" onclick="sendReportEmail()">📧 Mail olarak ilet</button></div>';

    html += '<div class="r-kpis" style="margin-top:16px;">' +
      rkpi(k.total, 'Toplam') + rkpi(k.contentReq, 'İçerik İsteği') +
      rkpi(k.criticism, 'Yergi/Eleştiri') + rkpi(k.praise, 'Övgü/Beğeni') + '</div>';

    if (r.trend) {
      html += '<div class="r-trend"><b>📈 Geçen döneme göre</b>&nbsp;&nbsp;' +
        trChip('Toplam', r.trend.total) + trChip('İçerik', r.trend.contentReq) +
        trChip('Yergi', r.trend.criticism) + trChip('Övgü', r.trend.praise) + '</div>';
    }

    html += '<div class="r-charts">' +
      '<div class="r-chart"><h4>DUYGU DAĞILIMI</h4><canvas id="chSent" height="160"></canvas></div>' +
      '<div class="r-chart"><h4>KATEGORİ</h4><canvas id="chCat" height="160"></canvas></div></div>';

    if (r.summary) html += '<div class="r-ai"><div class="t">✦ YAPAY ZEKÂ ÖZETİ</div><div class="body">' + esc(r.summary) + '</div></div>';

    if (mode === 'short') {
      function sec(title, arr, crit, empty) {
        var x = '<div class="r-sec-t" style="margin-top:22px;">' + title + '</div>';
        if (arr && arr.length) arr.forEach(function (c) {
          x += '<div class="r-item' + (crit ? ' r-crit' : '') + '"><div class="txt">' + esc(c.text) + '</div>' +
            '<div class="meta">' + esc(c.author) + ' · 👍 ' + c.likeCount + '</div>' +
            (!crit && c.taslakA ? '<div class="rep">↳ ' + esc(c.taslakA) + '</div>' : '') + '</div>';
        });
        else x += '<div class="meta">' + empty + '</div>';
        return x;
      }
      var sc = r.scope;
      var g = r.sections || { content: true, crit: true };
      if (sc === 'content') html += sec('🎬 En Çok İstenen İçerikler', r.topContent, false, 'Bu dönem içerik isteği yok.');
      else if (sc === 'praise') html += sec('★ Öne Çıkan Övgüler', r.topPraise, false, 'Bu dönem övgü yok.');
      else if (sc === 'crit') html += sec('⚑ Dikkat Çeken Eleştiriler', r.topCriticism, true, 'Bu dönem eleştiri yok.');
      else if (sc === 'ovguyergi') { html += sec('★ Öne Çıkan Övgüler', r.topPraise, false, 'Bu dönem övgü yok.'); if (g.crit) html += sec('⚑ Dikkat Çeken Eleştiriler', r.topCriticism, true, 'Bu dönem eleştiri yok.'); }
      else { if (g.content) html += sec('🎬 En Çok İstenen İçerikler', r.topContent, false, 'Bu dönem içerik isteği yok.'); if (g.crit) html += sec('⚑ Dikkat Çeken Eleştiriler', r.topCriticism, true, 'Bu dönem eleştiri yok.'); }
    } else {
      var all = r.all || [];
      html += '<div class="r-sec-t">🗂 Tüm Yorumlar (' + all.length + ')</div>';
      all.forEach(function (c) {
        html += '<div class="r-item"><div class="txt">' + esc(c.text) + '</div>' +
          '<div class="meta">' + esc(c.author) + ' · 👍 ' + c.likeCount + ' · ' + esc(c.niyet || c.kategori || '') + '</div></div>';
      });
    }

    document.getElementById('rBody').innerHTML = html;
    drawCharts(r);
  }

  function drawCharts(r) {
    if (!window.Chart || !r.charts) return;
    try { if (STATE.charts.s) STATE.charts.s.destroy(); if (STATE.charts.c) STATE.charts.c.destroy(); } catch (e) {}
    var txt = '#8a8a99';
    var s = r.charts.sentiment || [0, 0, 0], ca = r.charts.cats || [0, 0, 0];
    STATE.charts.s = new Chart(document.getElementById('chSent'), {
      type: 'doughnut',
      data: { labels: ['Olumlu', 'Olumsuz', 'Nötr'], datasets: [{ data: s, backgroundColor: ['#4a90e2', '#e0453f', '#c9a227'], borderWidth: 0 }] },
      options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { color: txt, font: { size: 10 }, boxWidth: 10 } } } }
    });
    STATE.charts.c = new Chart(document.getElementById('chCat'), {
      type: 'bar',
      data: { labels: ['Övgü', 'Yergi', 'İçerik'], datasets: [{ data: ca, backgroundColor: ['#2ec08a', '#e0863a', '#4a90e2'], borderRadius: 6 }] },
      options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { ticks: { color: txt }, grid: { display: false } }, y: { ticks: { color: txt }, grid: { color: '#2c2c38' }, beginAtZero: true } } }
    });
  }

  function sendReportEmail() {
    var b = document.getElementById('rMailBtn');
    var extra = document.getElementById('rExtra') ? document.getElementById('rExtra').value.trim() : '';
    STATE.extraEmail = extra;
    b.disabled = true; b.textContent = 'Gönderiliyor…';
    google.script.run
      .withSuccessHandler(function (res) { b.disabled = false; b.textContent = '📧 Mail olarak ilet'; toast(res.ok ? 'ok' : 'err', res.message); })
      .withFailureHandler(function (e) { b.disabled = false; b.textContent = '📧 Mail olarak ilet'; toast('err', 'Hata: ' + (e && e.message ? e.message : e)); })
      .emailReport(STATE.channelKey, STATE.reportMode, STATE.reportPeriod, STATE.reportScope, extra);
  }

  function rkpi(n, l) { return '<div class="r-kpi"><div class="n">' + (n || 0) + '</div><div class="l">' + l + '</div></div>'; }
  function trChip(label, t) {
    var up = t.now > t.prev, down = t.now < t.prev;
    var arrow = up ? '▲' : (down ? '▼' : '▬');
    var col = up ? '#2ec08a' : (down ? '#e0453f' : '#8a8a99');
    return '<span class="tr-chip">' + label + ': <b>' + t.now + '</b> <span style="color:' + col + ';">' + arrow + ' ' + (t.pct >= 0 ? '+' : '') + t.pct + '%</span> <span style="color:#666;">(geçen ' + t.prev + ')</span></span>';
  }
  function closeReport() { document.getElementById('report').classList.remove('show'); }

  function openSettings() {
    document.getElementById('settingsMask').classList.add('show');
    document.getElementById('setSub').textContent = document.getElementById('channelSel').selectedOptions[0] ?
      (document.getElementById('channelSel').selectedOptions[0].text + ' — tüm ayarlar buradan yönetilir.') : 'Ayarlar';
    document.getElementById('settingsBody').innerHTML = '<div class="center"><div class="spin"></div>Yükleniyor…</div>';
    google.script.run.withSuccessHandler(renderSettings).withFailureHandler(function (e) {
      document.getElementById('settingsBody').innerHTML = '<div class="empty">' + (e && e.message ? e.message : e) + '</div>';
    }).getSettings(STATE.channelKey);
  }
  function renderSettings(s) {
    if (s.error) { document.getElementById('settingsBody').innerHTML = '<div class="empty">' + esc(s.error) + '</div>'; return; }
    function yn(id, v) { return '<select id="' + id + '"><option' + (v === 'Evet' ? ' selected' : '') + '>Evet</option><option' + (v !== 'Evet' ? ' selected' : '') + '>Hayır</option></select>'; }
    var freq = '<select id="setFreq">' + ['Günlük', 'Haftalık'].map(function (o) { return '<option' + (s.raporSikligi === o ? ' selected' : '') + '>' + o + '</option>'; }).join('') + '</select>';
    document.getElementById('settingsBody').innerHTML =
      '<div class="fld"><label>Kanal Adı</label><input id="setName" value="' + esc(s.kanalAdi) + '"></div>' +
      '<div class="fld"><label>Kanal Konusu</label><input id="setTopic" value="' + esc(s.kanalKonusu) + '"></div>' +
      '<div class="fld"><label>Özel Konu Kelimesi</label><input id="setSpecial" value="' + esc(s.ozelKonu) + '"></div>' +
      '<div class="fld"><label>Rapor Sıklığı</label>' + freq + '</div>' +
      '<div class="fld"><label>İçerik İsteği Bölümü</label>' + yn('setContent', s.icerikBolumu) + '</div>' +
      '<div class="fld"><label>Eleştiri Bölümü</label>' + yn('setCrit', s.elestiriBolumu) + '</div>' +
      '<div class="fld"><label>AI Kanal Cümlesi (otomatik üretilir)</label><textarea rows="2" disabled style="opacity:.6">' + esc(s.aiCumle) + '</textarea></div>' +
      '<button class="msave" onclick="saveSettingsForm(this)">Kaydet</button>';
  }
  function saveSettingsForm(btn) {
    btn.disabled = true; btn.textContent = 'Kaydediliyor…';
    var obj = { kanalAdi: val('setName'), kanalKonusu: val('setTopic'), ozelKonu: val('setSpecial'), raporSikligi: val('setFreq'), icerikBolumu: val('setContent'), elestiriBolumu: val('setCrit') };
    google.script.run.withSuccessHandler(function (res) {
      btn.disabled = false; btn.textContent = 'Kaydet';
      toast(res.ok ? 'ok' : 'err', res.message);
      if (res.ok) { closeMask('settingsMask'); refresh(); }
    }).withFailureHandler(function (e) { btn.disabled = false; btn.textContent = 'Kaydet'; toast('err', e && e.message ? e.message : e); })
      .saveSettings(STATE.channelKey, obj);
  }

  function openChannelAdd() { document.getElementById('channelMask').classList.add('show'); }
  function submitChannel() {
    var btn = document.getElementById('chSaveBtn'), label = val('chLabel');
    if (!label) { toast('err', 'Kanal adı gir.'); return; }
    btn.disabled = true; btn.textContent = 'Ekleniyor…';
    google.script.run.withSuccessHandler(function (res) {
      btn.disabled = false; btn.textContent = 'Kanalı Ekle';
      if (res.ok) { toast('ok', 'Kanal eklendi: ' + res.label); closeMask('channelMask'); STATE.channelKey = res.key; refresh(); }
      else toast('err', res.message);
    }).withFailureHandler(function (e) { btn.disabled = false; btn.textContent = 'Kanalı Ekle'; toast('err', e && e.message ? e.message : e); })
      .addChannel({ label: label });
  }

  function closeMask(id) { document.getElementById(id).classList.remove('show'); }
  function val(id) { return document.getElementById(id).value; }
  function refresh() {
    document.getElementById('list').innerHTML = '<div class="center"><div class="spin"></div>Yükleniyor…</div>';
    google.script.run.withSuccessHandler(onData).getDashboardData(STATE.channelKey);
  }

  setInterval(function () {
    if (!document.getElementById('welcome').classList.contains('hide')) return;
    if (document.getElementById('report').classList.contains('show')) return;
    if (document.querySelector('.mask.show')) return;
    if (document.activeElement && document.activeElement.tagName === 'TEXTAREA') return;
    google.script.run.withSuccessHandler(onData).getDashboardData(STATE.channelKey);
  }, 60000);

  function toast(cls, msg) {
    var t = document.getElementById('toast');
    t.className = cls; t.textContent = msg;
    void t.offsetWidth; t.classList.add('show');
    setTimeout(function () { t.classList.remove('show'); }, 3500);
  }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (m) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[m]; }); }
</script>
</body>
</html>

## Sistem Kodları

Condea üç bileşenden oluşur; tüm kaynak kodları bu repodadır:

- **`apps-script/`** — Yorum panelinin backend'i (`Kod.gs`) ve arayüzü (`Panel.html`). Google Apps Script Web App olarak yayınlanır.
- **`make-senaryolari/`** — Make.com otomasyon akışlarının blueprint dosyaları:
  - `1-yorum-toplama-ve-AI-siniflandirma.json` — YouTube'dan yorumları çeker, Gemini ile sınıflandırır, Google Sheets'e yazar.
  - `2-insan-onayli-yanit.json` — Panelden onaylanan yanıtı ilgili YouTube yorumuna gönderir.
- **`prompts/`** — Gemini çok etiketli sınıflandırma promptu.

> **Güvenlik notu:** API anahtarları, webhook adresleri, Sheet ID ve hesap bilgileri koddan temizlenmiştir (`BURAYA_...` placeholder'ları). Sistemi çalıştırmak için bu alanlara kendi değerlerinizi girmeniz gerekir.

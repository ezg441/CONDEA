# **CONDEA: "Akıllı İçerik Öneri Takip Sistemi"**

Grup 4 Yapay Zeka ve Teknoloji Akademisi - No-Code/Low-Code Bootcamp 2026 Projesi

> *Projenin sloganı buraya yazılacak.*

---

## Takım Elemanları ve Rol Dağılımı
* **Ezgisu Badak**: Product Owner 
* **Ufuk Demir**: Scrum Master 
* **Ayşe Dilara Baysal**: Team Member / Developer
* **Feyzanur Karatay**: Team Member / Developer
* **Furkan Çakı**: Team Member / Developer

---

## Ürün Bilgileri
### Ürün İsmi
Condea
### Ürün Açıklaması
Condea, YouTube içerik üreticilerinin topluluklarından gelen değerli içerik fikirlerini kaçırmamasını sağlayan akıllı bir otomasyon sistemidir. YZTA-2026 BOOTCAMP kapsamında geliştirilen bu proje, YouTube yorumlarını otomatik olarak izler, Yapay Zeka (Google Gemini) desteğiyle "içerik tavsiyesi" taşıyan yorumları ayırt eder ve bu verileri düzenli bir rapor halinde kanal sahibine iletir. Condea, içerik üreticilerinin takipçileriyle kurduğu bağı güçlendirirken, içerik planlama sürecini veri odaklı bir hale getirir.

### Ürün Özellikleri
Condea projesinin temel fonksiyonları şunlardır:
* **Akıllı Yorum İzleme**: YouTube kanalından gelen tüm yorumlar anlık olarak yakalanır ve mükerrer (duplicate) kayıtlar elenerek temiz bir veri akışı sağlanır
* **İçerik İsteği Analizi**: Google Gemini entegrasyonu sayesinde, yorumların içerik tavsiyesi veya içerik isteği içerip içermediği otomatik olarak tespit edilir.
* **Merkezi Veri Yönetimi**: İşlenen tüm yorumlar; metin, beğeni sayısı ve tarih bilgileriyle birlikte Google Sheets üzerinde kurumsal bir tablo yapısında depolanır.
* **Otomatik Raporlama**: Sistem, periyodik olarak (haftalık/günlük) veri tabanını analiz eder ve en çok beğeni alan "içerik tavsiyelerini" derleyerek şık bir HTML e-posta tasarımı ile kanal sahibine raporlar.

### Hedef Kitle
Condea, özellikle aşağıdaki kullanıcılar için optimize edilmiştir:
* **YouTube İçerik Üreticileri**: Takipçilerinden gelen harika fikirleri yorumlar arasında kaybetmek istemeyen ve içerik planlama sürecini otomatize etmek isteyen üreticiler.
* **Kanal Yöneticileri**: Topluluk etkileşimlerini analiz edip, kanal stratejisini izleyici geri bildirimlerine göre şekillendirmeyi hedefleyen profesyoneller.

### Product Backlog
[https://yzta.slack.com/lists/T02LKGXV98C/F0BC0E7CD8U]

---

## SPRINT 1️⃣

[https://yzta.slack.com/lists/T02LKGXV98C/F0BBQ5E352P]

### Backlog Düzeni ve Story Seçimleri

Öncelikle, ekipteki geliştiricilerin fikirleri esas alınarak, projenin hayata geçirilebilmesi için mutlaka tamamlanması gereken ana görevler ve alt görevler belirlendi. Henüz ilk sprint olması ve ekibin iş potansiyelinin tam olarak bilinememesi sebebiyle ilk sprint için yaklaşık üçte birlik bir görev yoğunluğu *(Süreç toplamda üç sprintten oluştuğu için)* mantıklı bulundu ve görevler, bu oranı karşılayacak şekilde sırasıyla eklendi. Sprint 1'de gösterilen ekip performansına bağlı olarak diğer sprintlerde görevlerin artırılmasına veya azaltılmasına karar verilebilir. İlaveten, Sprint 1 için yapılan görev planlamasının dışına çıkılarak sonraki sprintlerin görevleri erkene alınabilir.

### Daily Scrum (17 GÜN)

| Gün | Tarih | Açıklama |
| :--- | :--- | :--- |
| **1. GÜN** | 19 Haziran 2026 | **Dün:** Başlangıç yayını izlendi.<br>**Bugün:** Karar süreçlerini hızlandırmak amacıyla tüm fikirler kolektif bir listede toplanacak; rol dağılımı konuşulacak.<br>**Engel:** Yok. |
| **2. GÜN** | 20 Haziran 2026 | **Dün:** Proje fikirleri havuzu oluşturuldu.<br>**Bugün:** Ekip rollerini ve nihai proje fikrini netleştirmek üzere bir araya gelinecek.<br>**Engel:** Yok. |
| **3. GÜN** | 21 Haziran 2026 | **Dün:** Proje tanımı *(GoStock)* ve roller belirlendi.<br>**Bugün:** *Product Backlog* ve ilk sprintin iskelet çalışmaları başlatılacak.<br>**Engel:** Yok. |
| **4. GÜN** | 22 Haziran 2026 | **Dün:** Teknik gereksinimler ve zaman kısıtları analiz edildi.<br>**Bugün:** Proje teknik olarak çok zorlandığı için fikir revizyonu veya yeni fikre geçiş olanakları değerlendirilecek.<br>**Engel:** 🚨 **Kritik:** Mevcut fikir mevcut imkanlarla uyuşmuyor. |
| **5. GÜN** | 23 Haziran 2026 | **Dün:** *GoStock* projesinden vazgeçildi, yeni fikir *Condea* olarak netleşti.<br>**Bugün:** Geliştirici fikirleri doğrultusunda *Product Backlog* taslağı hazırlanacak.<br>**Engel:** Yok. |
| **6. GÜN** | 24 Haziran 2026 | **Dün:** Yeni projenin ana hatları belirlendi.<br>**Bugün:** *Product Backlog* ve *Sprint 1* panoları kurulacak, görev atamaları ve zorluk dereceleri güncellenecek.<br>**Engel:** Yok. |
| **7. GÜN** | 25 Haziran 2026 | **Dün:** Görev atamaları tamamlandı.<br>**Bugün:** MVP altyapılarının uygunluklarını değerlendirebilmek için *Softr/Bubble* uygulamalarına yönelik bir araştırma yapılıp karşılaştırma raporu hazırlanacak. *Make* üzerinde veri hattı mimarisine başlanacak.<br>**Engel:** Yok. |
| **8. GÜN** | 26 Haziran 2026 | **Dün:** Altyapı araştırması tamamlandı.<br>**Bugün:** *YouTube Watch Comments*, *Google Sheets Duplicate Filtering* ve *Gemini* prompt entegrasyonu tamamlanarak temel veri hattı kurulacak.<br>**Engel:** Yok. |
| **9. GÜN** | 27 Haziran 2026 | **Dün:** Temel veri hattı kuruldu.<br>**Bugün:** *Google Sheets*'e alternatif olarak *Airtable* veri mimarisi de denenecek. *YouTube Studio* ayarları esnetilerek kanala yanıt iletim testleri yapılacak.<br>**Engel:** 🚧 *YouTube* tarafında *"gölge yanıt"* sorunu var. |
| **10. GÜN** | 28 Haziran 2026 | **Dün:** Gölge yanıt sorunu çözüldü ve veri hattı başarıyla doğrulandı.<br>**Bugün:** Ekip içi senkronizasyonu korumak ve kapsamın dışına çıkılmasını *(feature creep)* önlemek için hizalanma toplantısı yapılacak.<br>**Engel:** Kapsamın çok genişleme riski (Önlem alınıyor). |
| **11. GÜN** | 29 Haziran 2026 | **Dün:** Proje kapsam sınırları netleştirildi.<br>**Bugün:** Sunum dosyası için ön taslaklar oluşturulacak. *Sprint Review* ve *Retrospective* tarihleri planlanacak.<br>**Engel:** Yok. |
| **12. GÜN** | 30 Haziran 2026 | **Dün:** Sunum taslakları tamamlandı.<br>**Bugün:** *Sprint 1* işleri erken bittiği için zamanı verimli kullanmak adına *Sprint 2* görevlerine erkenden başlanması değerlendirilecek.<br>**Engel:** Yok. |
| **13. GÜN** | 1 Temmuz 2026 | **Dün:** *Sprint 2* görevleri ilgili panolara eklendi.<br>**Bugün:** *Product Backlog* panosunda genel iyileştirmeler ve güncellemeler yapılacak.<br>**Engel:** Yok. |
| **14. GÜN** | 2 Temmuz 2026 | **Dün:** *Product Backlog* güncellendi.<br>**Bugün:** *Sprint 1* kapatılmadan önce *Sprint 1* ve *Sprint 2* panolarının son senkronizasyon kontrolleri yapılacak.<br>**Engel:** Yok. |
| **15. GÜN** | 3 Temmuz 2026 | **Dün:** XXX<br>**Bugün:** XXX<br>**Engel:** Yok. |
| **16. GÜN** | 4 Temmuz 2026 | **Dün:** XXX<br>**Bugün:** XXX<br>**Engel:** Yok. |
| **17. GÜN** | 5 Temmuz 2026 | **Dün:** XXX<br>**Bugün:** XXX<br>**Engel:** Yok. |

---

### Sprint Board Durumu
#### 1. Ekran Görüntüsü (24.06.2026)
<img width="1635" height="736" alt="resim" src="https://github.com/user-attachments/assets/2c4a73f7-dd66-4564-b496-be1050238c4a" />

#### 2. Ekran Görüntüsü (26.06.2026)
<img width="1598" height="738" alt="resim" src="https://github.com/user-attachments/assets/a3c00d92-60a7-4baf-8a26-4408d644a0a2" />

#### 3. Ekran Görüntüsü (02.07.2026)
<img width="1493" height="732" alt="resim" src="https://github.com/user-attachments/assets/a2e2b942-3c6e-4df5-9433-42fc375983e2" />

#### 4. Ekran Görüntüsü (02.07.2026)
<img width="1397" height="777" alt="resim" src="https://github.com/user-attachments/assets/6bc706b2-5e01-44c8-b126-5479e439a8e0" />

---

### Ürün Durumu
#### 1. Ekran Görüntüsü (26.06.2026)
<img width="1289" height="618" alt="resim" src="https://github.com/user-attachments/assets/e8116345-bb0b-449f-a36c-4560801e1079" />
<img width="1770" height="649" alt="resim" src="https://github.com/user-attachments/assets/da430217-fd83-4974-94c2-8a08b2fad94f" />

---

### 🔎 Sprint Review

**Amacı:** Sprint boyunca "Ne ürettik?" sorusunun cevabıdır. Takım, Sprint başında hedeflediği ve bitirdiği çalışan özellikleri (ürün parçasını) canlı olarak demo yapar ve teknik doğrulamayı gerçekleştirir.

* **Sprint Hedefi:** YouTube yorumlarını otonom olarak yakalayıp Gemini ile filtrelenmiş yapay zeka yanıtları üreten çalışan bir veri hattı (MVP) kurmak.
* **Katılımcılar:** Ufuk Demir, Ezgisu Badak, Feyzanur Karatay, Furkan Çakı, Ayşe Dilara Baysal **(Tüm Scrum Takımı)**
> *Not: Bu sprint sonu değerlendirmesi, dış paydaş katılımı olmaksızın "İç Teknik Demo" olarak gerçekleştirilmiştir.*

---

* **Tamamlanan ve Demosu Yapılan İşler:**
  * [✓] YouTube "Watch Comments" modülü entegrasyonu (Canlı akış başarıyla izlendi).
  * [✓] Google Sheets üzerinden mükerrer yorum filtresi (Duplicate Filtering testi başarıyla geçildi).
  * [✓] Gemini prompt mühendisliği ve 2 farklı yanıt taslağı üretimi (Çıktı kalitesi ekipçe onaylandı).
  * [✓] Airtable veri mimarisi testi ve veri eşleştirme doğrulaması.

* **Ekip İçi Teknik Değerlendirme & Gelecek Sprint Kararları:** 
  * Gemini'ın ürettiği yanıt şablonlarının kalitesi ekip tarafından yeterli bulundu; ancak sonraki fazlarda yanıt kalitesini artırmak için bir "tonlama ayarı" (resmi/samimi) eklenmesi teknik backlog'a dahil edildi.
  * Veri hattının kararlı çalıştığı internal demo ile doğrulandığından, Sprint 2'de doğrudan Softr arayüz tasarımına ve front-end geliştirmelerine odaklanılması kararlaştırıldı.

---

### 🔄 Sprint Retrospective

**Amacı:** Ürüne değil, takımın çalışma şekline ve süreçlerine odaklanılır. "Nasıl çalıştık, neleri daha iyi yapabiliriz?" sorusuna cevap aranır. Takım içi açık ve şeffaf bir dürüstlük seansıdır.

#### 🟢 Ne İyi Gitti? (What went well?)
*   İlk projedeki (GoStock) teknik engeli 4. günde çok hızlı fark edip pivot (fikir değiştirme) kararı alabildik. Zaman kaybetmedik.
*   Make.com ve Gemini entegrasyonu beklediğimizden çok daha hızlı ve stabil çalıştı.
*   Takım içi yardımlaşma ve Daily Scrum disiplini yüksekti.

#### 🔴 Ne Kötü Gitti? (What went wrong?)
*   Sprint başında projenin teknik fizibilitesini tam yapmadığımız için ilk 3 günü boşa harcadık ve proje değiştirmek zorunda kaldık.
*   YouTube'daki "gölge yanıt" sorunu bizi 1 gün boyunca blokladı.

#### 🎯 Gelecek Sprint İçin Aksiyon Planları (Action Items)
*   **Aksiyon 1:** Sprint 2 planlamasına başlamadan önce No-Code araçlarının (Softr) teknik sınırları kontrol edilecek. (Sorumlu: Geliştirici A)
*   **Aksiyon 2:** API kota ve kısıtlamaları önceden listelenecek. (Sorumlu: Geliştirici B)

---

### 📝 Sprint Notları

**Amacı:** O sprintin tüm teknik ve idari özetidir. Projenin hafızasıdır (Archive). Dönüp bakıldığında o tarihte projenin hangi sürümde olduğu ve ne durumda olduğunu gösterir. İçinde takvim, metrikler, review ve retro özetleri bir arada bulunur.

#### 📅 Genel Bilgiler
*   **Tarih Aralığı:** 19 Haziran 2026 - 2 Temmuz 2026 (14 Gün)
*   **Sprint Hedefi:** Temel otonom veri hattının çalışır hale getirilmesi (MVP)
*   **Sprint Durumu:** Başarıyla Tamamlandı (Hatta Sprint 2 görevlerine erken başlandı)

#### 📈 Hız ve Metrikler (Velocity)
*   **Planlanan İş (Story Point / Görev Sayısı):** 8 Görev
*   **Tamamlanan İş:** 8 Görev (GoStock iptal edildikten sonra Condea kapsamında açılan tüm görevler kapatılmıştır.)

#### 🛠️ Teknik Gelişmeler & Sürüm Notları (Release Notes)
*   **YouTube Otomasyonu:** Canlı yorum akışı Sheets'e bağlandı.
*   **Filtreleme:** `Search Rows` ile mükerrer veri işleme hatası %100 engellendi.
*   **Yapay Zeka:** Gemini API entegrasyonu ile otomatik duygu analizi ve yanıt taslağı kurgusu yapıldı.
*   **Veri Mimarisi:** Verilerin Airtable/Sheets üzerinde ilişkisel tutulması sağlandı.

#### ⚠️ Yaşanan Değişiklikler ve Kriz Yönetimi
*   **22-23 Haziran:** GoStock projesinin zaman/imkan kısıtları nedeniyle iptal edilmesine ve yapay zeka odaklı **Condea** projesine geçilmesine oy birliğiyle karar verilmiştir. Bu stratejik pivot, projenin başarısını olumlu etkilemiştir.

#### 🎯 Sonraki Sprint (Sprint 2) Odağı
*   Web tabanlı arayüzün (Softr/Bubble) tasarlanması.
*   Kullanıcı paneli ve yorum yönetim ekranlarının front-end geliştirmesi.
---

## SPRINT 2️⃣

[https://yzta.slack.com/lists/T02LKGXV98C/F0BBUDXPUES]

### Backlog Düzeni ve Story Seçimleri

*[(Backlog oluşturulurken nasıl bir düzenin esas alındığı anlatılıyor. Örneğin, görevlerin önceliği, zorluk seviyesi vs.)]*

### Daily Scrum (14 GÜN)

| Gün | Tarih | Açıklama |
| :--- | :--- | :--- |
| **18. GÜN** | 6 Temmuz 2026 | **Dün:** [XXX] yapıldı.<br>**Bugün:** [XXX] yapılacak.<br>**Engel:** Yok. |
| **19. GÜN** | 7 Temmuz 2026 | **Dün:** [XXX] yapıldı.<br>**Bugün:** [XXX] yapılacak.<br>**Engel:** Yok. |
| **20. GÜN** | 8 Temmuz 2026 | **Dün:** [XXX] yapıldı.<br>**Bugün:** [XXX] yapılacak.<br>**Engel:** Yok. |
| **21. GÜN** | 9 Temmuz 2026 | **Dün:** [XXX] yapıldı.<br>**Bugün:** [XXX] yapılacak.<br>**Engel:** Yok. |
| **22. GÜN** | 10 Temmuz 2026 | **Dün:** [XXX] yapıldı.<br>**Bugün:** [XXX] yapılacak.<br>**Engel:** Yok. |
| **23. GÜN** | 11 Temmuz 2026 | **Dün:** [XXX] yapıldı.<br>**Bugün:** [XXX] yapılacak.<br>**Engel:** Yok. |
| **24. GÜN** | 12 Temmuz 2026 | **Dün:** [XXX] yapıldı.<br>**Bugün:** [XXX] yapılacak.<br>**Engel:** Yok. |
| **25. GÜN** | 13 Temmuz 2026 | **Dün:** [XXX] yapıldı.<br>**Bugün:** [XXX] yapılacak.<br>**Engel:** Yok. |
| **26. GÜN** | 14 Temmuz 2026 | **Dün:** [XXX] yapıldı.<br>**Bugün:** [XXX] yapılacak.<br>**Engel:** Yok. |
| **27. GÜN** | 15 Temmuz 2026 | **Dün:** [XXX] yapıldı.<br>**Bugün:** [XXX] yapılacak.<br>**Engel:** Yok. |
| **28. GÜN** | 16 Temmuz 2026 | **Dün:** [XXX] yapıldı.<br>**Bugün:** [XXX] yapılacak.<br>**Engel:** Yok. |
| **29. GÜN** | 17 Temmuz 2026 | **Dün:** [XXX] yapıldı.<br>**Bugün:** [XXX] yapılacak.<br>**Engel:** Yok. |
| **30. GÜN** | 18 Temmuz 2026 | **Dün:** [XXX] yapıldı.<br>**Bugün:** [XXX] yapılacak.<br>**Engel:** Yok. |
| **31. GÜN** | 19 Temmuz 2026 | **Dün:** [XXX] yapıldı.<br>**Bugün:** [XXX] yapılacak.<br>**Engel:** Yok. |

---

### Sprint Board Durumu
#### 1. Ekran Görüntüsü (XX.XX.XXXX)

#### 2. Ekran Görüntüsü (XX.XX.XXXX)

#### 3. Ekran Görüntüsü (XX.XX.XXXX)

---

### Ürün Durumu
#### 1. Ekran Görüntüsü (XX.XX.XXXX)

#### 2. Ekran Görüntüsü (XX.XX.XXXX)

#### 3. Ekran Görüntüsü (XX.XX.XXXX)

---

### 🔎 Sprint Review

**Amacı:** Sprint boyunca "Ne ürettik?" sorusunun cevabıdır. Takım, Sprint başında hedeflediği ve bitirdiği çalışan özellikleri (ürün parçasını) canlı olarak demo yapar ve teknik doğrulamayı gerçekleştirir.

* **Sprint Hedefi:** YouTube yorumlarını otonom olarak yakalayıp Gemini ile filtrelenmiş yapay zeka yanıtları üreten çalışan bir veri hattı (MVP) kurmak.
* **Katılımcılar:** Ufuk Demir, Ezgisu Badak, Feyzanur Karatay, Furkan Çakı, Ayşe Dilara Baysal **(Tüm Scrum Takımı)**
> *Not: Bu sprint sonu değerlendirmesi, dış paydaş katılımı olmaksızın "İç Teknik Demo" olarak gerçekleştirilmiştir.*

---

* **Tamamlanan ve Demosu Yapılan İşler:**
  * [✓] YouTube "Watch Comments" modülü entegrasyonu (Canlı akış başarıyla izlendi).
  * [✓] Google Sheets üzerinden mükerrer yorum filtresi (Duplicate Filtering testi başarıyla geçildi).
  * [✓] Gemini prompt mühendisliği ve 2 farklı yanıt taslağı üretimi (Çıktı kalitesi ekipçe onaylandı).
  * [✓] Airtable veri mimarisi testi ve veri eşleştirme doğrulaması.

* **Ekip İçi Teknik Değerlendirme & Gelecek Sprint Kararları:** 
  * Gemini'ın ürettiği yanıt şablonlarının kalitesi ekip tarafından yeterli bulundu; ancak sonraki fazlarda yanıt kalitesini artırmak için bir "tonlama ayarı" (resmi/samimi) eklenmesi teknik backlog'a dahil edildi.
  * Veri hattının kararlı çalıştığı internal demo ile doğrulandığından, Sprint 2'de doğrudan Softr arayüz tasarımına ve front-end geliştirmelerine odaklanılması kararlaştırıldı.

---

### 🔄 Sprint Retrospective

**Amacı:** Ürüne değil, takımın çalışma şekline ve süreçlerine odaklanılır. "Nasıl çalıştık, neleri daha iyi yapabiliriz?" sorusuna cevap aranır. Takım içi açık ve şeffaf bir dürüstlük seansıdır.

#### 🟢 Ne İyi Gitti? (What went well?)
*   İlk projedeki (GoStock) teknik engeli 4. günde çok hızlı fark edip pivot (fikir değiştirme) kararı alabildik. Zaman kaybetmedik.
*   Make.com ve Gemini entegrasyonu beklediğimizden çok daha hızlı ve stabil çalıştı.
*   Takım içi yardımlaşma ve Daily Scrum disiplini yüksekti.

#### 🔴 Ne Kötü Gitti? (What went wrong?)
*   Sprint başında projenin teknik fizibilitesini tam yapmadığımız için ilk 3 günü boşa harcadık ve proje değiştirmek zorunda kaldık.
*   YouTube'daki "gölge yanıt" sorunu bizi 1 gün boyunca blokladı.

#### 🎯 Gelecek Sprint İçin Aksiyon Planları (Action Items)
*   **Aksiyon 1:** Sprint 2 planlamasına başlamadan önce No-Code araçlarının (Softr) teknik sınırları kontrol edilecek. (Sorumlu: Geliştirici A)
*   **Aksiyon 2:** API kota ve kısıtlamaları önceden listelenecek. (Sorumlu: Geliştirici B)

---

### 📝 Sprint Notları

**Amacı:** O sprintin tüm teknik ve idari özetidir. Projenin hafızasıdır (Archive). Dönüp bakıldığında o tarihte projenin hangi sürümde olduğu ve ne durumda olduğunu gösterir. İçinde takvim, metrikler, review ve retro özetleri bir arada bulunur.

#### 📅 Genel Bilgiler
*   **Tarih Aralığı:** 19 Haziran 2026 - 2 Temmuz 2026 (14 Gün)
*   **Sprint Hedefi:** Temel otonom veri hattının çalışır hale getirilmesi (MVP)
*   **Sprint Durumu:** Başarıyla Tamamlandı (Hatta Sprint 2 görevlerine erken başlandı)

#### 📈 Hız ve Metrikler (Velocity)
*   **Planlanan İş (Story Point / Görev Sayısı):** 8 Görev
*   **Tamamlanan İş:** 8 Görev (GoStock iptal edildikten sonra Condea kapsamında açılan tüm görevler kapatılmıştır.)

#### 🛠️ Teknik Gelişmeler & Sürüm Notları (Release Notes)
*   **YouTube Otomasyonu:** Canlı yorum akışı Sheets'e bağlandı.
*   **Filtreleme:** `Search Rows` ile mükerrer veri işleme hatası %100 engellendi.
*   **Yapay Zeka:** Gemini API entegrasyonu ile otomatik duygu analizi ve yanıt taslağı kurgusu yapıldı.
*   **Veri Mimarisi:** Verilerin Airtable/Sheets üzerinde ilişkisel tutulması sağlandı.

#### ⚠️ Yaşanan Değişiklikler ve Kriz Yönetimi
*   **22-23 Haziran:** GoStock projesinin zaman/imkan kısıtları nedeniyle iptal edilmesine ve yapay zeka odaklı **Condea** projesine geçilmesine oy birliğiyle karar verilmiştir. Bu stratejik pivot, projenin başarısını olumlu etkilemiştir.

#### 🎯 Sonraki Sprint (Sprint 2) Odağı
*   Web tabanlı arayüzün (Softr/Bubble) tasarlanması.
*   Kullanıcı paneli ve yorum yönetim ekranlarının front-end geliştirmesi.
---

## SPRINT 3️⃣

[https://yzta.slack.com/lists/T02LKGXV98C/F0BBWGD7SQ2]

### Backlog Düzeni ve Story Seçimleri

*[(Backlog oluşturulurken nasıl bir düzenin esas alındığı anlatılıyor. Örneğin, görevlerin önceliği, zorluk seviyesi vs.)]*

### Daily Scrum (14 GÜN)

| Gün | Tarih | Açıklama |
| :--- | :--- | :--- |
| **32. GÜN** | 20 Temmuz 2026 | **Dün:** [XXX] yapıldı.<br>**Bugün:** [XXX] yapılacak.<br>**Engel:** Yok. |
| **33. GÜN** | 21 Temmuz 2026 | **Dün:** [XXX] yapıldı.<br>**Bugün:** [XXX] yapılacak.<br>**Engel:** Yok. |
| **34. GÜN** | 22 Temmuz 2026 | **Dün:** [XXX] yapıldı.<br>**Bugün:** [XXX] yapılacak.<br>**Engel:** Yok. |
| **35. GÜN** | 23 Temmuz 2026 | **Dün:** [XXX] yapıldı.<br>**Bugün:** [XXX] yapılacak.<br>**Engel:** Yok. |
| **36. GÜN** | 24 Temmuz 2026 | **Dün:** [XXX] yapıldı.<br>**Bugün:** [XXX] yapılacak.<br>**Engel:** Yok. |
| **37. GÜN** | 25 Temmuz 2026 | **Dün:** [XXX] yapıldı.<br>**Bugün:** [XXX] yapılacak.<br>**Engel:** Yok. |
| **38. GÜN** | 26 Temmuz 2026 | **Dün:** [XXX] yapıldı.<br>**Bugün:** [XXX] yapılacak.<br>**Engel:** Yok. |
| **39. GÜN** | 27 Temmuz 2026 | **Dün:** [XXX] yapıldı.<br>**Bugün:** [XXX] yapılacak.<br>**Engel:** Yok. |
| **40. GÜN** | 28 Temmuz 2026 | **Dün:** [XXX] yapıldı.<br>**Bugün:** [XXX] yapılacak.<br>**Engel:** Yok. |
| **41. GÜN** | 29 Temmuz 2026 | **Dün:** [XXX] yapıldı.<br>**Bugün:** [XXX] yapılacak.<br>**Engel:** Yok. |
| **42. GÜN** | 30 Temmuz 2026 | **Dün:** [XXX] yapıldı.<br>**Bugün:** [XXX] yapılacak.<br>**Engel:** Yok. |
| **43. GÜN** | 31 Temmuz 2026 | **Dün:** [XXX] yapıldı.<br>**Bugün:** [XXX] yapılacak.<br>**Engel:** Yok. |
| **44. GÜN** | 1 Ağustos 2026 | **Dün:** [XXX] yapıldı.<br>**Bugün:** [XXX] yapılacak.<br>**Engel:** Yok. |
| **45. GÜN** | 2 Ağustos 2026 | **Dün:** [XXX] yapıldı.<br>**Bugün:** [XXX] yapılacak.<br>**Engel:** Yok. |

---

### Sprint Board Durumu
#### 1. Ekran Görüntüsü (XX.XX.XXXX)

#### 2. Ekran Görüntüsü (XX.XX.XXXX)

#### 3. Ekran Görüntüsü (XX.XX.XXXX)

---

### Ürün Durumu
#### 1. Ekran Görüntüsü (XX.XX.XXXX)

#### 2. Ekran Görüntüsü (XX.XX.XXXX)

#### 3. Ekran Görüntüsü (XX.XX.XXXX)

---

### 🔎 Sprint Review

**Amacı:** Sprint boyunca "Ne ürettik?" sorusunun cevabıdır. Takım, Sprint başında hedeflediği ve bitirdiği çalışan özellikleri (ürün parçasını) canlı olarak demo yapar ve teknik doğrulamayı gerçekleştirir.

* **Sprint Hedefi:** YouTube yorumlarını otonom olarak yakalayıp Gemini ile filtrelenmiş yapay zeka yanıtları üreten çalışan bir veri hattı (MVP) kurmak.
* **Katılımcılar:** Ufuk Demir, Ezgisu Badak, Feyzanur Karatay, Furkan Çakı, Ayşe Dilara Baysal **(Tüm Scrum Takımı)**
> *Not: Bu sprint sonu değerlendirmesi, dış paydaş katılımı olmaksızın "İç Teknik Demo" olarak gerçekleştirilmiştir.*

---

* **Tamamlanan ve Demosu Yapılan İşler:**
  * [✓] YouTube "Watch Comments" modülü entegrasyonu (Canlı akış başarıyla izlendi).
  * [✓] Google Sheets üzerinden mükerrer yorum filtresi (Duplicate Filtering testi başarıyla geçildi).
  * [✓] Gemini prompt mühendisliği ve 2 farklı yanıt taslağı üretimi (Çıktı kalitesi ekipçe onaylandı).
  * [✓] Airtable veri mimarisi testi ve veri eşleştirme doğrulaması.

* **Ekip İçi Teknik Değerlendirme & Gelecek Sprint Kararları:** 
  * Gemini'ın ürettiği yanıt şablonlarının kalitesi ekip tarafından yeterli bulundu; ancak sonraki fazlarda yanıt kalitesini artırmak için bir "tonlama ayarı" (resmi/samimi) eklenmesi teknik backlog'a dahil edildi.
  * Veri hattının kararlı çalıştığı internal demo ile doğrulandığından, Sprint 2'de doğrudan Softr arayüz tasarımına ve front-end geliştirmelerine odaklanılması kararlaştırıldı.

---

### 🔄 Sprint Retrospective

**Amacı:** Ürüne değil, takımın çalışma şekline ve süreçlerine odaklanılır. "Nasıl çalıştık, neleri daha iyi yapabiliriz?" sorusuna cevap aranır. Takım içi açık ve şeffaf bir dürüstlük seansıdır.

#### 🟢 Ne İyi Gitti? (What went well?)
*   İlk projedeki (GoStock) teknik engeli 4. günde çok hızlı fark edip pivot (fikir değiştirme) kararı alabildik. Zaman kaybetmedik.
*   Make.com ve Gemini entegrasyonu beklediğimizden çok daha hızlı ve stabil çalıştı.
*   Takım içi yardımlaşma ve Daily Scrum disiplini yüksekti.

#### 🔴 Ne Kötü Gitti? (What went wrong?)
*   Sprint başında projenin teknik fizibilitesini tam yapmadığımız için ilk 3 günü boşa harcadık ve proje değiştirmek zorunda kaldık.
*   YouTube'daki "gölge yanıt" sorunu bizi 1 gün boyunca blokladı.

#### 🎯 Gelecek Sprint İçin Aksiyon Planları (Action Items)
*   **Aksiyon 1:** Sprint 2 planlamasına başlamadan önce No-Code araçlarının (Softr) teknik sınırları kontrol edilecek. (Sorumlu: Geliştirici A)
*   **Aksiyon 2:** API kota ve kısıtlamaları önceden listelenecek. (Sorumlu: Geliştirici B)

---

### 📝 Sprint Notları

**Amacı:** O sprintin tüm teknik ve idari özetidir. Projenin hafızasıdır (Archive). Dönüp bakıldığında o tarihte projenin hangi sürümde olduğu ve ne durumda olduğunu gösterir. İçinde takvim, metrikler, review ve retro özetleri bir arada bulunur.

#### 📅 Genel Bilgiler
*   **Tarih Aralığı:** 19 Haziran 2026 - 2 Temmuz 2026 (14 Gün)
*   **Sprint Hedefi:** Temel otonom veri hattının çalışır hale getirilmesi (MVP)
*   **Sprint Durumu:** Başarıyla Tamamlandı (Hatta Sprint 2 görevlerine erken başlandı)

#### 📈 Hız ve Metrikler (Velocity)
*   **Planlanan İş (Story Point / Görev Sayısı):** 8 Görev
*   **Tamamlanan İş:** 8 Görev (GoStock iptal edildikten sonra Condea kapsamında açılan tüm görevler kapatılmıştır.)

#### 🛠️ Teknik Gelişmeler & Sürüm Notları (Release Notes)
*   **YouTube Otomasyonu:** Canlı yorum akışı Sheets'e bağlandı.
*   **Filtreleme:** `Search Rows` ile mükerrer veri işleme hatası %100 engellendi.
*   **Yapay Zeka:** Gemini API entegrasyonu ile otomatik duygu analizi ve yanıt taslağı kurgusu yapıldı.
*   **Veri Mimarisi:** Verilerin Airtable/Sheets üzerinde ilişkisel tutulması sağlandı.

#### ⚠️ Yaşanan Değişiklikler ve Kriz Yönetimi
*   **22-23 Haziran:** GoStock projesinin zaman/imkan kısıtları nedeniyle iptal edilmesine ve yapay zeka odaklı **Condea** projesine geçilmesine oy birliğiyle karar verilmiştir. Bu stratejik pivot, projenin başarısını olumlu etkilemiştir.

#### 🎯 Sonraki Sprint (Sprint 2) Odağı
*   Web tabanlı arayüzün (Softr/Bubble) tasarlanması.
*   Kullanıcı paneli ve yorum yönetim ekranlarının front-end geliştirmesi.
---

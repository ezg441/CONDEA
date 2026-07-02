# **CONDEA: "Akıllı İçerik Öneri Takip Sistemi"**

Grup 4 Yapay Zeka ve Teknoloji Akademisi - No-Code/Low-Code Bootcamp 2026 Projesi

*Projenin sloganı buraya yazılacak.*

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
| **1. GÜN** | 19 Haziran 2026 | Başlangıç yayınından hemen sonra görev dağılımı ve rol tanımları üzerine görüşmelere başlandı. Karar süreçlerini hızlandırmak amacıyla tüm proje fikirlerinin kolektif bir listede bir araya getirilmesi sağlanarak ortak bir çalışma disiplini oluşturuldu. |
| **2. GÜN** | 20 Haziran 2026 | Proje fikrini ve ekip rollerini konuşmak üzere bir toplantı saati belirlendi. |
| **3. GÜN** | 21 Haziran 2026 | Projenin ne olduğu ve roller belirlendi. Product backlog'un ve ardından ilk sprintin de hazırlanması kararlaştırıldı. |
| **4. GÜN** | 22 Haziran 2026 | Projenin teknik sürecinde zaman ve imkanlar açısından gerçekleştirilmesi zor noktalar tespit edildi. Bu sebeple süreç, proje fikri konusunda bir revize yapma veya tamamen yeni bir proje fikriyle baştan başlama şeklinde bir yöne evrildi. |
| **5. GÜN** | 23 Haziran 2026 | Proje fikri değişikliğine gidilmesine karar verilerek **GoStock** projesinden vazgeçildi ve proje fikri **Condea** olarak netleştirildi. Geliştiricilerin fikirleri esas alınarak bu doğrultuda 24.06.2026 tarihinde product backlogun oluşturulması kararlaştırıldı. |
| **6. GÜN** | 24 Haziran 2026 | **Product Backlog** ve **Sprint 1** panoları oluşturuldu, ilgili görevler atandı. Projeyi geliştirecek ekstra özellikler tartışıldı. Görevlerin zorluk dereceleri, geliştiricilerin fikirleri değerlendirilerek güncellenecek. |
| **7. GÜN** | 25 Haziran 2026 | Make üzerinden hazırlanacak otonom sistemin web tabanlı bir MVP'ye dönüştürülebilmesi için iki farklı No-Code/Low-Code *(Softr ve Bubble)* yöntemi üzerinden altyapı araştırması yapıldı ve üzerinde konuşulmak üzere karşılaştırmalı rapor hazırlandı. *Make* üzerinde temel veri hattının kurgulanmasına dair çalışmalara başlandı. |
| **8. GÜN** | 26 Haziran 2026 | Youtube için *"Watch Comments"* modülü çalıştırılarak yeni yorumların gerçek zamanlı izlenmesi sağlandı ve aynı yorumun tekrar işlenmesini önlemek için de *Google Sheets*'in *"Search Rows"* modülü kullanılarak bir akış filtresi *(Duplicate Filtering)* oluşturuldu. Bununla birlikte, *Gemini* modülünde gerçekleştirilen prompt mühendisliğiyle, gelen yorumun sınıflandırılabilmesi ve yoruma cevap olarak gönderilmek üzere iki farklı yanıt taslağı oluşturulabilmesi sağlandı. Yanıt taslakları, yorumların kategorisi gibi tüm çıktılar bir veri deposunda *(Google Sheets)* en uygun şekilde yapılandırılarak bir araya getirildi. Böylelikle, **Condea**'nın *Sprint 1* kapsamında hedeflenen temel veri hattı kurgulanmış oldu. |
| **9. GÜN** | 27 Haziran 2026 | Kullanıcı ve yorum tablolarını birbirine bağlamak üzere *Airtable*'da uygun bir mimari kurma denemeleri yapıldı. *Make.com*'daki *YouTube* modülünde yapılan veri eşleştirme kontrolleri ve *YouTube Studio topluluk ayarları*nın esnetilmesiyle ilk sürümdeki *"gölge yanıt"* sorunu çözüldü. Otomasyonun ürettiği yanıtların kanala başarıyla iletilmesi sağlanarak veri hattının ilk hâli başarıyla doğrulandı. |
| **10. GÜN** | 28 Haziran 2026 | Hem projenin, tüm ekip üyelerinin zihninde aynı şeyi ifade edip etmediğinin doğrulanabilmesi hem de zihinlerimizde zaten var olan proje tanımının tekrar edilip daha net bir hâle getirilebilmesi amacıyla bir toplantı gerçekleştirildi. Bu toplantıyla, hem projeye eklenmesi kararlaştırılan ana özelliklerin daha net bir çerçeveye sahip olması hem de ilerleyen süreçlerde projeye dahil edilebilecek ekstra özelliklerin, proje kapsamının dışına çıkma ihtimâlinin önüne geçilebilmesi amaçlandı. |
| **11. GÜN** | 29 Haziran 2026 | Projenin sunum dosyası için bir ön hazırlık olarak taslaklar oluşturuldu. Sprint 1'in sonuna yaklaşılırken **Sprint Review** ve **Sprint Retrospective** toplantıları için net bir tarih belirlenmeye çalışılıyor. |
| **12. GÜN** | 30 Haziran 2026 | **Sprint 1** tamamlanmadan önce, **Sprint 2** görevlerine erkenden başlanılmasına ve zamanın, daha efektif şekilde değerlendirilerek avantaja dönüştürülmesine yönelik görüşler bildirildi.|
| **13. GÜN** | 1 Temmuz 2026 | **Product Backlog** panosunda güncellemeler yapıldı. |
| **14. GÜN** | 2 Temmuz 2026 | **Sprint 1** ve **Sprint 2** panolarında güncellemeler yapıldı. |
| **15. GÜN** | 3 Temmuz 2026 | Daily scrum açıklaması |
| **16. GÜN** | 4 Temmuz 2026 | Daily scrum açıklaması |
| **17. GÜN** | 5 Temmuz 2026 | Daily scrum açıklaması |

### Sprint Board Durumu
#### 1. Ekran Görüntüsü (24.06.2026)
<img width="1635" height="736" alt="resim" src="https://github.com/user-attachments/assets/2c4a73f7-dd66-4564-b496-be1050238c4a" />

#### 2. Ekran Görüntüsü (26.06.2026)
<img width="1598" height="738" alt="resim" src="https://github.com/user-attachments/assets/a3c00d92-60a7-4baf-8a26-4408d644a0a2" />

#### 3. Ekran Görüntüsü (XX.XX.XXXX)

#### 4. Ekran Görüntüsü (XX.XX.XXXX)

### Ürün Durumu
#### 1. Ekran Görüntüsü (26.06.2026)
<img width="1289" height="618" alt="resim" src="https://github.com/user-attachments/assets/e8116345-bb0b-449f-a36c-4560801e1079" />
<img width="1770" height="649" alt="resim" src="https://github.com/user-attachments/assets/da430217-fd83-4974-94c2-8a08b2fad94f" />

### Sprint Review
* **Alınan Kararlar**:
* **Katılımcılar**: *[Ufuk Demir, Ayşe Dilara Baysal, Ezgisu Badak, Feyzanur Karatay, Furkan Çakı]*

### Sprint Retrospective
* 
* 
* 

### Sprint Notları
* 
* 
* 
---

## SPRINT 2️⃣

[https://yzta.slack.com/lists/T02LKGXV98C/F0BBUDXPUES]

### Backlog Düzeni ve Story Seçimleri

*[(Backlog oluşturulurken nasıl bir düzenin esas alındığı anlatılıyor. Örneğin, görevlerin önceliği, zorluk seviyesi vs.)]*

### Daily Scrum (14 GÜN)

| Gün | Tarih | Açıklama |
| :--- | :--- | :--- |
| **18. GÜN** | 6 Temmuz 2026 | [X] görevini tamamlamıştık, bugün [Y] üzerinde çalışacağız ve şu an önümüzde herhangi bir engel [Z] bulunmuyor. |
| **19. GÜN** | 7 Temmuz 2026 | Daily scrum açıklaması |
| **20. GÜN** | 8 Temmuz 2026 | Daily scrum açıklaması |
| **21. GÜN** | 9 Temmuz 2026 | Daily scrum açıklaması |
| **22. GÜN** | 10 Temmuz 2026 | Daily scrum açıklaması |
| **23. GÜN** | 11 Temmuz 2026 | Daily scrum açıklaması |
| **24. GÜN** | 12 Temmuz 2026 | Daily scrum açıklaması |
| **25. GÜN** | 13 Temmuz 2026 | Daily scrum açıklaması |
| **26. GÜN** | 14 Temmuz 2026 | Daily scrum açıklaması |
| **27. GÜN** | 15 Temmuz 2026 | Daily scrum açıklaması |
| **28. GÜN** | 16 Temmuz 2026 | Daily scrum açıklaması |
| **29. GÜN** | 17 Temmuz 2026 | Daily scrum açıklaması |
| **30. GÜN** | 18 Temmuz 2026 | Daily scrum açıklaması |
| **31. GÜN** | 19 Temmuz 2026 | Daily scrum açıklaması |

### Sprint Board Durumu
#### 1. Ekran Görüntüsü (XX.XX.XXXX)

#### 2. Ekran Görüntüsü (XX.XX.XXXX)

#### 3. Ekran Görüntüsü (XX.XX.XXXX)

### Ürün Durumu
#### 1. Ekran Görüntüsü (XX.XX.XXXX)

#### 2. Ekran Görüntüsü (XX.XX.XXXX)

#### 3. Ekran Görüntüsü (XX.XX.XXXX)

### Sprint Review
* **Alınan Kararlar**:
* **Katılımcılar**: *[Ufuk Demir, Ayşe Dilara Baysal, Ezgisu Badak, Feyzanur Karatay, Furkan Çakı]*

### Sprint Retrospective
* 
* 
* 

### Sprint Notları
* 
* 
* 
---

## SPRINT 3️⃣

[https://yzta.slack.com/lists/T02LKGXV98C/F0BBWGD7SQ2]

### Backlog Düzeni ve Story Seçimleri

*[(Backlog oluşturulurken nasıl bir düzenin esas alındığı anlatılıyor. Örneğin, görevlerin önceliği, zorluk seviyesi vs.)]*

### Daily Scrum (14 GÜN)

| Gün | Tarih | Açıklama |
| :--- | :--- | :--- |
| **32. GÜN** | 20 Temmuz 2026 | [X] görevini tamamlamıştık, bugün [Y] üzerinde çalışacağız ve şu an önümüzde herhangi bir engel [Z] bulunmuyor. |
| **33. GÜN** | 21 Temmuz 2026 | Daily scrum açıklaması |
| **34. GÜN** | 22 Temmuz 2026 | Daily scrum açıklaması |
| **35. GÜN** | 23 Temmuz 2026 | Daily scrum açıklaması |
| **36. GÜN** | 24 Temmuz 2026 | Daily scrum açıklaması |
| **37. GÜN** | 25 Temmuz 2026 | Daily scrum açıklaması |
| **38. GÜN** | 26 Temmuz 2026 | Daily scrum açıklaması |
| **39. GÜN** | 27 Temmuz 2026 | Daily scrum açıklaması |
| **40. GÜN** | 28 Temmuz 2026 | Daily scrum açıklaması |
| **41. GÜN** | 29 Temmuz 2026 | Daily scrum açıklaması |
| **42. GÜN** | 30 Temmuz 2026 | Daily scrum açıklaması |
| **43. GÜN** | 31 Temmuz 2026 | Daily scrum açıklaması |
| **44. GÜN** | 1 Ağustos 2026 | Daily scrum açıklaması |
| **45. GÜN** | 2 Ağustos 2026 | Daily scrum açıklaması |

### Sprint Board Durumu
#### 1. Ekran Görüntüsü (XX.XX.XXXX)

#### 2. Ekran Görüntüsü (XX.XX.XXXX)

#### 3. Ekran Görüntüsü (XX.XX.XXXX)

### Ürün Durumu
#### 1. Ekran Görüntüsü (XX.XX.XXXX)

#### 2. Ekran Görüntüsü (XX.XX.XXXX)

#### 3. Ekran Görüntüsü (XX.XX.XXXX)

### Sprint Review
* **Alınan Kararlar**:
* **Katılımcılar**: *[Ufuk Demir, Ayşe Dilara Baysal, Ezgisu Badak, Feyzanur Karatay, Furkan Çakı]*

### Sprint Retrospective
* 
* 
* 

### Sprint Notları
* 
* 
* 
---

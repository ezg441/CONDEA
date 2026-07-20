# **CONDEA: "Akıllı İçerik Öneri Takip Sistemi"**

> *"Keşfet. Yakala. Yayınla."*

![Grup 4](https://img.shields.io/badge/Grup-4-007ec6?style=for-the-badge&logo=github&logoColor=white)
![Yapay Zeka ve Teknoloji Akademisi](https://img.shields.io/badge/Yapay_Zeka_ve_Teknoloji_Akademisi-007ec6?style=for-the-badge&logo=google-cloud&logoColor=white)
![No-Code/Low-Code](https://img.shields.io/badge/No--Code_%2F_Low--Code-007ec6?style=for-the-badge&logo=appveyor&logoColor=white)
![Bootcamp 2026](https://img.shields.io/badge/Bootcamp-2026-007ec6?style=for-the-badge&logo=rocket&logoColor=white)

---

<details>
<summary>

## Ekip Üyeleri ve Rol Dağılımı

</summary>

| Ekip Üyesi | Rol | GitHub | LinkedIn |
| :--- | :--- | :---: | :---: |
| **Ufuk Demir** | ⏱️ `Scrum Master` | [![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white)](https://github.com/ufukdemiir) | [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ufukdemiir/) |
| **Ezgisu Badak** | 👑 `Product Owner` | [![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white)](https://github.com/ezg441) | [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ezgisu-badak-a2804820b) |
| **Ayşe Dilara Baysal** | 💻 `Developer` | [![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white)](https://github.com/aysedilarabaysal) | [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ayşedilarabaysal/) |
| **Feyzanur Karatay** | 💻 `Developer` | [![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white)](https://github.com/#) | [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/feyzanurkaratay) |
| **Furkan Çakı** | 💻 `Developer` | [![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white)](https://github.com/cakiFurkan) | [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkançakı/) |

</details>

---

<details>
<summary>

## Ürün Bilgileri

</summary>

### Ürün İsmi
Condea
### Ürün Açıklaması
**Condea**, YouTube içerik üreticilerinin topluluklarından gelen değerli içerik fikirlerini kaçırmamasını sağlayan *akıllı bir otomasyon sistemidir*. *YZTA-2026 BOOTCAMP* kapsamında geliştirilen bu proje, YouTube yorumlarını otomatik olarak izler, Yapay Zeka (Google Gemini) desteğiyle "içerik tavsiyesi" taşıyan yorumları ayırt eder ve bu verileri düzenli bir rapor halinde kanal sahibine iletir. Condea, içerik üreticilerinin takipçileriyle kurduğu bağı güçlendirirken, içerik planlama sürecini veri odaklı bir hale getirir.

### Ürün Özellikleri
Condea projesinin temel fonksiyonları şunlardır:
* **Akıllı Yorum İzleme**: YouTube kanalından gelen tüm yorumlar anlık olarak yakalanır ve mükerrer (duplicate) kayıtlar elenerek temiz bir veri akışı sağlanır
* **İçerik İsteği Analizi**: Google Gemini entegrasyonu sayesinde, yorumların içerik tavsiyesi veya içerik isteği içerip ichermediği otomatik olarak tespit edilir.
* **Merkezi Veri Yönetimi**: İşlenen tüm yorumlar; metin, beğeni sayısı ve tarih bilgileriyle birlikte Google Sheets üzerinde kurumsal bir tablo yapısında depolanır.
* **Otomatik Raporlama**: Sistem, periyodik olarak (haftalık/günlük) veri tabanını analiz eder ve en çok beğeni alan "içerik tavsiyelerini" derleyerek şık bir HTML e-posta tasarımı ile kanal sahibine raporlar.

### Hedef Kitle
Condea, özellikle aşağıdaki kullanıcılar için optimize edilmiştir:
* **YouTube İçerik Üreticileri**: Takipçilerinden gelen harika fikirleri yorumlar arasında kaybetmek istemeyen ve içerik planlama sürecini otomatize etmek isteyen üreticiler.
* **Kanal Yöneticileri**: Topluluk etkileşimlerini analiz edip, kanal stratejisini izleyici geri bildirimlerine göre şekillendirmeyi hedefleyen profesyoneller.

### Product Backlog

<table>
  <tr>
    <td>
      <strong>📋 Süreç Nasıl Yönetiliyor?</strong><br><br>
      <i>Tüm kullanıcı hikayeleri, görevler ve önceliklendirme <b>Slack listeleri</b> üzerinden yönetilmektedir.</i>
      <br><br>
      <a href="https://yzta.slack.com/lists/T02LKGXV98C/F0BC0E7CD8U">
        <img src="https://img.shields.io/badge/Product%20Backlog%20Panosuna%20Git-Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white">
      </a>
    </td>
  </tr>
</table>

Proje toplam **3 sprint** olarak planlanmıştır ve "**Sprint Takvimi**" aşağıda yer almaktadır.

Hangi hususlar dikkate alınarak projenin 3 sprinte bölündüğü, sprintlere atanan görevler belirlenirken nelerin amaçlandığı **(backlog dağıtım mantığı)**, sprintlerdeki **toplam görev sayıları** ve sprintlerin **toplam görev puanları** aşağıda belirtilmektedir:

Tüm proje süreci boyunca gerçekleştirilmesi planlanan **toplam görev sayısı 32** _(User Story)_ ve **tüm görevlerin toplam puanı 117**'dir. _(User Story)_

* **Sprint 1 — Temel Oluşturma:** Tüm süreci başlatacak ve geliştirilerek hedeflenen hâle getirilecek bir prototip.

  **Amaç:** Sistemin uçtan uca çalışan temel veri hattının kurulması; YouTube yorumlarının otomatik yakalanması, mükerrer kayıtların engellenmesi, Gemini ile temel sınıflandırmanın (içerik isteği tespiti) yapılması ve işlenen verilerin Google Sheets veri deposuna kaydedilmesi.

  Bu sprintte gerçekleştirilmesi hedeflenen görevler, **toplam 6 adet** ve **toplam 20 puandır**.

* **Sprint 2 — Yapay Zeka Entegrasyonu:** Yapay zeka öğeleriyle donatılmış ve stabil şekilde çalışan bir ürün.

  **Amaç:** Yapay zekâ katmanının derinleştirilerek ürünün stabil hâle getirilmesi; yorumların duygu, niyet ve özel konu bazında çok etiketli sınıflandırılması, reklam ve spam içeriklerin elenmesi, çift dilli ve iki tonlu yanıt taslaklarının üretilmesi ile kurumsal HTML raporlama şablonunun tasarlanması.

  Bu sprintte gerçekleştirilmesi hedeflenen görevler, **toplam 8 adet** ve **toplam 24 puandır**.

* **Sprint 3 — Teslimat Hazırlığı:** Hedeflendiği şekilde tamamlanmış, düzgün şekilde çalışan ve sunulmaya hazır bir ürün.

  **Amaç:** Son kontrollerin ve deneyim iyileştirmelerinin yapılması; dokümantasyonun, teknik dosyaların, sunum dosyasının ve tanıtım videosunun hazırlanması.

  Bu sprintte gerçekleştirilmesi hedeflenen görevler, toplam **18 adet** ve **"25 puan + 48 puan" olmak üzere toplam 73 puandır**. **25 puanlık kısım**, gerçekleştirilmesi hedeflenen ana görevler olarak belirlenerek öncelenmiş, diğer **48 puanlık kısım** ise projenin gidişatına göre değerlendirilmek üzere "_EPIC 8: Ekstra Özelliklerin Eklenmesi_" şeklinde belirtilip projenin ana kapsamından ayrı tutulmuştur. Yani, _EPIC 8_ kapsamında olan görevler, proje için esas teşkil etmemektedir.

### Sprint Takvimi

<table>
  <thead>
    <tr style="background-color: #1f2325;">
      <th align="center">Durum</th>
      <th align="left">Sprint & Odak Noktası</th>
      <th align="center">Başlangıç</th>
      <th align="center">Bitiş</th>
      <th align="center">Görev Sayısı</th>
      <th align="center">İş Yükü (Puan)</th>
      <th align="left">Kapsam ve Açıklama</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center"><img src="https://img.shields.io/badge/TAMAMLANDI-brightgreen?style=flat-square" alt="Tamamlandı"></td>
      <td><b>Sprint 1</b><br><i>Temel Oluşturma</i></td>
      <td align="center">19 Haziran</td>
      <td align="center">05 Temmuz</td>
      <td align="center"><code>6 Görev</code></td>
      <td align="center"><b>20 SP</b></td>
      <td>Süreci başlatacak ilk prototipin ortaya konması ve temel altyapının kurulması.</td>
    </tr>
    <tr>
      <td align="center"><img src="https://img.shields.io/badge/TAMAMLANDI-brightgreen?style=flat-square" alt="Tamamlandı"></td>
      <td><b>Sprint 2</b><br><i>Yapay Zeka Entegrasyonu</i></td>
      <td align="center">06 Temmuz</td>
      <td align="center">19 Temmuz</td>
      <td align="center"><code>8 Görev</code></td>
      <td align="center"><b>24 SP</b></td>
      <td>Yapay zeka öğelerinin entegre edilerek prototipin akıllı ve dinamik hâle getirilmesi.</td>
    </tr>
    <tr>
      <td align="center"><img src="https://img.shields.io/badge/DEVAM_ED%C4%B0YOR-orange?style=flat-square" alt="Devam Ediyor"></td>
      <td><b>Sprint 3</b><br><i>Teslimat Hazırlığı</i></td>
      <td align="center">20 Temmuz</td>
      <td align="center">02 Ağustos</td>
      <td align="center"><code>18 Görev</code></td>
      <td align="center"><b>73 SP</b><br><small><i>(25 SP Ana + 48 SP Ekstra)</i></small></td>
      <td>Son kontroller, kullanıcı deneyimi iyileştirmeleri, dokümantasyon, sunum ve tanıtım videosu.<br>⚠️ <i>48 SP'lik kısım (EPIC 8: Ekstra Özellikler) esnek kapsamdadır.</i></td>
    </tr>
    <tr style="background-color: #f6f8fa; font-weight: bold;">
      <td align="center">📊 <b>ÖZET</b></td>
      <td><b>Tüm Süreç</b></td>
      <td align="center"><b>19 Haziran</b></td>
      <td align="center"><b>02 Ağustos</b></td>
      <td align="center"><code>32 Görev</code></td>
      <td align="center"><b>117 SP</b><br><small><i>(69 SP Ana Kapsam)</i></small></td>
      <td>YouTube içerik üreticilerinin topluluklarından gelen değerli içerik fikirlerini kaçırmamasını sağlayan akıllı bir otomasyon sistemi olan <b>Condea</b>'nın geliştirilmesi.</td>
    </tr>
  </tbody>
</table>


</details>

---

<details>
<summary>

## Sprint 1️⃣ (17 GÜN: 19 Haziran - 5 Temmuz)

</summary>

<table>
  <tr>
    <td>
      <strong>🏃 Sprint Nasıl Yönetiliyor?</strong><br><br>
      <i>Sprint 1 kapsamındaki görevler ve ilerleme durumu <b>Slack listeleri</b> üzerinden takip edilmektedir.</i>
      <br><br>
      <a href="https://yzta.slack.com/lists/T02LKGXV98C/F0BBQ5E352P">
        <img src="https://img.shields.io/badge/Sprint%201%20Panosuna%20Git-Slack-2EB67D?style=for-the-badge&logo=slack&logoColor=white">
      </a>
    </td>
  </tr>
</table>

### Backlog Düzeni ve Story Seçimleri

<table>
  <thead>
    <tr style="background-color: #1f2325;">
      <th align="center">Durum</th>
      <th align="left">Sprint & Odak Noktası</th>
      <th align="center">Başlangıç</th>
      <th align="center">Bitiş</th>
      <th align="center">Görev Sayısı</th>
      <th align="center">İş Yükü (Puan)</th>
      <th align="left">Kapsam ve Açıklama</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center"><img src="https://img.shields.io/badge/TAMAMLANDI-brightgreen?style=flat-square" alt="Tamamlandı"></td>
      <td><b>Sprint 1</b><br><i>Temel Oluşturma</i></td>
      <td align="center">19 Haziran</td>
      <td align="center">05 Temmuz</td>
      <td align="center"><code>6 Görev</code></td>
      <td align="center"><b>20 SP</b></td>
      <td>Süreci başlatacak ilk prototipin ortaya konması ve temel altyapının kurulması.</td>
    </tr>
    <tr>
    </table>

Öncelikle, ekipteki geliştiricilerin fikirleri esas alınarak, projenin hayata geçirilebilmesi için mutlaka tamamlanması gereken ana görevler ve alt görevler belirlendi. Henüz ilk sprint olması ve ekibin iş potansiyelinin tam olarak bilinememesi sebebiyle ilk sprint için yaklaşık üçte birlik bir görev yoğunluğu *(Süreç toplamda üç sprintten oluştuğu için)* mantıklı bulundu ve görevler, bu oranı karşılayacak şekilde sırasıyla eklendi. Sprint 1'de gösterilen ekip performansına bağlı olarak diğer sprintlerde görevlerin artırılmasına veya azaltılmasına karar verilebilir. İlaveten, Sprint 1 için yapılan görev planlamasının dışına çıkılarak sonraki sprintlerin görevleri erkene alınabilir. Bu sprint kapsamında, belirlenen **toplam 6 görev**in tamamlanması hedeflenmektedir. Bu görevler, **toplam 20 puan** değerindedir. 

### Daily Scrum

Ekran görüntülerine aşağıdaki butonlara tıklayarak ulaşabilirsiniz:

[![Ekran Görüntüsü 1](https://img.shields.io/badge/Ekran_Görüntüsü-1-24292E?style=for-the-badge)](ekran-goruntuleri/sprint-1/daily-scrum/Sprint-1-Daily-Scrum-(SS1).png)
[![Ekran Görüntüsü 2](https://img.shields.io/badge/Ekran_Görüntüsü-2-24292E?style=for-the-badge)](ekran-goruntuleri/sprint-1/daily-scrum/Sprint-1-Daily-Scrum-(SS2).png)
[![Ekran Görüntüsü 3](https://img.shields.io/badge/Ekran_Görüntüsü-3-24292E?style=for-the-badge)](ekran-goruntuleri/sprint-1/daily-scrum/Sprint-1-Daily-Scrum-(SS3).png)
[![Ekran Görüntüsü 4](https://img.shields.io/badge/Ekran_Görüntüsü-4-24292E?style=for-the-badge)](ekran-goruntuleri/sprint-1/daily-scrum/Sprint-1-Daily-Scrum-(SS4).png)

---

### Sprint Board Durumu
#### 1. Ekran Görüntüsü  
<img width="1600" height="730" alt="resim" src="https://github.com/user-attachments/assets/0f8fd928-7b28-4ea3-ba66-173d16ac2f1d" />

#### 2. Ekran Görüntüsü  
<img width="1601" height="727" alt="resim" src="https://github.com/user-attachments/assets/46a987d0-3be1-4654-97a7-baa43f09fe7c" />

#### 3. Ekran Görüntüsü  
<img width="1597" height="727" alt="resim" src="https://github.com/user-attachments/assets/4e71b367-6c59-41ae-94ec-2043911b62eb" />

---

### Ürün Durumu
#### 1. Ekran Görüntüsü

<img width="930" height="312" alt="resim" src="https://github.com/user-attachments/assets/9b6384b9-e47d-4b93-a573-97aed9605fdc" />

#### 2. Ekran Görüntüsü

<img width="921" height="372" alt="resim" src="https://github.com/user-attachments/assets/7b46fada-148e-4ef0-8dc5-65bf5a0f9885" />


---

### 🔎 Sprint Review

* **Sprint Hedefi:** YouTube yorumlarını otonom olarak yakalayıp Gemini ile filtrelenmiş yapay zeka yanıtları üreten çalışan bir veri hattı (MVP) kurmak.
* **Katılımcılar:** Ufuk Demir, Ezgisu Badak, Feyzanur Karatay, Furkan Çakı, Ayşe Dilara Baysal **(Tüm Scrum Takımı)**
> *Not: Bu sprint sonu değerlendirmesi, dış paydaş katılımı olmaksızın "İç Teknik Demo" olarak gerçekleştirilmiştir.*

---

* **Tamamlanan ve Demosu Yapılan İşler:**
  * [✓] YouTube *"Watch Comments*" modülü entegrasyonu (Canlı akış başarıyla izlendi).
  * [✓] *Google Sheets* üzerinden tekrar eden yorum filtresi (Duplicate Filtering testi başarıyla geçildi).
  * [✓] *Gemini* prompt mühendisliği ve 2 farklı yanıt taslağı üretimi (Çıktı kalitesi ekipçe onaylandı).
  * [✓] Operasyonel veri deposu, *Google Sheets* kurulumu (İşlenen yorumlar; ID, metin, analiz çıktısı, beğeni ve tarih ile otomatik olarak tabloya yazıldı.)
  * [✓] Kanala yanıt iletim testi ve gölge yanıt çözümü (Youtube'a yanıt gönderimi test edildi, gölge yanıt sorunu giderildi ve veri hattı uçtan uca doğrulandı.)

* **Ekip İçi Teknik Değerlendirme & Gelecek Sprint Kararları:** 
  * Gemini'ın ürettiği iki tonlu (kurumsal / samimi) yanıt şablonlarının kalitesi ekip tarafından yeterli bulundu.
  * Veri hattının kararlı çalıştığı ekip içinde demo ile doğrulandı.
  * Feature creep'i önlemek için kapsam sınırları netleştirildi.
  * Sprint 1 görevleri erken tamamlandığından Sprint 2 görevlerine erkenden başlayabilme fırsatı yakalandı.
  * Sprint 2'de, ürünün teknik açıdan tamamlanmış veya tamamlanmaya yakın hâle getirilmesi ve mümkünse, eklenebilecek ekstra özellikler için de zaman yaratılması amaçlandı.

---

### 🔄 Sprint Retrospective

#### 🟢 Ne İyi Gitti? (What went well?)
*   İlk projedeki (GoStock) teknik engeli 4. günde çok hızlı fark edip pivot (fikir değiştirme) kararı alabildik. Zaman kaybetmedik.
*   Make.com ve Gemini entegrasyonu beklediğimizden çok daha hızlı ve stabil çalıştı.
*   Ekip üyelerinin kişisel ajandalarına çok hızlı uyum sağlandı ve böylelikle, projenin zaman çizelgesi en verimli şekilde yönetildi. 
*   Takım içi yardımlaşma, özveri ve Daily Scrum disiplini yüksekti.

#### 🔴 Ne Kötü Gitti? (What went wrong?)
*   Sprint başında, ekip üyelerinin tam sayıda olmaması ve teknik bilgi yetersizlikleri sebebiyle projenin gereksinimleri anlaşılamadı, bu sebepten mecburen proje değişikliğine gidildi. Bu durum 4 gün kaybetmemize neden oldu.
*   YouTube'daki "gölge yanıt" sorunu bizi 1 gün boyunca blokladı.
*   Gemini API'ın kotasının bitmesi, hata ayıklama sürecinin beklenenden fazla zaman almasına sebep oldu.
*   Make.com kotasının bitmesi, projenin farklı bir hesaba taşınmasını zorunlu kıldı. *(Bu durumun tekrar yaşanması da muhtemel.)*

#### 🎯 Gelecek Sprint İçin Aksiyon Planları (Action Items)
*   **Aksiyon 1:** Gemini entegrasyonuyla özelleştirilebilir niyet ve kategori analizi motorunun geliştirilmesi.
*   **Aksiyon 2:** Dinamik içerik destekli, profesyonel Gmail HTML raporlama şablonlarının tasarlanması ve devreye alınması.

---

### 📝 Sprint Notları

#### 📅 Genel Bilgiler
*   **Tarih Aralığı:** 19 Haziran 2026 - 5 Temmuz 2026 (17 Gün)
*   **Sprint Hedefi:** Temel otonom veri hattının çalışır hale getirilmesi (MVP)
*   **Sprint Durumu:** Başarıyla Tamamlandı (Hatta Sprint 2 görevlerine erken başlandı)

#### 📈 Hız ve Metrikler (Velocity)
*   **Planlanan İş (Story Point / Görev Sayısı):** 6 Görev
*   **Tamamlanan İş:** 6 Görev (GoStock iptal edildikten sonra Condea kapsamında açılan tüm görevler tamamlanmıştır.)

#### 🛠️ Teknik Gelişmeler & Sürüm Notları (Release Notes)
*   **YouTube Otomasyonu:** Canlı yorum akışı Sheets'e bağlandı.
*   **Filtreleme:** `Search Rows` ile tekrar eden veri işleme hatası engellendi.
*   **Yapay Zeka:** Gemini API entegrasyonu ile otomatik duygu analizi ve yanıt taslağı kurgusu yapıldı.
*   **Veri Mimarisi:** Verilerin Sheets üzerinde ilişkisel tutulması sağlandı.

#### ⚠️ Yaşanan Değişiklikler ve Kriz Yönetimi
*   **22-23 Haziran:** GoStock projesinin zaman/imkan kısıtları nedeniyle iptal edilmesine ve yapay zeka odaklı **Condea** projesine geçilmesine oy birliğiyle karar verilmiştir. Bu stratejik pivot, projenin başarısını olumlu etkilemiştir.

#### 🎯 Sonraki Sprint (Sprint 2) Odağı
*   Gemini entegrasyonuyla özelleştirilebilir niyet ve kategori analizi motorunun geliştirilmesi.
*   Dinamik içerik destekli, profesyonel Gmail HTML raporlama şablonlarının tasarlanması ve devreye alınması.

</details>

---

<details>
<summary>

## Sprint 2️⃣ (14 GÜN: 6 Temmuz - 19 Temmuz)

</summary>

<table>
  <tr>
    <td>
      <strong>🏃 Sprint Nasıl Yönetiliyor?</strong><br><br>
      <i>Sprint 2 kapsamındaki görevler ve ilerleme durumu <b>Slack listeleri</b> üzerinden takip edilmektedir.</i>
      <br><br>
      <a href="https://yzta.slack.com/lists/T02LKGXV98C/F0BBUDXPUES">
        <img src="https://img.shields.io/badge/Sprint%202%20Panosuna%20Git-Slack-2EB67D?style=for-the-badge&logo=slack&logoColor=white">
      </a>
    </td>
  </tr>
</table>

### Backlog Düzeni ve Story Seçimleri

<table>
  <thead>
    <tr style="background-color: #1f2325;">
      <th align="center">Durum</th>
      <th align="left">Sprint & Odak Noktası</th>
      <th align="center">Başlangıç</th>
      <th align="center">Bitiş</th>
      <th align="center">Görev Sayısı</th>
      <th align="center">İş Yükü (Puan)</th>
      <th align="left">Kapsam ve Açıklama</th>
    </tr>
  </thead>
 <tr>
      <td align="center"><img src="https://img.shields.io/badge/TAMAMLANDI-brightgreen?style=flat-square" alt="Tamamlandı"></td>
      <td><b>Sprint 2</b><br><i>Yapay Zeka Entegrasyonu</i></td>
      <td align="center">06 Temmuz</td>
      <td align="center">19 Temmuz</td>
      <td align="center"><code>8 Görev</code></td>
      <td align="center"><b>24 SP</b></td>
      <td>Yapay zeka öğelerinin entegre edilerek prototipin akıllı ve dinamik hâle getirilmesi.</td>
    </tr>
</table>

Sprint 1'de hedeflenen görevlerin planlanandan erken tamamlanması, ekibin, Sprint 1 için belirlenen iş kapasitesini rahatlıkla karşılayabildiğini gösterdi. Sprint 2'de daha fazla görev eklemek yerine Sprint 1'deki yaklaşık üçte birlik puan oranını korumayı tercih ettik. Bu kararla, sürecin çok yoğun geçerek ekibin iş veriminin azalmasının engellenmesi amaçlandı. Bu sprint kapsamında, belirlenen **toplam 8 görev**in tamamlanması hedeflenmektedir. Bu görevler, **toplam 24 puan** değerindedir. 

### Daily Scrum

Ekran görüntülerine aşağıdaki butonlara tıklayarak ulaşabilirsiniz:

[![Ekran Görüntüsü 1](https://img.shields.io/badge/Ekran_Görüntüsü-1-24292E?style=for-the-badge)](ekran-goruntuleri/sprint-2/daily-scrum/Daily-Scrum-Sprint-2-(SS1).png)
[![Ekran Görüntüsü 2](https://img.shields.io/badge/Ekran_Görüntüsü-2-24292E?style=for-the-badge)](ekran-goruntuleri/sprint-2/daily-scrum/Daily-Scrum-Sprint-2-(SS2).png)
[![Ekran Görüntüsü 3](https://img.shields.io/badge/Ekran_Görüntüsü-3-24292E?style=for-the-badge)](ekran-goruntuleri/sprint-2/daily-scrum/Daily-Scrum-Sprint-2-(SS3).png)
[![Ekran Görüntüsü 4](https://img.shields.io/badge/Ekran_Görüntüsü-4-24292E?style=for-the-badge)](ekran-goruntuleri/sprint-2/daily-scrum/Daily-Scrum-Sprint-2-(SS4).png)

---

### Sprint Board Durumu
#### 1. Ekran Görüntüsü

<img width="1682" height="815" alt="resim" src="https://github.com/user-attachments/assets/760c45a4-697f-4d04-a74e-2ad147b41662" />

#### 2. Ekran Görüntüsü  

<img width="1677" height="815" alt="resim" src="https://github.com/user-attachments/assets/5b747311-5ac6-4c52-82a2-548a6a443cbf" />

#### 3. Ekran Görüntüsü  

<img width="1680" height="812" alt="resim" src="https://github.com/user-attachments/assets/f067ea34-0f5f-40bf-9377-a42942612ec2" />

---

### Ürün Durumu
#### 1. Ekran Görüntüsü

<img width="1802" height="356" alt="resim" src="https://github.com/user-attachments/assets/13efbfab-109c-45f0-9eaf-7a5920baa47d" />


#### 2. Ekran Görüntüsü

<img width="1512" height="581" alt="resim" src="https://github.com/user-attachments/assets/48e6b639-aa36-41fa-9b94-a1d0778ee7ce" />


---

### 🔎 Sprint Review

* **Sprint Hedefi:** Gemini entegrasyonuyla özelleştirilebilir niyet ve kategori analizi motoru geliştirilerek, bu analizleri dinamik içerik destekli profesyonel Gmail HTML raporlarıyla sunan bir yapı kurgulanması.
* **Katılımcılar:** Ufuk Demir, Ezgisu Badak, Feyzanur Karatay, Furkan Çakı, Ayşe Dilara Baysal **(Tüm Scrum Takımı)**
> *Not: Bu sprint sonu değerlendirmesi, dış paydaş katılımı olmaksızın "İç Teknik Demo" olarak gerçekleştirilmiştir.*

---

* **Tamamlanan ve Demosu Yapılan İşler:**
  * [✓] Duygu, niyet ve özel konu bazında çok etiketli yorum sınıflandırma (Google Sheets'teki konumları doğrulandı)
  * [✓] Spam ve reklam filtresi (Spam ve reklam içeren yorumlar raporlama tablosuna yazılmadan eleniyor)
  * [✓] Çift dilli yanıt taslakları (TR-EN)
  * [✓] Kurumsal HTML e-posta şablonu
  * [✓] Verileri filtreleyen mantıksal fonksiyonların kurulması

* **Ekip İçi Teknik Değerlendirme & Gelecek Sprint Kararları:** 
  * Çok etiketli sınıflandırmanın tek prompt'ta çözülmesi, ayrı modüllere bölmeye kıyasla ciddi operasyon (kota) tasarrufu sağladı; bu yaklaşım korunacak.
  * Parametrik yapı sayesinde ürünün başka kanallara uyarlanabilirliği doğrulandı; ürünleşme potansiyeli güçlendi.
  * Sınıflandırma çıktı kalitesi ekipçe yeterli bulundu; iki tonlu taslakların pratikte işe yaradığı görüldü.

---

### 🔄 Sprint Retrospective

**Amacı:** Ürüne değil, takımın çalışma şekline ve süreçlerine odaklanılır. "Nasıl çalıştık, neleri daha iyi yapabiliriz?" sorusuna cevap aranır. Takım içi açık ve şeffaf bir dürüstlük seansıdır.

#### 🟢 Ne İyi Gitti? (What went well?)
*   Projenin teknik tarafı ile dokümantasyon tarafının koordinasyonu hızlı şekilde sağlandı.
*   Planlanan işler erken bitince ekip boş durmak yerine kapsam dışı özellikler üretti; proaktif bir tutum sergilendi.
*   Danışmanımızın isteği üzerine, görev puanları ve backlog dağıtım mantığı gibi kısımlardaki eksikliklerimiz hızlı bir şekilde güncellenerek dokümantasyon, büyük oranda nihaî hâline getirildi.

#### 🔴 Ne Kötü Gitti? (What went wrong?)
*   Make.com senaryoları ve API anahtarları gibi ortak/gizli kaynaklara erişimin tek kişide toplanması sebebiyle ekip üyelerinin paralel çalışması zorlaştı.
*   Bazı yapılandırma kararlarının yeterince değerlendirilmeden, hızlı şekilde alınması, daha az aşamada ve daha kısa sürede gerçekleştirilebilecek bir iş akışına gereğinden fazla zaman harcanmasına neden oldu. 

#### 🎯 Gelecek Sprint İçin Aksiyon Planları (Action Items)
*   **Aksiyon 1:** Paylaşılan Make.com kotaları için kullanıp takibi yapılacak, yoğun test öncesi ekip bilgilendirilecek.
*   **Aksiyon 2:** Kritik yapılandırma kararları alındığı anda dokümana işlenecek, sprint sonuna bırakılmayacak.
*   **Aksiyon 3:** Kullanıcıların e-posta kapsamını seçebilmesi ve önceki dönemle trend karşılaştırması (↑/↓) yapabilmesi için veri işleme mantığı tamamlanacak.
*   **Aksiyon 4:** Zamanlayıcı kurulacak ve e-posta alım sıklığı _(günlük ve haftalık)_ seçilebilecek.
*   **Aksiyon 5:** Sunum, dokümantasyon, teknik dosyalar ve video hazırlanacak.

---

### 📝 Sprint Notları

**Amacı:** O sprintin tüm teknik ve idari özetidir. Projenin hafızasıdır (Archive). Dönüp bakıldığında o tarihte projenin hangi sürümde olduğu ve ne durumda olduğunu gösterir. İçinde takvim, metrikler, review ve retro özetleri bir arada bulunur.

#### 📅 Genel Bilgiler
*   **Tarih Aralığı:** 6 Temmuz 2026 - 19 Temmuz 2026 (14 Gün)
*   **Sprint Hedefi:** Gemini entegrasyonuyla özelleştirilebilir niyet ve kategori analizi motoru geliştirilerek, bu analizleri dinamik içerik destekli profesyonel Gmail HTML raporlarıyla sunan bir yapı kurgulanması.
*   **Sprint Durumu:** Başarıyla Tamamlandı (Hatta Sprint 3 görevlerine erken başlandı)

#### 📈 Hız ve Metrikler (Velocity)
*   **Planlanan İş (Story Point / Görev Sayısı):** 8 Görev
*   **Tamamlanan İş:** 8 Görev (Tamamlanması hedeflenen tüm görevler kapatılmıştır.)

#### 🛠️ Teknik Gelişmeler & Sürüm Notları (Release Notes)
*   **Çok Etiketli Sınıflandırma:** Gemini tek çağrıda duygu (Olumlu/Olumsuz/Nötr), niyet (Beğeni/Eleştiri/İçerik İsteği/Spam) ve özel konu etiketini birlikte üretecek şekilde güncellendi.
*   **Filtreleme:** Reklam ve spam içerikler ana raporlama tablosuna hiç yazılmadan eleniyor.
*   **Yanıt Taslakları:** Yorumun diline göre (TR/EN) ve iki farklı tonda (Kurumsal / Samimi) taslak üretimi devreye alındı.
*   **Parametrik Yapı:** Kanal adı, konusu ve özel konu kelimesi `Ayarlar` sekmesinden okunup prompt'a besleniyor; ürün tek kanala bağımlı olmaktan çıktı.
*   **Raporlama:** "Haftalık İçerik Önerileri" ve opsiyonel "En Beğenilen / En Ağır Eleştiriler" bölümlerini içeren kurumsal HTML e-posta şablonu tasarlandı.
*   **Analitik:** Google Sheets içinde KPI'lar ile pasta ve çubuk grafikten oluşan `Özet Panel` kuruldu.

#### ⚠️ Yaşanan Değişiklikler ve Kriz Yönetimi
*   **8-10 Temmuz:** Gemini çıktısının .JSON bloğuna sarılması *Parse JSON* hatasına yol açtı. *Parse JSON* modülü tamamen kaldırılıp `responseMimeType: application/json` ayarlanarak sorun çözüldü.
*   **13-14 Temmuz:** İki farklı Google hesabı ve iki ayrı spreadsheet üzerinde çalışıldığı fark edildi; mükerrer kayıtlar oluşmuştu. Tüm akış tek hesap ve tek veri kaynağında birleştirildi ve **"tek ortak hesap, tek veri kaynağı"** kuralı ekipçe benimsendi.
*   **16-17 Temmuz:** "Özel Konu" sütununa yanlış hücre beslendiği için etiketler bozuldu; hücre eşlemesi düzeltilerek giderildi.

#### 🎯 Sonraki Sprint (Sprint 3) Odağı
*   Zaman ayarlı (periyodik) rapor gönderim otomasyonunun kurulması.
*   Son 7 günü işleyen bağımsız raporlama senaryosunun tamamlanması.
*   Jüri sunumu için "Demo Butonu", 3 dakikalık yedek ekran kaydı ve teknik dokümantasyonun hazırlanması.
*   Veri toplama hattına müdahale edilmeden sistemin sunum için stabilize edilmesi.
*   Ana görevler tamamlandığında EPIC 8: _(Ekstra Görevler)_'in de yapılması. 

</details>

---

<details>
<summary>

## Sprint 3️⃣ (14 GÜN: 20 Temmuz - 2 Ağustos)

</summary>

<table>
  <tr>
    <td>
      <strong>🏃 Sprint Nasıl Yönetiliyor?</strong><br><br>
      <i>Sprint 3 kapsamındaki görevler ve ilerleme durumu <b>Slack listeleri</b> üzerinden takip edilmektedir.</i>
      <br><br>
      <a href="https://yzta.slack.com/lists/T02LKGXV98C/F0BBWGD7SQ2">
        <img src="https://img.shields.io/badge/Sprint%203%20Panosuna%20Git-Slack-2EB67D?style=for-the-badge&logo=slack&logoColor=white">
      </a>
    </td>
  </tr>
</table>

### Backlog Düzeni ve Story Seçimleri

*[Backlog oluşturulurken nasıl bir düzenin esas alındığı, görev dağılımlarının nasıl yapıldığı anlatılır. Örneğin, görevlerin önceliği, zorluk seviyesi vs.]*

### Daily Scrum

Ekran görüntülerine aşağıdaki butonlara tıklayarak ulaşabilirsiniz:

[![Ekran Görüntüsü 1](https://img.shields.io/badge/Ekran_Görüntüsü-1-24292E?style=for-the-badge)](ekran_goruntuleri/daily-1.png)
[![Ekran Görüntüsü 2](https://img.shields.io/badge/Ekran_Görüntüsü-2-24292E?style=for-the-badge)](ekran_goruntuleri/daily-2.png)
[![Ekran Görüntüsü 3](https://img.shields.io/badge/Ekran_Görüntüsü-3-24292E?style=for-the-badge)](ekran_goruntuleri/daily-3.png)
[![Ekran Görüntüsü 4](https://img.shields.io/badge/Ekran_Görüntüsü-4-24292E?style=for-the-badge)](ekran_goruntuleri/daily-4.png)

---

### Sprint Board Durumu
#### 1. Ekran Görüntüsü  

#### 2. Ekran Görüntüsü  

#### 3. Ekran Görüntüsü  

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

</details>

---

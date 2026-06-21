# :rocket: GoStock - Esnaflar için Yapay Zeka Destekli Akıllı Stok ve Mesajlaşma Asistanı
**Grup 4** *Yyapay Zeka ve Teknoloji Akademisi - No-Code/Low-Code Bootcamp 2026 Projesi*
---
## :busts_in_silhouette: Takım Elemanları ve Rol Dağılımı
* **John Doe:** Product Owner (Ürün Sahibi & Süreç Yönetimi)
* **Jane Doe:** Scrum Master (Scrum Süreçleri & Takım Kolaylaştırıcısı)
* **Atıl Samancıoğlu:** Team Member / Lead Developer (Sistem Mimarisi & n8n/AppSheet Geliştirici)
---
## :package: Ürün Bilgileri
### Ürün İsmi
**GoStock**
### Ürün Açıklaması
GoStock, geleneksel esnafların ve küçük işletmelerin dijitalleşmesini sağlayan; WhatsApp ve Instagram DM kanallarından gelen müşteri yoğunluğunu yapay zeka ile yönetirken arka planda No-Code entegrasyonuyla anlık stok takibi yapan akıllı bir otomasyon sistemidir.
Sistem, esnafın günlük operasyonel yükünü sıfıra indirirken, müşterilerin anlık fiyat ve stok sorularına 7/24 esnaf dilinde doğru yanıtlar üreterek satış dönüşümlerini artırır.
### Ürün Özellikleri (Features)
* **Google AppSheet Entegrasyonu:** Esnafın cep telefonundan kolayca ürün eklemesini, fiyat değiştirmesini ve hızlı stok girişi yapmasını sağlayan dinamik mobil/web panel.
* **Merkezi Veri Yönetimi (Google Sheets):** Tüm stok, ürün ve fiyat verilerinin güvenli, anlık ve maliyetsiz bir şekilde bulutta depolanması.
* **Yapay Zeka Destekli Müşteri İlişkileri (AI Agent & n8n):** Instagram DM ve WhatsApp üzerinden gelen "Ürün var mı?", "Fiyatı ne kadar?" sorularının n8n üzerinden yakalanıp, OpenAI (GPT-4o mini) entegrasyonlu AI Agent ile anlık cevaplanması.
* **Akıllı Stok Sorgulama (RAG / Tool Çağırma):** Yapay zekanın sadece metin üretmekle kalmayıp, esnafın güncel stok tablosuna (Sheets) giderek anlık veri doğrulaması yapması.
* **Kritik Stok Bildirim Sistemi:** Herhangi bir ürünün stoğu tükendiğinde veya kritik eşiğin altına düştüğünde, n8n aracılığıyla esnafa (Telegram/WhatsApp üzerinden) anlık mobil uyarı gitmesi.
### Hedef Kitle
* Yoğun müşteri mesajı alan yerel esnaflar ve KOBİ'ler
* Instagram ve WhatsApp üzerinden e-ticaret/satış yapan butikler
* Karmaşık ERP sistemlerine bütçe ayıramayan küçük işletmeler
* Müşteri ilişkilerini otomatize etmek isteyen dijital girişimciler
### :world_map: Product Backlog URL
:link: [Miro Backlog & Scrum Board](https://miro.com/your-backlog-board-link) *(Lütfen kendi Miro linkinizi ekleyin)*
---
## :date: SPRINT 1
### :dart: Backlog Düzeni ve Story Seçimleri
Backlog'umuz ilk yapılacak User Story'lere göre önceliklendirilmiştir. Sprint başına tahmin edilen Story Puanı (SP) toplam puan sınırını geçmeyecek şekilde sırasıyla seçilmiştir. Story başına çıkan tahmin puanları, toplam puanın yarısından az tutularak risk minimize edilmiştir.
Miro Board'umuzda işbölümünü netleştirmek adına:
* :large_blue_square: **Mavi Kartlar:** User Story'leri temsil etmektedir.
* :large_red_square: **Kırmızı Kartlar:** Story'lerin bölündüğü alt işleri (Task) temsil etmektedir.
### :speech_balloon: Daily Scrum (Günlük Raporlar)
* **1. GÜN (19 Haziran 2026):** Görev dağılımı ve rol tanımları üzerine görüşmelere başlandı. Karar süreçlerini hızlandırmak amacıyla tüm proje fikirlerinin kolektif bir listede birleştirilmesi kararlaştırılarak ortak bir çalışma disiplini oluşturuldu.
* **2. GÜN (20 Haziran 2026):** Proje fikirleri elendi ve GoStock konsepti üzerine odaklanıldı. Detayları konuşmak üzere sonraki toplantı saati 21 Haziran 2026 - 21:00 olarak belirlendi.
* **3. GÜN (21 Haziran 2026):** Projenin No-Code mimarisi kesinleştirildi. AppSheet, n8n ve Google Sheets entegrasyon kararları alındı. Product Backlog ve Sprint 1 planlama hazırlığına başlandı.
* **4. GÜN (22 Haziran 2026):** Google Sheets veritabanı şablonu oluşturuldu ve test verileri girildi. Önümüzde teknik bir engel bulunmuyor.
* **5. GÜN (23 Haziran 2026):** Google AppSheet arayüz tasarımlarına başlandı, esnaf veri giriş ekranları yapılandırıldı.
* **6. GÜN (24 Haziran 2026):** AppSheet ile Google Sheets arasındaki veri senkronizasyonu test edildi. Başarıyla tamamlandı.
* **7. GÜN (25 Haziran 2026):** n8n altyapısı kuruldu. Instagram Graph API Webhook bağlantıları için dökümantasyon incelendi.
* **8. GÜN (26 Haziran 2026):** n8n üzerinde test amaçlı bir Webhook tetikleyicisi oluşturuldu ve veri alma testleri yapıldı.
* **9. GÜN (27 Haziran 2026):** OpenAI API anahtarları n8n'e bağlandı. Temel düzeyde bir "Chat Trigger" akışı oluşturuldu.
* **10. GÜN (28 Haziran 2026):** AI Agent düğümünün Google Sheets veritabanını okuyabilmesi için gerekli alt yapı sorguları yazıldı.
* **11. GÜN (29 Haziran 2026):** Yapay zekaya esnaf dilinde konuşması için gerekli olan sistem promptları (System Instructions) girildi.
* **12. GÜN (30 Haziran 2026):** Esnafa gidecek olan Telegram bildirim botu n8n'e entegre edildi.
* **13. GÜN (1 Temmuz 2026):** Kritik stok kontrol algoritması n8n üzerinde test edildi; stok 0'a düştüğünde bildirim tetiklenmesi sağlandı.
* **14. GÜN (2 Temmuz 2026):** Tüm sistemlerin (AppSheet -> Sheets -> n8n -> AI -> Telegram) uçtan uca ilk entegrasyon testi yapıldı.
* **15. GÜN (3 Temmuz 2026):** Tespit edilen küçük veri formatı hataları düzeltildi, prompt optimizasyonları yapıldı.
* **16. GÜN (4 Temmuz 2026):** Sunum ve jüri demosu için video kayıt senaryoları hazırlandı.
* **17. GÜN (5 Temmuz 2026):** Sprint 1 kapanış testleri tamamlandı, MVP (Minimum Uygulanabilir Ürün) başarıyla ayağa kaldırıldı.
### :bar_chart: Sprint Board Durumu
*Buraya Miro veya Jira Sprint Board ekran görüntülerinizi ekleyin.*
![Sprint Board 1](https://via.placeholder.com/800x400.png?text=Sprint+Board+Screenshot+1)
### :iphone: Ürün Durumu (Görseller)
*Buraya AppSheet panelinizden ve AI mesajlaşma testlerinden ekran görüntüleri ekleyin.*
![AppSheet Arayüzü](https://via.placeholder.com/400x300.png?text=AppSheet+Görseli) ![AI Chat Görseli](https://via.placeholder.com/400x300.png?text=WhatsApp+AI+Mesajlaşma)
### :mag: Sprint Review (Değerlendirme)
* **Alınan Kararlar:** Müşteri sipariş geçmişinin tutulacağı gelişmiş bir ilişkisel veritabanı oluşturulması, e-posta veya harici formlarla veri toplama aşaması için ilk etapta gerekli görülmüştür. Ancak MVP aşamasında sadece stok odaklı gidildiği için form tabanlı harici bir veritabanı yapısına bu sprintte ihtiyaç kalmamıştır. Bu nedenle ilgili PBI (Product Backlog Item) kapsam genişletme amacıyla Sprint 2'ye aktarılmıştır. Çıkan MVP ürününün çalışmasında, API bağlantılarında ve testlerinde herhangi bir problem görülmemiştir. Gelecek sprint için eklenecek yeni özellikler listelenmiştir.
* **Katılımcılar:** John Doe (PO), Jane Doe (SM), Atıl Samancıoğlu (Dev)
### :arrows_counterclockwise: Sprint Retrospective (Özeleştiri ve Gelişim)
* Takım içindeki entegrasyon ve test görev dağılımlarıyla ilgili optimizasyon yapılması kararlaştırılmıştır.
* Tahmin puanları (SP) bir sonraki sprint planlama toplantısında developer geri bildirimleri doğrultusunda daha esnek olacak şekilde gözden geçirilecektir.
* n8n üzerindeki yapay zeka senaryolarının uç durum testleri (Edge Cases) için ayrılan test efor/saati artırılmalıdır.
---
## :date: SPRINT 2
### :dart: Backlog Düzeni ve Story Seçimleri
Sprint 1'den aktarılan sipariş veritabanı genişletmesi ve müşteri analitiği story'leri önceliklendirilerek backlog en tepesine alınmıştır. SP sınırlarına bağlı kalınarak task planlaması yapılmıştır.
### :speech_balloon: Daily Scrum (Günlük Raporlar)
* **18. GÜN (6 Temmuz 2026):** Sprint 2 planlama toplantısı yapıldı. Geçen sprintten aktarılan veritabanı yapısı ve müşteri analiz modülü iş bölümü yapıldı. Önümüzde bir engel bulunmuyor.
* *(Geliştirme sürecinize göre 19-31. günleri buraya ekleyebilirsiniz)*
### :bar_chart: Sprint Board Durumu
![Sprint Board 2](https://via.placeholder.com/800x400.png?text=Sprint+Board+Screenshot+2)
### :mag: Sprint Review & Retrospective
* **Review:** Geliştirilen analitik modüller test edildi. n8n üzerindeki veri akış kararlılığı onaylandı.
* **Retrospective:** Kodsuz araçların (AppSheet) sunduğu esneklik zaman yönetimimizi rahatlattı; sonraki sprintte dökümantasyona daha çok ağırlık verilecek.
---
## :date: SPRINT 3
### :dart: Backlog Düzeni ve Story Seçimleri
Final sprintinde sistem kararlılığı, canlıya alım hazırlıkları, güvenlik optimizasyonları ve jüri sunum materyallerinin hazırlanması (Pitch Deck ve Demo Videosu) story'leri seçilmiştir.
### :speech_balloon: Daily Scrum (Günlük Raporlar)
* **32. GÜN (20 Temmuz 2026):** Final sprintine başlandı. Sistem genelinde güvenlik ve API kota kontrolleri yapıldı. Sunum hazırlıkları için görev dağılımı tamamlandı.
* *(Geliştirme sürecinize göre 33-45. günleri buraya ekleyebilirsiniz)*
### :bar_chart: Sprint Board Durumu
![Sprint Board 3](https://via.placeholder.com/800x400.png?text=Sprint+Board+Screenshot+3)
### :trophy: Proje Final Durumu (Ürün Çıktısı)
GoStock projesi, YZTA Bootcamp 2026 kriterlerine tam uyumlu bir şekilde, düşük maliyetli ve yüksek yapay zeka entegrasyon yeteneğiyle başarıyla tamamlanmış ve canlı demoya hazır hale getirilmiştir.

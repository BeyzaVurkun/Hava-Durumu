# Hava Durumu
- Kullanıcı şehir ismi girerek anlık hava durumu bilgilerini görebilir ve görsel simgelerle desteklenen etkileşimli bir deneyim yaşayabilir.
- Projede kullanılan OpenWeather API gerçek hava durumu verilerini çekmektedir.
API key config.js dosyasında tutulmakta ve .gitignore ile gizlendiği için GitHub’a push edilmez. Bu sayede API anahtarı güvenli kalır.
Başka kullanıcılar projeyi indirirse kendi API key’lerini ekleyerek uygulamayı çalıştırabilir.

## Özellikler
- Kullanıcının girdiği şehir adına göre **OpenWeather API’den veri çekme**
- Hava durumu bilgilerini **kartlar halinde görsel ve metin olarak gösterme**:
  - **Şehir ve ülke kodu** (örn. `İstanbul, TR`)
  - **Sıcaklık** (örn. `25°C`)
  - **Hava durumu açıklaması** (örn. `Bulutlu`, `Parçalı Bulutlu`, `Güneşli`, `Yağmurlu`)
  - **Hava durumu simgesi** duruma göre otomatik değişir:
    - ☀️ → Güneşli
    - ⛅ → Parçalı Bulutlu
    - ☁️ → Bulutlu
    - 🌧️ → Yağmurlu
    - ⛈️ → Fırtına / Gökgürültülü
    - ❄️ → Kar yağışı
- Aynı şehir ikinci kez girildiğinde **uyarı mesajı** gösterme:  
  > “Zaten İstanbul şehrinin hava durumunu biliyorsun”

- Geçersiz şehir girildiğinde **hata mesajı** gösterme:  
  > “Lütfen geçerli bir şehir arayın”
- API verileri **Türkçe dilinde** gösteriliyor, böylece hava durumu açıklamaları kullanıcıya anlaşılır biçimde sunuluyor

## Teknolojiler
- HTML5
- CSS3
- JavaScript

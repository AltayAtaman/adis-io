# 🏖️ Tikir.io Kafe Adisyon Sistemi - Kurulum Kılavuzu

Tikir.io Cafe Adisyon Sistemi, yerel ağınızda (Wi-Fi) çalışan, garsonların mobil cihazlarından sipariş alıp mutfak/yönetim panelinden takip edebileceğiniz hafif ve güvenilir bir otomasyon sistemidir.

Sistemi bilgisayarınıza kurmak ve çalıştırmak için aşağıdaki adımları takip etmeniz yeterlidir.

---

## 💻 1. Sistem Gereksinimleri
* **İşletim Sistemi:** Windows (7, 10, 11) veya macOS.
* **Ağ Gereksinimi:** Bilgisayarınızın ve garsonların telefonlarının **aynı Wi-Fi modeme** bağlı olması gerekmektedir. (İnternet bağlantısına gerek yoktur, sadece yerel ağ yeterlidir).
* **Node.js:** Sunucunun çalışması için sistemde Node.js kurulu olmalıdır.

---

## 🚀 2. Çalıştırma Adımları

### 1. Adım: Node.js Kurulumu (İlk Seferde)
Bilgisayarınızda Node.js kurulu değilse:
1. [https://nodejs.org/](https://nodejs.org/) adresine gidin.
2. **LTS (Kararlı Versiyon)** olanı indirip kurun.
3. Kurulum tamamlandıktan sonra bilgisayarınızı yeniden başlatın.

### 2. Adım: Sistemi Başlatma
1. Klasörün içinde bulunan **`Tikir_Sistemini_Baslat.bat`** dosyasına çift tıklayın.
2. Sistem ilk kez açılıyorsa gerekli kütüphaneleri otomatik olarak indirecektir (1-2 dakika sürebilir).
3. Sunucu çalışmaya başladığında, varsayılan tarayıcınızda (Chrome, Edge vb.) otomatik olarak **Yönetici Paneli** açılacaktır.

---

## 📱 3. Garson Uygulamasını Telefonlara Kurma

1. Bilgisayarda açılan **Yönetici Paneli**ne giriş yapın (Varsayılan Yönetici PIN Kodu: `0000`).
2. Sağ taraftaki **"Günlük Özet"** alanında bulunan **QR Kodu** garsonların telefon kamerasıyla okutun.
3. Telefonunuza inen **`tikir-garson.apk`** dosyasını kurun ve açın.
4. Garson PIN kodunu girerek (örn: Ahmet Yılmaz için `1111`, Ayşe Demir için `2222`) sipariş almaya başlayın!

---

## ⚙️ 4. Yönetici Bilgileri ve Ayarlar
* **Yönetici Giriş PIN Kodu:** `0000` (Yönetici Paneli > Garson Yönetimi sekmesinden yeni personel ekleyebilir veya PIN kodlarını güncelleyebilirsiniz).
* **Menü Yönetimi:** Panelden yeni kategoriler (Sıcak İçecekler vb.) ve ürünler ekleyebilir, fiyatları güncelleyebilir veya tükenen ürünleri geçici olarak satışa kapatabilirsiniz.
* **Hesap Kapatma:** Masalar sekmesinden masaların adisyon detaylarını inceleyebilir ve müşteri ayrıldığında masayı kapatarak ödemeyi (Nakit/Kart) onaylayabilirsiniz.

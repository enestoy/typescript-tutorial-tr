class Hesap {
  //  _bakiye özel (private) bir değişken
  // Bu değişkene sınıf dışından doğrudan erişilemez
  private _bakiye: number = 0;

  //  Getter metodu — sadece okumaya izin verir
  // dışarıdan hesap.bakiye şeklinde çağrıldığında burası çalışır
  get bakiye(): number {
    // private değişkeni döndürür
    return this._bakiye;
  }

  // Setter metodu — değer atamaya izin verir
  // hesap.bakiyeDegistir = değer şeklinde kullanılır
  set bakiyeDegistir(tutar: number) {
    // eğer tutar negatif değilse, bakiye güncellenir
    if (tutar >= 0) {
      this._bakiye = tutar;
    } else {
      // negatif değer verilirse uyarı verir, atama yapmaz
      console.log("Bakiye negatif olamaz.");
    }
  }
}

// Hesap sınıfından yeni bir nesne oluşturalım:
let hesap = new Hesap();

// Setter metodu çalışır, _bakiye 1500 olarak ayarlanır
hesap.bakiyeDegistir = 1500;

// Getter metodu çağrılır ve bakiye ekrana yazdırılır
console.log(hesap.bakiye);   //  Çıktı: 1500

// Setter negatif değer geldiğinde çalışır, ancak atama yapmaz
hesap.bakiyeDegistir = -500; //  Konsola: "Bakiye negatif olamaz."

// Değer değişmedi, bakiye hala 1500
console.log(hesap.bakiye);   //  Çıktı: 1500


// derlemek için yani js dosyasını oluşturmak için terminalde şu komutu kullanabilirsiniz:
// tsc class-02.ts

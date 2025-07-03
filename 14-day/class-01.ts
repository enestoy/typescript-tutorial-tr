// Bir sınıf (class), benzer nesneleri oluşturmak için bir şablondur.
// Burada bir kişi sınıfı oluşturuluyor.

class Kisi {
  // Sınıfa ait özellikler (property): isim ve yaş
  isim: string;
  yas: number;

  // constructor: sınıf çağrıldığında ilk çalışan özel metottur.
  // Burada gelen parametreler ile sınıfın içindeki değişkenler (this.ile) dolduruluyor.
  constructor(isim: string, yas: number) {
    this.isim = isim;
    this.yas = yas;
  }

  // selamVer metodu: sınıfa ait davranıştır.
  // "this" ile sınıfın içindeki özelliklere erişilir.
  selamVer(): void {
    console.log(`Merhaba, benim adım ${this.isim} ve yaşım ${this.yas}.`);
  }
}

// Şimdi bu sınıftan bir nesne (obje) üretelim
let kisi1 = new Kisi("Enes", 25);  // new anahtar kelimesiyle sınıfı çağırıyoruz
kisi1.selamVer(); // Çıktı: Merhaba, benim adım Enes ve yaşım 25.


// Access Modifiers (Erişim Belirleyiciler) – Ogrenci Sınıfı
class Ogrenci {
  public isim: string;     // public: her yerden erişilebilir
  private not: number;     // private: sadece sınıf içinden erişilebilir
  protected okul: string;  // protected: sınıf ve alt sınıflardan erişilebilir

  constructor(isim: string, not: number, okul: string) {
    this.isim = isim;
    this.not = not;
    this.okul = okul;
  }

  // public bir metot ile private olan `not` bilgisine güvenli şekilde erişim sağlıyoruz
  public notGoster(): void {
    console.log(`${this.isim} adlı öğrencinin notu: ${this.not}`);
  }
}

// Nesne oluşturalım:
let ogr1 = new Ogrenci("Zeynep", 95, "Kırklareli Üniversitesi");

// public metot çalışır
ogr1.notGoster(); // Zeynep adlı öğrencinin notu: 95

// Aşağıdaki satırlar hata verir çünkü erişim izni yoktur:
// ogr1.not;   // HATA: private olduğu için sınıf dışından erişilemez
// ogr1.okul;  // HATA: protected olduğu için sınıf dışından erişilemez


// Kalıtım (Inheritance) – Ogretmen Sınıfı

// Ogretmen sınıfı, Kisi sınıfından türetiliyor
// extends anahtar kelimesi ile kalıtım (inheritance) yapılır
class Ogretmen extends Kisi {
  brans: string; // öğretmenin branşı (örneğin: Matematik)

  // constructor içinde hem alt sınıfa (Ogretmen) ait hem de üst sınıfa (Kisi) ait özellikler tanımlanır
  constructor(isim: string, yas: number, brans: string) {
    super(isim, yas); // super() → üst sınıfın constructor’ını çağırmak zorundayız
    this.brans = brans; // kendi sınıfına ait özellik atanır
  }

  // Ek bir metot: öğretmen ders verir
  dersVer(): void {
    console.log(`${this.isim} adlı öğretmen ${this.brans} dersi veriyor.`);
  }
}

// Ogretmen sınıfından bir nesne oluşturalım:
let ogretmen1 = new Ogretmen("Ahmet", 35, "Matematik");

// Bu nesne hem Kisi’den gelen metotları hem de Ogretmen'e ait metotları kullanabilir:
ogretmen1.selamVer(); //  Üst sınıftan: Merhaba, benim adım Ahmet ve yaşım 35.
ogretmen1.dersVer();  //  Alt sınıftan: Ahmet adlı öğretmen Matematik dersi veriyor.


// derlemek için yani js dosyasını oluşturmak için terminalde şu komutu kullanabilirsiniz:
// tsc class-01.ts

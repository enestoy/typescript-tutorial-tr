class Matematik {
  // static anahtar kelimesi: bu özellik/metot sınıfın kendisine ait,
  // yani nesne oluşturmadan doğrudan sınıf üzerinden erişilir

  // PI sayısı, Matematik sınıfına ait sabit bir özellik
  static PI: number = 3.14;

  // static metot: bir sayının karesini hesaplar
  static kare(x: number): number {
    return x * x;
  }
}

// Nesne oluşturmadan doğrudan sınıf adıyla erişim yapılır
console.log(Matematik.PI);        //  3.14

// static metodun çağrılması
console.log(Matematik.kare(4));   //  16



// ------------------------------------------------------------ //

// abstract class: soyut sınıf
// Bu sınıftan doğrudan nesne oluşturulamaz
// Ancak alt sınıflar bu sınıfı genişleterek (extend) kullanabilir

abstract class Hayvan {
  // abstract metod: gövdesi yok, alt sınıflarda mutlaka tanımlanmalı
  abstract sesCikar(): void;

  // normal metot: tüm alt sınıflar tarafından miras alınır
  yuru(): void {
    console.log("Hayvan yürüyor...");
  }
}

// Hayvan soyut sınıfını genişleten Kedi sınıfı
class Kedi extends Hayvan {
  // abstract metod burada tanımlanmak zorunda
  sesCikar(): void {
    console.log("Miyav!");
  }
}

// Soyut sınıftan nesne oluşturulamaz:
// let hayvan = new Hayvan(); //  Hata

// Alt sınıfın örneği oluşturulur:
let kedim = new Kedi();

// Soyut sınıftaki normal metot çağrılır
kedim.yuru();       //  Hayvan yürüyor...

// Alt sınıfta zorunlu olarak tanımlanan metod çağrılır
kedim.sesCikar();   //  Miyav!


// derlemek için yani js dosyasını oluşturmak için terminalde şu komutu kullanabilirsiniz:
// tsc class-03.ts


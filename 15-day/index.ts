// Generic fonksiyon tanımı
// <T> → T tipi parametre olarak verilmiştir (placeholder gibi düşün)
// Bu fonksiyon gelen değeri olduğu türde geri döner
function echo<T>(data: T): T {
  return data;
}

//  T string olur, fonksiyon string döner
console.log(echo<string>("Merhaba Generics")); // Merhaba Generics

// T number olur, fonksiyon number döner
console.log(echo<number>(42)); // 42

// T otomatik çıkarılır, dizi olarak alınır
console.log(echo([1, 2, 3])); // [1, 2, 3]



class Depo<T> {
  private icerik: T[];

  constructor() {
    this.icerik = [];
  }

  ekle(og: T): void {
    this.icerik.push(og);
  }

  getir(index: number): T {
    return this.icerik[index];
  }
}

let sayiDepo = new Depo<number>();
sayiDepo.ekle(10);
console.log(sayiDepo.getir(0)); // 10

let isimDepo = new Depo<string>();
isimDepo.ekle("Enes");
console.log(isimDepo.getir(0)); // Enes


// derlemek için yani js dosyasını oluşturmak için terminalde şu komutu kullanabilirsiniz:
// tsc index.ts

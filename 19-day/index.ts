// --------------------------
// TypeScript 5 Güncellemeleri
// --------------------------

// 1. satisfies Operatörü
// Bir objenin belirli bir tipe uyduğunu doğrular, ancak tipi değiştirmez.
// Bu sayede fazla özellik olsa bile tip kontrolü yapılır.

interface Kisi {
  isim: string;
  yas: number;
}

const kisi = {
  isim: "Enes",
  yas: 24,
  ekstra: "fazla bilgi" 
} satisfies Kisi; // kişi en az Kisi tipinde olmalı ama fazla özellik olabilir

// kisi'nin tipi Kisi değil, kendi orijinal tipi kalır.
// Fazladan özellik eklemek hata vermez.

// -------------------------------------------

// 2. Auto-accessors (Otomatik Getter ve Setter)
// Sınıf içinde "accessor" anahtar kelimesiyle otomatik getter/setter oluşturulur.

class Ogrenci {
  accessor isim: string;

  constructor(isim: string) {
    this.isim = isim;
  }
}

const ogr = new Ogrenci("Enes");
console.log(ogr.isim);  // 👉 Enes
ogr.isim = "Ali";
console.log(ogr.isim);  // 👉 Ali

// -------------------------------------------

// 3. const Type Parameters
// Generic fonksiyonlarda 'const' ile sabit türler daha iyi desteklenir.

function yazdir<const T extends string[]>(...args: T) {
  args.forEach(a => console.log(a));
}

yazdir("bir", "iki", "üç");

// -------------------------------------------

// 4. Geliştirilmiş Decorator Desteği
// TypeScript 5, ECMAScript standartlarına uygun gelişmiş decorator'lar sunar.

// Örnek decorator (basitçe fonksiyona ek açıklama ekler)
function Log(target: any, propertyKey: string) {
  console.log(`Method ${propertyKey} çağrıldı.`);
}

class Test {
  @Log
  metod() {
    console.log("metod çalıştı");
  }
}

const t = new Test();
t.metod();

// -------------------------------------------

// Özet:
// - satisfies ile tip uyumluluğu kontrolü ama tip değişmez
// - accessor ile otomatik getter/setter üretme
// - const generic parametrelerle tür sabitleme
// - ECMAScript uyumlu gelişmiş decoratorlar

// derlemek için yani js dosyasını oluşturmak için terminalde şu komutu kullanabilirsiniz:
// tsc index.ts
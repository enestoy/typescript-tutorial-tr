// TypeScript'te diziler, birden fazla aynı türden veriyi tek bir değişkende tutmak için kullanılır.

// 📌 Temel dizi tanımı (number dizisi):
let sayilar: number[] = [1, 2, 3, 4, 5];

// 📌 string dizisi
let isimler: string[] = ["Ali", "Ayşe", "Enes"];

// 📌 boolean dizisi
let durumlar: boolean[] = [true, false, true];

// ✅ Elemanlara erişim:
console.log(sayilar[0]); // 1
console.log(isimler[2]); // "Enes"

// ✅ Diziye eleman eklemek:
isimler.push("Zeynep"); // sona ekler
console.log(isimler); // ["Ali", "Ayşe", "Enes", "Zeynep"]

// ❌ Yanlış türde değer eklenirse hata olur:
sayilar.push("altı"); // ❌ string eklenemez (number dizisine)

// 📌 Alternatif dizi tanımı (generic syntax):
let notlar: Array<number> = [90, 85, 100];

// Bu iki tanım aynıdır:
// number[]   ===   Array<number>

// derlemek için yani js dosyasını oluşturmak için terminalde şu komutu kullanabilirsiniz:
// tsc index.ts

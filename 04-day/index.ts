// Temel TypeScript tipleri:
// ✅ string
// ✅ number
// ✅ boolean
// ✅ null
// ✅ undefined
// ✅ any
// ✅ unknown
// ✅ void
// ✅ array (dizi)
// ✅ tuple (sıralı değerler grubu)

// 📌 string
let isim: string = "Enes";

// 📌 number
let yas: number = 24;

// 📌 boolean
let aktif: boolean = true;

// 📌 any → her tür değeri alabilir (ama önerilmez)
let rastgele: any = "Merhaba";
rastgele = 5; // sorun olmaz, ama güvenli değildir

// 📌 unknown → bilinmeyen tip, kontrolsüz kullanımı engeller
let bilinmeyen: unknown = "test";
if (typeof bilinmeyen === "string") {
  console.log(bilinmeyen.toUpperCase());
}

// 📌 array
let sayilar: number[] = [1, 2, 3, 4];
let isimler: string[] = ["Ali", "Veli"];

// 📌 tuple → Sabit uzunlukta, farklı türde değerler
let kullanici: [string, number] = ["Enes", 24];

// 📌 void → genellikle dönüş değeri olmayan fonksiyonlarda kullanılır
function selamVer(): void {
  console.log("Merhaba!");
}

// 📌 null ve undefined
let a: null = null;
let b: undefined = undefined;

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
var isim = "Enes";
// 📌 number
var yas = 24;
// 📌 boolean
var aktif = true;
// 📌 any → her tür değeri alabilir (ama önerilmez)
var rastgele = "Merhaba";
rastgele = 5; // sorun olmaz, ama güvenli değildir
// 📌 unknown → bilinmeyen tip, kontrolsüz kullanımı engeller
var bilinmeyen = "test";
if (typeof bilinmeyen === "string") {
    console.log(bilinmeyen.toUpperCase());
}
// 📌 array
var sayilar = [1, 2, 3, 4];
var isimler = ["Ali", "Veli"];
// 📌 tuple → Sabit uzunlukta, farklı türde değerler
var kullanici = ["Enes", 24];
// 📌 void → genellikle dönüş değeri olmayan fonksiyonlarda kullanılır
function selamVer() {
    console.log("Merhaba!");
}
// 📌 null ve undefined
var a = null;
var b = undefined;

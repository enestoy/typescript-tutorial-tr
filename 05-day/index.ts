// ✅ union types → Birden fazla tipi kabul eden değişkenler
let veri: string | number;
veri = "merhaba";
veri = 42;

// ✅ literal types → Belirli sabit değerler alabilen değişkenler
let cinsiyet: "kadın" | "erkek";
cinsiyet = "erkek"; // ✅
cinsiyet = "kadın"; // ✅
// cinsiyet = "diğer"; ❌ hata

// ✅ type alias → Tip tanımlaması yapılabilir
type KullaniciID = number | string;

let id1: KullaniciID = 123;
let id2: KullaniciID = "abc-456";

// ✅ enum → Sabit değerler grubu (JavaScript’te yoktur)
enum Rol {
  Admin,
  Uye,
  Misafir,
}

let kullaniciRol: Rol = Rol.Admin; // 0 değeri atanır

// ✅ never → Asla değer dönmeyen (hata atan fonksiyonlar)
function hataVer(mesaj: string): never {
  throw new Error(mesaj);
}

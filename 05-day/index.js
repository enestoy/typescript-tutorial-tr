// ✅ union types → Birden fazla tipi kabul eden değişkenler
var veri;
veri = "merhaba";
veri = 42;
// ✅ literal types → Belirli sabit değerler alabilen değişkenler
var cinsiyet;
cinsiyet = "erkek"; // ✅
cinsiyet = "kadın"; // ✅
var id1 = 123;
var id2 = "abc-456";
// ✅ enum → Sabit değerler grubu (JavaScript’te yoktur)
var Rol;
(function (Rol) {
    Rol[Rol["Admin"] = 0] = "Admin";
    Rol[Rol["Uye"] = 1] = "Uye";
    Rol[Rol["Misafir"] = 2] = "Misafir";
})(Rol || (Rol = {}));
var kullaniciRol = Rol.Admin; // 0 değeri atanır
// ✅ never → Asla değer dönmeyen (hata atan fonksiyonlar)
function hataVer(mesaj) {
    throw new Error(mesaj);
}

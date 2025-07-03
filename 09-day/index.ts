// Enum, bir grup sabit değeri isimlendirerek tanımlamak için kullanılır.
// Kodun daha okunabilir ve yönetilebilir olmasını sağlar.

// 📌 Basit bir enum tanımı:
enum Renk {
  Kirmizi,   // 0
  Yesil,     // 1
  Mavi       // 2
}

// ✅ Enum değerini kullanma:
let favoriRenk: Renk = Renk.Yesil;
console.log(favoriRenk); // 1

// 📌 Enum’a özel değerler verilebilir:
enum Roller {
  Admin = 1,
  Editor = 2,
  Uye = 3
}

let kullaniciRolu: Roller = Roller.Admin;
console.log(kullaniciRolu); // 1

// 📌 Enum'dan string'e erişim:
console.log(Roller[2]); // "Editor"

// 📌 String Enum (TS 2.4+)
enum Yön {
  Kuzey = "Kuzey",
  Guney = "Güney",
  Dogu = "Doğu",
  Bati = "Batı"
}

let gidilecekYön: Yön = Yön.Dogu;
console.log(gidilecekYön); // "Doğu"

// derlemek için yani js dosyasını oluşturmak için terminalde şu komutu kullanabilirsiniz:
// tsc index.ts
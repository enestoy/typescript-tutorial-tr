// Union type, bir değişkenin birden fazla farklı türde olabileceğini belirtir.

// 📌 Basit bir örnek:
let veri: string | number;
veri = "Merhaba";   // ✅ string
veri = 42;          // ✅ number
// veri = true;     // ❌ boolean olamaz

// 📌 Bir fonksiyona farklı tipler gönderebilmek:
function yazdir(deger: string | number): void {
  console.log("Değer:", deger);
}

yazdir("Enes");
yazdir(100);

// 📌 Bir object union örneği:
type Admin = {
  rol: "admin";
  izinler: string[];
};

type Uye = {
  rol: "uye";
  abonelikTarihi: Date;
};

// Kullanıcı tipi admin veya üye olabilir:
type Kullanici = Admin | Uye;

let kullanici1: Kullanici = {
  rol: "admin",
  izinler: ["ekle", "sil"]
};

let kullanici2: Kullanici = {
  rol: "uye",
  abonelikTarihi: new Date("2024-01-01")
};

// ✅ TypeScript union içindeki tipe göre davranır:
function bilgiYazdir(k: Kullanici) {
  if (k.rol === "admin") {
    console.log("İzinler:", k.izinler.join(", "));
  } else {
    console.log("Abonelik tarihi:", k.abonelikTarihi.toDateString());
  }
}

// derlemek için yani js dosyasını oluşturmak için terminalde şu komutu kullanabilirsiniz:
// tsc index.ts
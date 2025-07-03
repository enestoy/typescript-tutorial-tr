// TypeScript'te objeler (nesneler), anahtar-değer çiftleri olarak tanımlanır.

// 📌 Basit bir kullanıcı objesi:
let kisi: { ad: string; yas: number; aktif: boolean } = {
  ad: "Enes",
  yas: 24,
  aktif: true,
};

// ✅ Her alanın türü bellidir:
// - ad → string
// - yas → number
// - aktif → boolean

// ❌ yanlış tür verilirse hata oluşur:
kisi.ad = 42; // ❌ Hata: ad bir string olmalı

// ✅ İsteğe bağlı (optional) alanlar için `?` kullanılır:
let uye: { ad: string; soyad?: string } = { ad: "Ayşe" };
// soyad tanımlanmasa da olur

// ✅ Readonly (değiştirilemez) alan:
let sabitVeri: { readonly id: number; ad: string } = {
  id: 1,
  ad: "Enes",
};
// sabitVeri.id = 2; // ❌ Hata: id sadece okunabilir

// 📌 Nested (iç içe) objeler:
let urun: {
  ad: string;
  fiyat: number;
  stok: { adet: number; depo: string };
} = {
  ad: "Laptop",
  fiyat: 20000,
  stok: {
    adet: 15,
    depo: "İstanbul",
  },
};

// Nested objelere erişim:
console.log(urun.stok.adet); // 15

// derlemek için yani js dosyasını oluşturmak için terminalde şu komutu kullanabilirsiniz:
// tsc index.ts
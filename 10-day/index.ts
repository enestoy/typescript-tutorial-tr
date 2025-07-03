// Tip alias, karmaşık yapıları basit bir isimle tanımlamak için kullanılır.

type Kullanici = {
  ad: string;
  yas: number;
  aktifMi: boolean;
};

// ✅ Artık Kullanici tipini her yerde kullanabiliriz:
let kisi1: Kullanici = {
  ad: "Enes",
  yas: 24,
  aktifMi: true,
};

// 📌 İsteğe bağlı alanlar:
type Kisi = {
  ad: string;
  soyad?: string; // bu alan tanımlanmasa da olur
};
// Interface de benzer şekilde nesne yapılarını tanımlar.
// OOP projelerde tercih edilir.

interface Araba {
  marka: string;
  model: string;
  yil: number;
}

// ✅ Interface kullanımı:
let arac: Araba = {
  marka: "Toyota",
  model: "Corolla",
  yil: 2020,
};

// 📌 Interface genişletme (inheritance):
interface ElektrikliAraba extends Araba {
  bataryaKapasitesi: number;
}

let tesla: ElektrikliAraba = {
  marka: "Tesla",
  model: "Model 3",
  yil: 2022,
  bataryaKapasitesi: 75,
};


// derlemek için yani js dosyasını oluşturmak için terminalde şu komutu kullanabilirsiniz:
// tsc index.ts
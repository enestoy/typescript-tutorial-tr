// -----------------------------
// 1. Partial<T> — Kısmi Güncelleme
// -----------------------------

// Kisi isimli bir interface tanımlıyoruz
interface Kisi {
  isim: string;
  yas: number;
}

// Partial<Kisi>: Kisi'nin tüm özelliklerini isteğe bağlı (optional) yapar

// guncelleKisi fonksiyonu:
// ilk parametre: güncellenecek tam Kisi objesi
// ikinci parametre: sadece güncellenmek istenen alanlar (Partial<Kisi>)
function guncelleKisi(kisi: Kisi, yenile: Partial<Kisi>): Kisi {
  // spread operatörü ile kisi'nin tüm özelliklerini kopyalar
  // yenile'deki özellikler var ise üzerine yazar
  return { ...kisi, ...yenile };
}

let kisi1: Kisi = { isim: "Enes", yas: 24 };

// sadece yas özelliğini güncelliyoruz
let kisi2 = guncelleKisi(kisi1, { yas: 25 });

console.log(kisi2); 
// Çıktı: { isim: 'Enes', yas: 25 }


// -----------------------------
// 2. Readonly<T> — Salt Okunur Tür
// -----------------------------

interface Urun {
  ad: string;
  fiyat: number;
}

// Readonly<Urun> ile urun objesi sadece okunabilir hale gelir
const urun: Readonly<Urun> = { ad: "Kalem", fiyat: 10 };

// Aşağıdaki atama hata verir, çünkü urun salt okunur
// urun.fiyat = 20; 


// -----------------------------
// 3. Pick<T, K> — Seçilen Özellikleri Almak
// -----------------------------

interface Kisi2 {
  isim: string;
  yas: number;
  sehir: string;
}

// Kisi2'den sadece "isim" ve "sehir" alanlarını içeren yeni bir tip tanımlıyoruz
type KisiAdiVeSehir = Pick<Kisi2, "isim" | "sehir">;

const kisiAdiVeSehir: KisiAdiVeSehir = {
  isim: "Enes",
  sehir: "İstanbul"
  // yas alanı yok, hata vermez çünkü sadece isim ve sehir seçildi
};


// -----------------------------
// 4. Omit<T, K> — Belirli Özellikleri Hariç Tutmak
// -----------------------------

// Kisi2'den "yas" özelliği çıkarılmış yeni tip
type KisiYasHaric = Omit<Kisi2, "yas">;

const kisiYasHaric: KisiYasHaric = {
  isim: "Enes",
  sehir: "İstanbul"
  // yas özelliği yok, hata vermez
};

// derlemek için yani js dosyasını oluşturmak için terminalde şu komutu kullanabilirsiniz:
// tsc index.ts
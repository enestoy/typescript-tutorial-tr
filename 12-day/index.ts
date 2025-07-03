// ✅ Fonksiyon tanımı: iki sayıyı alır ve toplar
// Parametrelerin türü number, dönüş türü de number olarak tanımlanmış
function topla(a: number, b: number): number {
    return a + b;
}

console.log(topla(5, 3)); // 👉 Çıktı: 8

// ❌ Hatalı kullanım (yorum satırında)
// Çünkü TypeScript a'nın number olmasını bekler, "5" string olduğu için hata verir
// topla("5", 3); 

// ✅ void türünde bir fonksiyon
// Geriye hiçbir değer dönmez, sadece ekrana yazı yazdırır
function selamVer(isim: string): void {
    console.log("Merhaba " + isim);
}

selamVer("Enes"); // 👉 Çıktı: Merhaba Enes

// ✅ İsteğe bağlı (optional) parametre kullanımı
// `soyad` parametresi tanımlanmasa da olur
function kullaniciBilgi(ad: string, soyad?: string): string {
    // Eğer soyad varsa, ad ve soyadı birleştirerek döndür
    if (soyad) {
        return `${ad} ${soyad}`;
    }
    // Eğer soyad yoksa sadece adı döndür
    return ad;
}

console.log(kullaniciBilgi("Enes"));          // 👉 Çıktı: Enes
console.log(kullaniciBilgi("Enes", "Toy"));   // 👉 Çıktı: Enes Toy

// ✅ Varsayılan parametre kullanımı (default value)
// y parametresi verilmezse otomatik olarak 1 alınır
function carp(x: number, y: number = 1): number {
    return x * y;
}

console.log(carp(5));     // 👉 Çıktı: 5 (5 * 1)
console.log(carp(5, 2));  // 👉 Çıktı: 10 (5 * 2)

// ✅ Arrow function (ok fonksiyonu) tanımı
// Bu fonksiyon iki sayıyı birbirine böler
const bol = (a: number, b: number): number => {
    return a / b;
};

console.log(bol(10, 2)); // 👉 Çıktı: 5

// ✅ Fonksiyon parametresi olarak başka bir fonksiyon kullanmak
// `islem` parametresi bir fonksiyondur ve (a, b) alarak number döndürür
function islemYap(x: number, y: number, islem: (a: number, b: number) => number): number {
    // Verilen islem fonksiyonu çağrılır ve sonucu döndürülür
    return islem(x, y);
}

// Burada işlem fonksiyonu olarak `toplama fonksiyonu` yazıyoruz: (a, b) => a + b
const sonuc = islemYap(5, 3, (a, b) => a + b);

// 👉 islemYap(5, 3, topla) gibi de yazılabilirdi
console.log(sonuc); // 👉 Çıktı: 8


// derlemek için yani js dosyasını oluşturmak için terminalde şu komutu kullanabilirsiniz:
// tsc index.ts
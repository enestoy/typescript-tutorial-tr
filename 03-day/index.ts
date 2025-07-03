// TypeScript'in en güçlü özelliklerinden biri "Statik Tip Denetimi" (Static Type Checking)'dir.
// Bu sayede hatalar kod yazılırken fark edilir.

// Örnek:
let yas: number = 25;
// yas = "yirmi beş"; ❌ Bu satır TypeScript tarafından hata verir çünkü yas bir sayı (number).

// TypeScript'te tip belirlemek için ":" iki nokta operatörü kullanılır:
let isim: string = "Enes";      // string türünde bir değişken
let aktif: boolean = true;      // boolean türünde (doğru/yanlış)
let notlar: number[] = [80, 90, 100];  // sayı dizisi

// Fonksiyonlarda da tip belirtilebilir:
function topla(x: number, y: number): number {
  return x + y;
}

// Bu fonksiyon sadece sayı alır ve sayı döndürür.
// topla("3", "4"); ❌ hata verir

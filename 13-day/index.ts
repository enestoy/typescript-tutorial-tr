// HTMLInputElement olduğunu belirtmek istiyoruz:
const input = document.querySelector("#isim") as HTMLInputElement;

input.value = "Enes"; // TS artık input.value özelliğine izin verir


let veri: unknown = "Merhaba";

// Hatalı kullanım → bilinmeyen tür
// veri.toUpperCase(); // ❌ Hata

// Doğru kullanım → tür dönüştürme ile
let mesaj = (veri as string).toUpperCase();
console.log(mesaj); // "MERHABA"


let gelenVeri: any = "Hello TypeScript";

let karakterSayisi = (gelenVeri as string).length;
console.log(karakterSayisi); // 17


function uzunlukHesapla(deger: string | number): number {
  // typeof ile kontrol etmeden direkt kullanmak hataya yol açar
  if (typeof deger === "string") {
    return deger.length;
  }

  // Cast ile sayıyı string'e çevirerek uzunluğunu alabiliriz
  return (deger as number).toString().length;
}

console.log(uzunlukHesapla("Merhaba")); // 7
console.log(uzunlukHesapla(12345));     // 5


// derlemek için yani js dosyasını oluşturmak için terminalde şu komutu kullanabilirsiniz:
// tsc index.ts
// Normalde bir değişken null veya undefined olabilir:

let isim: string | null = null; 
// 'string' veya 'null' olabilir. Null ataması yapıldı.

// Aynı şekilde undefined olabilir:
let yas: number | undefined;

yas = undefined;  // henüz değer atanmadı

// Null ve undefined türleriyle çalışırken,
// TypeScript sıkı kontrol yapar.
// Örneğin:

function yazdir(isim: string | null) {
  // isim null olabilir, bu yüzden kontrol etmek zorundayız
  if (isim !== null) {
    console.log(isim.toUpperCase());
  } else {
    console.log("İsim yok");
  }
}

yazdir("Enes"); // ENES
yazdir(null);   // İsim yok

let deger: string = null; 
//  Hata verir, çünkü string değişken null olamaz.
// Ancak şöyle olabilir:
let deger2: string | null = null; //  Doğru kullanım


// derlemek için yani js dosyasını oluşturmak için terminalde şu komutu kullanabilirsiniz:
// tsc index.ts
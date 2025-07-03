interface Araba {
  marka: string;
  model: string;
  yil: number;
}

// keyof Araba → "marka" | "model" | "yil" türü olur
type ArabaOzellikleri = keyof Araba; 

let ozellik: ArabaOzellikleri;

ozellik = "marka"; //  geçerli
ozellik = "model"; //  geçerli


// keyof ile fonksiyon örneği:
function ozellikGetir<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const araba: Araba = { marka: "BMW", model: "X5", yil: 2020 };

console.log(ozellikGetir(araba, "marka")); // BMW
console.log(ozellikGetir(araba, "yil"));   // 2020


// derlemek için yani js dosyasını oluşturmak için terminalde şu komutu kullanabilirsiniz:
// tsc index.ts

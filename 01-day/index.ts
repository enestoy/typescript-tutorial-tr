// TypeScript, JavaScript'in bir üst kümesidir.
// JavaScript'in sunduğu her şeyi sunar, ancak buna ek olarak tip sistemi (type system) ve bazı ekstra özellikler sağlar.

// TS dosyaları .ts uzantısı ile yazılır.
// Derlenerek JavaScript'e (JS) dönüştürülür.
// Bu işlem "transpile" (derleme) olarak adlandırılır.

// Örneğin bir TypeScript kodu:
let message1: string = "Merhaba TypeScript!";
console.log(message1);

// Bu kod TypeScript'te yazılmıştır. Derlendiğinde aşağıdaki JS'ye dönüşür:
var message = "Merhaba TypeScript!";
console.log(message);

// TypeScript'in amacı:
// ✅ Kodun daha okunabilir, anlaşılır ve hatasız olmasını sağlamak
// ✅ Büyük projelerde daha sağlam kodlar yazmak

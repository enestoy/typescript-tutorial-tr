// Tuple (Türkçesi: Demet), sıralı ama farklı türde veriler barındırabilen dizilerdir.

// 📌 Örnek: bir kullanıcıyı temsil eden tuple
let kullanici: [string, number, boolean] = ["Enes", 24, true];

// 📌 Sırasıyla: isim (string), yaş (number), aktif mi? (boolean)

console.log(kullanici[0]); // "Enes"
console.log(kullanici[1]); // 24
console.log(kullanici[2]); // true

// ✅ Tuple'lar sabit sırayla çalışır. Her elemanın türü bellidir.
// ❌ yanlış sıralama ya da tür hataya sebep olur:
let hatali: [string, number] = [42, "Ali"]; // ❌ Hata: sıralar yanlış

// Tuple kullanımı genelde:
// - API'den gelen sabit yapıdaki verilerde
// - React gibi kütüphanelerde [değer, setFonksiyonu] formatında kullanılır

// 📌 Örnek: Koordinat (latitude, longitude)
let koordinat: [number, number] = [41.4, 27.3];

// derlemek için yani js dosyasını oluşturmak için terminalde şu komutu kullanabilirsiniz:
// tsc index.ts

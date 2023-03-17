// // import sum from 

// // const helo = require("./penjumlahan")

const {sum, sum2} = require("./penjumlahan");
const {kurang, kurangi2} = require("./pengurangan");
const {kali, kali2} = require("./perkalian");
const {bagi, bagi2} = require("./pembagian");
const {quantitas} = require("./quantitas");

// console.log(sum2(10, 300))
const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// // 1 hasil tambah inputan user (done)
rl.question('angka pertama yang mau dijumlahkan? ', (angka1) => {
    rl.question('angka pertama yang mau dijumlahkan? ', (angka2) => {
    const hasil = sum(parseInt(angka1), parseInt(angka2));
    console.log(hasil);
    console.log(`hasil dari penjumlahan ${angka1} and ${angka2} adalah ${hasil}!`);

  rl.close();
    })
});

// // 2 hasil kurang inputan user
rl.question('angka pertama yang mau dikurangkan ', (angkaa1) => {
    rl.question('angka kedua yang mau dikurangkan ', (angkaa2) => {
    const hasill = kurang(parseInt(angkaa1), parseInt(angkaa2));
        console.log(hasill);
        console.log(`hasil dari pengurangan  ${angkaa1} and angka ${angkaa2} adalah ${hasill}!`);
    rl.close();
    })
  });

// // 3 hasil kali inputan user
rl.question('angka pertama yang mau dikalikan ', (angkaa1) => {
    rl.question('angka kedua yang mau dikalikan ', (angkaa2) => {
    const hasill = kali(parseInt(angkaa1), parseInt(angkaa2));
        console.log(hasill);
        console.log(`hasil dari perkalian  ${angkaa1} and angka ${angkaa2} adalah ${hasill}!`);
    rl.close();
    })
  });

// // 4 hasil bagi inputan user
rl.question('angka pertama yang mau dibagi ', (angkaa1) => {
    rl.question('angka kedua yang mau dibagi ', (angkaa2) => {
    const hasill = bagi(parseInt(angkaa1), parseInt(angkaa2));
        console.log(hasill);
        console.log(`hasil dari pembagian  ${angkaa1} and angka ${angkaa2} adalah ${hasill}!`);
    rl.close();
    })
  });

// // 5 hasil total harga kali quantitas barang
rl.question('Masukkan harga pertama ', (harga1) => {
    rl.question('Masukkan harga kedua ', (harga2) => {
        rl.question('Masukkan kuantitas barang ', (kuantitas) => {
    const result5 = quantitas(parseInt(harga1), parseInt(harga2) , parseInt(kuantitas));
        console.log(result5);
        console.log(`Harga ${harga1} and Harga ${harga2} dijumlahkan , lalu dikali dengan ${kuantitas} hasilnya adalah ${result5}!`);
    rl.close();
    })
})
  });
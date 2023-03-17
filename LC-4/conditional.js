// const levelCharacter = 12

// // ---kalau level lebih dr 10, maka boleh lanjut ke babak selanjutnya
// if(levelCharacter > 10){
//     console.log('lanjut babak selanjutnya');
// }

// // -----boolean ( true dan false) < ini buat int >
// console.log(levelCharacter > 10);
// console.log(levelCharacter < 10);
// console.log(levelCharacter >= 10);
// console.log(levelCharacter <= 10);

// // ----comparison operator < ini buat string >
// // ----apakah a sama dengan b?
// console.log('a' === 'b');
// // ----apakah a tidak sama dengan b?
// console.log('a' !== 'b');

// const fsw3Students =[
//     {
//             name : "Brahmasta",
//             age : 21,
//             status : "single",
//             favouriteFruit : "melon"
//     },
//     {
//             name : "Dza",
//             age : 22,
//             status : "double",
//             favouriteFruit : "apple"
//     },
//     {
//             name : "Kenny",
//             age : 15,
//             status : "married",
//             favouriteFruit : "melon"
//     },
//     {
//             name : "Stipe",
//             age : 21,
//             status : "single",
//             favouriteFruit : "apple"
//     },
//     {
//             name : "Danar",
//             age : 20,
//             status : "married",
//             favouriteFruit : "apple"
//     },
//     {
//             name : "Very",
//             age : 40,
//             status : "single",
//             favouriteFruit : "apple"
//     },
//     {
//             name : "Rima",
//             age : 40,
//             status : "married",
//             favouriteFruit : "apple"
//     },
// ]

// for (let i=0; i < fsw3Students.length; i++) {
//     let arr = []
//     // display student yang suka apple
//     if (fsw3Students[i].favoriteFruit === 'apple') {
//         arr.push(fsw3Students[i])
//         console.log(fsw3Students[i].name)
//     }
// }
//     console.log(arr)
//     // apakah banyak yang suka apple
//     // arr.length -> ambil berapa banyaknya
//     if (arr.length > 2) {
//         console.log(`banyak kok, ada student suka apple sebanyak ${arr.length}`)
//     } 
//     else {
//         console.log(`ga banyak kok, ada student suka apple sebanyak ${arr.length}`)
//     }

// // ----perbedaan == | ===
// // ----integer
// let a = 1
// // ----string
// let b = '1'

// console.log(a == b)
// // ----pakai ini klau pakai beda type data maka akurasi/validasi nya semkain kuat
// console.log(a === b)

const fsw3Student = [
        {
            name : "Brahmasta",
            age : 21,
            status : "single",
            favouriteFruit : "melon"
        },
        {
            name : "Dza",
            age : 22,
            status : "double",
            favouriteFruit : "apple"
        },
        {
            name : "Kenny",
            age : 15,
            status : "married",
            favouriteFruit : "melon"
        },
        {
            name : "Stipe",
            age : 21,
            status : "single",
            favouriteFruit : "apple"
        },
        {
            name : "Danar",
            age : 20,
            status : "married",
            favouriteFruit : "apple"
        },
        {
            name : "Very",
            age : 40,
            status : "single",
            favouriteFruit : "apple"
        },
        {
            name : "Rima",
            age : 40,
            status : "married",
            favouriteFruit : "apple"
        },
]


let arr = []

for(let i = 0; i < fsw3Student.length; i++){
    
    //student yang suka apple
    if (fsw3Student[i].favouriteFruit === "apple"){
        arr.push(fsw3Student[i])
        // console.log(fsw3Student[i].name);
    }
}

    console.table(arr);
    // berapa banyak data diatas yg suka apple
    //apakah banyak yang suka apple
    if (arr.length > 2) {
        console.log(`banyak kok , yag suka apple ada = ${arr.length}`);
    } else {
        console.log(`ga banyak kok , yag suka apple  = ${arr.length}`);
    }

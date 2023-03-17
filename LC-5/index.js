    // array number
    // let arr = [1,2,3,4,5,6,7]
    // console.log(`panjang index dari array ini adalah ${arr.length}`);
    // console.log(`Isi dari array ini adalah ${arr}`);

  // Object
  // let obj = {
  //   name: 'Imam',
  //   age: 22,
  //   city: 'Bandung'
  // }

  // console.log(obj);

  // Array of Object
  let arrObj = [
    {
      name: 'Imam',
      age: 22,
      city: 'Bandung'
    },
    {
      name: 'Ferdy',
      age: 18,
      city: 'Mars',
      hobby: [
        'futsal',
        'anime',
        'belajar'
      ]
    },
    {
      name: 'Fauzi',
      age: 16,
      city: 'Pluto'
    }
  ]

// Memanggil umur dari index kedua 
// console.log(arrObj[2].age);

// Memanggil hobby kedua dari index kedua arrObj
console.log(arrObj[1].hobby[0]);
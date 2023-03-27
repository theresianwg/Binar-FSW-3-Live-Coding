// express memudahkan server

// import / panggil package yg kita mau pakai pada aplikasi kita
const express = require('express');
const fs = require("fs");
const app = express();
const PORT = 3000;

// middleware
app.use(express.json());

// built in function di node js(?)
// proses baca file json nya dengan FS module, nah dibantu dengan JSON.parse
const persons = JSON.parse(fs.readFileSync(`${__dirname}/person.json`))

// url utamna dari app
// req = request
// res = response

// get post http method
// "/" = URL
app.get('/', (req, res) => {
    res.send('Hello FSW 3 luar biasa dehh !! dari server niih')
})

app.post('/', (req, res) => {
    res.send('Kita bisa ngelakuin post niii widiii kerenn')
})

app.get('/person', (req, res) => {
    res.status(200).json({
        status: "success",
        data: {
            persons: persons
        }
    })
})

// get person  by id (data satuan)
app.get('/person/:id', (req, res) => {
    // console.log(req)
    // console.log(req.params);

    const id = req.params.id * 1;
    const person = persons.find(el => el.id === id);

    res.status(200).json({
        status: "success",
        data: {
            person
        }
    })
})

// HTTP method PUT = edit existing data
app.put('/person/:id', (req, res)=> {
    const id = req.params.id * 1;
    const person = persons.find(el => el.id === id);

    res.status(200).json({
        status: "success",
        message: `data dari id ${id} berhasil berubah`
    })
})

// HTTP method DELETE = delete existing data
app.delete('/person/:id', (req, res)=> {
    const id = req.params.id * 1;
    
    const index = persons.findIndex(element => element.id === id);
    const person = persons.find(el => el.id === id);

    // validasi
    if (!index) {
        res.status(400).json({
            status: "failed",
            message: `karena person dengan id ${id} tersebut tidak ada`
        })
    }

    console.log(index)
    if (index !== -1) {
        persons.splice(index, 1);
    }

    fs.writeFile(
        `${__dirname}/person.json`,
        JSON.stringify(persons),
        errr => {
            res.status(200).json({
                status: "success",
                message: `data dari id ${id} berhasil berubah`
            })
        }
    )
})

app.post('/person', (req, res) => {

    console.log(persons.length - 1)
    // const newId = persons[persons.length - 1].id + 1;
    const newId = persons.length - 1 + 10;
    const newPerson = Object.assign({ id: newId }, req.body)

    // validasi kalau namanya ga ada , maka ga bisa create data baru
    const personName = persons.find(el => el.name === req.body.name);

    const cukupUmur = req.body.age < 20

    // validasi
    if (personName) {
        res.status(400).json({
            status: "failed",
            message: `name ${req.body.name} already exist`
        })
    }
 
    else if (cukupUmur){
        res.status(400).json({
            status: "failed",
            message: `umur ${req.body.name} adalah ${req.body.age} tahun, sehingga belum cukup`
        })
    }
    persons.push(newPerson);
    fs.writeFile(
        `${__dirname}/person.json`,
        JSON.stringify(persons),
        errr => {
            res.status(201).json({
                status: 'success',
                data: {
                    person: newPerson
                }
            })
        }
    )
})

// memulai http server 
app.listen(PORT, () => {
    console.log(`App running on localhost: ${PORT}`)
})
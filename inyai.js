const express = require("express");
const multer = require("multer");
const app = express();
const mysql = require("mysql2/promise");
const upload = require("./img")
const fs = require('fs')

app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

let dbConn = mysql.createConnection({
    host: '34.87.51.133',
    user: 'gosoft_rookie',
    password: 'GosoftRookie',
    database: 'store-platform',
    port: 3306
})
app.use('/api/add',upload.single('file'))

app.get('/',(req,res)=>{
    res.sendFile('index.html')
})

app.get("/api", async (req, res) => {
    const conection = await dbConn
    const rows = await conection.query('select * from ads')
    res.send(rows[0])
})

app.post("/api/add",  async (req, res) => {
    const conection = await dbConn
    console.log(req.body);
    console.log(req.file);
   
    let AdsName = req.body.name;
    let Enable = req.body.ko;
    
    if (!AdsName.length) {
        return res
        .status(400)
        .send({ message: "did't have name" })
    }

    if (Enable == -1) {
        return res
        .status(400)
        .send({ message: "did't have Bit" })
    }
    if(!req.file) return res.send('kuy')
    let AdsFliename = req.file.originalname;

    await conection.query(`INSERT INTO ads (  adsName, adsFliename, enable) values ('${AdsName}','${AdsFliename}',${Enable})`)
    res.status(200).send('<h1>SUCCESS</h1>');
}
)

// function myFunction() {
//   alert("Put your information!");
// }


// app.delete("/api", async (req, res) => {
//     const conection = await dbConn
//     const rows = await conection.query('')
//     res.status(204).send(rows);
// })

app.listen(3000, () => {
    console.log("Sever is running")
})
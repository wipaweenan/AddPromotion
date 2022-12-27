const express = require("express"); // เรียกเซิฟเวอร์
const multer = require("multer"); // การบันทึกข้อมูล
const mysql = require("mysql2/promise");
const upload = require("./img")
const fs = require('fs')

const app = express();



app.use(express.static('public')) // user เห็นข้อมูลในต่างๆใน public
app.use(express.json()); 
app.use(express.urlencoded({
    extended: true
}))

let dbConn = mysql.createConnection({
    host: '34.87.51.133',
    user: 'gosoft_rookie',
    password: 'GosoftRookie',
    database: 'store-platform',
    port: 3306
})
app.use('/api/add', upload.single('file'))

// c

app.get("/api", async (req, res) => {
    const conection = await dbConn
    const rows = await conection.query('select * from ads')
    res.send(rows[0])
})

app.post("/api/add", async (req, res) => {
    const conection = await dbConn
    console.log(req.body);
    console.log(req.file);

    let AdsName = req.body.adsName; // req เรียกรับข้อมูล
    let Enable = req.body.enable;
    let AdsFliename = req.file.originalname;

    await conection.query(`INSERT INTO ads (  adsName, adsFliename, enable) values ('${AdsName}','${AdsFliename}',${Enable})`)
    res.status(200).send({
        isSuccess: true,
        message: "เพิ่มข้อมูลสำเร็จ"
    });
})

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
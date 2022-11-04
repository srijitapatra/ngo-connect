const express = require("express");
const bodyParser = require("body-parser");
const sqlite3 = require('sqlite3').verbose();
const cors = require("cors");
var multer = require('multer');
var upload = multer();

let db = new sqlite3.Database('./db/ngo.db');
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.use(upload.array());

db.run("create table IF NOT EXISTS ngo_details (name VARCHAR(20), reg_no varchar(16),owner varchar(20), phno varchar(10), addr varchar(40), email VARCHAR(20), password varchar(20));", 
(err) => {
    if(err)
    console.log(err)
});

app.post("/ngo-registration", function(req, res) {
    const data = req.body;
    console.log(data.regNumber);
    const string = `INSERT INTO ngo_details VALUES ("${data.name}", "${data.regNumber}","${data.owner}", "${data.phone}","${data.location}","${data.email}","${data.password}");`
    db.run(string, (err)=> {
        if(err)
    console.log(err)
    });

    res.send("data received");
});
// db.close();
app.listen(3000,function(req,res){
    console.log("Port 3000");
});
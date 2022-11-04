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

// app.get("/", (req, res) => {
//     res.send("Hello world")
// })

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

app.post('/ngo-login', function(req, res) {
    const data = req.body;
    console.log(data);
    const queryString = `SELECT name, password from ngo_details where name= '${data.username}';`

    let username = ""
    let password = ""
    db.get(queryString, [], (err, row) => {
        if(err) {
            console.log(err)
            res.send(err)
        } else {
            if(row){
                console.log(row);
                username = row.name;
                password = row.password;
                if(data.username === username && data.password === password) {
                    res.send("Successfully logged in");
                }
                else {
                    res.send("Incorrect password");
                }
            } else {
                res.send("User doesnot exist");
            }
           
        }
        
    })

})
// db.close();
app.listen(3000,function(req,res){
    console.log("Server running on Port 3000...");
});
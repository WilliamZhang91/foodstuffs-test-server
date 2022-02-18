const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql2");
const port = 4000;
const product = require("./routes/product");
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});

db.connect(function (err) {
    if (err) {
        console.log(err) 
    } else {
        console.log("connected to db")
    }
});

app.use("/product", product);

app.listen(process.env.PORT)
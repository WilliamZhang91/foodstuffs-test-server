const router = require("express").Router();
const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});

router.get(`/all`, (req, res) => {
    db.query(`SELECT * From products`, (err, result) => {
        res.send(result)
    });
});

module.exports = router



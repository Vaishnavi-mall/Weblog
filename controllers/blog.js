const express = require('express')
const app = express()

//Database Connection
const mysql = require('mysql')
const db = mysql.createConnection({
    host: 'localhost',
    user: 'Vaishnavi@19',
    password: 'Vaishnavi@19',
    database: 'weblog',
    port: '3306'
})
db.connect((error) => {
    if (!error) {
        console.log("Connnection Established")
    } else {
        console.log("Connection failed")
    }
})
exports.create = (req, res) => {
    const { title, shortdescription, content, category } = req.body;
    db.query('INSERT into blog SET ?', { title: title, shortdescription: shortdescription, content: content, category: category }, (error, results) => {
        if (error) {
            console.log(error)
        } else {
            const path = require('path');
            const dirPath = path.join(__dirname, '../views/index.html');
            res.sendFile(dirPath);
        }
    })
}


exports.list = (req, res) => {
    const { email, password } = req.body;
    db.query('SELECT * FROM blog', (error, results, fields) => {
        if (error) {
            console.log(error)
        }
        if (results.length > 0) {
            const path = require('path');
            const dirPath = path.join(__dirname, '../views/index.html');
            res.sendFile(dirPath);
        } else {
            const path = require('path');
            const dirPath = path.join(__dirname, '../views/index.html');
            res.sendFile(dirPath);
        }

    })
}
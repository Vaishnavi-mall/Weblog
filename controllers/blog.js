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
    const { title, shortdescription, content, category, image } = req.body;
    db.query('INSERT into blog SET ?', { title: title, shortdescription: shortdescription, content: content, category: category, image: image }, (error, results) => {
        if (error) {
            console.log(error)
        } else {
            res.render('index.ejs');
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
            res.render('blogs.ejs', { blogs: results });

        } else {
            res.render('index.ejs');
        }

    })
}

exports.detail = (req, res) => {
    console.log("Hello")
    const id = req.params.id;
    db.query('SELECT * FROM blog WHERE id=?', [id], (error, results, fields) => {
        console.log("Hello")
        if (error) {
            console.log(error)
        }
        if (results.length > 0) {
            res.render('blog.ejs', { blogs: results });

        } else {
            res.render('index.ejs');
        }

    })
}
//Imports
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


//Static files
app.use('/', require('./static/staticExport'))
    //Routes  
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));
app.use('/blog', require('./routes/blog'));

//Parse URL-encoded bosies as sent by HTNL forms
app.use(express.urlencoded({ extended: false }));
//Parse JSOn bodies as sent by API clients
app.use(express.json());


//Listen on port
const port = 3000
app.listen(port, () => console.info(`Listening on port ${port}`))
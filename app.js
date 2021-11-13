//Imports
const express = require('express')
const app = express()
const port = 3000


//Static files 
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'puclic/css'))
app.use('/js', express.static(__dirname + 'puclic/js'))
app.use('/img', express.static(__dirname + 'puclic/img'))

//Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})
app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/views/signup.html')
})
app.get('/login', (req, res) => {
        res.sendFile(__dirname + '/views/login.html')
    })
    //Listen on port
app.listen(port, () => console.info(`Listening on port ${port}`))
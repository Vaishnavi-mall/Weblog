//Static files
const express = require('express')
const app = express()

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'puclic/css'))
app.use('/js', express.static(__dirname + 'puclic/js'))
app.use('/img', express.static(__dirname + 'puclic/img'))

module.exports = app;
const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    console.log(req.user.name)
    const dirPath = path.join(__dirname, '../views/index.html');
    res.sendFile(dirPath);
})

router.get('/signup', (req, res) => {
    const dirPath = path.join(__dirname, '../views/signup.html');
    res.sendFile(dirPath);
})


router.get('/login', (req, res) => {
    const dirPath = path.join(__dirname, '../views/login.html');
    res.sendFile(dirPath);
})

router.get('/createblog', (req, res) => {
    const dirPath = path.join(__dirname, '../views/createblog.html');
    res.sendFile(dirPath);
})

module.exports = router;
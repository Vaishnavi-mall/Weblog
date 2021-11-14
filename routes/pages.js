const express = require('express');
const router = express.Router();
const path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');

router.get('/', (req, res) => {
    res.render('index.ejs');
})

router.get('/signup', (req, res) => {
    res.render('signup.ejs');

})


router.get('/login', (req, res) => {
    res.render('login.ejs');
})

router.get('/createblog', (req, res) => {
    res.render('createblog.ejs');
})
router.get('/blogs', (req, res) => {
    res.render('blogs.ejs');
})

module.exports = router;
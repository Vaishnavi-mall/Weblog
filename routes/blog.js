const express = require('express');
const blogController = require('../controllers/blog')
const router = express.Router();


router.use(express.urlencoded({ extended: false }));
router.use(express.json());

router.post('/create', blogController.create)
router.get('/list', blogController.list)
router.get('/detail/:id', blogController.detail)

module.exports = router;
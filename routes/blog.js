const express = require('express');
const blogController = require('../controllers/blog')
const router = express.Router();


router.use(express.urlencoded({ extended: false }));
router.use(express.json());

router.post('/create', blogController.create)
router.post('/list', blogController.list)

module.exports = router;
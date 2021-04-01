const express = require('express');
const router = express.Router();

const bookController = require('../controllers/book.controller');

router.route('/').get(bookController.get);

router.route('/book')
    .get((req, res) => {
        res.render('book');
    })
    .post(bookController.create);

module.exports = router;
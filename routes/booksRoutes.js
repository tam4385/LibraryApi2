const express = require('express');
const router = express.Router();

const validation = require('../validation/bookValidation');

const booksController = require('../controllers/booksController');

router.get('/', booksController.getAllBooks);

router.get('/:bookId', booksController.getBook);

router.post('/', booksController.createBook);

router.put('/:bookId', booksController.updateBook);

router.delete('/:bookId', booksController.deleteBook);

module.exports = router;
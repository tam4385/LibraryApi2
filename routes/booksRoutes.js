const express = require('express');
const router = express.Router();

const validation = require('../validation/bookValidation');

const booksController = require('../controllers/booksController');

router.get('/', booksController.getAllBooks);

router.post('/', booksController.createBook);

router.put('/:book', validation.updateValidation, booksController.updateBook);

router.delete('/:bookId', booksController.deleteBook);

module.exports = router;
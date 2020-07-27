const Book = require('../models/Books');

const asyncHandler = require('../middleware/asyncHandler');

// CREATE BOOK
exports.createBook = asyncHandler(async(req, res) => {
  const book = await Book.create(req.body);
  if (!book) {
    res.status(400).json({ success: false, data: {} });
  };

  res.status(201).json({ success: true, count: books.length, data: book });
});

// GET ALL BOOKS
exports.getAllBooks = asyncHandler(async(req, res) => {
  const books = await Book.find(req.params.id);

  res.status(201).json({ success: true, data: books });
});
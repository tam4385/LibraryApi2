const Book = require('../models/Books');

const asyncHandler = require('../middleware/asyncHandler');

// CREATE BOOK
exports.createBook = asyncHandler(async(req, res) => {
  const book = await Book.create(req.body);

  return res.header("Access-Control-Allow-Origin", "*").status(201).json({ success: true, data: book });
});

// GET ALL BOOKS
exports.getAllBooks = asyncHandler(async(req, res) => {
  const books = await Book.find();

  res.status(201).json({ success: true, data: books });
});
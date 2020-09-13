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

  res.status(200).json({ success: true, data: books });
});

// UPDATE BOOK
exports.updateBook = asyncHandler(async(req, res) => {
  console.log('route')
  let book = await Book.findById(req.params.bookId);
  const bookFields = req.body;

  if (!book) {
    res.status(400).json({ success: false, msg: 'Book not found' });
  };

  await Book.findByIdAndUpdate(req.params.bookId, bookFields);
  res.status(201).json({ success: true });
});

// DELETE BOOK

exports.deleteBook = asyncHandler(async(req, res) => {
  await Book.findByIdAndDelete(req.params.bookId);

  res.status(201).json({ success: true, data: {} });
});
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
  let book = await Book.findById(req.params.book);
  const bookFields = req.body;

  if (!book) {
    console.log('No book found');
    res.status(400).json({ success: false, msg: 'Book not found' });
  };

  book = await Book.findByIdAndUpdate(req.params.book, bookFields);

});

// DELETE BOOK

exports.deleteBook = asyncHandler(async(req, res) => {
  console.log('in controller')
  await Book.findByIdAndDelete(req.params.bookId);

  res.status(201).json({ success: true, data: {} })
});
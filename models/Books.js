const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Please enter a title for your book'],
        unique: true
    },
    author: {
        type: String,
        required: [true, 'Please enter an author for your book']
    },
    genre: {
        type: String,
        required: [true, 'Please enter a genre for your book']
    },
    format: {
        type: String,
        required: [true, 'Please enter a format for your book']
    },
    releaseDate: {
        type: String,
        required: [true, 'Please enter a release date for your book']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
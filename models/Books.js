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
    read: {
        type: String,
        default: 'false'   
    },
    comments: {
        type: String
    },
    rating: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Books = mongoose.model('Books', bookSchema);

module.exports = Books;
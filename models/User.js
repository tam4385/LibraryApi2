const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    required: true,
    type: String
  },
  email: {
    unique: true,
    required: true,
    type: String
  },
  password: {
    required: true,
    minlength: 6
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now()
  }

});

const User = mongoose.model('user', bookSchema);

module.exports = User;
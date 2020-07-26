const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv').config({ path: './config/.env' });

const books = require('./routes/books');

const app = express();

app.use(express.json());

app.use('/books', books);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${process.env.PORT} in the ${process.env.NODE_ENV} environment`));
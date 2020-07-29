const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv').config({ path: './config/.env' });
const cors = require('cors');

const books = require('./routes/booksRoutes');

const app = express();

// Connection to DB
const connectDB = require('./config/connectDB');
connectDB();

app.use(express.json());
app.use(cors());
// Morgan console
app.use(morgan('dev'));

// Routes 
app.use('/books', books);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${process.env.PORT} in the ${process.env.NODE_ENV} environment`));
const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv').config({ path: './config/.env' });
const cors = require('cors');

const books = require('./routes/booksRoutes');

const app = express();

app.use(express.json({ limit: '50mb', extended: true }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Connection to DB
const connectDB = require('./config/connectDB');
connectDB();

app.use(cors());

// Morgan console
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

// Routes 
app.use('/books', books);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${process.env.PORT} in the ${process.env.NODE_ENV} environment`));
const express = require('express');

const BookController = require('./controllers/book.controller');

const app = express();

app.use(express.json());

app.get('/books', BookController.getAll);

module.exports = app;
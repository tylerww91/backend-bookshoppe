const { Router } = require('express');
const Book = require('../models/Book.js');

module.exports = Router()
  .get('/', async (req, res) => {
    const books = await Book.getAll();
    res.json(books);
  })
  .get('/:id', async (req, res) => {
    const book = await Book.getById(req.params.id);
    // console.log(book);
    const filtered = {
      title: book.title,
      released: book.released,
      authors: book.authors.map(({ id, name }) => ({ id, name })),
    };
    console.log(filtered);
    res.json(filtered);
  });

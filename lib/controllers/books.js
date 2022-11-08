const { Router } = require('express');
const Book = require('../models/Book.js');

module.exports = Router().get('/', async (req, res) => {
  const books = await Book.getAll();
  res.json(books);
});

//   // .get('/:id' async (req, res) => {
//   // const books = await Book.getById(req.params.id);

// })

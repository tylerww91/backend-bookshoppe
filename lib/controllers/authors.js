const { Router } = require('express');
const Author = require('../models/Author.js');

module.exports = Router()
  .get('/', async (req, res) => {
    const authors = await Author.getAll();
    res.json(authors);
  })
  .get('/:id', async (req, res) => {
    const author = await Author.getById(req.params.id);
    const filtered = {
      name: author.name,
      date_of_birth: author.date_of_birth,
      place_of_birth: author.place_of_birth,
      books: author.books.map(({ id, title, released }) => ({
        id,
        title,
        released,
      })),
    };
    res.json(filtered);
  });

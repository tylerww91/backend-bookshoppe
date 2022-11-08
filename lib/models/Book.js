const pool = require('../utils/pool.js');

module.exports = class Book {
  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.released = row.released;
  }

  static async getAll() {
    const { rows } = await pool.query(
      `
        SELECT * from books
      `
    );
    return rows.map((bookRow) => new Book(bookRow));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
      SELECT books.id, books.title,
      coalesce(
        json_agg(to_jsonb(authors))
        filter (WHERE authors.id IS NOT NULL), '[]') as authors
      from books left join books_authors
        on books.id = books_authors.book_id
      left join authors on authors.id = books_authors.author_id
      group by books.id
      `,
      [id]
    );
    return new Book(rows[0]);
  }
};

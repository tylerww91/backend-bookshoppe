const pool = require('../utils/pool.js');

module.exports = class Author {
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.date_of_birth = row.date_of_birth;
    this.place_of_birth = row.place_of_birth;
    this.books = row.books;
  }

  static async getAll() {
    const { rows } = await pool.query(
      `
          SELECT id, name FROM authors
        `
    );
    return rows.map((authorRow) => new Author(authorRow));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
      SELECT authors.*,
      coalesce(
        json_agg(to_jsonb(books)) filter (WHERE books.id IS NOT NULL), '[]') as books
      FROM
        authors
        left join books_authors on authors.id = books_authors.author_id
        left join books on books.id = books_authors.book_id
      WHERE
        authors.id = $1
      GROUP BY
        authors.id
      `,
      [id]
    );
    return new Author(rows[0]);
  }
};

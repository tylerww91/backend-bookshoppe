const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('authors routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('GET /authors should return list of authors', async () => {
    const resp = await request(app).get('/authors');
    expect(resp.status).toBe(200);
    expect(resp.body.length).toBe(10);
    expect(resp.body[0]).toEqual({
      id: expect.any(String),
      name: expect.any(String),
    });
  });

  it('GET /authors/:id should return an individual author and books written by them', async () => {
    const resp = await request(app).get('/authors/1');
    expect(resp.status).toBe(200);
    expect(resp.body.length).toBe(10);
    expect(resp.body[0]).toEqual({
      name: expect.any(String),
      date_of_birth: expect.any(String),
      place_of_birth: expect.any(String),
      books: [
        {
          id: expect.any(Number),
          title: expect.any(String),
          released: expect.any(Number),
        },
      ],
    });
  });
  afterAll(() => {
    pool.end();
  });
});

-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS books CASCADE; 
DROP TABLE IF EXISTS authors CASCADE;
DROP TABLE IF EXISTS books_authors;

CREATE TABLE books (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR NOT NULL,
    released INT NOT NULL
);

CREATE TABLE authors (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL,
    date_of_birth VARCHAR,
    place_of_birth VARCHAR
);

CREATE TABLE books_authors (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    author_id BIGINT,
    book_id BIGINT,
    FOREIGN KEY (author_id) REFERENCES authors(id),
    FOREIGN KEY (book_id) REFERENCES books(id)
);

INSERT INTO books (
    title,
    released
)

VALUES
('Rogues', 2014),
('The Gathering Storm', 2009),
('American Gods', 2001),
('Good Omens', 1990),
('Name of the Wind', 2007),
('The Wise Mans Fear', 2011),
('The Blade Itself', 2006),
('Before they are Hanged', 2007),
('The Last Argument of Kings', 2008),
('The Lies of Locke Lamora', 2006),
('The Way of Kings', 2010),
('Words of Radiance', 2014),
('Oathbringer', 2017),
('Mistborn', 2006),
('Warbreaker', 2009),
('The Eye of the World', 1990),
('A Game of Thrones', 1996),
('Red Rising', 2014),
('Golden Son', 2015),
('Morning Star', 2016);

INSERT INTO authors (
    name,
    date_of_birth,
    place_of_birth
)

VALUES
('Gillian Flynn', 'February 24, 1971', 'Kansas City, MO'),
('Connie Willis', 'December 31, 1945', 'Denver, CO'),
('Neil Gaiman', 'November 20, 1960', 'Portchester, UK'),
('Patrick Rothfuss', 'June 6, 1973', 'Madison, WI'),
('Joe Abercrombie', 'December 31, 1974', 'Lancaster, UK'),
('Scott Lynch', 'April 2, 1978', 'Saint Paul, MN'),
('George R. R. Martin', 'September 20, 1948', 'Bayonne, NJ'),
('Brandon Sanderson', 'December 19, 1975', 'Lincoln, NE'),
('Robert Jordan', 'October 17, 1948', 'Charleston, SC'),
('Pierce Brown', 'January 28, 1988', 'Denver, CO');

INSERT INTO books_authors (
    author_id,
    book_id
)

VALUES
(1, 1),
(2, 1),
(3, 1),
(3, 3),
(3, 4),
(4, 1),
(4, 5),
(4, 6),
(5, 1),
(5, 7),
(5, 8),
(5, 9),
(6, 1),
(6, 10),
(7, 1),
(7, 17),
(8, 11),
(8, 12),
(8, 13),
(8, 14),
(8, 15),
(8, 2),
(9, 2),
(9, 16),
(10, 18),
(10, 19),
(10, 20);
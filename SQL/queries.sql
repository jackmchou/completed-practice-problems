-- SQLBolt
-- Find the title of each film 
SELECT title FROM movies;
-- Find the director of each film 
SELECT director FROM movies;
-- Find the title and director of each film 
SELECT title, director FROM movies;
-- Find the title and year of each film 
SELECT title, year FROM movies;
-- Find all of each film 
SELECT * FROM movies;
-- Find the movie with a row id of 6
SELECT * FROM movies
WHERE id = 6;
-- Find the movies released in the years between 2000 and 2010 
SELECT * FROM movies
WHERE  year > 2000 and year <= 2010
-- Find the movies not released in the years between 2000 and 2010 
SELECT * FROM movies
WHERE year NOT BETWEEN 2000 AND 2010
-- Find the first 5 Pixar movies and their release year
SELECT * FROM movies
LIMIT 5
-- Find all the movies directed by John Lasseter 
SELECT * FROM movies
WHERE title like "toy story%"
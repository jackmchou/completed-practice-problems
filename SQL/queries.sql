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
-- Find all the movies (and director) not directed by John Lasseter 
SELECT * FROM movies
WHERE director LIKE "John Lasseter"
-- Find all the movies (and director) not directed by John Lasseter
SELECT * FROM movies
WHERE director NOT LIKE "John Lasseter"
-- Find all the WALL-* movies 
SELECT * FROM movies
WHERE title LIKE "Wall-_"
-- List all directors of Pixar movies (alphabetically), without duplicates
SELECT DISTINCT director FROM movies
ORDER BY director ASC
-- List the last four Pixar movies released (ordered from most recent to least) 
SELECT * FROM movies
ORDER BY year DESC
LIMIT 4
-- List the first five Pixar movies sorted alphabetically 
SELECT * FROM movies
ORDER BY title asc
LIMIT 5
-- List the next five Pixar movies sorted alphabetically 
SELECT * FROM movies
ORDER BY title asc
LIMIT 5 OFFSET 5
-- List all the Canadian cities and their populations
SELECT * FROM north_american_cities
WHERE country = "Canada";
-- Order all the cities in the United States by their latitude from north to south
SELECT * FROM north_american_cities
WHERE country LIKE "%States"
ORDER BY latitude desc
-- List all the cities west of Chicago, ordered from west to east 
SELECT city FROM north_american_cities
WHERE longitude < -87.629798
ORDER BY longitude asc
-- List the two largest cities in Mexico (by population) 
SELECT * FROM north_american_cities
WHERE country = "Mexico"
ORDER BY population desc
LIMIT 2
-- List the third and fourth largest cities (by population) in the United States and their population 
SELECT * FROM north_american_cities
WHERE country = "United States"
ORDER BY population desc
LIMIT 2 OFFSET 2
-- Find the domestic and international sales for each movie
SELECT * FROM movies
INNER JOIN boxoffice on id = movie_id
-- Show the sales numbers for each movie that did better internationally rather than domestically 
SELECT * FROM movies
INNER JOIN boxoffice on id = movie_id
WHERE international_sales > domestic_sales
-- List all the movies by their ratings in descending order
SELECT * FROM movies
INNER JOIN boxoffice on id = movie_id
ORDER BY rating desc
-- Find the list of all buildings that have employees
SELECT DISTINCT building_name FROM employees
LEFT JOIN buildings on building_name = employees.building
--  Find the list of all buildings and their capacity 
SELECT * FROM buildings
-- List all buildings and the distinct employee roles in each building (including empty buildings)
SELECT DISTINCT role, building_name FROM buildings
LEFT JOIN employees ON building_name = employees.building
-- Find the name and role of all employees who have not been assigned to a building 
SELECT * FROM employees
WHERE building IS NULL
-- Find the names of the buildings that hold no employees 
SELECT * FROM buildings
LEFT JOIN employees on building_name = employees.building
WHERE role is null
-- List all movies and their combined sales in millions of dollars 
SELECT DISTINCT title, (domestic_sales + international_sales) / 1000000 as sales
FROM movies
INNER JOIN boxoffice ON movies.id = boxoffice.movie_id
-- List all movies and their ratings in percent
SELECT DISTINCT *, rating * 10 as percent
FROM movies
INNER JOIN boxoffice ON movies.id = boxoffice.movie_id
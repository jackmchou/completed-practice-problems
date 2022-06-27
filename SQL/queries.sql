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
-- List all movies that were released on even number years
SELECT *
FROM movies
INNER JOIN boxoffice ON movies.id = boxoffice.movie_id
WHERE YEAR % 2 == 0
--Find the longest time that an employee has been at the studio 
SELECT MAX(years_employed) as longest_time FROM employees
--  For each role, find the average number of years employed by employees in that role
SELECT AVG(years_employed) as avg_time, role FROM employees
GROUP BY role
-- Find the total number of employee years worked in each building
SELECT Building, SUM(years_employed) AS total_employee_years FROM employees
GROUP BY building
-- Find the number of Artists in the studio (without a HAVING clause)
SELECT COUNT() AS artists_count FROM employees
WHERE role = "Artist"
-- Find the number of Employees of each role in the studio
SELECT role, COUNT() FROM employees
GROUP BY role
-- Find the total number of years employed by all Engineers
SELECT role, SUM(years_employed) AS total_years  FROM employees
WHERE role = "Engineer"
-- Find the number of movies each director has directed
SELECT Director, COUNT() AS num_movies_directed FROM movies
GROUP BY Director
-- Find the total domestic and international sales that can be attributed to each director
SELECT Director, SUM(Domestic_sales + International_sales) AS total_sales
FROM movies
JOIN boxoffice 
ON movies.id = boxoffice.movie_id
GROUP BY Director
-- Add the studio's new production, Toy Story 4 to the list of movies (you can use any director)
INSERT INTO movies
(id, title, director, year, length_minutes)
VALUES (15, "Toy Story 4","JC", 2021, 120);
-- Toy Story 4 has been released to critical acclaim! It had a rating of 8.7, and made 340 million domestically and 270 million internationally. Add the record to the BoxOffice table.
INSERT INTO boxoffice
(Movie_id, Rating, Domestic_sales, International_sales)
VALUES (15, 8.7,340000000, 270000000);
-- The director for A Bug's Life is incorrect, it was actually directed by John Lasseter
UPDATE movies
SET director = "John Lasseter"
WHERE title = "A Bug's Life";
-- The year that Toy Story 2 was released is incorrect, it was actually released in 1999 
UPDATE movies
SET year = 1999
WHERE title = "Toy Story 2";
-- Both the title and director for Toy Story 8 is incorrect! The title should be "Toy Story 3" and it was directed by Lee Unkrich
UPDATE movies
SET title = "Toy Story 3", director = "Lee Unkrich"
WHERE title = "Toy Story 8";
-- This database is getting too big, lets remove all movies that were released before 2005.
DELETE FROM movies
WHERE YEAR < 2005
-- Andrew Stanton has also left the studio, so please remove all movies directed by him.
DELETE FROM movies
WHERE director = "Andrew Stanton"
-- Create a new table named Database with the following columns:
-- – Name A string (text) describing the name of the database
-- – Version A number (floating point) of the latest version of this database
-- – Download_count An integer count of the number of times this database was downloaded
-- This table has no constraints.
CREATE TABLE Database (
    id INTEGER PRIMARY KEY,
    name TEXT,
    version INTEGER, 
    download_count INTEGER
);
-- Add a column named Aspect_ratio with a FLOAT data type to store the aspect-ratio each movie was released in.
ALTER TABLE movies
ADD Aspect_ratio FLOAT;
-- Add another column named Language with a TEXT data type to store the language that the movie was released in. Ensure that the default for this language is English. 
ALTER TABLE movies
ADD Language TEXT
    DEFAULT "English"
-- We've sadly reached the end of our lessons, lets clean up by removing the Movies table 
DROP TABLE IF EXISTS movies;
-- And drop the BoxOffice table as well
DROP TABLE IF EXISTS boxoffice;


-- W3Schools Exercises
-- Insert the missing statement to get all the columns from the Customers table.
SELECT * FROM Customers;
-- Write a statement that will select the City column from the Customers table.
SELECT City FROM Customers;
-- Select all the different values from the Country column in the Customers table.
SELECT DISTINCT Country FROM Customers;
-- Select all records where the City column has the value "Berlin".
SELECT * FROM Customers
WHERE City = "Berlin";
-- Use the NOT keyword to select all records where City is NOT "Berlin".
SELECT * FROM Customers
WHERE NOT City = "Berlin";
-- Select all records where the CustomerID column has the value 32.
SELECT * FROM Customers
WHERE CustomerID = 32;
-- Select all records where the City column has the value 'Berlin' and the PostalCode column has the value 12209.
Select * FROM Customers;
WHERE City = 'Berlin'
AND PostalCode = 12209;
-- Select all records where the City column has the value 'Berlin' or 'London'.
Select * FROM Customers;
WHERE City = 'Berlin'
OR City = 'London';
-- Select all records from the Customers table, sort the result alphabetically by the column City.
SELECT * FROM Customers
ORDER BY City;
-- Select all records from the Customers table, sort the result reversed alphabetically by the column City.
SELECT * FROM Customers
ORDER BY City DESC
-- Select all records from the Customers table, sort the result alphabetically, first by the column Country, then, by the column City.
SELECT * FROM Customers
ORDER BY Country, City;
-- Insert a new record in the Customers table.
INSERT INTO Customers 
(CustomerName, 
Address, 
City, 
PostalCode,
Country)
VALUES (
'Hekkan Burger',
'Gateveien 15',
'Sandnes',
'4306',
'Norway');
-- Select all records from the Customers where the PostalCode column is empty.
SELECT * FROM Customers
WHERE PostalCode IS NULL
-- Select all records from the Customers where the PostalCode column is NOT empty.
SELECT * FROM Customers
WHERE PostalCode IS NOT NULL;
-- Update the City column of all records in the Customers table.
UPDATE Customers
SET City = 'Oslo';
-- Set the value of the City columns to 'Oslo', but only the ones where the Country column has the value "Norway".
UPDATE Customers
SET City = 'Oslo'
WHERE Country = 'Norway';
-- Update the City value and the Country value.
UPDATE Customers
SET City = 'Oslo', Country = 'Norway'
WHERE CustomerID = 32;
-- Delete all the records from the Customers table where the Country value is 'Norway'.
DELETE FROM Customers
WHERE Country = 'Norway';
-- Delete all the records from the Customers table.
DELETE FROM Customers
-- Use the MIN function to select the record with the smallest value of the Price column.
SELECT MIN(Price)
FROM Products;
-- Use an SQL function to select the record with the highest value of the Price column.
SELECT MAX(Price)
FROM Product;
-- Use the correct function to return the number of records that have the Price value set to 18.
SELECT count(Price)
FROM Product
WHERE Price = 19;
-- Use an SQL function to calculate the average price of all products.
SELECT avg(Price)
FROM Products;
-- Use an SQL function to calculate the sum of all the Price column values in the Products table.
SELECT sum(Price)
FROM Products;
-- Select all records where the value of the City column starts with the letter "a".
SELECT * FROM Customers
WHERE City LIKE 'a%'
-- Select all records where the value of the City column ends with the letter "a".
SELECT * FROM Customers
WHERE City LIKE '%a'
-- Select all records where the value of the City column contains the letter "a".
SELECT * FROM Customers
WHERE City LIKE '%a%';
-- Select all records where the value of the City column starts with letter "a" and ends with the letter "b".
SELECT * FROM Customers
WHERE City LIKE 'a%b';
-- Select all records where the value of the City column does NOT start with the letter "a".
SELECT * FROM Customers
WHERE City NOT LIKE 'a%';
-- Select all records where the second letter of the City is an "a".
SELECT * FROM Customers
WHERE City NOT LIKE '_a%';
-- Select all records where the first letter of the City is an "a" or a "c" or an "s".
SELECT * FROM Customers
WHERE City LIKE '[acs]%';
-- Select all records where the first letter of the City starts with anything from an "a" to an "f".
SELECT * FROM Customers
WHERE City LIKE '[a-f]%';
-- Select all records where the first letter of the City is NOT an "a" or a "c" or an "f".
SELECT * FROM Customers
WHERE City LIKE '[^acf]%';
-- Use the IN operator to select all the records where Country is either "Norway" or "France".
SELECT * FROM Customers
WHERE Country IN ('Norway', 'France');
-- Use the IN operator to select all the records where Country is NOT "Norway" and NOT "France".
SELECT * FROM Customers
WHERE Country NOT IN ('Norway', 'France');
-- Use the BETWEEN operator to select all the records where the value of the Price column is between 10 and 20.
SELECT * FROM Products
WHERE Price BETWEEN 10 AND 20;
-- Use the BETWEEN operator to select all the records where the value of the Price column is NOT between 10 and 20.
SELECT * FROM Products
WHERE Price NOT Between 10 AND 20; 
-- Use the BETWEEN operator to select all the records where the value of the ProductName column is alphabetically between 'Geitost' and 'Pavlova'.
SELECT * FROM Products
WHERE ProductName BETWEEN 'Geitost' AND 'Pavlova';
-- When displaying the Customers table, make an ALIAS of the PostalCode column, the column should be called Pno instead.
SELECT CustomerName,
Address, PostalCode AS Pno, FROM Customers;
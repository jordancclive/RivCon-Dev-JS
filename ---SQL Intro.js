/*
-----------------------------------------------------------------------------------

                                        SQL Intro

-----------------------------------------------------------------------------------

--> select * (gets everything)
    a field with missing data has a value of null

--------------------------------------

Retrieving data:

SELECT   ---columns sep by commas---   FROM   ---table--- 
  WHERE   ---- = '----'   AND   ---- = '----'
  ORDER BY   ----   DESC;
  
--------------------------------------

Adding data:

INSERT INTO   ---table---(---columns sep by commas---)
VALUES   (---values sep by commas---);

--------------------------------------

Changing data:

UPDATE   ---table---
SET   ---column---    =   ---input data---,  ---repeat for as many columns as necessary---
(WHERE clause);               <--if not used, all rows will be updated

WHERE id = 3 or id = 5        <--Can change 2 columns at the same time

--------------------------------------

Removing Data:

DELETE FROM   ---table---
(WHERE clause);

--------------------------------------

Create a new & empty database:

CREATE DATABASE   ---name---;     <-- no quotes are necessary  
                                        Ex:  CREATE Vince Rios;
                                        you now have anew empty database named: Vince Rios                      

--------------------------------------

Deleting a database:

DROP DATABASE   ---name---;

--------------------------------------

Create tables in the database:

CREATE TABLE ------
(
column_name1 datatype,
column_name2 datatype,
column_name3 datatype
);

        datatype:
        int               =   integers
        varchar(50)       =   numbers & characters with a size fo 50 characters

        ...lookup n the web....
        
--------------------------------------

Deleting a table:

DROP TABLE   ---name---;

--------------------------------------

Adding or removing a column to a table:

ALTER TABLE   ---table name---
ADD COLUMN   ---column name---   ---datatype---;

ALTER TABLE   ---table name---
DROP COLUMN   ---column name---;

--------------------------------------

-----------------------------------------------------------------------------------

                        Common aggregate Functions

-----------------------------------------------------------------------------------

--------------------------------------

SELECT count(*)           or     SELECT count(column_name)
FROM    --table name--;                 <-- Get the total number of rows in a table
                                            If you put a specific column name excludes null column_names

SELECT sum(column_name)
FROM    --table name--;                 <-- Get the added sum of values for a group of rows

SELECT avg(column_name)
FROM    --table name--;                 <-- Get the calculated avg value for a group of rows

SELECT max(column_name)
FROM    --table name--;                 <-- Get the largest value in a group of rows

SELECT min(column_name)
FROM    --table name--;                 <-- Get the smallest value in a group of rows

--------------------------------------

combining functions:

SELECT max(tickets, min(tickets)
FROM movies;                        ==>     max          min
                                            1500         750
--------------------------------------                                           
      
-----------------------------------------------------------------------------------

--------------------------------------     
      
GROUP BY clause:
 
SELECT   ---column---, sum(cost)
FROM   ---table---
GROUP BY   ---column---;
      
SELECT genre, sum(cost)
FROM Movies                     Horror   3500000
GROUP BY genre;                 Romance  1429000

--------------------------------------  

SELECT genre, sum(cost)
FROM Movies                     Horror   3500000
GROUP BY genre;                 Romance  1429000
HAVING count(*)>1                                <--If there was only one genre of Comedy, would be excluded.

--------------------------------------  

SELECT   ---column_name---, aggregate_function(column_name)
FROM   ---table_name---
WHERE column_name operator value (optional)
GROUP BY   ---column_name---;
HAVING  aggregate_function(column_name) operator value;

--------------------------------------  












*/

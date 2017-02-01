/*
---------------------------------------------------------------------------

                     More advanced items
                     
                     CONSTRAINTS


---------------------------------------------------------------------------

referencing 2 tables

Promotions   =>      id    name        category

Movies       =>      id    Title

-------------------------------

Do this (standard):

Promotions   =>      id    movie_id  name        category
                              |
                          foreign key

---------------------------------------------------------

CREATE TABLE Movies(
  id int PRIMARY KEY,
  title varchar(20) NOT NULL UNIQUE
);

CREATE TABLE Promotions(
  id int PRIMARY KEY,
  movie_id int,         => change to  =>   movie_id int REFERENCES movies(id), 
  name varchar(50),                        This makes sure that the field associates to existing ids   
  caregory varchar(15)                     within the Movies table
);  

can also do this:

  movie_id int,         => change to  =>   movie_id int REFERENCES movies, 
                                            will know to reference the primary key 
or

  movie_id int,         
  FOREIGN KEY (movie_id) REFERENCES movies,

---------------------------------------------------------

CREATE TABLE Movies(
  id int PRIMARY KEY,
  title varchar(20) NOT NULL UNIQUE
  duration int CHECK (duration > 0)         <-- The CHECK constraint
);






















*/

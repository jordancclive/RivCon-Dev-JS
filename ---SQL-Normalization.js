
/*
---------------------------------------------------------------------------

                Normalization, Relationships
                
                
                     
---------------------------------------------------------------------------

Normalization:

Normal Form 1:  Don't repeat data in 1 column

Normal Form 2:  No redundancy (no repeating info)


Movies:     id      title             duration
              1       Don Juan          110
              2       Robin Hood        143
              3       The Lost World    105
              4       Peter Pan         120

Genres:     id      genre
              1       Romance
              2       Adventure
              3       Fantasy
              
Create a link table:

Movies_Genres:        movies_id     genres_id
                          1             1
                          2             2
                          2             3
                          3             3
                          4             2
                          
---------------------------------------------------------------------------                          

Relationships:

one to one

one to many

many to many


---------------------------------------------------------------------------   

                              Inner Joins

---------------------------------------------------------------------------  

Movies:     id      title             duration
              1       Don Juan          110
              2       Robin Hood        143
              3       The Lost World    105
              4       Peter Pan         120

Reviews:     id      review           movie_id
              1       loved it            1
              2       a must see          1
              3       hated it            1
              4       it was ok           3
              5       do not see          4
              
SELECT Movies.title, Reviews.review
FROM Movies
INNER JOIN Reviews              <-- what table to join with
ON Movies.id=Review.movie_id    <-- how you want to join the tables

---------------------------------------------------------------------------   

Movies:     id      title             duration
              1       Don Juan          110
              2       Robin Hood        143
              3       The Lost World    105
              4       Peter Pan         120

Genres:     id      genre
              1       Romance
              2       Adventure
              3       Fantasy

Movies_Genres:        movies_id     genres_id
                          1             1
                          2             2
                          2             3
                          3             3
                          4             2

SELECT movies.title AS Films, Genres.name AS Reviews      <=  When the columns print, the headers will change
FROM Movies                                                   You can also drop the AS:
INNER JOIN Movie_Genres                                       movies.title Films, Genres.name Reviews
ON Movies.id = MOVIE_Genres.movie_id                          or if the alias has 2 words:
INNER JOIN Genres                                             movies.title "Weekly Films", Genres.name "Weekly Reviews"
ON MOVIE_GENRES.genres.id = Genres.id
WHERE Movies.title = 'Peter Pan';

Can also do this:

SELECT m.title Films, g.name Reviews           
FROM Movies m                                     
INNER JOIN Movie_Genres mg                   
ON m.id = mg.movie_id                               
INNER JOIN Genres g                                
ON mg.genres.id = g.id
WHERE m.title = 'Peter Pan';


---------------------------------------------------------------------------   

                              Outer Joins

---------------------------------------------------------------------------  









*/

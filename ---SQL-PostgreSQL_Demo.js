/*
------------------------------------------------------------------------------

                              PostgreSQL - Demo

------------------------------------------------------------------------------

Let's start with an empty site.  
        
Have iterm open with 2 tabs:

        Tab 1:  I types psql and am in postgreSQL
        Tab 2:  I have bash open to my directory
                
 Tab 1 type:
 
        CREATE DATABASE twitterDB;        <-- If you look in the postgreSQL app, you can see that the empty DB exists.
        \c twitterDB                      <-- can connect to it.
        \d                                <-- will show you your tables, there are none at the 
        
        CREATE TABLE --table nm-- (--column nm-- --type--);
        \d --table nm--                   <-- will let you see that table with the schema for the table
        
        \q                                <-- can quit psql 
        
------------------------------------------------------------------------------

Let's create our application:

        create a directory
        git init
        npm init
        
        npm install express pg swig --save
        
        











































*/

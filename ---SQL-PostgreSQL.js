/*
------------------------------------------------------------------------------

                              PostgreSQL

------------------------------------------------------------------------------

PostgreSQL is a general-purpose object-relational database management system.

Creating a DBMS:

        Launch: psql on the command line.
        Acct Info:  enter.
        
        Type: CREATE DATABASE --dbms name--   <-- an empty DBMS will be created.
        
        or:   createdb -h localhost -p 5432 -U postgres testdb password ******
        
        Above command will prompt you for password of the PostgreSQL admin user 
        which is postgres by default so provide password and proceed to create your new dataabse.
        
        \l  <-- el  Lists the existing DBMS
        
        Now type the below command to connect/select a desired database, here we will connect to the testdb database:

                postgres=# \c testdb;       <--the command
                psql (9.2.4)
                Type "help" for help.
                You are now connected to database "testdb" as user "postgres".
                testdb=# 

        or
        
        You can select your database from command prompt itself at the time when you login to your database. 
        Following is the simple example:

                psql -h localhost -p 5432 -U postgress testdb
                Password for user postgress: ****
                psql (9.2.4)
                Type "help" for help.
                You are now connected to database "testdb" as user "postgres".
                testdb=# 

------------------------------------------------------------------------------

--------> at Drop Database.....   https://www.tutorialspoint.com/postgresql/postgresql_drop_database.htm

------------------------------------------------------------------------------















*/

/*
---------------------------------------------------------------------------------------

                                      Express.js

---------------------------------------------------------------------------------------
*/
            npm init    //creates our package.json file for later deployment.


// Now let's create the application directory structure:

      mkdir public public/stylesheets routes views
      touch app.js public/stylesheets/style.css routes/index.js
      touch views/index.html views/layout.html

/* Directory structure:
                      ├── app.js                     <--main application
                      ├── package.json
                      ├── public                     <--In this directory will be statis files
                      │   └── stylesheets               tht are served when requested
                      │       └── style.css
                      ├── routes                     <--Here we will define dynamic content (.JS)
                      │   └── index.js
                      └── views                      <--Here we will define dynamic content (.html)
                          ├── index.html
                          └── layout.html
*/
        npm install express --save    //install express locally. (check package.json for the added dependency)
        npm install chalk --save      // can make output to the iterm console colored
        touch .gitignore              //add node_modules to this local file.

        //In app.js type:

        const express = require( 'express' );   //store the export within express in a variable
        const app = express();                  //create an instance of an express aplication


//-------------------------------------------------------
        const express = require ( 'express' );
        const chalk = require ( 'chalk' );
        const app = express();

        app.get('/', function (req, res, next) {            //If you visit: http://localhost:3000
          res.send('Hello World!')                          //you get:  Hello World
        })                                                  // on the web page.

        app.get('/news', function (req, res, next) {        //If you visit: http://localhost:3000/news
          res.send('You visited the /news directory')       //you get:  You visited the /news directory
        })                                                  // on the web page.

        app.listen(3000, function(){                        //listening for requests at port 3000.
          console.log('listening to port 3000');            // will get the message on the iterm console, not the JS console.
        });

//-------------------------------------------------------
//                    Middleware
//-------------------------------------------------------











*/

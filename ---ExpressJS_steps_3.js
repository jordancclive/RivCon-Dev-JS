/*
---------------------------------------------------------------------------------------

                                      Express.js
                                       Step #3
                                       
                                      Lodash...
                                      
---------------------------------------------------------------------------------------

A utilities library: Lodash. Lodash provides a long list of useful JavaScript functions. 
*/

        // in the tweetBank.js module install lodash
        npm install lodash --save           //<--in terminal
        const _ = require( 'lodash' );      //<--in tweetBank

---------------------------------------------------------------------------------------
  
//Files at this point:
  
        //index.js in routes:
  
        const express = require('express');
        const router = express.Router();
        // could use one line instead: const router = require('express').Router();
        const tweetBank = require('../tweetBank');

        router.get('/', function (req, res) {     //<--Express can create a router entity that is 
          let tweets = tweetBank.list();          //  configurable outside of any application instance. 
          res.render( 'index', { tweets: tweets } );
        });

        module.exports = router;

//--------------------------------------

        //tweetBank.js:

        const _ = require( 'lodash' );

        var data = [];

        /*
        We are going to store the tweets in the data array, 
        but we do not want to make this array directly accessible 
        to the rest of our app; it will safely remain as a 
        private variable inside tweetBank.js.

        What we will make available, using module.exports, 
        are functions for adding, listing, and finding tweets. 
        Add the code below to the tweetBank module.
        */

        function add (name, content) {
          data.push({ name: name, content: content });
        }

        function list () {
          return _.cloneDeep(data);
        }

        function find (properties) {
          return _.cloneDeep(_.filter(data, properties));
        }

        module.exports = { add: add, list: list, find: find };

        //-----testing stuff:

        const randArrayEl = function(arr) {
          return arr[Math.floor(Math.random() * arr.length)];
        };

        const getFakeName = function() {
          const fakeFirsts = ['Nimit', 'David', 'Shanna', 'Emily', 'Scott', 'Karen', 'Ben', 'Dan', 'Ashi', 'Kate', 'Omri', 'Gabriel', 'Joe', 'Geoff'];
          const fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
          return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
        };

        const getFakeTweet = function() {
          const awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
          return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
        };

        for (let i = 0; i < 10; i++) {
          module.exports.add( getFakeName(), getFakeTweet() );
        }

//--------------------------------------

        //package,json:
        {
          "name": "twitter-js",
          "version": "1.0.0",
          "description": "Bldg a simple Twitter clone to learn express.js",
          "main": "./routes/index.js",
          "scripts": {
            "start": "nodemon app.js"
          },
          "repository": {
            "type": "git",
            "url": "twitter-js"
          },
          "author": "Vincent Rios",
          "license": "ISC",
          "dependencies": {
            "chalk": "^1.1.3",
            "express": "^4.14.0",
            "lodash": "^4.17.4",
            "nunjucks": "^3.0.0"
          }
        }

//--------------------------------------

        //app.js:
        const express = require ( 'express' );
        const chalk = require ( 'chalk' );          //<--terminal string styling
        const nunjucks = require ( 'nunjucks' );    //<--templating language
        const routes = require('./routes');         //<-- routing file
        const app = express();

        app.set('view engine', 'html'); // have res.render work with html files
        app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
        nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates


        app.use('/', routes);   //register it as middleware for all routes beginning with /

        app.use('/special/', function (req, res, next) {        // <---Question for class, redirected, 
                if (req.url.length >1){                         //     but what if a file name was here
                    res.redirect('/special');
                }
                next();
            })

        app.use(function (req, res, next) {
            console.log('method: ', req.method, ' url: ', req.url);
            res.on('close', function(){
                console.log('close response code: ',res.statusCode);    // <--Close always has nothing in it.
            })
            res.on('finish', function(){
                console.log('finish response code: ', res.statusCode);
            })
            next();
        })




        app.listen(3000, function(){
            console.log('listening to port 3000');
        });

//--------------------------------------
//---------------------------------------------------------------------------------------



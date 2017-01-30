/*
---------------------------------------------------------------------------------------

                                      Express Setup
                                      
                                         Summary

---------------------------------------------------------------------------------------

Let's start with our core directory structure:  (create this)

/* Directory structure:
                      ├── app.js                      <-- main application startup .js file
                      ├── .gitignore                  <-- 'node_modules' inside
                      ├── package.json                <-- we will get this with our npm init command in the console.  
                      |   
                      ├── dev                         <--We will mount this. Contains core development files
                      │   └── assets        
                      │       ├── img                 <-- All images
                      │       │   └── ...                      
                      │       ├── js                  <-- All JS   
                      │       │   └── ...
                      │       ├── stylesheets                
                      │       |   └── style.css                               
                      │       └── routes                  
                      │           └── index.js        <-- all routes are here
                      └── views                       <--Here we will define dynamic content (.html)
                          ├── index.html
                          ├── layout.html             <-- template
                          └── ...

---------------------------------------------------------------------------------------

Our package.json file from my twitter.js project:
*/
    {
      "name": "twitter-js",
      "version": "1.0.0",
      "description": "Bldg a simple Twitter clone to learn express.js",
      "main": "./routes/index.js",
      "scripts": {
        "start": "nodemon app.js"         //<-- could do:     "start": "PORT=3000 nodemon app.js"
      },
      "repository": {
        "type": "git",
        "url": "twitter-js"
      },
      "author": "Vincent Rios",
      "license": "ISC",
      "dependencies": {
      "body-parser": "^1.16.0",
      "bootstrap": "^3.3.7",
      "chalk": "^1.1.3",
      "express": "^4.14.1",
      "lodash": "^4.17.4",
      "method-override": "^2.3.7",
      "path": "^0.12.7",
      "socketio": "^1.0.0",             //we haven't really learned this one yet.
      "swig": "^1.4.2"                  //could have used nunjucks instead
      }
    }
/*
---------------------------------------------------------------------------------------

        Note:  Once you have a fully functional application and you upload it to some server, 
        the user can fork and/or clone it and must run npm install in order to install all the dependencies 
        in the package.json file in order to run the application on their machine.  
*/
        npm install  
/*
---------------------------------------------------------------------------------------
*/
//To start from scratch:      (visit: visit: http://localhost:3000 for the html pages)

        npm init          // to generate a package.json for a new Node project
        git init          // to get our git repository...do one for got.com too
        
        npm install express --save
        npm install chalk --save              //enahncing colors in console logs
        npm install swig --save               //templating engine                   or nunjucks --save 
        npm install path --save               //path type joins
        npm install lodash --save             //utilities library
        npm install body-parser --save        //url-encoding processor library
        npm install socketio --save           //using sockets for real-time connections
        npm install bootstrap --save
        npm install method-override --save    //so you can delete records
        
/*--------------------------------------------

        Note: volleyball & morgan are git repos to use in app.use stmts for logging all requests.
            morgan is built by the express team.  You will need to install them:  ...see docs:
            https://github.com/glebec/volleyball
            https://github.com/expressjs/morgan

----------------------------------------------


-----------------------------------------The apps.js file looks like this (using socketio).
*/
        //if I were using nunjucks:
                    const express = require ( 'express' );
                    const routes = require( './routes' );       //<--routing file
                    const chalk = require ( 'chalk' );          //<--terminal string styling
                    const nunjucks = require ( 'nunjucks' );    //<--templating language
                    const app = express();                      //<-- instance of express
                    const socketio = require( 'socket.io' );    //<--using sockets 

                    app.set('view engine', 'html'); // have res.render work with html files
                    app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
                    nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates

        //if I were using swig:
                    const express = require( 'express' );
                    const routes = require( './routes' );
                    const chalk = require( 'chalk' );
                    const swig = require( 'swig' );
                    const app = express();
                    const socketio = require( 'socket.io' );    //<--using sockets 

                    swig.setDefaults( { cache: false } );
                    app.set('view engine', 'html');
                    app.engine('html', swig.renderFile);


        app.use('/', routes(io));   //register it as middleware for all routes beginning with /
        /*  Could have been done:   var router = routes(io);    app.use( '/', router );
            Routing is now married to socket.io  */

        // could use this and assign the port in package.json file
        //var server = app.listen(process.env.PORT, ()=> console.log(chalk.yellow('Listening on ' + process.env.PORT)));

        var server = app.listen(3000, ()=> console.log(chalk.yellow('listening to port 3000')));
        var io = socketio.listen(server);

        //Can see that other users are interfacing with this connection (just testing this)
        io.on('connection', function(socket){
          console.log('a user connected');
          socket.on('disconnect', function(){
            console.log('user disconnected');
          });
        });
        

//---------------------------------------app.js without sockets:


        //if I were using nunjucks:
                    const express = require ( 'express' );
                    const routes = require( './routes' );       //<--routing file
                    const chalk = require ( 'chalk' );          //<--terminal string styling
                    const nunjucks = require ( 'nunjucks' );    //<--templating language
                    const app = express();                      //<-- instance of express

                    app.set('view engine', 'html'); // have res.render work with html files
                    app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
                    nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates

        //if I were using swig:
                    const express = require( 'express' );
                    const routes = require( './routes' );
                    const chalk = require( 'chalk' );
                    const swig = require( 'swig' );
                    const app = express();

                    swig.setDefaults( { cache: false } );
                    app.set('view engine', 'html');
                    app.engine('html', swig.renderFile);

        app.use('/', routes);   //register it as middleware for all routes beginning with /

        // could use this and assign the port in package.json file
                app.listen(process.env.PORT, ()=> console.log(chalk.yellow('Listening on ' + process.env.PORT)));
        // ...or set the port here:
                app.listen(3000, ()=> console.log(chalk.yellow('listening to port 3000')));                                                                                                           
                                                         
/*
---------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------


The index.js file (The routing file) looks like this.

*/
        module.exports = function (io){
          const express = require ( 'express' );
          const router = express.Router(); 
          const path = require( 'path' );
          const bodyParser = require( 'body-parser' );
          const tweetBank = require('../tweetBank');

          router.use('/images', express.static(path.join(__dirname, '../assets/img/')));
          router.use('/stylesheets', express.static(path.join(__dirname, '../public/stylesheets/')));
          router.use(bodyParser.urlencoded( { extended: false } ));
          router.use(bodyParser.json( { extended: false } ));
          router.use(function (req, res, next) {
              console.log('method: ', req.method, ' url: ', req.url);
              res.on('finish', function(){
                  console.log('finish response code: ', res.statusCode);
              })
              next();
          })

          router.get('/users/:name', function(req, res, next) {
            var list = oneName(req.params.name);
            res.render( 'index', { showUser: true, showForm: false, tweets: list } );
          });

          router.get('/tweets/:id', function(req, res, next) {
            var id = req.params.id;
            var list = tweetBank.find( {id: id*1} );
            res.render( 'index', { showUser: true, showForm: false, tweets: list } );
          });

          router.get('/newTweet', function(req, res, next) {
            res.render( 'index', { showForm: true, showMsg: false } );
          });

          router.post('/tweets', function(req, res, next) {
            tweetBank.add(req.body.name, req.body.text);
            var list = oneName(req.body.name);
            // Could have done:  res.redirect('/');
            // I like the following better:
            res.render( 'index', { showUser: true, showForm: true, tweets: list } );
          });

          router.get('/', function (req, res, next) {
            let tweets = tweetBank.list();
            res.render( 'index', { showUser: true, showForm: false, tweets: tweets } );
          });

          function oneName (name){
            return tweetBank.find( {name: name} );
          };
          return router;
        };


        // Things to consider:

        //-------------------------------- 
        //example of 2 parameters:
        // router.get( '/store/:product/reviews/:id', function (req, res, next) {
        //     console.log(req.params.product);
        //     console.log(req.params.id);
        //     next();
        // });
        //-------------------------------- 
        //different example of 2 parameters:
        // router.get( '/store/:product/:id', function (req, res, next) {
        //     console.log('product: ', req.params.product);
        //     console.log('id: ', req.params.id);
        //     next();
        // });
        //--------------------------------
        // could use one line instead: const router = require('express').Router();

        /*
        In the future: consider separate index pages 
        for each of the relevant URL levels 
        (e.g., one for the aggregate view, one for a user, 
        one for a specific tweet) and then have each 
        of those indexes extend the same layout.html

---------------------------------------------------------------------------------------

The database file (called: tweetBank.js) looks like this.  This is where we used lodash
*/
        const _ = require( 'lodash' );

        var data = [];

        function add (name, content) {

          data.push({ name: name, content: content, id: counter() });
        }

        function list () {
          return _.cloneDeep(data);
        }

        function find (properties) {
          return _.cloneDeep(_.filter(data, properties));
        }

        // function counter returns an increasing number that keeps its 'state' 
        function createID (funcInput){
            let count = 0;
            return function (){return ++count;}
        }

        let counter = createID();  //counter returns an increasing id counter

        module.exports = { add: add, list: list, find: find };

        //-----  setup the database with a few records:  -----

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
          var name = getFakeName();
          var numTweets = randArrayEl([1,2,3]);
          for(let j=0; j<numTweets; j++){
            var tweet = getFakeTweet();
            add( name, tweet );
          }
        }

/*
---------------------------------------------------------------------------------------

The index.html file looks like this.
*/
        {% extends "layout.html" %}

        {% block content %}

              {% if showForm %}

              {% endif %}

              {% if showUser %}

                {% for tweet in tweets %}

                  <dd><a href="/tweets/{{tweet.id}}">{{tweet.id}}</a> - <a href="/users/{{tweet.name}}"><strong>{{tweet.name}}:</strong></a></dd>
                  <dd id= 'tweet'>{{tweet.content}}</dd>

                {% endfor %}

              {% endif %}

        {% endblock %}
/*
---------------------------------------------------------------------------------------

The layout.html file looks like regular html.  (with scripts and Bootstrap)
*/
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="description" content="">
            <meta name="author" content="">

            <title></title>

            <!-- Bootstrap core CSS -->
            <link href="http://netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css" rel="stylesheet">

            <!-- Custom styles for this template -->
            <link href="/stylesheets/style.css" rel="stylesheet">

            <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
            <!--[if lt IE 9]>
              <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
              <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
            <![endif]-->
          </head>

          <body>

            <!-- Wrap all page content here -->
            <div id="wrap">

              <!-- Fixed navbar -->
              <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div class="container">
                  <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                      <span class="sr-only">Toggle navigation</span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="/">Twitter.js</a>
                  </div>
                  <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                      <li id-"home"><a href="/">Home</a></li>
                      <li id="newTweet"><a href="/newTweet">New Tweet</a></li>              
                      <li><a href="#about">@ Connect</a></li>
                      <li><a href="#contact"># Discover</a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                      <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Settings <b class="caret"></b></a>
                        <ul class="dropdown-menu">
                          <li><a href="#">Action that I am not using</a></li>
                          <li><a href="#">Another action, not using this either</a></li>
                          <li><a href="#">Nothing here!</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div><!--/.nav-collapse -->
                </div>
              </div>

              <!-- Begin page content -->
              <div class="container">
                {% block content %}Welcome to Twitter.js{% endblock %}
              </div> <!-- end container -->

            </div>

            <div id="footer">
              <div class="container">
                <p class="text-muted">Twitter.js, Fullstack Academy</p>
              </div>
            </div>
          </body>

          <!-- Bootstrap core JavaScript
          ================================================== -->
          <!-- Placed at the end of the document so the pages load faster -->
          <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
          <script src="http://netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js"></script>

          <script src="/socket.io/socket.io.js"></script>

          <script>
            // Load the socket.io library above, then connect to the server.
            // Because the socket.io server is being run on the same server as your 
            // Express instance, you can connect() without any arguments.
            var socket = io.connect();
            socket.on('connect', function(){
              console.log('connected to server via WebSockets!');
            });
            // When 'new_tweet' events are fired, do something with the packaged tweet
            socket.on('newTweet', function (tweet) { 
              console.log(tweet);
              alert('Refreshing... check the console...');
              // some logic to add the new tweet to the DOM…
            }); 
          </script>

        </html>

                                                         

                                                         
                                                         
                                                         
                                                         
/*
---------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------

                everything below is without sockets 

---------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------

-------------index.js without sockets:
*/
const express = require ( 'express' );
const router = express.Router(); 
const path = require( 'path' );
const bodyParser = require( 'body-parser' );
const tweetBank = require('../tweetBank');

router.use('/images', express.static(path.join(__dirname, '../assets/img/')));
router.use('/stylesheets', express.static(path.join(__dirname, '../public/stylesheets/')));
router.use(bodyParser.urlencoded( { extended: false } ));

router.get('/users/:name', function(req, res, next) {
  var list = oneName(req.params.name);
  res.render( 'index', { showUser: true, showForm: false, tweets: list } );
});

router.get('/tweets/:id', function(req, res, next) {
  var id = req.params.id;
  var list = tweetBank.find( {id: id*1} );
  res.render( 'index', { showUser: true, showForm: false, tweets: list } );
});

router.get('/newTweet', function(req, res, next) {
  res.render( 'index', { showForm: true, showMsg: false } );
});

router.post('/tweets', function(req, res, next) {
  tweetBank.add(req.body.name, req.body.text);
  var list = oneName(req.body.name);
  console.log(list);
  res.render( 'index', { showUser: true, showForm: true, tweets: list } );
});

router.get('/', function (req, res, next) {
  let tweets = tweetBank.list();
  res.render( 'index', { showUser: true, showForm: false, tweets: tweets } );
});

function oneName (name){
  console.log('name: ', name);
  return tweetBank.find( {name: name} );
};


module.exports = router;


// Things to consider:

//-------------------------------- 
//example of 2 parameters:
// router.get( '/store/:product/reviews/:id', function (req, res, next) {
//     console.log(req.params.product);
//     console.log(req.params.id);
//     next();
// });
//-------------------------------- 
//different example of 2 parameters:
// router.get( '/store/:product/:id', function (req, res, next) {
//     console.log('product: ', req.params.product);
//     console.log('id: ', req.params.id);
//     next();
// });
//--------------------------------
// could use one line instead: const router = require('express').Router();

/*
In the future: consider separate index pages 
for each of the relevant URL levels 
(e.g., one for the aggregate view, one for a user, 
one for a specific tweet) and then have each 
of those indexes extend the same layout.html



---------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------

-------------layout.html without sockets:
*/
 <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Sticky Footer Navbar Template for Bootstrap</title>

    <!-- Bootstrap core CSS -->
    <link href="http://netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="/stylesheets/style.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->
  </head>

  <body>

    <!-- Wrap all page content here -->
    <div id="wrap">

      <!-- Fixed navbar -->
      <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">Twitter.js</a>
          </div>
          <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
              <li id-"home"><a href="/">Home</a></li>
              <li id="newTweet"><a href="/newTweet">New Tweet</a></li>              
              <li><a href="#about">@ Connect</a></li>
              <li><a href="#contact"># Discover</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Settings <b class="caret"></b></a>
                <ul class="dropdown-menu">
                  <li><a href="#">Action that I am not using</a></li>
                  <li><a href="#">Another action, not using this either</a></li>
                  <li><a href="#">Nothing here!</a></li>
                </ul>
              </li>
            </ul>
          </div><!--/.nav-collapse -->
        </div>
      </div>

      <!-- Begin page content -->
      <div class="container">
        {% block content %}Welcome to Twitter.js{% endblock %}
      </div> <!-- end container -->
      
    </div>

    <div id="footer">
      <div class="container">
        <p class="text-muted">Twitter.js, Fullstack Academy</p>
      </div>
    </div>


    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
    <script src="http://netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js"></script>
  </body>
</html>
                                                         
                                                         
                                                         
                                                         
                                                         
                                                         

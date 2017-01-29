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
        "start": "nodemon app.js"
      },
      "repository": {
        "type": "git",
        "url": "twitter-js"
      },
      "author": "Vincent Rios",
      "license": "ISC",
      "dependencies": {
        "body-parser": "^1.16.0",       //<--These dependencies tell you what to install
        "chalk": "^1.1.3",
        "express": "^4.14.0",
        "lodash": "^4.17.4",
        "nunjucks": "^3.0.0",
        "socketio": "^1.0.0"
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
        npm install chalk --save        //enahncing colors in console logs
        npm install nunjucks --save     //templating engine
        
/*--------------------------------------------
        Note: volleyball & morgan are git repos to use in app.use stmts for logging all requests.
            morgan is built by the express team.  You will need to install them:  ...see docs:
            https://github.com/glebec/volleyball
            https://github.com/expressjs/morgan
--------------------------------------------
*/
        
        

        utlity functions via the Lodash library
        modular program design: storing our data in a module with getters & setters
        the basics of HTTP requests: URI (path) and VERB (method)
        Express routing definitions like app.get and app.post
        Modular routing using express.Router()
        static routing from a file folder using express.static
        dynamic routing using route parameters (req.params)
        HTML form requests (POST) that are url-encoded
        parsing HTTP request bodies with body-parsing middleware (req.body)
        Reading query strings (req.query)
        Bonus: incorporating socket.io into an Express app with modular routing









/*
---------------------------------------------------------------------------------------

The apps.js file looks like this.
*/
        const express = require ( 'express' );
        const chalk = require ( 'chalk' );          //<--terminal string styling
        const nunjucks = require ( 'nunjucks' );    //<--templating language
        const routes = require( './routes' );       //<--routing file
        const app = express();
        const socketio = require( 'socket.io' );    //<--using sockets 

        app.set('view engine', 'html'); // have res.render work with html files
        app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
        nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates

        app.use('/', routes(io));   //register it as middleware for all routes beginning with /
        /*  Could have been done:   var router = routes(io);    app.use( '/', router );
            Routing is now married to socket.io  */

        var server = app.listen(3000, ()=> console.log(chalk.yellow('listening to port 3000')));
        var io = socketio.listen(server);

        //Can see that other users are interfacing with this connection (just testing this)
        io.on('connection', function(socket){
          console.log('a user connected');
          socket.on('disconnect', function(){
            console.log('user disconnected');
          });
        });
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





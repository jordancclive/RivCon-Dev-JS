/*
-------------------------------------------------------------------------------

                          Sockets intro

-------------------------------------------------------------------------------

Socket.io is a library for using the WebSockets protocol — 

    enabling realtime, bidirectional, simultaneous communication. 
    
Socket.io lets you:

    Make   'listeners'   that wait for a named event and then call their handler function
    
    Make   'emitters'   that send a named event along with some data
    

The surprising part is that the listeners and emitters can be running on totally separate machines. 


In essence, Socket.io sets up a server using WebSockets, running alongside our Express server using HTTP 

    — both listening through the same port! 
    
Using sockets makes our apps much more responsive, with no page refreshes needed.

-------------------------------------------------------------------------------

Add the socket.io client library & script to the bottom of layout.html, before the closing </html> tag.
*/
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
/*
When we give Socket.io the server instance, it will add its own route for that path, 
which returns the socket.io.js file (which is actually in one of the node_modules sub-directories).

We also have the following in our app.js module:
*/
        var socketio = require('socket.io');
        // ...
        var server = app.listen(3000);
        var io = socketio.listen(server);
/*
The problem is we also need socket.io in out routes modules.   ...which gives us a circular dependency:

        socket.io needs server — server needs app — app needs routes — routes need socket.io

You need to wrap the routes file inside a function and export the whole function:
*/
        module.exports = function (io) {
          // ...
          // route definitions, etc.
          // ...
          return router;
        };

//...and you need to change the app.use inside of the main app.js file as follows:

        app.use( '/', routes(io) );
        // or:
        // var router = routes(io);
        // app.use( '/', router );


*/

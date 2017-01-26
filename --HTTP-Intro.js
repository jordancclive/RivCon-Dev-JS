/*
---------------------------------------------------------------------------------------

                                      HTTP
                                      
---------------------------------------------------------------------------------------

HTTP is the communications standard driving the web. 
It uses the client-server model, where the server has resources which clients might want. 

A client can request a resource, in which case the server can respond with data. 

The server cannot initiate communication; it can only responds to requests.

Requests & responses have header fields — technical metadata for the protocol to work. They also have some important properties shown below.

--------------------------------------------

HTTP Requests

        A URI path (uniform resource identifier) — a string label, for example /tweets/123. 
            This is not necessarily an actual file path! 
            It's just an identifier, like "tweets from Jan. 23" or "tweet #123".
            
            http://en.wikipedia.org/wiki/Uniform_resource_identifier
            
        A method (or verb) explaining what the client wants to do with the resource. 
            Interpreting verbs is completely up to the server code, but there are some typical patterns.
                
                GET: give me this resource
                PUT: update the resource with this data
                POST: create a resource using this data
                DELETE: delete the resource
                …and others:          
                              https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html
        
        An optional message body containing data (JSON, XML, etc.)

--------------------------------------------

HTTP Responses

        A status code indicating how the server dealt with the request (success, not found, etc.)
        
        An optional message body containing data
        
        https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
        
--------------------------------------------
        
Example

Let's say you want to see a specific tweet (#5) in Twitter app. 
You type the address http://localhost:3000/tweets/5 into your browser and press enter.

        The browser sees that it should use the http protocol to make and send a request.
        
        It addresses the computer & port at localhost:3000 (your own computer).
        
        It sends the VERB-URI request GET /tweets/5 (the resource of interest).
        
        The server listening at that address & port receives the request.
        
        The server code routes the request to the proper handler function, based on the verb & URI.
        
        The handler function runs and builds a response message 
        (for example, status code 200 and message body <html>…an html file showing tweet #5…</html>).
        
        The server sends the response back to the browser.
        
        The browser decides what to do with the response based on its status code and body 
        (for example, display a successful HTML delivery).

--------------------------------------------

Now that we've studied HTTP, let's talk routing. We saw how, 
depending on an HTTP request's method and URI path (for example, POST /tweets/), 
the server will "route" the request to a specific function. 
There are endless possible routes; here are two contrasting examples.

--------------------------------------------

Express Routes

So, routing is just code that feeds an incoming HTTP request to a specific function. 
How do we route requests in Express? Easily: with app.METHOD( path, handler ). 

see:    http://expressjs.com/en/4x/api.html#app.METHOD

        http://expressjs.com/en/starter/basic-routing.html

Examples:

        HTTP method	        URI path requested	                  Express route
        
        GET	                http://localhost/	                    app.get('/', myFunc1);
        GET	                http://localhost/tweets	              app.get('/tweets', myFunc2);
        POST	              http://localhost/tweets	              app.post('/tweets', myFunc3);

        What do the handler functions (like myFunc above) receive? -->three objects:
        
        req : an object representing the request (http://expressjs.com/en/api.html#req)
        
        res : an object enabling Express to build and send a response (http://expressjs.com/en/api.html#res) 
                for that specific request
        
        next : a function that sends the request to the next handler in a chain 
                (needed for middleware & multi-step routing)   
                
        additional reading:   http://expressjs.com/guide/routing.html
        
--------------------------------------------        
        
Controllers handle some of the business logic and facilitate much of the transfer between data and views. 

Some in the Node community prefer calling controllers "routes." 

Express is unopinionated enough that it can be set up as a basic router 
or a more complex model-view-controller (MVC) framework. 

We will learn more about MVC later. For now, suffice it to say that routes can also be thought of as controllers.        
        
--------------------------------------------  


        
        
        
        
        
        
        
        
        
        

*/

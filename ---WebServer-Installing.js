/*
--------------------------------------------------------------------------------------

                                    Installing a WebServer

--------------------------------------------------------------------------------------

step 1: npm install http-server -g      <--globally installing one on your machine

** you got it**

      ------------------------------------------- 

if you say: which http-server

response: /usr/local/bin/http-server

      ------------------------------------------- 

if you say: http-server

response:
                Starting up http-server, serving ./
                Available on:
                  http://127.0.0.1:8080
                  http://192.168.111.40:8080
                  http://192.168.1.40:8080
                Hit CTRL-C to stop the server

      ------------------------------------------- 
      
if I went to a browser and typed in on of those urls: http://127.0.0.1:8080

response: I got a blank screen  --> The teacher got a directory structure

I then went to a clean directory (VinTest) and created: vin.js

on the url got:
                  Index of /

                  (-rw-r--r--)	0B	vin.js

                  Node.js v6.9.4/ ecstatic server running @ 127.0.0.1:8080                

      ------------------------------------------- 

As an aside:  the url is looking for an index.html file to run

let's:  touch index.html  ...and build a simple html file with hello in the body tag.

response: web page with --> hello <-- on it.

      ------------------------------------------- 

if I then create a vin.js file and put console.log('Hi vin'); in it
then within the script tags of index.html put    <script src = './vin.js'></script>

I will still get the hello and I will get Hi vin in the web console.

      ------------------------------------------- 
      
The server caches.

If you run the comd as follows, it will not cache:    http-server -c-1

      ------------------------------------------- 

















*/

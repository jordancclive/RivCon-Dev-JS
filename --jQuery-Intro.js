/*
--------------------------------------------------------------------------------

                              jQuery introduction

--------------------------------------------------------------------------------

What is jQuery used for:

    - find elements in an HTML Document.
    - Change HTML content.
    - listen to what a user does and react accordingly.
    - animate content on a page
    - talk over the network to fetch new content

--------------------------------------------------------------------------------

example HTML:

    <!DOCTYPE html>
    <html>
    <head>
        <title>jQuery Adventures</title>
    </head>
    <body>
        <h1>Where do you want to go?</h1>
        <p>Plan your next adventure.</p>
    </body>
    </html>
    
example CSS

    h1 {
        font-size: 3em;
    }
    p {
        color: blue;
    }
    
--------------------------------------------------------------------------------

The Document Object Model (DOM)

    A tree like structure that the browswer builds.  It allows us to quickly
    find HTML elements using JS.
    
    The DOM:            document node
                            html node
                                head node
                                    title node
                                        text node/element
                                body node
                                    h1 node
                                        text node/element
                                    p node
                                        text node/element
                                       
    How do we find things using the DOM?
    
        web server                                                            web browser
    -------------------                                      --------------------------------------------
    
          HTML         <--- User requests a web page    <-------    The user enters a web address.        
    
                       Server sends the HTML & other
       JavaScript      files needed to load that page --->    The web Browser loads the HTML into 
                       including JS.                          the DOM.  Once loaded we can execute the 
                                                              JS that was sent to interact with the DOM.
    -------------------                                      --------------------------------------------
    
    
   **** important ***
   
   Different Browsers have a slightly different DOM, and jQuery can comunicate to all of them easily.
   
   with this stmt--->  jQuery(document);
   
   to find different elements:    jQuery("h1"); or in shorthand:  $("h1");
                                  jQuery("p");                    $("p");
    
--------------------------------------------------------------------------------
                                
Task: find and change an element on a page: use the .text() method.

        $("h1").text();   --->returns:  "Where do you want to go?"
        
        $("h1").text("Where to?");   --->replaces the text to:  "Where to?"

--------------------------------------------------------------------------------        

*** important ***

The DOM takes a bit of time to build the tree structure 
and JS might execute before the DOM loads.  If it does, 
and your JS interacts with the DOM you will get an error. 
Note:  When the DOM is ready, it triggers an event...you need to listen for it.

So you need to do this:

            jQuery(document).ready(function(){
                <code>
            });

--------------------------------------------------------------------------------

                            Downloading jQuery

--------------------------------------------------------------------------------

Go to www.jQuery.com and download it.

load it into your HTML: <script src="jquery.min.js"></script>

start using it: create and application.js file and link that file for the HTML docuument.
                --->    <script src="application.js"></script>















--------------------------------------------------------------------------------

                              Traversing

--------------------------------------------------------------------------------










*/

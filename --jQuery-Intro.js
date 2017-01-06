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
    
--------------------------------------------------------------------------------
                                













*/

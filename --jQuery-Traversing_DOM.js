/*
--------------------------------------------------------------------------------

                              Traversing

--------------------------------------------------------------------------------

example HTML:                                       example CSS

    <!DOCTYPE html>                                     h1 {
    <html>                                                  font-size: 3em;
    <head>                                              }
        <title>jQuery Adventures</title>                p {
    </head>                                                 color: blue;
    <body>                                              }
        <h1>Where do you want to go?</h1>         
        <p>Plan your next adventure.</p>
    <ul id="destinations">
        <li>Rome</li>
        <li>
            <ul id="france">
                <li>Paris</li>
            </ul>
        <li class='promo'>Rio</li>        
    </body>
    </html>

--------------------------------------------------------------------------------

Picking <li> elements within a particular <ul>:   --->       $("#destinations li");
This uses the "descendent selector", 
which will select "all" the <li>s under #destination.

If you wanted only the children, 
not the children's decendents, then you need to use
the child selector.                               --->       $("#destinations > li");

if you wanted the items that were in the class .promo
or with the id #france, then:                     --->       $(".promo, #france");

How about the first <li> on the list, then:       --->       $("#destinations li:first");
use the pseudo selector.

...>other versions:   $("#destinations li:last");   
                      $("#destinations li:odd");      <---every other one. (remember the index starts at 0)
                      $("#destinations li:even");
                      
                      





*/

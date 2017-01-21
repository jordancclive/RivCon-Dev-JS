/*
--------------------------------------------------------------------------------------

                                        The DOM

--------------------------------------------------------------------------------------

The DOM is essentially a tree representation of an HTML page.

                          html
                         /    \
                     head      body
                      |        /   \
                  title      h1     div
                                      |
                                      p
--------------------------------------------------------------------------------------

Sample HTML:

        <html>
        <head>
          <title>Website Title</title>
        </head>
        <body>
          <h1>Page Title</h1>
          <div class="photos">
            <p>
              <!-- we want these four elements to be selected -->
              <img src="img1.jpg" class="photo">
              <img src="img2.jpg" class="photo">
              <img src="img3.jpg" class="photo">
              <img src="img4.jpg" class="photo">
            </p>
          </div>
        </body>
        </html>

some CSS:   for selector is img.photo

        img.photo {
          border: 1px solid blue;
        }

--------------------------------------------------------------------------------------

Previously JS used default berowser functions like:

        document.getElementById() or 
        document.getElementsByTagName() 
        
to search for specific elements in an HTML page. 
However, these functions are limited to searching only by id or tag name.

In jQuery, you can use the full power of CSS selectors to find elements like so: $('img.photo'). 

--------------------------------------------------------------------------------------















*/

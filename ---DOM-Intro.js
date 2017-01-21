/*
--------------------------------------------------------------------------------------

                                        The DOM

--------------------------------------------------------------------------------------

The DOM is essentially a tree representation of an HTML page.  ...a tree of nested objects

     Document --->        html
                         /    \__________
                     head                body
                      |                 /   \
                  title               h1      div class= 'photos'
                   |                  |           \
     'Website Title'       'Page Title'            p
                                                 ----------------------------------
                                                  /     \             \            \
                <img src="img1.jpg" class="photo">       \             \            \
                                <img src="img2.jpg" class="photo">      \            \
                                              <img src="img3.jpg" class="photo">      \
                                                                  <img src="img4.jpg" class="photo">
                                                  
                                                  
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

                              Codecademy Notes:
                              
                         Track(2):Intro to the DOM

--------------------------------------------------------------------------------------

The DOM is an API (Application Programming Interface) for interacting with HTML and XML documents. 

<html>
  <head>
    <title>A Grand Title</title>
    
    <script>
      // Whoa, whoa. What is all this?
      document.write("<p>The URL of this page is: " + document.location + "</p>");            <---(A)
      document.write("<p>The title of this page is: " + document.title + "</p>");             <---(B)
      
      var div = document.createElement("div");
      div.innerHTML = "A new div tag";
      document.body.appendChild(div);                                                         <---(C)
    </script>
  </head>
  <body>
    <!-- Still nothing here, for now. -->
  </body>
</html>

---------------------------
Results A, B & C in console:

            The URL of this page is: https://www.codecademy.com/assets/secure/index-e15cd898fa5906b22c02b7fc4cf8e509.html

            The title of this page is: A Grand Title

            A new div tag

---------------------------

You can chain elements together:

    var bodyTag = document.body;
    var divTag  = document.body.firstChild;
    var pTag    = document.body.firstChild.firstChild;

---------------------------

we can write to the console:

    <script>
      // Print the first child of the body element
      document.write(document.body.firstChild);

      // Set the value of firstP to the first <p> tag
      var firstP = document.body.children[0];

      // Arrays of arrays - 
      var link = document.body.children[1].children[0];

    </script>

---------------------------

you can access an element's inner html:

    <html>
      <head>
        <title>On your marks</title>
      </head>
      <body>
        <p>Get</p>
        <p>Set</p>
        <p>Stop</p>
        <p>And they're off...</p>
      </body>

      <script>
        // Get the third child of body using the children attribute
        var thirdP = document.body.children[2];

        // Assign a new value to the third p element using the innerHTML property
        thirdP.innerHTML = 'Go';
      </script>
    </html>

---------------------------

You can find parents:


    <html>
      <head>
        <title>Siblings and Parents</title>
      </head>
      <body>
        <p>A Paragraph</p>
        <ol>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
        </ol>
      </body>

      <script>
        // Get the paragraph element
        var para = document.body.children[0];

        // Get the parent of para
        var paraParent = para.parentNode;
      </script>
    </html>

---------------------------

You can get information out onto the web page:


      <html>
        <head>
          <title>Window.onload</title>
          <script>
            window.onload = function() {
               document.body.children[1].innerHTML = "This is JavaScript-created content."

            };
          </script>
        </head>
        <body>
          <p>This is some static content.</p>
          <p>This is the content we want to change.</p>
        </body>
      </html>

---------------------------

you can access properties of the browswer environment


<html>
  <head>
    <title>Screening the Screen</title>
    
    <script>
      // Write the screen height to the document
      document.write("<p>Height: " + window.screen.height + "</p>");
      // Write the screen width to the document
      document.write("<p>Width: " +window.screen.width + "</p>");
    </script>
  </head>
  <body>
    <!-- There's nothing here yet. -->
  </body>
</html>

---------------------------

you can access the location of the current web page file on its web server

This includes information like the URL (Uniform Resource Locator) 
and the directory of the current page on the host server.

      <html>
          <head>
            <title>Where in the World Wide Web?</title>

          <script>
            // Print out some information to the document
            document.write(
              "<p>Host Site: " + window.location.host + 
              "<br/>Current URL: " + location.href +
              "<br/>Relative Path: " + location.pathname + "</p>"
              );
          </script>
        </head>
        <body>
          <!-- Nothing here yet. -->
        </body>
      </html>

--------------------------------------------------------------------------------------

Important:

If we include JavaScript in our HTML, it will only have access to the DOM objects 
that have already been evaluated. So if we put our JavaScript in the head tag, 
it won't have access to any of the HTML in body.

To do so, wrap the JavaScript in the window.onload event handler. 
This essentially says "wait until the HTML has finished loading, 
and then execute my JavaScript". Using this technique is a very common way 
to ensure that your JavaScript has full access to the DOM.

      <html>
        <head>
          <title>Why use window.onload?</title>

          <script>
              window.onload = function() {
                  // Get the second child element of body and assign it to this variable
                  var toReplace = document.body.children[1];
                  // Set the content of the element
                  toReplace.innerHTML = "A fresh batch of gruyere";
              };
          </script>
        </head>
        <body>
          <h3>Grocery store inventory</h3>
          <p>Old moldy cheese</p>
          <p>Crispy apples</p>
          <p>Tasty, tasty arugula</p>
        </body>
      </html>


--------------------------------------------------------------------------------------


                              Selector Methods


--------------------------------------------------------------------------------------

Using a .js file:

      <html>
        <head>
          <title>Storytime</title>
        </head>
        <body>
          <h1 id="header">Famous Children's Stories</h1>                          <---id is unique
          <p>These are some of the great works of children's literature.</p>
          <ul>
            <li name="priority">The Wizard of Oz</li>                             <---name is not unique
            <li>Alice in Wonderland</li>
            <li id="remove">The Brothers Karamazov</li>
            <li name="priority">Where the Wild Things Are</li>
            <li>The Giving Tree</li>
          </ul>
          <p>Can you think of any others? Why not add them to the list?</p>
        </body>
        <script type="text/javascript" src="script.js"></script>
      </html>

      script.js:

          window.onload = function() {
            document.write("Once upon a time");  
          };

      ---> This example wipes out the web pag and replace it with the document.write stmt.

---------------------------

getElementsByTagName()

This method takes a tag name as its argument 
and returns an array-like object of Element objects that represent 
each instance of those tags in the HTML. 

      script.js:
      
      window.onload = function() {
        // The variable paragraphs will hold an array-like object of all <p> elements
        var paragraphs = document.getElementsByTagName("p");

        // Now we do some stuff to the first paragraph
        paragraphs[0].innerHTML = "These are some of the most well-known children's stories.";
      };

---------------------------

getElementById()

This method returns the element that represents the HTML 
tag with the same id as the argument. 
Since the id attribute is (or should be) unique within a document, 
this method returns just the one element, not an array.


      window.onload = function() {
        // Retrieve the tag with the id "header", 
        // then change its value to "Best Stories Ever"
        var temp = document.getElementById("header");
        temp.innerHTML = "Best Stories Ever";

      };

---------------------------

getElementsByName()

      window.onload = function() {
        // Retrieve the elements with the name attribute of "priority"
        var b = document.getElementsByName("priority");

        // This is a bit more complex, as it uses a regular expression
        // to find and replace HTML content.
        // Don't worry if you can't understand, you'll get there soon enough.
        for (i=0; i<b.length; i++) {
          b[i].innerHTML = b[i].innerHTML.replace(/(.*)/, "<b>$1</b>");
        }
      };
      
--------------------------------------------------------------------------------------


                             Creation & Destruction


--------------------------------------------------------------------------------------

createElement()

// Create a new li element to add to the list
var newStory = document.createElement('li');

// And let's give it some content
newStory.innerHTML = "Gulliver\'s Travels";

---------------------------

appendChild(div)

      var div = document.createElement("div");
      div.innerHTML = "A new div tag";
      document.body.appendChild(div); 

---------------------------

removeChild()

Like appendChild(), you call it on the parent of the element you want to remove, 
and then pass the element you want to remove as the argument.

        window.onload = function() {
          // Grab the inappropriate story from the list using its id attribute
          var wrongStory = document.getElementById("remove");

          // And now lets quietly get rid of it
          document.getElementById("storylist").removeChild(wrongStory);
        }

--------------------------------------------------------------------------------------



*/

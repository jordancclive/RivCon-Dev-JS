-----------------------------------------------------------------------

                        HTML & CSS Intro

-----------------------------------------------------------------------

Definition:

    HTML, HyperText Markup Language, gives content structure and meaning by defining that content as, 
    for example, headings, paragraphs, or images. 

    CSS, or Cascading Style Sheets, is a presentation language created to style the appearance of content—using, 
    for example, fonts or colors.

-----------------------------------------------------------------------

HTML terms:

    Elements

        Elements are designators that define the structure and content of objects within a page. 
        
        Some of the more frequently used elements include multiple levels of headings 
        (identified as <h1> through <h6> elements) and paragraphs (identified as the <p> element); 
        the list goes on to include the <a>, <div>, <span>, <strong>, and <em> elements, and many more.

        Elements are identified by the use of less-than and greater-than angle brackets, 
        < >, surrounding the element name.
        
            ex:  <a>
        
    Tags

        The use of less-than and greater-than angle brackets surrounding an element creates what is known as a tag. 
        Tags most commonly occur in pairs of opening and closing tags.

        An opening tag marks the beginning of an element. 
        It consists of a less-than sign followed by an element’s name, 
        and then ends with a greater-than sign; for example, <div>.

        A closing tag marks the end of an element. It consists of a less-than sign 
        followed by a forward slash and the element’s name, 
        and then ends with a greater-than sign; for example, </div>.

        The content that falls between the opening and closing tags is the content of that element. 
        An anchor link, for example, will have an opening tag of <a> and a closing tag of </a>. 
        What falls between these two tags will be the content of the anchor link.

            So, anchor tags will look a bit like this:  <a>...</a>

    Attributes

        Attributes are properties used to provide additional information about an element. 
        
        The most common attributes include the id attribute, which identifies an element; 
        the class attribute, which classifies an element; 
        the src attribute, which specifies a source for embeddable content; 
        and the href attribute, which provides a hyperlink reference to a linked resource.

        Attributes are defined within the opening tag, after an element’s name. 
        
        Generally attributes include a name and a value. 
        The format for these attributes consists of the attribute name followed by an equals sign 
        and then a quoted attribute value. 
        
        For example, an <a> element including an href attribute would look like the following:
        
            <a href="http://shayhowe.com/">Shay Howe</a>
            
-----------------------------------------------------------------------

HTML Document Structure:

    All HTML documents have a required structure that includes the following declaration and elements: 
    <!DOCTYPE html>, <html>, <head>, and <body>.
    
        <!DOCTYPE html>                       //Which version of HTML is being used.  This shows the current version.
        
        <html lang="en">
          <head>                              //identifies the top of the document
            <meta charset="utf-8">            //you put metadata here
            <title>Hello World</title>        //shows on the title bar.
                                              //you would also put links to external files here
                                              //if you had local css styles, they would be here.
          </head> 
          
          <body>                              //all visible content goes between the body tags;
            <h1>Hello World</h1>
            <p>This is a web page.</p>
          </body>
        </html>


Self-Closing Elements

    In the previous example, the <meta> element had only one tag and didn’t include a closing tag. 
    
    Some elements simply receive their content or behavior from attributes within a single tag. 
    Other common selfclosing elements include

        <br> <embed> <hr> <img> <input> <link> <meta> <param> <source> <wbr>


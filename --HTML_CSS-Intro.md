-----------------------------------------------------------------------

                        HTML & CSS Intro

-----------------------------------------------------------------------

                              HTML

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

-----------------------------------------------------------------------

                                  CSS

-----------------------------------------------------------------------

CSS Terms:

    These terms include selectors, properties, and values.
    
        Selectors

            A selector designates exactly which element or elements within our HTML to target 
            and apply styles (such as color, size, and position) to. 
            
            Selectors may include a combination of different qualifiers to select unique elements, 
            all depending on how specific we wish to be. For example, we may want to select every 
            paragraph on a page, or we may want to select only one specific paragraph on a page.

            Selectors generally target an attribute value, such as an id or class value, 
            or target the type of element, such as <h1> or <p>.

            Within CSS, selectors are followed with curly brackets, {}, which encompass the 
            styles to be applied to the selected element. The selector here is targeting all <p> elements.
            
                p { ... }

        
        Properties

            Once an element is selected, a property determines the styles that will be applied to that element. 
            
            Property names fall after a selector, within the curly brackets, {}, and immediately preceding a colon, :. 
            
            There are numerous properties we can use, such as background, color, font-size, height, and width, 
            and new properties are often added. In the following code, we are defining the color and 
            font-size properties to be applied to all <p> elements.
            
                p {
                  color: ...;
                  font-size: ...;
                }

        Values

            So far we’ve selected an element with a selector and determined what style 
            we’d like to apply with a property. 
            
            Now we can determine the behavior of that property with a value. 
            
            Values can be identified as the text between the colon, :, and semicolon, ;. 
            
            Here we are selecting all <p> elements and setting the value of the color property 
            to be orange and the value of the font-size property to be 16 pixels.
            
                p {
                  color: orange;
                  font-size: 16px;
                }
                      
-----------------------------------------------------------------------










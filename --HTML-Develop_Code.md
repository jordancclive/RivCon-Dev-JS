------------------------------------------------------------------------------

                          HTML-Develop_Code

------------------------------------------------------------------------------
What is semantic code?

    HTML was originally intended as a means of describing the content of a document, 
    not as a means to make it appear visually pleasing. 
    
    Semantic code returns to this original concept and encourages web designers to write code 
    that describes the content rather than how that content should look. 
    
    For example, the title of a page could be coded like this:
    
            <font size="6"><b>This is the page title</b></font>

    To write the same title semantically so that a computer understands 
    that this is a title, you would use the following code:
    
            <h1>This is a heading</h1>
            
    The appearance of your heading can then be defined in a separate file 
    called a "cascading style sheet" without interfering with your descriptive (semantic) HTML code.    
    
------------------------------------------------------------------------------

Block vs. Inline Elements

    Most elements are either block- or inline-level elements. What’s the difference?

    Block-level elements begin on a new line, stacking one on top of the other, 
    and occupy any available width. Block-level elements may be nested inside 
    one another and may wrap inline-level elements. We’ll most commonly see block-level 
    elements used for larger pieces of content, such as paragraphs.

    Inline-level elements do not begin on a new line. They fall into the normal flow of a document, 
    lining up one after the other, and only maintain the width of their content. 
    Inline-level elements may be nested inside one another; however, 
    they cannot wrap block-level elements. We’ll usually see inline-level 
    elements with smaller pieces of content, such as a few words.

------------------------------------------------------------------------------

Identifying Divisions & Spans:

    Divisions, or <div>s, and <span>s are HTML elements that act as containers solely for styling purposes. 
    
    A <div> is a block-level element that is commonly used to identify large groupings of content, 
    and which helps to build a web page’s layout and design. 
    
    A <span>, on the other hand, is an inline-level element commonly used to identify smaller groupings 
    of text within a block-level element.
    
    We’ll commonly see <div>s and <span>s with class or id attributes for styling purposes. 
    Choosing a class or id attribute value, or name, requires a bit of care. We want to choose 
    a value that refers to the content of an element, not necessarily the appearance of an element.
    
    Example:
    
            <!-- Division -->
            <div class="social">
              <p>I may be found on...</p>
              <p>Additionally, I have a profile on...</p>
            </div>

            <!-- Span -->
            <p>Soon we'll be <span class="tooltip">writing HTML</span> with the best of them.</p>
    
Comments within HTML & CSS

            HTML comments start with <!-- and end with -->. 
            
            CSS comments start with /* and end with */.
    
Headings

    Headings are block-level elements, and they come in six different rankings, <h1> through <h6>. 
    
    Headings help to quickly break up content and establish hierarchy, 
    and they are key identifiers for users reading a page. They also help search 
    engines to index and determine the content on a page. ...as a result: Headings should be used 
    in an order that is relevant to the content of a page.  
    
Paragraphs

    Headings are often followed by supporting paragraphs. 
    Paragraphs are defined using the <p> block-level element. Paragraphs can appear 
    one after the other, adding information to a page as desired. 
    
    Here is an example of how to set up paragraphs.    
    
        <p>Steve Jobs was a co-founder and longtime chief executive officer at Apple. On June 12, 2005, 
        Steve gave the commencement address at Stanford University.</p>

        <p>In his address Steve urged graduates to follow their dreams and, despite any setbacks, 
        to never give up&ndash;advice which he sincerely took to heart.</p>
    
Bold Text with Strong

    To make text bold and place a strong importance on it, we’ll use the <strong> inline-level element. 
    There are two elements that will bold text for us: the <strong> and <b> elements. 
    
    It is important to understand the semantic difference between the two.

    The <strong> element is semantically used to give strong importance to text, and is thus 
    the most popular option for bolding text. 
    
    The <b> element, on the other hand, semantically means to stylistically offset text, 
    which isn’t always the best choice for text deserving prominent attention. We have to gauge 
    the significance of the text we wish to set as bold and to choose an element accordingly. 
  
            <!-- Strong importance -->
            <p><strong>Caution:</strong> Falling rocks.</p>

            <!-- Stylistically offset -->
            <p>This recipe calls for <b>bacon</b> and <b>baconnaise</b>.</p>
  
Italicize Text with Emphasis

    To italicize text, thereby placing emphasis on it, we’ll use the <em> inline-level element. 
    As with the elements for bold text, there are two different elements that will italicize text, 
    each with a slightly different semantic meaning.

    The <em> element is used semantically to place a stressed emphasis on text; 
    it is thus the most popular option for italicizing text. 
    
    The other option, the <i> element, is used semantically to convey text in an alternative voice or tone, 
    almost as if it were placed in quotation marks. 
    
    Again, we will need to gauge the significance of the text we want to italicize and choose an element accordingly.

    
            <!-- Stressed emphasis -->
            <p>I <em>love</em> Chicago!</p>

            <!-- Alternative voice or tone -->
            <p>The name <i>Shay</i> means a gift.</p>

Building Structure

    For the longest time the structure of a web page was built using divisions. 
    The problem was that divisions provide no semantic value, and it was fairly difficult 
    to determine the intention of these divisions. 
    
    Fortunately HTML5 introduced new structurally based elements, including the:
    
        <header>, <nav>, <article>, <section>, <aside>, and <footer> elements.

    All of these new elements are intended to give meaning to the organization of our pages 
    and improve our structural semantics. They are all block-level elements and do not have any 
    implied position or style. Additionally, all of these elements may be used multiple times per page, 
    so long as each use reflects the proper semantic meaning.
    
                --------------------------------------------------------------- 
                |                                                             |                            
                |                           <header>                          |
                |                                                             |   
                --------------------------------------------------------------- 
                ----------------------------------------   -------------------- 
                |                                      |   |                  |                                                                         
                |            <section>                 |   |                  |
                |                                      |   |                  |  
                |     ----------------------------     |   |                  |
                |     |                          |     |   |     <aside>      |
                |     |         <article>        |     |   |                  |
                |     |                          |     |   |                  |                                
                      ----------------------------     |   |                  |
                |                                      |   |                  |    
                ----------------------------------------   --------------------   
                --------------------------------------------------------------- 
                |                                                             |                                             
                |                          <footer>                           |
                |                                                             |  
                ---------------------------------------------------------------   
  
  
  
    
    
    
    
    

    

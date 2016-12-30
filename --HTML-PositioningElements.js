/*
--------------------------------------------------------------------------------------------

                                    Positioning Elements

--------------------------------------------------------------------------------------------

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
    
    
    Block elements always start on a new line, and will take up the maximum width available. 
    h1-h6, div, p, and ul are examples of block elements. 
    
    Inline elements instead occur in-line with the rest of the elements or text. T
    his means that they only take up as much width as necessary, and can be on the same line. 
    Examples of inline elements include span, a, and em.
    
--------------------------------------------------------------------------------------------

Example Code:

<div id='footer'>
            <div class='row'> 
                <div class='col-sm-4 center'>
                      <img src='assets/fa-logo@2x.png'></img>
                </div>

                <div id= 'developer'' class='col-sm-4 center'>
                      <h4>Project by Vincent Rios</h4>
                </div>

                <div class='col-sm-4 center'>
                      <img src='assets/grace_hopper_academy.png'></img>
                </div>
            </div>
  </div>


<style>
.................our style change will be in this block (below)
</style>


What follows are examples for moving the element with the id:  'developer'

We will also refer to the parent div with the id: 'footer'


--------------------------------------------------------------------------------------------

Using the position: relative style on an element.

        <style>
          #developer {
              position: relative;         <---  positions the element relative to where it was normally in the flow
                                                of the document. The default postion of an element is called 
                                                its 'static' position.    ---> position: static; 
              top: 100px;                 <---  From the top of where it was originally positioned.
              left: 200px;                <---  From the left postion of where it was originally.
          }
        </style>

--------------------------------------------------------------------------------------------

Using the position: absolute style on an element.

        <style>
          #developer {
              position: absolute;         <---  positions the element absolutely on the page.
              top: 100px;           
              left: 200px;               
          }
        </style>

--------------------------------------------------------------------------------------------

Using the position: absolute style on an element but also making its parent div have a relative position.

        <style>
          #developer {
              position: absolute;         <---  positions the element absolutely on the page.
              top: 100px;           
              left: 200px;               
          }
          #footer {
              position: relative;         <---  This position statement makes the browser know
                                                that its postion is relative.  
                                                
                                                Note: We did not state any top or left statements.
                                                      What happens is that the footer still resides
                                                      in its default location.
                                                      
                                                      The important issue is that now the developer
                                                      element will be positioned absolutely within the 
                                                      parent's div element.
          }
        </style>

--------------------------------------------------------------------------------------------












*/

/*
------------------------------------------------------------------------------------------

                                  CSS-Develop_Code

------------------------------------------------------------------------------------------

Anatomy of a CSS rule:


          |<--------------------------Selector
          |
        body  {
            color:  red;     <--------Declaration
        }

        .class  {
            font-size:  50px;
        }

        #title  {
            text-align: center;
        }

------------------------------------------------------------------------------------------

The Cascade

        We’ll begin breaking down exactly how styles are rendered by looking at what is known as the cascade 
        and studying a few examples of the cascade in action. Within CSS, all styles cascade from the top 
        of a style sheet to the bottom, allowing different styles to be added or overwritten as the style sheet progresses.

        For example, say we select all paragraph elements at the top of our style sheet 
        and set their background color to orange and their font size to 24 pixels. 
        Then towards the bottom of our style sheet, we select all paragraph elements again 
        and set their background color to green, as seen here.

                p {
                  background: orange;
                  font-size: 24px;
                }
                p {
                  background: green;
                }

        Because the paragraph selector that sets the background color to green comes after the 
        paragraph selector that sets the background color to orange, it will take precedence in the cascade. 
        
        All of the paragraphs will appear with a green background. 
        
        The font size will remain 24 pixels because the second paragraph selector didn’t identify a new font size.


Cascading Properties

        The cascade also works with properties inside individual selectors. 
        Again, for example, say we select all the paragraph elements and set their background color to orange. 
        Then directly below the orange background property and value declaration, 
        we add another property and value declaration setting the background color to green, as seen here.

        p {
          background: orange;
          background: green;
        }

        Because the green background color declaration comes after the orange background color declaration, 
        it will overrule the orange background, and, as before, our paragraphs will appear with a green background.

        All styles will cascade from the top of our style sheet to the bottom of our style sheet. 
        There are, however, times where the cascade doesn’t play so nicely. 
        Those times occur when different types of selectors are used and the specificity of those selectors 
        breaks the cascade. 
        

Specificity Points

        Specificity points are intentionally hyphenated, as their values are not computed from a base of 10. 
        Class selectors do not hold a point value of 10, and ID selectors do not hold a point value of 100. 
        Instead, these points should be read as 0-1-0 and 1-0-0 respectively. 
        
        We’ll take a closer look at why these point values are hyphenated shortly, when we combine selectors.


Calculating Specificity

        Every selector in CSS has a specificity weight. A selector’s specificity weight, 
        along with its placement in the cascade, identifies how its styles will be rendered.

        In Lesson 1, “Building Your First Web Page,” we talked about three different types of selectors: 
        the type, class, and ID selectors. Each of these selectors has a different specificity weight.

        The type selector has the lowest specificity weight and holds a point value of 0-0-1. 
        
        The class selector has a medium specificity weight and holds a point value of 0-1-0. 
        
        Lastly, the ID selector has a high specificity weight and holds a point value of 1-0-0. 
        
        As we can see, specificity points are calculated using three columns. 
        
                - The first column counts ID selectors, 
                
                - the second column counts class selectors, 
                
                - and the third column counts type selectors.

        What’s important to note here is that the ID selector has a higher specificity weight than the class selector, 
        and the class selector has a higher specificity weight than the type selector.

        The higher the specificity weight of a selector, the more superiority the selector is given 
        when a styling conflict occurs. 
        
        For example, if a paragraph element is selected using a type selector in one place and an ID selector in another, 
        the ID selector will take precedence over the type selector regardless of where the ID selector appears in the cascade.

                HTML

                        <p id="food">...</p>

                CSS

                        #food {
                          background: green;
                        }
                        p {
                          background: orange;
                        }

        Here we have a paragraph element with an id attribute value of food. Within our CSS, 
        that paragraph is being selected by two different kinds of selectors: 
        
                one type selector and one ID selector. 
        
        Although the type selector comes after the ID selector in the cascade, 
        the ID selector takes precedence over the type selector because it has a higher specificity weight; 
        consequently the paragraph will appear with a green background.

        The specificity weights of different types of selectors are incredibly important to remember. 
        At times styles may not appear on elements as intended, and chances are the specificity weights 
        of our selectors are breaking the cascade, therefore our styles are not appearing properly.

        Understanding how the cascade and specificity work is a huge hurdle, and we’ll continue to cover this topic. 
        For now, let’s look at how to be a little more particular and intentional with our selectors by combining them. 
        Keep in mind that as we combine selectors, we’ll also be changing their specificity.

Combining Selectors

        So far we’ve looked at how to use different types of selectors individually, but we also need to know 
        how to use these selectors together. By combining selectors we can be more specific about which element 
        or group of elements we’d like to select.

        For example, say we want to select all paragraph elements that reside within an element with 
        a class attribute value of hotdog and set their background color to brown. 
        
        However, if one of those paragraphs happens to have the class attribute value of mustard, 
        we want to set its background color to yellow. Our HTML and CSS may look like the following:

        HTML

                <div class="hotdog">
                  <p>...</p>
                  <p>...</p>
                  <p class="mustard">...</p>
                </div>


        CSS

                .hotdog p {
                  background: brown;
                }
                .hotdog p.mustard {
                  background: yellow;
                }

              
        When selectors are combined they should be read from right to left. The selector farthest to the right, 
        directly before the opening curly bracket, is known as the key selector. 
        
        The key selector identifies exactly which element the styles will be applied to. 
        Any selector to the left of the key selector will serve as a prequalifier.

        The first combined selector above, .hotdog p, includes two selectors: a class and a type selector. 
        These two selectors are separated by a single space. 
        
        The key selector is a type selector targeting paragraph elements. 
        And because this type selector is prequalified with a class selector of hotdog, 
        the full combined selector will only select paragraph elements that reside within an element 
        with a class attribute value of hotdog.

        The second selector above, .hotdog p.mustard, includes three selectors: 
        two class selectors and one type selector. 
        
        The only difference between the second selector and the first selector is the addition of the class selector of mustard 
        to the end of the paragraph type selector. Because the new class selector, mustard, falls all the way to the right 
        of the combined selector, it is the key selector, 
        and all of the individual selectors coming before it are now prequalifiers.


Spaces Within Selectors

        Within the previous combined selector, .hotdog p.mustard, there is a space between the hotdog class selector 
        and the paragraph type selector but not between the paragraph type selector and the mustard class selector. 
        The use, and omission, of spaces makes a large difference in selectors.

        Since there isn’t a space between the paragraph type selector and the mustard class selector 
        that means the selector will only select paragraph elements with the class of mustard. 
        If the paragraph type selector was removed, and the mustard class selector had spaces on both sides of it, 
        it would select any element with the class of mustard, not just paragraphs.

        The best practice is to not prefix a class selector with a type selector. 
        Generally we want to select any element with a given class, not just one type of element. 
        And following this best practice, our new combined selector would be better as .hotdog .mustard.


Specificity Within Combined Selectors

        When selectors are combined, so are the specificity weights of the individual selectors. 
        These combined specificity weights can be calculated by counting each different type of selector 
        within a combined selector.

        Looking at our combined selectors from before, the first selector, .hotdog p, had both a class selector 
        and a type selector. Knowing that the point value of a class selector is 0-1-0 and the point value 
        of a type selector is 0-0-1, the total combined point value would be 0-1-1, found by adding up each kind of selector.

        The second selector, .hotdog p.mustard, had two class selectors and one type selector. 
        Combined, the selector has a specificity point value of 0-2-1. The 0 in the first column is for zero ID selectors, 
        the 2 in the second column is for two class selectors, and the 1 in the last column is for one type selector.

        Comparing the two selectors, the second selector, with its two classes, 
        has a noticeably higher specificity weight and point value. 
        As such it will take precedence within the cascade. 
        If we were to flip the order of these selectors within our style sheet, 
        placing the higher-weighted selector above the lower-weighted selector as shown here, 
        the appearance of their styles would not be affected due to each selector’s specificity weight.

                .hotdog p.mustard {
                  background: yellow;
                }
                .hotdog p {
                  background: brown;
                }

              
        In general we want to always keep an eye on the specificity weights of our selectors. 
        The higher our specificity weights rise, the more likely our cascade is to break.

Layering Styles with Multiple Classes
        
        One way to keep the specificity weights of our selectors low is to be as modular as possible, 
        sharing similar styles from element to element. And one way to be as modular as possible is to layer 
        on different styles by using multiple classes.

        Elements within HTML can have more than one class attribute value so long as each value is space separated. 
        With that, we can place certain styles on all elements of one sort while placing other styles only on 
        specific elements of that sort.

        We can tie styles we want to continually reuse to one class and layer on additional styles from another class.

        Let’s take a look at buttons, for example. Say we want all of our buttons to have a font size of 16 pixels, 
        but we want the background color of our buttons to vary depending on where the buttons are used. 
        We can create a few classes and layer them on an element as necessary to apply the desired styles.

                HTML

                <a class="btn btn-danger">...</a>
                <a class="btn btn-success">...</a>


                CSS

                .btn {
                  font-size: 16px;
                }
                .btn-danger {
                  background: red;
                }
                .btn-success {
                  background: green;
                }

              
        Here you can see two anchor elements, both with multiple class attribute values. 
        The first class, btn, is used to apply a font size of 16 pixels to each of the elements. 
        
        Then, the first anchor element uses an additional class of btn-danger to apply a red background color 
        while the second anchor element uses an additional class of btn-success to apply a green background color. 
        Our styles here are clean and modular.

        Using multiple classes, we can layer on as many styles as we wish, keeping our code lean 
        and our specificity weights low. Much like understanding the cascade and calculating specificity, 
        this is a practice that will take time to fully absorb, but we’ll get better with each lesson.


















*/

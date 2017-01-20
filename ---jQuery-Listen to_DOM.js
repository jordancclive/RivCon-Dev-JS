/*
--------------------------------------------------------------------------------

                              Listening to
                               DOM events
                              
--------------------------------------------------------------------------------

First, let's look at a page we are going to disply:

|--------------------------------------------------|
|    jQuery Air Atlantic - Vacation Confirmation   |
|                                                  |
|    Confirmation                                  |
|                                                  |
|      Hawiian Vacation  (img)                          |
|                                                  |
|      Paid $399.99 on January 14,2013             |
|                                                  |
|      |-----------------|                         |
|      |  flight details |   <---button            |
|      |-----------------|                         |  
|--------------------------------------------------|

-----------------------------------

HTML
...
  <li class='confirmation'>
      <button>FLIGHT DETAILS</button>
      <ul class='ticket'>...</ul>
  </li>

-----------------------------------

  We are going to add to the .CSS:
  
    .ticket {
        display: none;
    }
  
-----------------------------------

Task list:

    1.  watch for a button click
    2.  find the ticket
    3.  show the ticket
    
-----------------------------------

Some methods we need to know:

    .slideDown()      <---  makes the ticket be shown from an original state when nothing is shown
    
    .slideUp()        <---  hides the ticket
    
    .slideToggle()    <---  toggles between the two states.

-----------------------------------

Our event handler:

    $('.confirmation').on('click', 'button', function(){
        $(this).closest('.confirmation').find('.ticket').slideDown();
    }));
    
    We click on the button and let's say nothing works.             ***hypothetically***
    
    Let's debug things with alert & length:

          alert($('li').length);    <--- should return 1 in the above case.
                                         if it returns zero, there might be a problem with the button itself
                                         of the fact that you did not wrap things with a ready method.
     
     
     $(document).ready(function(){
            $('.confirmation').on('click', 'button', function(){
            $(this).closest('.confirmation').find('.ticket').slideDown();
            })); 
     }));
                                         
     --------> It works now!
     
--------------------------------------------------------------------------------

                              Listening to
                               DOM events
                               
                              Mouse events
                              
--------------------------------------------------------------------------------

Some mouse methods to know:

    click,  focusin,  mousedown,  mousemove,  mouseover,  mounseenter,
    dblclick, focusout, mouseup,  mouseout, mouseleave
    
--------------------------------------------------------------------------------    

Adding to the previous event handler:

     $(document).ready(function(){
            $('.confirmation').on('click', 'button', function(){
            $(this).closest('.confirmation').find('.ticket').slideDown();
            })); 
            $('.confirmation').on('mouseenter', 'h3', function(){           <---mouseenter fires when 
            $(this).closest('.confirmation').find('.ticket').slideDown();       you first move over the img
            }));             
     }));
     
-----------------------------------

Clean up the code:

      function showTicket() {
            $(this).closest('.confirmation').find('.ticket').slideDown();
      }

     $(document).ready(function(){
            $('.confirmation').on('click', 'button', showTicket); 
            $('.confirmation').on('mouseenter', 'h3', showTicket);             
     }));

--------------------------------------------------------------------------------

                              Listening to
                               DOM events
                               
                             Keyboard events
                              
--------------------------------------------------------------------------------

Some keyboard methods to know:

        Keyboard Events           Form Events

        keypress                  blur      select
        keydown                   change    focus
        keyup                     submit

        http://api.jquery.com/category/events/keyboard-events/
        http://api.jquery.com/category/events/form-events/

--------------------------------------------------------------------------------

Helper methods for getting input:

        .val()              <--- gets the value
        .val(new value)     <--- sets the value.

--------------------------------------------------------------------------------

DOM

document
    li    .vacation
        p
            input   .quantity     <---a person will type a quantity with the keyboard
    p                                 (an input field)
        span    #total            <-- this is what we are going to change.

--------------------------------------------------------------------------------

Code:

        $(document).ready(function(){
            $('.vacation').on('keyup', '.quantity', function(){
                //get the price for this vacation
                //get the qty entered
                //set the total to price* qty
            });
        });
        
        Will be inserting:
        
                var price = +$(this).closest('.vacation').data('price');   <--- gets the price. returns a string
                                                                                the plus turns it into a number.
                var quantity = +$(this).val();      <--- returns The value inputed from the keyboard.  Which
                                                          is the thing that fired the event handler, hence "this".
                $('#total').text(price*quantity);     <---Puts the value on the screen.

-----------------------------------

The resulting code:

        $(document).ready(function(){
            $('.vacation').on('keyup', '.quantity', function(){
                var price = +$(this).closest('.vacation').data('price');  
                var quantity = +$(this).val();    
                $('#total').text(price*quantity);   
            });
        });

--------------------------------------------------------------------------------
                              Listening to
                               DOM events
                               
                              Click event
                              
--------------------------------------------------------------------------------

Some methods to know:

            .fadeIn();    .fadeOut();   .fadeToggle();


--------------------------------------------------------------------------------
DOM for this example:

    document                                          CSS for this example:
        ul                                            (in application.css)
            li    .vacation                         
                a   .expand
                    Show Comments text                .comments {
                ul    .comments                           display: one;
                    li                                }
                    li

                If you cick the link (above) show comments
                ...will show the appropriate comments.
                
--------------------------------------------------------------------------------

Code:

        $(document).ready(function(){
            $('.vacation').on('click', '.expand', function(event){      <---  Notice
                  //find the comments ul.
                  //show this comments ul.
            });
        });  
        
        Will be inserting:
        
        $(this).closest('.vacation').find('.comments').fadeToggle();

-----------------------------------

We came into this example by someone clicking a link within the browswer.

      <a href='#' class='expand'>Show Comments</a>                  <---  When you click an event at the bottom
                                                                          of the page, in this case the browswer 
                                                                          pops up to the top of the page
                                                                          ...need to address this.
                                                                          
      Note well:  When an event occurs the browser traverses up the tree 
                  to let each parent know that a click event occurred.
                  
                  Eventually this traversing gets to the top and because we have an href
                  link with a hash ('#'), the browswer is going to follow that link and the 
                  default behavior is to go to the top of the page.
                  
-----------------------------------

      One possible solution:
      
      - add the event paramenter inside the event handler function call. (step 1)
      
                                                                  
        $(document).ready(function(){                                  
            $('.vacation').on('click', '.expand', function(event){  <--- (step 1)
                    event.stopPropagation();                        <---  Will still handle the click event
            });                                                           but will prevent bubble up the parent
        });                                                               nodes (ancestors).         
                                                                          
                                                                          Although this will not stop the browser
                                                                          default behavior for the above link, so 
                                                                          you will satill pop up to the top of the page.

-----------------------------------

      What we can do is:
      
              $(document).ready(function(){                                  
            $('.vacation').on('click', '.expand', function(event){  <--- (step 1)
                    event.preventDefault();                         <---  Will stop the browser default behavior
            });                                                           from happening.
        });                                                               *** This will work ***

-----------------------------------

      The resulting code:
      
              $(document).ready(function(){                                  
            $('.vacation').on('click', '.expand', function(event){ 
                    event.preventDefault();  
                    $(this).closest('.vacation').find('.comments').fadeToggle();
            });                                                           
        });                        
       
-----------------------------------------------------------------------------------






*/






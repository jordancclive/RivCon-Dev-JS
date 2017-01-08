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
                               
                             Keyboard events
                              
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

-----------------------------------














*/

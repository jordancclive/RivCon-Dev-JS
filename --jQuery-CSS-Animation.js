/*
--------------------------------------------------------------------------------
 
                              Taming CSS
                                 and
                              Animations
                              
--------------------------------------------------------------------------------

The page:

|----------------------------------------------------------|
|    jQuery Air Atlantic - Vacation Packages               |
|                                                          |
|    Packages                                              |
|                                                          |
|    ----------------    -----------------   -----------   |
|    Hawiian Vacation    European Vacation   Visit Japan   |
|                                                          |
|                                                          |
|                                                          |
|    ----------------    -----------------   -----------   |
|                                                          |
|    Call us at 555-1234 to make a researvation today!     |  
|----------------------------------------------------------|

The Dom:

  document
     div  #vacations
       ul
         li  .vacation
           p  .price
         
--------------------------------------------------------------------------------

If we want to change the style of something which should we use?:

    HTML
    
    CSS             <---|
                        | We can use both of these, but let's do JS for now.
    JavaScript      <---|

--------------------------------------------------------------------------------

Some methods we should know:

       can set the CSS, by specifiying the attribute and value:    .css(<attr>,<value>)
       
       can get the value by specifying the attribute:              .css(<attr>)
       
       we can send in an object:                                   .css(<object>)
       
       jQuery methods:   .show()     .hide()

--------------------------------------------------------------------------------

Let's make it that when a person clicks on the <li> element, it changes the style.

     $(document).ready(function(){
            $('#vacations').on('click', '.vacation', function(){
                  $(this).css('background-color', '#252b30');       <--- setting the value of the background color. 
                  $(this).css('border-color', '1px solid #967');         and border color.
            });
     });

-----------------------------------

We can also string them together in one statement:

                  $(this).css('background-color', '#252b30').css('border-color', '1px solid #967'); 

-----------------------------------

The cleanest way is to set them with an object:

      $(this).css({'background-color': '#252b30',       
                   'border-color': '1px solid #967'});   

-----------------------------------

When our vacations are clicked, we wnat to show the price:

       $(this).find('.price').css('display', 'block');
           ^      ^                 ^
The vacation      will find         change from display none
     clicked      the price         to display block
                  class             jQuery methods do the same thing: .show()   .hide()

So let's change the above:  --->    $(this).find('.price').show();
it is easier to read.

-----------------------------------

The final code:

     $(document).ready(function(){
            $('#vacations').on('click', '.vacation', function(){
                   $(this).css({'background-color': '#252b30',       
                                'border-color': '1px solid #967'});
                   $(this).find('.price').show();
            });
     });

-----------------------------------

Can we move everything to the stylesheet?  .....yes! 

The CSS:

            .highlighted {
                   'background-color': '#252b30',       
                   'border-color': '1px solid #967';
            }
            .highlighted .price {
                   display: 'block';
            }
            
The Adjusted Code:   

     $(document).ready(function(){
            $('#vacations').on('click', '.vacation', function(){
                   $(this).toggleClass('highlighted');
            });
     });

--------------------------------------------------------------------------------









*/

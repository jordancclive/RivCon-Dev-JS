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
                   'background-color': '#252b30';       
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
 
                              Animations
                              
--------------------------------------------------------------------------------

Some methods we should know:

          .animate(<object>);   <--- if you tell it to move from pt 1 to pt 2, it will do it gradually.
          
                   .animate({'top': '-10px'});          <---default
                   .animate({'top': '-10px'}, 400);     <---milli-seconds       
          
                   .animate({'top': '-10px'}, 'fast');          
                   .animate({'top': '-10px'}, 200);          
          
                   .animate({'top': '-10px'}, 'slow');          
                   .animate({'top': '-10px'}, 600);
                   
                   Note:  can also use the spped parameter with:
                          slideToggle()       fadeToggle()    
                   
          
          .hasClass();   <--- You can check if a node has a specific class.

--------------------------------------------------------------------------------

Let's make the vacation boxes jump up a little bit, when we click them.

The Adjusted Code from the previous section:   

     $(document).ready(function(){
            $('#vacations').on('click', '.vacation', function(){
                   $(this).toggleClass('highlighted');
            });
     });

   --->  $(this).css({'top': '-10px'});  <---This would just make it jump 10px
   
   --->  Let's do this:  $(this).animate({'top': '-10px'});  <---This would just make it move up the 10px
   
   Now let's take into consideration moving down too:
   
        if(<vacation class is highlighted>){   <---pseudo code.../...real code:---> $(this).hasClass('highlighted');
            //animate up
            $(this).animate({'top': '-10px'});
        }else{
            //animate down
            $(this).animate({'top': '0px'});
        }
   
-----------------------------------   

The adjusted code:

     $(document).ready(function() {
            $('#vacations').on('click', '.vacation', function() {
                   $(this).toggleClass('highlighted');
                   if($(this).hasClass('highlighted') {
                        //animate up
                        $(this).animate({'top': '-10px'}, 'fast');
                   }else {
                        //animate down
                        $(this).animate({'top': '0px'}, 'fast');                   
                   }
            });
     });

----------------------------------- 

Can we move everything to the stylesheet?  .....yes! 

The CSS:

            .vacation {
                   transition: top 0.2s;     <---in seconds   *** be careful ***
            }                                                 not all browswers may support this. 
            .highlighted {
                   top: -10px;
            }
            
The Adjusted Code:   

     $(document).ready(function() {
            $('#vacations').on('click', '.vacation', function() {
                   $(this).toggleClass('highlighted');
            });
     });

--------------------------------------------------------------------------------





*/

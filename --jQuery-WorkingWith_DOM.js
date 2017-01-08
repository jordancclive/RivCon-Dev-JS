
/*
--------------------------------------------------------------------------------

                              Working with 
                                the DOM
                              
--------------------------------------------------------------------------------

DOM:

document
    l1 class='vacation'
        h2
            Hawaiian Vacation
        button                <--- remove DOM node (2) below
            Get Price
            
     -------------------------
     
        p                     <--- see (1) below
            $399.99
            
--------------------------------------------------------------------------------       

Making a button work:

        1.  append a new DOM node with the price.
                  a) first yu need to create the node.
                  b) then you need to attach this node onto the DOM
        2.  remove a DOM node.  ...remove the button.

     -----------------------------------------  

Appending something to the DOM:     (step #1)

                $(document).ready(function(){
                    //create a <p> node with the price
                    var price = $('<p>From $399.00</p>');     <--- creates the node but it doesn't add it to the DOM
                });

     Ways to add a node onto the DOM:
          
                 -----------------------------------------              

                    .append(<element>)

                            $(document).ready(function(){
                                //create a <p> node with the price
                                var price = $('<p>From $399.00</p>');
                                $('.vacation').append(price);
                            });  

                            result:
                                    document
                                        l1 class='vacation'         <---reference point                         
                                            h2
                                                Hawaiian Vacation
                                            button                
                                                Get Price  
                                            p                           <---append puts the node here.
                                                $399.99                     In this case, this is the answer.                                    

                 -----------------------------------------         

                    .prepend(<element>)

                            $(document).ready(function(){
                                //create a <p> node with the price
                                var price = $('<p>From $399.00</p>');
                                $('.vacation').prepend(price);
                            });  

                            result:
                                    document
                                        l1 class='vacation'         <---reference point
                                            p                           <---prepend puts the node here.
                                                $399.99                                
                                            h2
                                                Hawaiian Vacation
                                            button                
                                                Get Price              

                 -----------------------------------------         

                    .after(<element>)

                            $(document).ready(function(){
                                //create a <p> node with the price
                                var price = $('<p>From $399.00</p>');
                                $('.vacation').after(price);
                            });  

                            result:
                                    document
                                        l1 class='vacation'         <---reference point
                                            h2
                                                Hawaiian Vacation
                                            button                
                                                Get Price 
                                        p                           <---after puts the node here.
                                            $399.99                                    

                 ----------------------------------------- 

                    .before(<element>)

                            $(document).ready(function(){
                                //create a <p> node with the price
                                var price = $('<p>From $399.00</p>');
                                $('.vacation').before(price);
                            });  

                            result:
                                    document
                                        p                           <---before puts the node here.
                                            $399.99
                                        l1 class='vacation'         <---reference point
                                            h2
                                                Hawaiian Vacation
                                            button                
                                                Get Price

                 ----------------------------------------- 

Removing something from the DOM:

     $('button').remove();
     

Final expression:   

      Note:   This expression (below) will be in the application.js file and 
              will execute immediatley after the DOM is ready.
              
              So the buttion will show up and immediately change to the price.
              
              ***  We will soon see how to have this execute after hitting the button. ***

      $(document).ready(function(){
          //create a <p> node with the price
          var price = $('<p>From $399.00</p>');
          $('.vacation').append(price);
          $('button').remove();
      });  

--------------------------------------------------------------------------------   
 
 Other methods to know:
 
        .appendTo(<element>);
        .prependTo(<element>);
        .insertAfter(<element>);
        .insertBefore(<element>);

The syntax is a bit different as follows:

        This:                 $('.vacation').append(price);
        Would be written:     price.appendTo('.vacation');
        
--------------------------------------------------------------------------------

                        Acting on an Interaction
                        
                 Note:  We will be working with one button
                              
--------------------------------------------------------------------------------  

The ready method:   (we have been using it)

                $(document).ready(function(){
                    <code>
                });

we are going to build an event handler expression:

                $(document).ready(event handler function(){
                    <code>
                });

-------------------------------------------------------------------------------- 

The DOM:

    document
        l1 class='vacation'                           
            h2
                Hawaiian Vacation
            button                <---here is the button          
                Get Price  
            p                         
                $399.99                   

    -------------------------

Listening for an event on the button:

    1. we have to reference the button.
    2. we need to build an event handler for the button.
    
    
    Step 1:   $('button');  <---references the button
    
    Step 2:
    
              We are going to use the on.click() method.  --->  on.click(<event>, <event handler>);
              
                  $('button').on('click', function(){
                      //runs when any button is clicked.
                  });
              
              We are going to put it inside our .ready(); method:
              
                  $(document).ready(function(){
                      $('button').on('click', function(){
                          //runs when any button is clicked.
                      });
                  });
                  
              We now have to put our code from the last section into the event handler expression:
              (This code runs when the button is pushed.)
               
                  $(document).ready(function(){
                      $('button').on('click', function(){
                          //runs when any button is clicked.
                          var price = $('<p>From $399.00</p>');
                          $('.vacation').append(price);
                          $('button').remove();
                      });
                  });             

--------------------------------------------------------------------------------

                        Acting on an Interaction
                        
             Note:  Now we will be working with many buttons
                              
--------------------------------------------------------------------------------  
    
 DOM:
  document
      div id='vacations'
          ul        
              l1 class='vacation'
                  button            
                      Get Price 
              l1 class='vacation'                    
                  button                
                      Get Price 
              l1 class='vacation'                    
                  button               
                      Get Price   

  The code we used in the last section (now below) will change all the buttons if any button is clicked.
  We need to correct this code.
  
              $(document).ready(function(){
                  $('button').on('click', function(){
                      //runs when any button is clicked.
                      var price = $('<p>From $399.00</p>');
                      $('.vacation').append(price);         <--- the class name is now associated with all the <li>s.
                      $('button').remove();                 <--- all the buttons will be removed.
                  });
              });   

  -----------------------------------------   
  
  The 'this' keyword.  If you use 'this', the object that this refers to will
  be the button where the event occurred.
  
              $(this).remove();  <--- only removes the button that called the event handler.
              
  We also need to have the price be associated with the 'this' element:
  
              $(this).append(price);
              
  So now the code should look as follows:
  
               $(document).ready(function(){
                  $('button').on('click', function(){
                      //runs when any button is clicked.
                      var price = $('<p>From $399.00</p>');
                      $(this).append(price);
                      $(this).remove();
                  });
              });   
              
              
  
  -----------------------------------------     
  
  What if the DOM looked like this:
  
      DOM:
      document
          div id='vacations'
              ul        
                  l1 class='vacation'
                      h2
                          Hawiian Vacation
                      div
                          button            
                              Get Price 
                  l1 class='vacation'                    
                      h2
                          Hawiian Vacation
                      div
                          button            
                              Get Price e 
                  l1 class='vacation'                    
                      h2
                          Hawiian Vacation
                      div
                          button            
                              Get Price  
  
  
  ....and you want the DOM to look like this:
  
      DOM:
      document
          div id='vacations'
              ul        
                  l1 class='vacation'
                      h2
                          Hawiian Vacation
                      div
                          button            
                              Get Price 
                      p                 <---you want to insert the element here
                          $399.99         
                  l1 class='vacation'                    
                      h2
                          Hawiian Vacation
                      div
                          button            
                              Get Price e 
                  l1 class='vacation'                    
                      h2
                          Hawiian Vacation
                      div
                          button            
                              Get Price  
  
   So now the code should look as follows:
  
               $(document).ready(function(){
                  $('button').on('click', function(){
                      //runs when any button is clicked.
                      var price = $('<p>From $399.00</p>');
                      $(this).closest('.vacation').append(price);  <---This will walk up the DOM to look for the ancester
                      $(this).remove();                               with the class of vacation and append onto that the 
                  });                                                 price node.  .closest() will find 0 or 1 node
              });                                                     when searching for ancesters with the proper class.
                                                                      .parents() will find all ancesters with the proper class.
                                                                      
--------------------------------------------------------------------------------

                        Acting on an Interaction
                        
             Note:  Now we will be working with many buttons
                    and different prices for each button.
                              
--------------------------------------------------------------------------------   

example HTML:                                       

        <li class='vacation onsale' data-price='399.99'>      <---data-price is an HTML 5 attribute
            <h3>Hawaiian Vacatiob</h3>
            <button>Get Price</button>
            <ul class='comments'>
                <li>Amazing deal!'</li>
                <li>Want to go!</li>
            </ul>
        </li>

-----------------------------------------        

Note:

    To access data:       .data(<name>)
    
    To give it a value:   .data(<name>, <value>)
    
example:

    $('.vacation').first().data('price);     <---returns:  $399.99   
    
-----------------------------------------   

To make this work in our example:

    Let's get the price from the HTML:
    
        var amount = $(this).closest('.vacation').data('price');
        var price = $('<p>From $' + amount + '</p>');

    Now the code looks like the following:
    
               $(document).ready(function(){
                  $('button').on('click', function(){
                      //runs when any button is clicked.
                      var amount = $(this).closest('.vacation').data('price');
                      var price = $('<p>From $' + amount + '</p>');
                      $(this).closest('.vacation').append(price);  
                      $(this).remove();                               
                  });                                            
              });         

    Now let's remove the duplication:
    
               $(document).ready(function(){
                  $('button').on('click', function(){
                      //runs when any button is clicked.
                      var vacation = $(this).closest('.vacation');
                      var amount = vacation.data('price');
                      var price = $('<p>From $' + amount + '</p>');
                      vacation.append(price);  
                      $(this).remove();                               
                  });                                            
              });       

--------------------------------------------------------------------------------

                        Acting on an Interaction
                        
             Note:  Now we will be working with many buttons
                    and different prices for each button.
                    
                    We need to make the event handler more specific.
                              
--------------------------------------------------------------------------------   

               $(document).ready(function(){
                  $('.vacation').on('click', 'button', function(){    <---Notice
                      //runs when any button is clicked.
                      var vacation = $(this).closest('.vacation');
                      var amount = vacation.data('price');
                      var price = $('<p>From $' + amount + '</p>');
                      vacation.append(price);  
                      $(this).remove();                               
                  });                                            
              });     


                  $('.vacation').on('click', 'button', function(){ 
                  
                  This means that you are only targeting buttons in the vacation class.
                  
                  This is called:  "Event Delegation"
                  
--------------------------------------------------------------------------------

                              Working with 
                                the DOM
                                
                               Filtering
                              
--------------------------------------------------------------------------------



                              adding/removing
                                classes
                                
  Use these classes:

            .addClass(<class>);

            .removeClass(<class>);
      

--------------------------------------------------------------------------------

There are also filter buttons on the site as follows:

        <div id='filters'>
        ...
            <button class='onsale-filter'>On Sale Now</button>
            <button class='expiring-filter'>Expiring</button>    
        ...
        </div>
        
        DOM
          document
            ...
            ul
                li class='vacation onsale'
                    ul class='comments'
                        li
                        li
                li class='vacation'
                li class='vacation'
            ...     
            div id=filters
                button class = onsale-filter
                    text
                button class = expiring-filter
                    text 
                    
        
We are going to write 2 separate event handlers for these buttons:

        Step 1: find all vacations that are on sale.
        Step 2: add a class to them so they are high;ighted.

        $(#filters).on('click', '.onsale-filter', function(){
            $('.highlighted').removeClass('highlighted');                 <--- removes highlightedforst.
            $('.vacation').filter('.onsale').addClass('highlighted');     <--- adding a new class to onsale items. 
                                                                               CSS handles the highlighting of that class.
        });

        $(#filters).on('click', '.expiring-filter', function(){
            $('.highlighted').removeClass('highlighted'); 
            $('.vacation').filter('.expiring').addClass('highlighted');                                                                 
        });










*/

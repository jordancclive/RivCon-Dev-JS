
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

                $(document).ready(funciton(){
                    //create a <p> node with the price
                    var price = $('<p>From $399.00</p>');     <--- creates the node but it doesn't add it to the DOM
                });

     Ways to add a node onto the DOM:
          
                 -----------------------------------------              

                    .append(<element>)

                            $(document).ready(funciton(){
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

                            $(document).ready(funciton(){
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

                            $(document).ready(funciton(){
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

                            $(document).ready(funciton(){
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

      $(document).ready(funciton(){
          //create a <p> node with the price
          var price = $('<p>From $399.00</p>');
          $('.vacation').append(price);
          $('button').remove();
      });  

--------------------------------------------------------------------------------   
 
 Other methods to know:
 
  




























8/

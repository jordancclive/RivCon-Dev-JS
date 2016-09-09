/* Recursion

A function that calls itself

A simple example:
*/

    //countdown function
    
    function countdown(n){
        console.log(n);
        if(n===0) console.log('Done!');     // Do the base case first....The case that ends the recursive function
        else countdown(n-1);                // This is the recursive case.
    }
    
    countdown(4);           // returns: 4  3  2  1  Done!
    

/* This all works as a result of something called the "Call Stack".  
.... these things are happening in sequence.....in a synchronous environment
.... so the recursive call stops the parent function (on down the line).

countdown(4);   
    countdown(3);
        countdown(2);
            countdown(1);
                countdown(0);  Once we get here.  The values returned from this function call (upwards)
                                                    work their way back up.  
                                                    (must do this for things to work properly)

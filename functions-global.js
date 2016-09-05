// There are a few global functions that are called globally
/* rather than on an object:

    
eval()      //<---- *** never use this one. ***
    
            // taked a string as an argument and LITERALLY runs it as code.  
            // If an external party knows you have this on your server, then they can 
            // run their own code on your server.
        
            An example:
            let str = "console.log('hi');"
            eval(str);    //<---- returns:  hi */
          
    // ----------------------  
     
isNaN()
    
    // If you typed:
    
    console.log(typeof NaN);  //<--- returns: number
    
    // As a result, isNaN() was created.
    
    isNaN(5);   // returns: false
    isNaN(NaN); // returns: true
    


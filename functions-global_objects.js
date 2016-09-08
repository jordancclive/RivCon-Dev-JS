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
    
    isNaN(5);       // returns: false
    isNaN(NaN);     // returns: true
    
    
// ----------------------  

parseInt();         // turn something into an integer

parseFloat();       // turn something into a "double" from a different data type.

typeof Number('5')  // returns a number


// ---------------------- 

// Environment dependent Global functions:

// There exists a global object called: "console" havig the method of log() and dir() in our environment.

// ...be aware if you are in node or mozilla or chrome, they all are environments that may have some
// unique global variables to each of them.

//....when using these buit-in object use documentation:

https:\/\/developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects


// ---------------------- 


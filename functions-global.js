// There are a few global functions that are called globally
/* rather than on an object:

    
    eval()            //<---- *** never use this one. ***
    
          // taked a string as an argument and LITERALLY runs it as code.  
          // If an external party knows you have this on your server, then they can 
          // run their own code on your server.
        
          An example:
          let str = "console.log('hi');"
          eval(str);    //<---- returns:  hi */
          
          

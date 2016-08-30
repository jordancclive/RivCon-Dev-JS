//Scope

/* Scope is the set of variables you can access at any given time.

Inside a function:  Local Scope is defined as the parameters given to a function; "var" statements within the function.
Global Scope is the highest order scope.  Any variable defined here is available to any piece of code.  
These variables take on more memory because the engine itself needs to hold on to this information all the time.

*/


// Hoisting:  JavaScript does a couple of passes on the code before executing it.

// Before code:
              someStuff();
              var x = 5;
              function someStuff(){
                console.log(x);
              }

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
              
// After JS passes over code (2 times?):

              function someStuff(){           //<---- functions are hoisted up to the top.
                console.log(x);
              }
              var x;                          //<---- The variable definitions are hoisted 2nd (not the assignments - see below)
              someStuff();
              x = 5;                          //<---- The variable assignments stay where they are.
              
              //The result is that when the function executes, the variable is "undefined" (an error does not occur, because
              //the function definition happened, but the variable wasn't assigned the number yet.)


// Back to Scope:

// A function can access all of the variables of its parent code (and grandparent code and above that), but 
// the parent cannot access the variables of its children.

//example 1  ....look at the variable x

              function someStuff(){          
                console.log(x);               //<---- x will equal 5. You can access x (from the parent code)
              }                               //      even though it wasn't passed to the function.
              var x = 5;                         
              someStuff();
              console.log(x);                 //<---- x will equal 5

// example 2 ....look at the variable x.  It is different this time around.

              function someStuff(){  
                var x = 5;
                console.log(x);               //<---- x will equal 5. 
              }                               
              someStuff();
              console.log(x);                 //<---- you will get a reference error since x has not been defined.



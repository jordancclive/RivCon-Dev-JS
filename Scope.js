/*
-----------------------------------------------------------------------------  
                             
			     A word about Scope
                                
-----------------------------------------------------------------------------  

There seems ot be 2 kinds of scope:

        - Global Scope:  can be accessed from anywhere.
        
        - Local Scope: scope that exists within a function.


Scope is the set of variables you can access at any given time.

Inside a function:  Local Scope (or function scope) is defined as the parameters given to a function; 
"var" statements within the function.

Global Scope is the highest order scope.  Any variable defined here is available to any piece of code.  
These variables take on more memory because the engine itself needs to hold on to this information all the time.

Global Scope:  The "window" of your web browser has a scope.  This contains the "prototype" chain. ("TB Discussed Later").
Variables declared without the "var" keyword are attached to this global scope.

Block scope {between the brackets} is scope only between two brackets.

-------------------------

	We need to keep in mind hoisting within the function...
	
    	Action 1: functions within are hoisted to the top of this function (They will be at the top - 1st)
    	Action 2: variable declarations are then hoisted underneath the functions (They will be second)
    	
    	Note 1: variable assignments are made in place.  (They stay where they are in the code)
    	Note 2: The function call runs in order.
    	Note 3: Functions declared as variables & IIFEs follow Action 2 & Note 1.
	Note 4: When a variable is passed in as an argument, the parameter (variable name in the '()') is a variable 
		local to that function. namely: where the variable assignment is made.  
		If the variable also exists globally, the global value is, in essence, a different variable.



//======================
// Hoisting:  JavaScript does a couple of passes on the code before executing it.


				-------------------------------------------  
					
					      refer to:

				     Prototypes-Execution_Context.js 

				-------------------------------------------   
*/
//======================
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


// With Scope in mind, let's talk about declaring variables using "let":    (note: JavaScript 1.7 introduced "let")

// Let's start with an illustration:

              function someStuff(){
                for(var i=0; i<10; i++){
                  //some stuff will happen
                }
                
                console.log(i);                     //<---- you will get i=10 here.  You do not want this variable to
                                                    //      exist at all here.  You are done with it after that loop ended.
                for(var i=0; i<10; i++){            //<---- remember because of hoisting, you are now declaring the same 
                  //some more stuff will happen     //      variable twice. (bad)
                }
              }

// Let's make it a bit more complex to illustrate the issue

              function someStuff(){
                var arr = [];
                for(var i=0; i<10; i++){
                  arr.push(function(){                      //<----- You are creating an array of functions that will return i
                    return i;                               //       Note: i is incrementing as it pushes these functions into
                  })                                        //       the array.
                }
                for (var j=0; j<arr.length; j++)
                console.log(arr[j]());                     //<---- Note: This array is an array of functions so you need
              }                                            //      to invoke the function to get a value here.
              
              /* Here is what you would get as a result:
              10          
              10                This is a result of function scoping
              10                using the "var" keyword
              10
              10
              10
              10
              10
              10
              10
              */
              
// If we changed to using the "let" keyword:

              function someStuff(){
                var arr = [];
                for(let i=0; i<10; i++){
                  arr.push(function(){                      //<----- You are creating an array of functions that will return i
                    return i;                               //       Note: i is incrementing as it pushes these functions into
                  })                                        //       the array.
                }
                for (var j=0; j<arr.length; j++)
                console.log(arr[j]());                     //<---- Note: This array is an array of functions so you need
              }                                            //      to invoke the function to get a value here.
              
              /* Here is what you would get as a result:
              0          
              1            
              2  
              3
              4
              5
              6
              7
              8
              9
              */
              
// Advantages to using the "let" keyword

//              - It uses Block scoping. (the variable will only exist witin the brackets it is declared in using let)
                              
                              function someStuff(){
                                for(let i=0, i<10, I++){
                                  console.log(i);           //<---- This will return 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
                                }
                                console log(i);             //<---- This will return a reference error,
                              }                             //       because "i" will not exist after the code block.
                                                            //       You will not waste any space keeping this variable
                                                            //       longer than necessary. ("i" becomes a throw away variable)
                                                            //      
                                                            //       let does not get hoisted.  It is defined where you 
                                                            //       declared it.
//  why are you using let?  
//                  Block scoping is more efficient, less wasteful.
//                  allows for proper scoping, proper variable declaration.

                                                            

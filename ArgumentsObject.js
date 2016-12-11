/*
-------------------------------------------------------------------------------

                          The Arguments Object

-------------------------------------------------------------------------------

Definition:

        The arguments object is an Array-like object corresponding to the arguments passed to a function.
        
        The arguments object is not an Array. It is similar to an Array, 
        but does not have any Array properties except length. 
        For example, it does not have the pop method. 
        
        However it can be converted to a real Array:
*/
                        var args = Array.prototype.slice.call(arguments);
/*
-------------------------------------------------------------------------------

JavaScript functions all have a built-in object called arguments. 
arguments is what is called and 'array-like object' 
because it's an object with numeric keys that can be looped over as if it were an array. 

However, since it is not actually an array, it does not inherit from the Array.prototype. 
Therefore, arguments does not have access to useful Array methods such as .forEach.

arguments is very useful because it gives the user a collection of all the arguments 
that the function was called with, regardless of the number of named parameters 
in the definition. 

For example:

          function takes3Args(arg1, arg2, arg3) {
           for(var i = 0; i < arguments.length; i++) {
              console.log(arguments[i]);
           {
          }

          takes3Args(0, 1, 2, 3);
          
          //0
          //1
          //2
          //3
          
          Notice that it shows all four arguments even though the function only is defined with three.

In order to use Array methods with the arguments object, 
it must be first converted into a true Array. 

Once way we can do this is by invoking:
*/
          Array.prototype.slice //with call or apply, and then passing in arguments as our context (or this object).
/*
Since slice returns an array, using call to invoke slice on arguments 
creates a copy of arguments that is of type Array. 

The end result would look like:  ---> */      Array.prototype.slice.call(arguments);
/*
-------------------------------------------------------------------------------

Interesting Tidbits:
*/

//Example 1:
            function addNumbers(){
                  let sum=0;
                  for(let i=0; i<arguments.length; i++){      //NOTE: arguments is a keyword.
                      sum+= arguments[i];                     //      you do not have to say:
                  }                                           //      addNumbers.arguments[]
                  return sum;                                 //      SCOPE: Inside the function containing it.
            }

            sum(1,2,3,4);       //returns:  10

//Example 2:
            //  If you want to use array methods like slice, then you need to convert arguments into a real array.

            function addNumbers(evenOdd){
                  //if true, want even numbers
                  //if false, want odd numbers
                  let sum=0;
              
                  //convert arguments to an array:
                  let numArr = Array.prototype.slice.call(arguments, 1);  //slice always returns an array
                  console.log(numArr);                                    //result: [1,2,3,4]
              
                  for(let i=0; i<numArr.length; i++){                     //NOTE: arguments is a keyword.
                    if(even && numArr[i]%2 ===0) sum+= numArr[i];    
                    else if(!even && numArr[i]%2 ===1) sum+= numArr[i]; 
                  }
                  return sum;                             
            }

            sum(true, 1,2,3,4);       //returns:  6







*/

/* Functions.

Functions that return other functions are called "closures".  
What "closures" is about is ---->  keeping variables in "active" memory.

==============
Some premises:
==============

- functions have access to variables in their parent scope.

- functions "know" their environment.


==============
Some examples:
==============

              function parentFunction(){
                var weather = 'sunny';
                function childFunction(){
                  console.log("Today it is " + weather);
                }
                return childFunction();                       //notice you are invoking this function meaning
              }                                               // that the result passed is this function executed.
              
              parentFunction();                               //---->so you will get:  Today is sunny

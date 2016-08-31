/* Functions.

Functions that return other functions are called "closures".  
What "closure" is about is ---->  keeping variables in "active" memory.

==============
Some premises:
==============

- functions have access to variables in their parent scope.

- functions "know" their environment.


==============
Some examples:
==============
*/

              function parentFunction(){
                var weather = 'sunny';
                function childFunction(){
                  console.log("Today it is " + weather);
                }
                return childFunction();                       //notice you are invoking this function meaning
              }                                               // that the result passed is this function executed.

              parentFunction();                               //---->so you will get:  Today is sunny



// Let's not invoke this function, but simply return it......

              function parentFunction(weather){
                function childFunction(){
                  console.log("Today it is " + weather);
                }
                return childFunction;                         //now you are not returning the function
              }                                               
              let hold = parentFunction('sunny');
              let hold2 = parentFunction('rainy');  
              console.log(typeOf hold);                       //<---- this variable is a  "function" 
              console.log(typeOf hold()).                     //<---- This is "undefined"
              hold2();                                        //---->you will get:  Today is rainy
              hold();                                         //---->you will get:  Today is sunny
              
              // This example shows "closure"
              //What is happening is that the variable "hold" representing the "childFunction".
              //When you individually invoke "hold" it is remembering the variables that was passed to 
              // "childFunction" from the "parentFuncton".
              // So the childFunction is responsible for remembering the parent's original values when you pass it.

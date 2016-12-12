/* 
-----------------------------------------------------------------------------------

				Functions - Closures

-----------------------------------------------------------------------------------

Closures: Definition:

		Closures are functions that refer to independent (free) variables 
		i.e.: (variables that are used locally, but defined in an enclosed scope).
		
		In other words, these functions "remember" the environment in which they 
		were created.

	Example:
*/	
		function foo(){
		  var a="a";
		  function taz(){
		    var z = "z";
		    console.log(a);	//<--logs: 'a' (scope looks upward, eventually p to the global scope.)
		  }			// When Taz accesses the variable a, it represents closure.
		  taz()			// because the system needed to find it.
		}

		foo();


//	Example:

		//Closure topic & an example of a high order function.

		var incrementCreator = function(){
		  var numTimesCalled = 0;

		  //Nested function
		  var incFunction = function(){
		    numTimesCalled++;
		    console.log(numTimesCalled);
		  }
		  //The nested function is being 
		  //returned out of the function
		  return incFunction;
		}

		var incFunc = incrementCreator();
		incFunc.toString();

		/*=>(The function is returned)
		'function incFunction() {\n    
		numTimesCalled++;\n    
		console.log(numTimesCalled);\n  }'
		*/

		incFunc();    //returns: 1

		/* even though numTimesCalled is 
		not declared in the incFunc function
		& it is not part of incrementCreator
		anymore, the function call still remembers
		the environment it originated from.
		( the scope it had --> all the variables it had previously)
		and returns a '1' to track that it was called.

		This is an example of Closure

		This scope is stored in something called "The heap".

		dir(incFunc)

		function incFunction()

		arguments: null
		caller: null
		length: 0
		name: "incFunction"

		prototype: Object
		__proto__: function ()
		[[FunctionLocation]]: VM985:7
		[[Scopes]]: Scopes[2]

		   0: Closure (incrementCreator) <--tracking the scope available when running.
			 numTimesCalled: 1  <--tracking that it was called
		   1: Global

-----------------------------------------------------------------------------------

Functions.

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


//==============
// Let's not invoke this function, but simply return it......

              function parentFunction(weather){
                function childFunction(){
                  console.log("Today it is " + weather);
                }
                return childFunction;                         //now you are not invoking the function
              }                                               
              let hold = parentFunction('sunny');
              let hold2 = parentFunction('rainy');  
              console.log(typeOf hold);                       //<---- this variable is a  "function" 
              console.log(typeOf hold()).                     //<---- This is "undefined"
              console.log(hold);                              //<---- [Function: childFunction]  ...(also remembering its state)
              hold2();                                        //---->you will get:  Today is rainy
              hold();                                         //---->you will get:  Today is sunny
              
              // This example shows "closure"
              //What is happening is that the variable "hold" representing the "childFunction".
              //When you individually invoke "hold" it is remembering the variables that was passed to 
              // "childFunction" from the "parentFuncton".
              // So the childFunction is responsible for remembering the parent's original values when you pass it.


//==============
// Now let's get a bit more complex:

              function getName(name){
                
                return function getFeeling(emotion){          //now you are retuning a function looking
                  return name + " is feeling " + emotion;     //for a new variable that has not been 
                }                                             //initialized with a value.
              }

              var DJT = getName("Donald");
              var HRC = getName("Hilary");
              
              console.log(DJT("boisterous"));     //result:  "Donald is feeling boisterous"
              console.log(HRC("confident"));      //result:  "Hillary is feeling confident"

// Note: you are invoking the getFeeling function by sending it an emotion.


//==============
// Let's look at local variable & parent variable results with multiple invkations of the internal function:

              function countFunctionRuns(){
                var a = 0;
                function someInnerFunction(){
                  a+=1;
                  console.log(a);
                }
                return someInnerFunction;
              }
              
              let x = countFunctionRuns();  //<---- This causes x to equal "someInnerFunction"
              x();          //<---- x is invoked running "someInnerFunction"  x now equals 1
              x();          //<---- x is invoked running "someInnerFunction"  x now equals 2
              x();          //<---- x is invoked running "someInnerFunction"  x now equals 3


//==============
// only let the innerFunction run 3 times

		function outerFunction(){
			let counter = 1;
			function innerFunction(){
				let governer = 4;
				if (counter < governer){
					console.log("Hi. Run count: " + counter);
					counter +=1;
				} else console.log("Maximum run limit reached");
			}
			return innerFunction;
		}
		
		var x = outerFunction();
		x();
		x();
		x();
		x();
		
		/*
		results:
		Hi. Run count: 1
		Hi. Run count: 2
		Hi. Run count: 3
		Maximum run limit reached
		*/





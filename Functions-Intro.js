/*
-------------------------------------------------------------------------

                    Functions - Intro

-------------------------------------------------------------------------

A JavaScript function is a block of code that is designed to perform a specific action. 
In JavaScript, functions are special types of 'callable' objects. 

Because functions are objects, we know that:

        Functions are values and can be held by a variable
        Functions can have properties
        Functions have an internal prototype (_proto_) property which inherits from Function

If we evaluate the expression typeof function() {} then we will get the string 'function', rather than 'object'. 
This means that unlike using typeof to find the type of an array, 
the typeof operator recognizes that a function object is a specific type of object.

Because functions are also objects, they can hold properties.

        var myFunction = function() {
              return 'This is the body of myFunction';
        };

        myFunction.aProperty = 'This is a property on myFunction';

        console.log(myFunction.aProperty)         //'This is a property on myFunction'


In addition to being able to add properties, function objects come with a few properties built in.


        LENGTH

        A function's length property refers to the function's arity. 
        Arity refers to the number of arguments a function takes. 
        This is determined by the function's definition, rather than by its invocation.

        NAME

        If a function is a named function (meaning that the function has a 
        name given after the function keyword) then its name property will return that given name. 
        However, if a function is not named, but is held in a variable, 
        the name property will return the name of the variable holding the function.

        CALLER

        The caller property will refer to the scope in which the function is invoked. 
        If the function is invoked inside another function, 
        the caller property will reference that function. 
        If the function was invoked from the global scope, 
        the caller property will have the value null.

        PROTOTYPE

        All function objects have a built-in .prototype property. 
        This is separate from the internal prototype (_.proto_) that all objects have. 
        The prototype property is used to specify what properties and methods objects 
        should be inherited by an object created by a constructor function. 
        For more information, please reference the Prototype section of Advanced JavaScript.
*/
                  var myFunction = function(arg) {
                    console.log(myFunction.caller)
                    return arg;
                  }

                  console.log(myFunction.length)            //1
                  console.log(myFunction.name)              //myFunction

                  var callMyFunction = function hello() {
                        myFunction('hello');
                  }

                  console.log(callMyFunction.length)        //0
                  console.log(myFunction.name)              //hello

                  callMyFunction();                         //hello

                  //remember, hello is the function that called myFunction
/*
-------------------------------------------------------------------------















*/

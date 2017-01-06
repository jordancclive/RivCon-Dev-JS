/*
-----------------------------------------------------------------------------

                              High_Order_Functions

-----------------------------------------------------------------------------

Definition:

                - A function that can take another function as its argument.

                and/or

                - returns a function.
 
        For higher-order functions to exists, functions must be values, just like numbers, objects, and other data types. 
        In JavaScript, we know this to be true; functions are just a special type of object! 
        But in many languages, functions are simply subroutines and are not capable of being passed around as a value.

        Let's define a function that creates and returns a second function.
*/
                    function createsFunc() {
                       var newFunc = function() {
                             console.log('new function ran!')
                       }
                       return newFunc;                    //<-- function is not being invoked.
                    }

                    var newFunc = createsFunc();          //The function is sitting here, but hasn't run yet
                    newFunc();                            //new function ran!

        //can also write it this way:

                    var createsAFunc = function() {
                           return function() {
                               console.log('2nd new function ran!')
                           }
                    }

                    var gotAFunc = createsAFunc();        //The function is sitting here, but hasn't run yet
                    gotAFunc();                           //new function ran!

        //****Important:
        
                    createsAFunc()()                      //The second parenthesis is invoking the returned function.
                                                          // so we get the responde:  "new function ran!"

        //We can also do this:

                    var createsAFunc = function() {
                           return function(message) {
                               console.log('Message: ', message);
                           }
                    }
        
                    createsAFunc()('Hi Everyone!');        //The second parenthesis is invoking the returned function.
                                                          // so we get the responde:  "Message:  Hi Everyone!"

/*      ----------------------------------

        Functions can also take in functions as arguments. Let's see an example.
*/        
                    function runs3Times(func) {
                          for(var i = 0; i < 3; i++) {
                                func();
                          }
                    }

                    runs3Times(function() {console.log('hello')})
                    //hello
                    //hello
                    //hello

/*      Here, we are passing an anonymous function to the function run3Times, 
        and it will be run three times. We can combine the ideas of passing in functions as arguments 
        with returning functions to create decorator functions.

        Decorators are functions that add functionality to other function. 
        What it means for us is that a decorator will take in a function as an argument, 
        and return a new function that is some modification of the function passed in.

        ----------------------------------

        Let's take our function runs3Times as an example. 
        
        Instead of just running the passed in function three times, 
        it will return a new function that runs the passed in functions 3 times. 
*/
                    function function runs3Times(func) {
                          return function() {
                                    for(var i = 0; i < 3; i++) {
                                          func();
                                    }
                          };
                    }

                    var sayHello3Times = runs3Times(function() {console.log('hello')});
                    sayHello3Times();
                    //hello
                    //hello
                    //hello
/*
        This pattern gives us more power because we can create modifications of existing functionality. 
        This is a great introduction to the concepts you'll need to know in order to learn and understand closure!

-----------------------------------------------------------------------------

Decorator Function:
*/
                    var decorator = function(func){
                      return function(){
                        console.log('I decorated the function!');
                        func()
                      }                   
                    }
                    
                    var decorated = decorator(function(){console.log('Hello World!')});
                    decorated();
/*
                    result:   I decorated the function!
                              Hello World!

        We got a function as an argument and added something to it. Then we gave the changed new function back.
        
-----------------------------------------------------------------------------      

//Wrapper function:

function createFunctionsForLoop(num){
    let resultArr = [];
    for(let i=0; i<num; i++){
        resultArr.push(function(){
            return i;
        })
    }
    return resultArr;      //an array of functions, <--length of = num.
}

/*  Good. Not sure why this wasn't made clear to you, 
    but we ideally wanted to see wrapper functions 
    instead of let.
*/

//I think he means this:

function createFunctions(num){
    let resultArr = [];
    for(let i=0; i<num; i++){
        resultArr.push(wrapper(i));
    }
    return resultArr;
}

function wrapper(num) {
    return function(){
            return num;
        };
};

*/

/*
---------------------------------------------------------------------------------------

                                   Execution Context

---------------------------------------------------------------------------------------

Execution context is a record of information when code is executed. 
Whether your entire program is running, or individual functions inside of your program 
are invoked, execution contexts are created.

Information Stored in Execution Context:

        WHERE a function is called from (the call-stack)
        HOW the function is invoked (Function.prototype.call, as a method, etc)
        The Scope Chain
        The value of the this keyword
        variables and argument access
        ...and More!

What type of code is executable? 

There are three types of executable code that will create an execution context when executed.


    1.  Global Code: 

        Any code that is not wrapped in a function (ignore ES6 features such as the let keyword for now). 

        For example, in browser-based environments, the content of SCRIPT elements 
        usually run as a Program and evaluated as Global code.
        
        */
                                <script>
                                      function help(task){
                                            return "Can you help me with " + task + "?";
                                      }

                                      help('my homework');
                                </script>
        /*

    2.  Function Code: 
    
        Anything executed within a function. 
        In browsers, event attributes such as an onclick are treated as Function code. 
        Function code is a single function executing whether by itself or within the Global Code.
        
        */
            <button onclick='welcome()'> Welcome </button>
            <script>

            function welcome(){
            alert("Welcome to my website!");
            }
            </script>
        /*

        NOTE: The onclick attribute is not recommended, it is used an example to demonstrate an executable function.

    3.  Eval Code: 
    
        We will not focus on eval code at this time, 
        if you would like to reference eval code, please reference its documentation.

---------------------------------------------------------------------------------------

Global Execution Context

        The base execution context of a program is the Global Execution Context 
        (remember, execution context is just a record of information). 
        
        Global means that any JavaScript file has access to its content such as variables, functions, etc. 
        Think of the Global Execution Context, often referred to as the Global Environment, like a box of information. 
        When the JS File is executed, all of the functions, objects, variables, etc that are not defined in another function 
        (or defined in a block using the let keyword (ES6)) are in the Global Scope making the data available to any function, 
        file, etc in the program.

        The easiest way to determine if a value is global is to check if it's wrapped in a function.

        */
              // Example of Global
              var global = "Global";

              // Example of Not Global
              function notGlobal(){
                var inFunction = "The variable is inside a function,... 
                      ...therefore the variable `inFunction` is not in the Global Environment";
              }
        /*

        When your program executes, the Global Execution Context is created by the JavaScript engine it's running on. 
        The Global Execution Context has two default values created when it is executed by the JavaScript engine, 
        these values are:
                             ____________________________________________

                                      Execution Context (Global)

                                  Global Object       "this" Keyword
                             ____________________________________________                                      

        
        Global Object - The Global Object can vary based on the runtime environment. 
        In a Web Browser, the Global Object is called the "Global Window Object" or just window, 
        and in Node.js it is the global object. 
        
        The Global Window Object is ONLY created in the Global Execution Context, 
        Function Execution Contexts do not create an additional Global Window Object. 
        Instead, Function Execution Contexts have a link to their outer environment which includes 
        the Global Window Object that is in the Global Execution Context.


        this Keyword Reference - The this keyword is a dynamic value that can change based on its execution context. 
        When it executes in the global execution context, it references the Global Object. 
        
        ..............Refer to the "What is this" section for more information about the this keyword.

---------------------------------------------------------------------------------------

                                   Execution Context
                                   
                                   The Creation Phase
                                   
                                          &
                                          
                                   The Execution Phase

---------------------------------------------------------------------------------------

The creation phase sets up:

          sets up memory space for variables and funcions

          creates the scope chain

          creates the global object with a global execution context

          determines and assigns the value of "this"


The execution phase

          assigns values.
          
          references the funtions and executes the code in your program

---------------------------------------------------------------------------------------

Hoisting:   JavaScript does a couple of passes on the code before executing it.

            **** It does not move code around ****

Before code:

              someStuff();
              var x = 5;
              function someStuff(){
                console.log(x);
              }
              
After JS passes over code in the compile & creation phase while it is creating an execution context.

              function someStuff(){           //<---- functions & variable declarations are hoisted into memory. 
                console.log(x);               //      during compile phase & creation phase when creating execution context.
              }
              var x;                         
              someStuff();                      
              x = 5;                         
              
              //The result is that when the function executes, the variable is "undefined" (an error does not occur, because
              //the function definition happened, but the variable wasn't assigned the number yet.)
              
              // Because of hoisting, variables declared anywhere in a function are available everywhere in that function.
              // ****   Again remember that variable assignments/initialization are different than the declaration. **** 

  
******* Important ******

So waht is really happening is that when you run your program (when it starts) ---> the system immediately creates 
an execution context.

This execution context holds:   all the values available to your program.
                                and it creates an environment for them to run in.

This happens in two phases:   1.  The creation phase.

                                  In this creation phase when we are talking about the global execution context.
                                
                                        1st the global object is created & the "this" keyword is assigned a value.
         
                                        2nd the system looks at every line of code created (top to bottom).
                                          When it finds functions/variables that it can store, it puts them into memory.
                                          Remember, JS is not executing code yet, just looking for these variables & function
                                          declarations.
                                        
                               once the system finishes looking at every line of code, the execution phase begins.....
                                
                               2. The execution phase.  ---> now the code starts to run.
                               
                                 
---------------------------------------------------------------------------------------

The Execution phase  (What happens)

                          Everything in our code begins to actually run.
                          
                          
---------------------------------------------------------------------------------------

Function Execution Context:

                          













*/

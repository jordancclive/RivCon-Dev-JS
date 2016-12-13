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



Global Code: 

Any code that is not wrapped in a function (ignore ES6 features such as the let keyword for now). 

For example, in browser-based environments, the content of SCRIPT elements usually run as a Program and evaluated as Global code.
*/
                        <script>
                              function help(task){
                                    return "Can you help me with " + task + "?";
                              }

                              help('my homework');
                        </script>
/*






















*/

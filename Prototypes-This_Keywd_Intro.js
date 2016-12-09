/*
-----------------------------------------------------------------------------

                            The "this" Keyword

-----------------------------------------------------------------------------

The this keyword is a special keyword that doesn't have a static value, 
rather, it's defined within the scope of a function. 

this can refer to:

            - The Global Object
            - An instance of a Constructor Function
            - An object a method is attached to
            - A specific Object (you can instruct this to be the exact object you want it to be)

***Important:   ---> "this" changes depending in its context (how you use it in a program).

-----------------------------------------------------------------------------

Call-Site & Execution Context

        It's been mentioned that the value of "this" is not static, 
        it can change, and it can refer to many different values. 
        
                  The most important concept to determine "this" is to check 
                  the call site of the function where this is used.

        When you invoke or call a function, the function creates its own execution context. 
        The execution context is a record of information for code executing such as 
        where it's called (where the code is on the call stack), how the function was invoked, 
        its Scope Chain, the value of this, and more!

                  JavaScript has 4 different ways you can invoke a function:

                  Function Invocation: alert("TGIF!");
                  Method Invocation: [].push("Fullstack", "Academy");
                  Constructor Function Invocation: new RegExp("[a-zA-Z]");
                  Indirect Invocation: Object.prototype.toString.call([]);
                  
         The way the function is called determines what value "this" is assigned.
         

***Important:  If you want to figure out the "this" keyword, always check where the call site is.......

                  As also mentioned, It is important to realize that "this" refers to the EXECUTION CONTEXT, 
                  or how a function is called.  
         
-----------------------------------------------------------------------------

Execution Context:

        Every Execution context has a creation phase & an execution phase.
        
        The creation phase assigns the value to the "this" keyword.               <---the call site
        
                When the "this" keyword is in the global scope of your program, 
                then the vbalue assigned to it is always the "global Object", 
                which is different depending on the run time environment that your program is running in.
                
                  - In a web browser, the "global object" is the "global window object". 
                  
                  - In node.js, the "global object" is called the "global object".

-----------------------------------------------------------------------------

Rule #1: The Default Binding Rule.

         By default, the “this” keyword references the global object for the current runtime environment (Node.js, Web Browser, etc).

                  this;   <---just type in the console and will get the global window object. (below)

                  Window {speechSynthesis: SpeechSynthesis, caches: CacheStorage, localStorage: Storage, 
                  sessionStorage: Storage, webkitStorageInfo: DeprecatedStorageInfo…}
                  
                  or
                  
                  function whatIsThis(){
                    console.log(this);
                  }

                  whatIsThis();               <---the call site

                  Window {speechSynthesis: SpeechSynthesis, caches: CacheStorage, localStorage: Storage, 
                  sessionStorage: Storage, webkitStorageInfo: DeprecatedStorageInfo…}

                  *** As you can see, you get the same result.                 
-----------------------------------------------------------------------------

Rule #2:  Implicit Binding Rule   (Method Invocation Rule)

        The "Implicit Binding Rule" describes the case where a method references the this keyword. 
        When a method uses the this keyword, this references the object the method is called on. 
        This can be identified by locating the dot operator, the object the method is called on is left of the dot operator, 
        the method is to the right of the dot.
        
                  function whatIsThis(){
                    console.log(this);
                  }

                  var myObj = {
                    whatIsThis: whatIsThis
                  };

                  myObj.whatIsThis();                     <---the call site  (a method call)

                  Object               <---"this" refers to myObj, because it is the object with the method call in it
                      whatIsThis: function whatIsThis()   <---Here is the method for myObj.
                      __proto__: Object

                  Now "this" points to the object where we are calling "this" from (in this case: my Obj).
                  When you look at the site that originates "this" being called, ask yourself a question....
                  If there an owning object that will set the context of "this".  In this case, yes.

-----------------------------------------------------------------------------

Rule #3:  Explicit Binding Rule 

        The "Explicit Binding Rule" describes the scenario when .call, .apply, or .bind is used. 
        
                  var michael = {first: "Michael", last: "Scott"};
                  var pam = {first: "Pam", last: "Beesly"};

                  function greet(greeting){
                    console.log(this);                                                      (#1)
                    console.log(greeting + " " + this.first + " " + this.last + "!");       (#2)
                  }

                  greet.call(michael,"What's happening");        
                          ^      ^           ^
                          |      |          Any other arguments get passed to the calling function
                          |      |
                          |      This is the object that will be associated with the "this" keyword
                          |
                          All functions have access to a method names "call" 
                          
                   The result:
                              greet.call(michael,"What's happening");

                              Object
                              
                              first: "Michael"                  <----(#1)
                              last: "Scott"
                              __proto__: Object
                              
                              What's happening Michael Scott!   <----(#2)     
                              
                              
                -----------------------------------------------------
                    
                    function whatIsThis(){
                        console.log(this);
                    }

                    whatIsThis.call({hello:'world'});   <--we passed an argument with the "call" method.    <---the call site

                    Object
                        hello: "world"
                        __proto__: Object

                    This call method (used directly on the function object) 
                    shows that we assigned the 1st argument to the "this" keyword.
                          
-----------------------------------------------------------------------------

Rule #4:  "new" Binding Rule 

           with Constructor Functions:
            
                  When used with the "new" keyword, constructor functions create objects.
                  Let's do it:
*/
                      function Person (name, age){                    //<---- The caps let's people know it is a constructor function
                                  this.name = name;
                                  this.age = age;                     //<--- you do not have to use "return"
                      }

                      let person1 = new Person('doug', 30);
                      console.log(person1);                           // result: { name: 'doug', age: 30 } ...you did it.



            // The "new" keyword:  var instance = new ConstructorFunc();
            // In other words:  Declare an instance and set it equal to "new" and invoke the constructor function.

            /* When you use the "new" keyword it does 4 things:
                        1. it invokes the constructor function.
                        2. creates an empty object.
                        3. assigns the empty object to the "this" keyword.
                        4. implicitly (absolutely and without qualification) returns the new object
                           thereby creating an object & assigning it to the name that you gave it.
   
-----------------------------------------------------------------------------  

*** Misconceptions of "this"  ***

        "this" does not refer to itself
        
        "this" is not a function's scope.

-----------------------------------------------------------------------------                  
*/

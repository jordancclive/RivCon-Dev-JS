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

***Important***   ---> "this" changes depending in its context (how you use it in a program).

-----------------------------------------------------------------------------

Example:

        If you console.log(this);  out of the blue....you get the window object.  This is the default value of this.
        
                console.log(this);

                Window {speechSynthesis: SpeechSynthesis, caches: CacheStorage, localStorage: Storage, 
                sessionStorage: Storage, webkitStorageInfo: DeprecatedStorageInfo…}

-----------------------------------------------------------------------------
***Important rule:  If you want to figure out the "this" keyword, always check where the call site is.......

                    It is important to realize that "this" refers to the EXECUTION CONTEXT, 
                    or how a function is called.  
-----------------------------------------------------------------------------

Example:

                function whatIsThis(){
                    console.log(this);
                }

                whatIsThis();     <---the call site

                Window {speechSynthesis: SpeechSynthesis, caches: CacheStorage, localStorage: Storage, 
                sessionStorage: Storage, webkitStorageInfo: DeprecatedStorageInfo…}

                *** As you can see, you get the same result.

-----------------------------------------------------------------------------

Example:

                function whatIsThis(){
                    console.log(this);
                }

                var obj = {};
                obj.whatIsThis = whatIsThis;

                obj.whatIsThis();   <---the call site
                
                Object
                    whatIsThis: function whatIsThis()
                    __proto__: Object

                Now "this" points to the object where we are calling "this" from.

-----------------------------------------------------------------------------

Example:

                function whatIsThis(){
                    console.log(this);
                }

                whatIsThis.call({hello:'world'});   <--we passed an argument with the "call" method.    <---the call site
                
                Object
                    hello: "world"
                    __proto__: Object

                This call method (used directly on the function object) 
                assigned the argument we passed to it to the "this" keyword.
                
-----------------------------------------------------------------------------   
-----------------------------------------------------------------------------  

*** Misconceptions of "this"  ***

        "this" does not refer to itself
        
        "this" is not a function's scope.






                
*/

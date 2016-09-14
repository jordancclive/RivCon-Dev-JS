# JavaScript
testing new concepts here...

Quick notes: 

put ----> 'use strict';  <---- in your code (at the beginning) and any JavaScript compiler will 
utilize the ES2015 ES6 compiler when it runs your code.

Deep inspection of something:   console.dir(x)  
            ---> x = an object like an array you declared in your code.  see:  prototypes-OOP.js  around line 100+.

-----------------
Arrays:

                        x-OBj-coreyParty.js
                        x-Obj-Proto-splitter.js
                        functions-array_methods.js
                        
                        x-Recursion-BRobins.js              // Math.round(), Math.random(), arrays, Recursion 
                        x-Arr-changArrayinFunc.js           // Concept: changing arrays passed to functions
                        x-Arr-Obj-nested-farmExhibit.js     // Nested Arrays & Objects, Prototype method use, push()
                        x-g-switch_example.js               // && ||, switch, simple array

-----------------

Boolean:

                        x-g-switch_example.js               // && ||, switch, simple array
-----------------

Call Back Functions:

                        x-CB-Proto-map.js                   // -map-, prototype method, callBack functions, .push()
                        x-CB-Proto-filter.js                // -filter-, prototype method, callBack functions, .push()
                        x-CB-Proto-forEach.js               // -forEach-, prototype method, callBack functions
                        x-CB-Proto-myReduce.js              // -myReduce-, prototype method, callBack functions
-----------------

Data Types ---> see comments and definitions in: 

                        dataTypes.js


Default Values: (Setting up)

                        x-OBj-coreyParty.js
                        truthy-Falsey.js

-----------------

Functions:

                        x-Func-jamesBond.js                 //(nested, IIFEs, scope)
                        x-CB-Proto-map.js                   // -map-, prototype method, callBack functions, .push(), 
                        x-CB-Proto-filter.js                // -filter-, prototype method, callBack functions, .push()
                        x-CB-Proto-forEach.js               // -forEach-, prototype method, callBack functions
                        x-CB-Proto-myReduce.js              // -myReduce-, prototype method, callBack functions
                        
                        functions-array_methods.js
                        functions-global_objects.js
                        functions-number_methods.js
                        functions-string_methods.js	
-----------------

Loops:

for / in  loop:   

                        objects-for_in_Loops.js

----------------

Math functions:

                        classMethods-Math.js

Math.ceil() returns the largest integer greater than or equal to a given number.

                        x-MathFunctions.js

Math.floor() returns the largest integer less than or equal to a given number.

                        x-MathFunctions.js
                        
                        x-g-stringWork.js                   // .slice(), Math.floor()
                        
Math.random() returns a random number (based on the system time) between 0 & 1.

                        x-Recursion-BRobins.js              // Math.round(), Math.random(), arrays, Recursion 

Math.round() rounds to the nearest integer

                        x-MathFunctions.js
                        x-Recursion-BRobins.js              // Math.round(), Math.random(), arrays, Recursion 

-----------------

Methods:

                        classMethods-Math.js
                        functions-array_methods.js	
                        functions-global_objects.js
                        functions-number_methods.js
                        functions-string_methods.js
                        
                        x-g-nickNameSimple.js               // .charAt(), .substr(), .indexOf
                        x-Recursion-FizzBuzz.js             // Recursive and iteration version; .toString()
                        x-Recursion-revString.js            // .slice(), .join(), .split(), Recursion
                        recursion.js                        // general description/definition., .pop(), 
                        x-Arr-Obj-nested-farmExhibit.js     // Nested Arrays & Objects, Prototype method use, push()
                        x-CB-Proto-map.js                   // -map-, prototype method, callBack functions, .push(), 
                        x-CB-Proto-filter.js                // -filter-, prototype method, callBack functions, .push()
                        x-CB-Proto-forEach.js               // -forEach-, prototype method, callBack functions
                        x-CB-Proto-myReduce.js              // -myReduce-, prototype method, callBack functions

.charAt(index)

                        x-g-nickNameSimple.js               // .charAt(), .substr(), .indexOf

.indexOf(searchValue, [, fromIndex]);  returns the first occurence of, if not found returns -1

                        x-g-nickNameSimple.js               // .charAt(), .substr(), .indexOf
                        
.join(delimiter)
                        
                        x-Obj-Proto-splitter.js
                        x-Recursion-revString.js            // .slice(), .join(), .split(), Recursion
                        x-g-sortingstrings.js               // .split(), .sort(), .push(), .join()

.pop()

                        recursion.js                        // general description/definition., .pop(), 
                        
.push(value1 [, value2,...])

                        x-Obj-Proto-splitter.js
                        x-Arr-Obj-nested-farmExhibit.js     // Nested Arrays & Objects, Prototype method use, push()
                        x-CB-Proto-filter.js                // -filter-, prototype method, callBack functions, .push()
                        x-g-sortingstrings.js               // .split(), .sort(), .push(), .join()
                        
.slice(from, up to & not including)       

                        x-Recursion-revString.js            // .slice(), .join(), .split(), Recursion
                        x-g-stringWork.js                   // .slice(), Math.floor()
                        
.sort()

                        x-g-sortingstrings.js               // .split(), .sort(), .push(), .join()
                        
.splice()

                        x-g-parser.js		// regex example, .splice()
                        
                        
.split(delimiter)

                        x-Obj-Proto-splitter.js
                        x-Recursion-revString.js            // .slice(), .join(), .split(), Recursion
                        x-g-sortingstrings.js               // .split(), .sort(), .push(), .join()
                        
.substr(x,y);  up to and not including "y"

                        x-g-nickNameSimple.js               // .charAt(), .substr(), .indexOf
                        
.toString()

                        x-Recursion-FizzBuzz.js             // Recursive and iteration version; .toString()

-----------------

Objects:

                        objects-referencing_properties.js
                        objects-definitions.js
                        objects-for_in_Loops.js	
                        objects-hasOwnProperty-in.js	
                        objects-referencingNested_w-Arrays.js	
                        
                        x-Obj-... .js... (There will be many files with this prefix)

                        x-Arr-Obj-nested-farmExhibit.js     // Nested Arrays & Objects, Prototype method use, push()

-----------------

Prototyping - Object Oriented Programming:

                        prototypes-OOP.js
                        x-Obj-Proto-monsterGame.js
                        x-Obj-Proto-splitter.js
                        classMethods.js
                        
                        x-Arr-Obj-nested-farmExhibit.js     // Nested Arrays & Objects, Prototype method use, push()
                        x-CB-Proto-map.js                   // -map-, prototype method, callBack functions, .push(), 
                        x-CB-Proto-filter.js                // -filter-, prototype method, callBack functions, .push()
                        x-CB-Proto-forEach.js               // -forEach-, prototype method, callBack functions
                        x-CB-Proto-myReduce.js              // -myReduce-, prototype method, callBack functions

-----------------

Recursion:

                        recursion.js                        // general description/definition., .pop(), 
                        x-Recursion-revString.js            // .slice(), .join(), .split(), Recursion
                        x-Recursion-fibonacci.js            // multiple recursive calls
                        x-Recursion-FizzBuzz.js             // Recursive and iteration version; .toString()
                        x-Recursion-BRobins.js              // Math.round(), Math.random(), arrays, Recursion 

-----------------

regex101.com

                        x-g-drakeGenerator.js               // regex example,...
                        x-g-parser.js		// regex example, .splice()

-----------------

Scope:

                        scope_Hoisting.js
                        x-Func-jamesBond.js                 //(nested, IIFEs, scope) 

-----------------

switch(variable to examine)

                        x-g-switch_example.js               // && ||, switch, simple array
-----------------

Truthy/Falsey:

                        truthy-Falsey.js
                        x-Obj-coreyParty.js
                        x-Obj-Proto-splitter.js
                        classMethods.js

-----------------

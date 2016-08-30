// Truthy-Falsey
// Every statement in javaScript can be evaluated as true or false.     (called Truthy & Falsey)
/*

A Truthy statement is a value that translates to true when evaluated in a Boolean context.
        By default values evaluat as truth.

A Falsey value is a value that translates to false when evaluated in a Boolean context.
        Falsey items:
        - false
        - 0
        - ""   <---- an empty string
        - null
        - undefined
        - NaN

Note:  You can use the "!!" symbol in front of an operation to evaluate it in-place.
*/

                function printN(n){
                        console.log(!!n);
                }
                printN(5);              //<---- true
                printN(NaN);            //<---- false
                
                //also:
                
                let n = 4, p = 5;
                if (p%2) console.log("This is even");
                if (!(n%2)) console.log("This is even");
        
        
// An illustration:

// You might normally do this:

                function countdown(n){
                        while(n>0){
                                console.log(n);
                                n--;
                        }
                }
                console(5);

// using Truthy/Falsey, you can also do this:

                function countdown(n){
                        while(n){                       //<---- This performs exactly the same way
                                console.log(n);         //      N is true until it hits 0
                                n--;                    //<---- As a point of reference, if n was a negative
                        }                               //      number it would go on forever, so you have to be careful.
                }
                console(5);


// some examples of truthy/falsey:

                !!5                     //<---- truthy and evaluates to true
                !!(4%2)                 //<---- falsey & evaluates to false
                !!(undefined)           //<---- falsey & evaluates to false
                !!("a".length-1)        //<---- falsey & evaluates to false


// some examples of this concept with And/Or Operators:

//      Note:  the system looks at the first operator and if it sees "false", it can stop looking. If it
//             sees something that is true, then it has to evaluate the second operator to determine if this
//             expression evaluates to true or false.   
//      ......"And" - Both operators must evaluate to true for the expression to evaluate "truthy":

                1 && 1          //<----true
                1 && 0          //<----false
                0 && 1          //<----false
                0 && 0          //<----false
        
//      ......"Or" - At least one operator must evaluate to true for the expression to evaluate "truthy":

                1 || 1          //<----true
                1 || 0          //<----true
                0 || 1          //<----true
                0 || 0          //<----false 


// Take a look at results from these kinds of expresions in the console:  

                //              ....console.log(...);....
                
                2 && 3          // returns 3   ...because of how JS evaluates the expression.
                2 || 3          // returns 2


//  You can use truthy/falsey conscepts for the following:

// You might do something like this:

                function makePerson(name, age){         //<---- We are populating a new object with the parameters shown
                        let obj = {};   
                        obj.name = name;
                        obj.age = age;
                }
                makePerson("Vince", 45);                //<---- returns:  { name: "Vince", age: 45 }

// If we do not pass the age parameter and want to input a default value for this parameter, then using
// the And/Or and trythy/falsey concepts, we can create default values within operations as follows:

                function makePerson(name, age){         //<---- We are populating a new object with the parameters shown
                        let obj = {};   
                        obj.name = name;
                        obj.age = age || 60;            // if the age is given, then will always use that value.
                }                                       // Only if age is false (undefined or 0...), then use the default value.
                makePerson("Vince");                //<---- returns:  { name: "Vince", age: 60 }









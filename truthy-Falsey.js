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

                function printN(n){
                        console.log(!!n);
                }
                printN(5);              //<---- true
                printN(NaN);            //<---- false
                
                //also:
                
                let n = 4, p = 5;
                if (p%2) console.log("This is even");
                if (!(n%2)) console.log("This is even");
        
*/
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


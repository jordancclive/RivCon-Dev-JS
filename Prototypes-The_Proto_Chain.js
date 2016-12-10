/*
----------------------------------------------------------------------------------------

                            The Prototype Chain

----------------------------------------------------------------------------------------

Notes:

    - All Objects have an internal link to another object.  This internal link is the "internal prototype object.
    
    - Each "internal protoype" object has an internal prototype object of its own 
      until it reaches the last step in the chain, caleed "null".
      
    - "null" by definition, has no prototype, and acts as the final link in this prototype chain.
    
                                                                  is eventually
           The current     is linked to                             linked to   
             Working      -------------->    Other Objects...    -------------->    null
             Object         up the                                   up the 
                            Chain                                     Chain

----------------------------------------------------------------------------------------

Illustration......
*/
            // let's make an icecream sundae
            var toppings = ['cherry', 'chocolate-chip', 'peanuts'];
            // I have a peanut array and want to track that....
            var allergy = toppings.slice(-1);
            dir(allergy);   //let's inspect the allergy variable.
/*
                    Array[1]                <---as we expected, it is just an array with peanuts inside of it.
                    0: "peanuts"
                    length: 1
                    __proto__: Array[0]
                    
            How does toppings get access to the slice method? 
            
            dir(toppings);

            Array[3]
            0: "cherry"
            1: "chocolate-chip"     <---here are all the indexes linked and that's it....yes?
            2: "peanuts"
            length: 3
            __proto__: Array[0]     <---This is the next link in the prototype chain
                                        .....double underscore, then proto, then double underscore

                                        It is commonly known as "dunderProto".  

                                        It is just an object literal with a bunch of methods that one can use on an array.

                                        What follows is what is in dunderProto.  ....another inspection...

                                        ******  So what also follows is the next step up in the prototype chain hierarchy *********

                    concat: function concat()
                    constructor: function Array()
                    copyWithin: function copyWithin()
                    entries: function entries()
                    every: function every()
                    fill: function fill()
                    filter: function filter()
                    find: function find()
                    findIndex: function findIndex()
                    forEach: function forEach()
                    includes: function includes()
                    indexOf: function indexOf()
                    join: function join()
                    keys: function keys()
                    lastIndexOf: function lastIndexOf()
                    length: 0
                    map: function map()
                    pop: function pop()
                    push: function push()
                    reduce: function reduce()
                    reduceRight: function reduceRight()
                    reverse: function reverse()
                    shift: function shift()
                    slice: function slice()                     <---we found slice, we do not have to continue up the chain.
                    some: function some()                           we use the first slice method up the chain and use it.
                    sort: function sort()
                    splice: function splice()
                    toLocaleString: function toLocaleString()
                    toString: function toString()
                    unshift: function unshift()
                    Symbol(Symbol.iterator): function values()
                    Symbol(Symbol.unscopables): Object
                    __proto__:Object                            <---If we did not find slice, we would go up the chain.
                                                                    The last link in the chain is null with no methods.
                                                                    If we go that far, we will fire an error message.

----------------------------------------------------------------------------------------

                            __proto__ vs prototype

----------------------------------------------------------------------------------------

What we have been discussing above is the internal prototype object.  

There is also a unique object that all functions have:  the prototype property/object.

            ----------------------------------
            
As we have already discussed, This internal link that is the "internal prototype object:

            // let's make an ice cream sundae
            var toppings = ['cherry', 'chocolate-chip', 'peanuts'];
            // I have a peanut array and want to track that....
            var allergy = toppings.slice(-1);
            dir(allergy);   //let's inspect the allergy variable.

            Array[1]                
            0: "peanuts"
            length: 1
            __proto__: Array[0]     <---This is the next link in the prototype chain and
                                        what is called the "internal prototype object".

                                        .....double underscore, then proto, then double underscore

            ----------------------------------
            
As mentioned, all functions also have:  the prototype property 
(which is not the same as the __proto__  "internal prototype object". 



var fnc = function(){};

dir(fnc);

function fnc()
  arguments: null
  caller: null
  length: 0
  name: "fnc"
  
  prototype: Object               <---This is a functions additional property called the prototype property.
      constructor: function ()        It is used with constructor functions.
      __proto__: Object
   
  __proto__: function ()
      [[FunctionLocation]]: VM393:1
      [[Scopes]]: Scopes[1]          

*/

/*
--------------------------------------------------------------------------

                              Datatypes

--------------------------------------------------------------------------

There are seven datatypes:

                Number
                String
                Boolean
                Symbol (ES6 only)
                Null                <----Purposeful placeholder that represents a lack of a value.
                Undefined           <----There is no value.  Something does not exist or has not yet been defined.
                Object              <----includes dates, functions & Arrays.  ...and errors.
                
                Object are wrappers for many different kinds of functionality in JS.

--------------------------------------------------------------------------

The typeof command:

                typeof 5
                "number"
                
                typeof "hello"    
                "string"
                
                typeof true
                "boolean"
                
                typeof undefined
                "undefined"
                
                var num;
                
                typeof num
                "undefined"
                
                var obj = {};

                typeof obj
                "object"
                
                typeof [1,2,3]
                "object"
                
                function fn(){}

                typeof fn
                "function"
                // functions are objects too.
                // functions are invokable, so they get their own output from typeof.

                typeof null
                "object"
                //this is a bug in the original version....

--------------------------------------------------------------------------






--------------------------------------------------------------------------

Null:

  You have defined a variable and you know what Data Type it is, but have not given it a value. 
  It is a placeholder for a variable's value.  A variable that has no value yet.
  

Undefined:

  You have no idea what the Data Type is for this variable yet.  The variable has been declared, but it is an unused variable.
  

String:

  text, always wrapped with quotes.
  

Numbers:

  Are numbers with all the same characteristics of numbers in the real world.  (You can perform operations on them).
  
  64 bits, 1 bit is +/-, a few store the decimal point.  Fractional digital numbers are approximate.
  

Boolean:

  A value of True or False.  ....takes the least amount of memory. (1 bit  --> 0 or 1).
  

Function:

  Chunk of reusable code.
  

Object:

  A specific type of Object is an Array.
  
      newObj = {property(key): value...};
      
      newArr = [1,2,3];
      

Date:


Regular Expression:

      / .* /g,



Symbol:  New Data Type

  It is a primitive Data type.

=================================

Special Values:

        Infinity, -Infinity
        
        NaN
        
=================================

Precedence:

        1. *, /, %(mod)
        
        2. +, -

=================================

Primitive Data Type vs. Complex Data Type.

  Primitive Data Type takes up a specific amount of memory.
    
    Examples:   Numbers (They are assigned a specific set of bits to store them and a maximum # that can be used.)
                Booleans take up 1 bit of memory and are Primitive.  
                Strings.
  
  Complex Data Types do not use a finite amount of memory.  The amount of memory used can be changed. 
  ...and can change over the Data Types use (this is the most important thing to remember).

    Examples:   Objects, Functions, Arrays.
    
=================================

What is a higher order language?   ....You have a lot of flexibility with the language.  
You can pass functions as variables and treat them like any other variable.  
(JavaScript is a high order language)

=================================


*/

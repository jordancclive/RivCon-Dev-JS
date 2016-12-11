/*
-----------------------------------------------------------------------

                             Type Coercion

-----------------------------------------------------------------------

JavaScript is a loosely typed language.  
Meaning that variables are declared without a type.

Datatypes are derived internally by JavaScript.  
...and can change internally.

Which brings us to Type Coercion.  
javascript will try to make sense out of what you are doing and try to 
come up with a result....as follows:

        4 + 5 = 9
        "a" + "b" = "ab"
        'a' + 5 = "a5"            <---- result are not what you would expect.
        'a' + [1,2,3] = 'a1,2,3'  <----
        4+[1,2,3] = '41,2,3'      <----
        5 + true = 6              <----
        5 + false = 5             <----

-----------------------------------------------------------------------

boolean tidbits regarding type coercion:

        4 == 4    ---> true
        4 == '4'  ---> true (by coercion)
        4 === '4' ---> false (a deep equals takes type into account)

        true == 1 ---> true
        true === 1 ---> false

-----------------------------------------------------------------------

On Objects:

        var obj1 = {};
        var obj2 = {};
        
        obj1 == obj2   ---> false
        obj1 === obj2   ---> false        
        
        This is because these objects are referencing different objects in memory.
        These (above) are 2 different references and therefore do not equal each other.

        so if I do the following:
        
        obj3 = obj2;
        
        obj3 == obj2    ----> true
        obj3 === obj2   ----> true
        
 
 The same is true with arrays.
 
----------------------------------------------------------------------- 
 
Any value, not just zeros and ones can be coerced into a boolean.

        var value = true;
        
        if(value) console.log('hello');     ----> will get:  hello
        

There is the concept of truthy (variables that exist) & falsey  

What is falsey?

              NaN
              null
              undefined
              0 (zero)
              '' (empty string)
              false                 .......everything else is truthy.
              
              Note: all objects (including arrays) are truthy regardless of whether they are empty or not. 
              
The double exclamation point (!!) before a variable tells JavaScript to evaluate something as truthy or falsey.              
              
       






*/

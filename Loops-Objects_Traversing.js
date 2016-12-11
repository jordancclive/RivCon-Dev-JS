/*
------------------------------------------------------------------------

                Loops- Traversing_Objects

------------------------------------------------------------------------

There are two main ways that you can loop through an object: 
a for-in loop, and using the Object.keys method.

------------------------------------------------------------------------

Let’s start with the for in loop.

        The for in loop has different syntax than a regular for loop, 
        as you’re not defining a counter. 
        Instead, a for-in loop will loop through all the enumerable properties of an object 
        and that object’s internal prototype chain.
        
                var myDog = {name: 'Duke', breed: 'Labrador', color: 'Chocolate'};
                
                for(var key in myDog) {
                    console.log(key);
                }

                result:
                
                "name"
                "breed"
                "color"

------------------------------------------------------------------------













*/

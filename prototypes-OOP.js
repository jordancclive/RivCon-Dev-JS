// Prototyping-OOP
/*
When someone says "Object Oriented" they mean something dependent on objects.  
JavaScript is a "functional" language, but has a lot of object oriented aspects to it.

When you call a method on an object and the method uses the keyword "this", "this" refers to the object you're 
calling the method on (the variable before the dot).
*/

//------------------
// An example:

            var me = {
              species: 'human',
              character: 'impeccable',
              introduce: function(){
                console.log("Hello, I am a(n) " + this.character + " " + this.species + ".");
              }
            };
            
            me.introduce();   //<---- Result:  "Hello, I am a(n) impeccable human."

            // Note:  "me" refers to the object. We invoked the method "introduce" on the object "me".
            // As a result, we are setting the contxt of "this".

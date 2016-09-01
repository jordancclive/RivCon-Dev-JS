// Prototyping-OOP
/*
When someone says "Object Oriented" they mean something dependent on objects.  
JavaScript is a "functional" language, but has a lot of object oriented aspects to it.

When you call a method on an object and the method uses the keyword "this", "this" refers to the object you're 
calling the method on (the variable before the dot).

Prototypes = a blueprint

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


//------------------
// Another example:  (creating a method)

var bucket = {
             contents: [],
             add: function(thing){
                    this.contents.push(thing);     
             }
}

bucket.add('old brown shoe');       // added something to the value of an array whose key is "contents".
console.log(bucket.contents);       //returns:  [ 'old brown shoe']


//------------------
// Another example:  (the concept of creating a blueprint ---> Prototype)(From Concept to reality follows)

//Let's say we wanted to create an object for a person or people

            let person1 = {
                    name: 'doug',
                    age = 30
            }
            let person2 = {
                    name: 'vin',
                    age = 50
            }
            let person3 = {
                    name: 'pam',
                    age = 35
            }

// As you can see all person objects have a name and age.
// let's create a blueprint at which all people can be created from.

// you can do it with a function:

            function makePerson(name, age){                             //<---- you give this function a name and an age
                        let obj = {};                                   //      and it will return a new object and assign
                        obj.name = name;                                //      it to the person.
                        obj.age = age;
                        obj.sayHello = function(){
                                    console.log('hi');
                        }
                        return obj;
            }
            Let person1 = makePerson('doug', 30);                       // there you go.
            Let person2 = makePerson('pam', 35);                        // We now have 2 people (person1 & person2)
            person1.sayHello();  // result:  hi                         // built by our function.
            
// Trying (above) to create individual objects with a blueprint (--> prototype) and make it a clean generator of objects.
// ...Doing it with a function (above).
// The problem with this is if after we build a few people and want to add more attributes to a "person",
// we would need to update to the function & all the existing people individually.  ***not very efficient***


//-------------------------------------------------------------------------------
// So let's make a concept and then talk about how to do it:                     *** This is the concept of PROTOTYPES ***
/*
            ***  We want to create a template to make people *** 

let's call it the Parent:                       
On the Parent, there will be a                  PARENT - Blueprint
Blueprint on it.

Using the Parent Blueprint
We want to create Children:           CHILD       CHILD       CHILD       CHILD       CHILD

The CHILD (all of them) will know about its PARENT.  All the information about how these Children should work won't
exist on the Child itself.  It will exist on its Parent and the Child will simply refer to its Parent. 
That is how we are going handle the problem of chaning and adding attributes.  If we do this, then if we change 
the Parent's blueprint, then every new and existing CHILD we be able to see and use the change.
//-------------------------------------------------------------------------------


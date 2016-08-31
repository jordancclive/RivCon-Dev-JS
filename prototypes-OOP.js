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
// Another example:  (creating a blueprint ---> Prototype)

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

            function makePerson(name, age){
                        let obj = {};
                        obj.name = name;
                        obj.age = age;
                        obj.sayHello = function(){
                                    console.log('hi');
                        }
                        return obj;
            }
            Let person1 = makePerson('doug', 30);  //there you go.
            Let person2 = makePerson('pam', 35);
            person1.sayHello();  // result:  hi
            
// want to create object with a blueprint (--> prototype) and make it a clean generator of objects.

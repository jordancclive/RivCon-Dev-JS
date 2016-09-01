// Prototyping-OOP
/*
When someone says "Object Oriented" they mean something dependent on objects.  
JavaScript is a "functional" language, but has a lot of object oriented aspects to it.

When you call a method on an object and the method uses the keyword "this", "this" refers to the object you're 
calling the method on (the variable before the dot).

Note:  There is no object wrapper on primitive datatypes.  ...that is unless you use a property or method on them.
            If you do this then the system will be smart enough to put an object wrapper on that datatype for you.

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
On the Parent, there will be a                  PARENT - (with a Child Blueprint)
Blueprint on it.

Using the Parent Blueprint
We want to create Children:           CHILD       CHILD       CHILD       CHILD       CHILD

The CHILD (all of them) will know about its PARENT.  All the information about how these Children should work won't
exist on the Child itself.  It will exist on its Parent and the Child will simply refer to its Parent. 
That is how we are going handle the problem of chaning and adding attributes.  If we do this, then if we change 
the Parent's blueprint, then every new and existing CHILD we be able to see and use the change.
//-------------------------------------------------------------------------------
Some terminology:

If we are talking about ARRAYS, then the Parent in the case of Arrays is the "CLASS called ARRAY" 
and the Children are the arrays itself.  These Children does not keep track of the methods itself.  
It (the Child) refers to the Parent called ----> Array for the methods.

                                                PARENT - Array (Is a Class)(always capitalize the name here)
                                                
                         []          []          []          []          []         <--- individual arrays
//-------------------------------------------------------------------------------*/

// An example of this concept:

            let arr = [1,2,3,4];
            arr.push(5);
            console.log(arr);                   //<---- [ 1, 2, 3, 4, 5 ]

//Let's do a deep inspection of our array using ---->  console.dir(arr);
// You can see this if you are in Chrome's console (as an example). ...FYI, not in something like repl.it

            console.dir(arr);
            Array[5]                // An array is actually an Object. ...and behind the scenes
            0: 1                    // These are the index/values 
            1: 2
            2: 3
            3: 4
            4: 5
            length: 5               //it has a .length property (of 5 in this case). Every Child is responsible for
                                    // remembering its own length.
                                    
            __proto__: Array[0]     // This is the Blueprint (which is in the Parent ---->Array)

// An array is actually an Object. ...and you are seeing (above) what information this "Child" has.
// Notice that there is no .push() method shown.

// All the other information is located in the Parent. ....the prototype otherwise known as the array's parent (Array)

//....(let's look at that.)
/*
We are now going to look at the parent which is the "Class" called "Array":
*/
            __proto__:Array[0]                              // here are all the Parent methods the Child can use.
            concat: function concat()                       // *** first it looks within itself for its methods,
            constructor: function Array()                   // then it looks upwards into its Parent for the 
            copyWithin: function copyWithin()               // method selected. ***
            entries: function entries()
            every: function every()                         // This is called moving up the *** Prototype Chain ***
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
            length: function 0
            map: function map()
            pop: function pop()
            push: function push()                           //<---- here you can see .push();
            reduce: function reduce()                       // which we used above.
            reduceRight: function reduceRight()
            reverse: function reverse()
            shift: function shift()
            slice: function slice()
            some: function some()
            sort: function sort()
            splice: function splice()
            toLocaleString: function toLocaleString()
            toString: function toString()
            unshift: function unshift()
            values: function values()
            Symbol(Symbol.iterator): function values()
            Symbol(Symbol.unscopables): function Object
            __proto__:Object


//-------------------------------------------------------------------------------
// As an aside, we can give a property to the array Child. and as an FYI, let's see 
// how this changes the deep dive....

            arr = [1,2,3,4];
            arr.sayHello = function (){ console.log('hi!');};           // we are creating a method inside the Child
            arr.sayHello();                                             // We invoked the method ---->  hi!
            console.dir(arr);
            
            Array[4]
            0: 1
            1: 2
            2: 3
            3: 4
            length: 4
            sayHello: ()                        // As you can see, if we deep dive and look at the child.
                                                // The method is listed and will exist for as long as the 
                                                // coding session exists.
            __proto__: Array[0]
            
            
            // If you wanted to get rid of the method that you built. then you would have to use the following:
            //removing a property from an object:
              let emptyObj = {key2: "charles", age: 60};
              delete emptyObj.key2;                           //<---- removing a property or method from an object
              console.log(emptyObj);                          //<---- in this case result is: { age: 60 }
//-------------------------------------------------------------------------------
/* Let's talk about the *** Prototype Chain ***

Most datatpyes have an internal link to another object (its prototype) that contains it s methods.

*** first it looks within itself for its methods, then it looks upwards into its Parent for the method selected. ***
*** In other words up the Prototype Chain. ***

The ramification of this statement is that if you decide to create a method within the child (as we did with sayHello previously),
and it already exists within the Parent, then the child will use the new method that you built before using the Parent's method.

The Chain:

            Child object (Obj1)  ->   Parent (Obj2)  ->  Blueprint (Obj3)  ... Null (no more blueprint)
                                        (Class)
                                Array.prototype.method()

                                    You keep gong until there is no Parent.
//-------------------------------------------------------------------------------

Ok.....We have made it to the place where we can think about building something that generates objects.
                                                                        
                                                                        ***  This is a "Constructor Function" ***

Constructor Function:
            
                        When used with the "new" keyword, constructor functions create objects.
Let's do it:
*/
            function Person (name, age){                    //<---- The caps let's people know it is a constructor function
                        this.name = name;
                        this.age = age;                     //<--- you do ot have to use "return"
            }
            
            let person1 = new Person('doug', 30);
            console.log(person1);                           // result: { name: 'doug', age: 30 } ...you did it.

//-------------------------------------------------------------------------------

// The "new" keyword:  var instance = new ConstructorFunc();
// In other words:  Declare an instance and set it equal to "new" and invoke the constructor function.

/* When you use the "new" keyword it does 4 things:

            1. it invokes the constructor function.
            2. creates an empty object.
            3. assigns the empty object to the "this" keyword.
            4. implicitly (absolutely and without qualification) returns the new object
               thereby creating an object & assigning it to the name that you gave it.

//-------------------------------------------------------------------------------

// Now that we have an object that we created and it was created with a blueprint;
// we can think about the example we had before where we put in a method ----> sayHello();

// if we decide that this method should be on the Parent and not the Child object, here is how you would do it:

            Person.prototype.sayHello = function(){



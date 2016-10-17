/*
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
 Now that we have an object that we created and it was created with a blueprint;
 we can think about the example we had before where we put in a method ----> sayHello();
 if we decide that this method should be on the Parent and not the Child object, here is how you would do it:
*/
            Person.prototype.sayHello = function(){
                        console.log(this.name + " says Hello!");
            }

// so here is the code again with this mentioned statement:

            function Person (name, age){                    //<---- The caps let's people know it is a constructor function
                        this.name = name;
                        this.age = age;                     //<--- you do ot have to use "return"
            }
            Person.prototype.sayHello = function(){
                        console.log(this.name + " says Hello!");
            }
            let person1 = new Person('doug', 30);
            console.log(person1);                           // result ----> { name: 'doug', age: 30 }
            person1.sayHello();                             // result ----> doug says Hello!
            
            // This result would also be true for any person's created previously and any new person objects.
            
// A deep dive view just to see where things are:

            Person {name: "doug", age: 30}
                        age:30
                        name:"doug"
                        __proto__:Object
                                      constructor:Person(name, age)
                                      sayHello: function ()             //<---our method in the Parent - in the constructor function
                                      __proto__:Object                  // This is the Object level (up the chain)
                                                __defineGetter__: function __defineGetter__()
                                                __defineSetter__: function __defineSetter__()
                                                __lookupGetter__: function __lookupGetter__()
                                                __lookupSetter__: function __lookupSetter__()
                                                constructor:Object()
                                                hasOwnProperty: function hasOwnProperty()
                                                isPrototypeOf: function isPrototypeOf()
                                                propertyIsEnumerable: function propertyIsEnumerable()
                                                toLocaleString: function toLocaleString()
                                                toString: function toString()
                                                valueOf: function valueOf()
                                                get __proto__: function __proto__()
                                                set __proto        __: function __proto__()
//-------------------------------------------------------------------------------

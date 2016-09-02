// Class Methods....Static Methods

// Ones that are non-prototypical ----> also known as:  Static Methods (unchanging)
// Methods that we want to put on the Parent and not pass to the children
// doesn't require an instance to actually operate.  (as opossed to protype methods that do need an instance to run)

// Let's develop an example:

    function Person(name, age){
      this.name = name;
      this.age = age;
      Person.counter++;
    }
    
    // we are putting this method on the Class, not the prototype.
    Person.counter = 0;
    
    let p1 = new Person('someone', 30);
    let p2 = new Person('otherPerson', 40);
    
    console.log(Person.counter);    //<---- The result is 2 and the counter is on the class, not any particular person.
    
    // An individual person cannot reference this:
    console.log(p1.counter)         //<---- The result is undefined, the person object cannot find
                                    //      this property


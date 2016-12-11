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
  
  
  Example 1:
  
                var myDog = {name: 'Duke', breed: 'Labrador', color: 'Chocolate'};
                
                for(var key in myDog) {
                    console.log(key);
                }

                result:
                
                "name"
                "breed"
                "color"
                
  Example 2:  (a problem shows up here)

        By default all properties that you put on an object manually will be enumerable. 
        However, for-in will also return all the enumerable properties in your object’s prototype chain.
        
                var Dog = function(name, breed, color) {
                  this.color = color;
                  this.breed = breed;
                  this.name = name;
                }
                
                Dog.prototype.bark = "Bark!";

                var myDog = new Dog('Duke', 'Labrador', 'Chocolate');
                
                for(var key in myDog) {
                  console.log(key); 
                }
                
                result:
                
                "color"
                "breed"
                "name"
                "bark"    <---- this is from the user created method.


------------------------------------------------------------------------

  Example 3: (a solution for Example #2)
  
        Now we have 'bark' showing up when we loop over the keys. 
        If that's the intent, great! But usually, we don't want properties from an instance's internal prototype 
        showing up in our loop. There are two ways to solve this problem:

        We could check to see if a property belongs to the instance or 
        to its internal prototype using .hasOwnProperty. 
        
        .hasOwnProperty is called on an Object instance, and takes a key name as its argument. 
        It will return true if the property belongs to the instance and false if not.

                  var Dog = function(name, breed, color) {
                    this.color = color;
                    this.breed = breed;
                    this.name = name;
                  }
                  
                  Dog.prototype.bark = "Bark!";

                  var myDog = new Dog('Duke', 'Labrador', 'Chocolate');
                  
                  for(var key in myDog) {
                      if(myDog.hasOwnProperty(key)) console.log(key);   <---- .hasOwnProperty()
                  }

                result:
                
                  "name"
                  "breed"   <----These results are what we want!
                  "color"

------------------------------------------------------------------------

  Example 4:  (using Object.keys())

        Our other option is using Object.keys(). 
        Object.keys is a class method that takes an object as its argument, 
        and returns an array of the object's keys that belong to the object. 
        One great thing about Object.keys is that you can chain Array methods off of it.

                  var Dog = function(name, breed, color) {
                    this.color = color;
                    this.breed = breed;
                    this.name = name;
                  }
                  
                  Dog.prototype.bark = "Bark!";

                  var myDog = new Dog('Duke', 'Labrador', 'Chocolate');
                  
                  Object.keys(myDog)

               result:
               
               Array (3 items)      <----now you have the keys.  You can use a for loop and get the values.
                  0: "color"
                  1: "breed"
                  2: "name"


                  You can now also get the values easily:  with map, a for loop, a for each loop...
                  
                  ---------------using map-----------------                 
                  var keyArray = Object.keys(myDog);
                  var valueArray = keyArray.map(function(){
                        return person[key];
                  });
                  
                  or
                  
                  ---------------a for loop---------------
                  for(var i=0; i< keyArray.length; i++){
                        console.log(myDog[keyArray[i]];
                  }
                  
------------------------------------------------------------------------






*/

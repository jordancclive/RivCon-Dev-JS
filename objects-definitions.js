/* Objects-Definitions

Look at objects as a bag of keys ("strings") and when you pull out a key (or know a particular key)(use a key), you can access 
that key's values. So we have a bunch of doors and these keys open the door to the values inside.  Unless we have that key, we
can't access the value. ......Key : Value.    .....key (===property) : Value.

As an example:  If you go to a dictionary (an object is similar to a dictionary).  You would go to a word in the dictionary 
(The Key or the property) and then you can see the definition (Value for the word).
*/

//Defining an Object:

              var dictionary = {                          //<----  the braces tell JS that this variable is an object and the 
                    sunny: "cheerful, optimistic",                 //contents (property: value pairs) are within the curly braces.
                    design: "contrive, devise"            //<----  property: "value" or "value1, value2..."
              };                                          //<----  Note:  The value in this case is a string, but it can be
                                                                   //whatever datatype you want it to be.  The key(property)
                                                                   //must always be a string. Written either:  name: or "name":

              var person1 = {
                    name: "Alex",
                    age: 31,
                    degree: true,
                    eyes: "Brown"

              var unusualObj = {
                    array: [1,2,3,[4,5]],                     //<---- an array with another nested array inside it
                    resultBoolean: true,                      //<---- a boolean value
                    str: "this is a string",                  //<---- a string value
                    nestedObj: {                              //<---- a nested Object
                      str2: "a different string",
                      anotherObj: {                           //<---- another more deeply nested object
                        key: "string value",
                      }
                    }
                  }




//Nested Objects:

                	var baseballTeams = {
                		yankees:{
                			location: "NY",
                			teamColors: ["white", "Navy Blue", "Pinstripes"]
                		},
                		mets: {
                			location: "NY",
                			teamColors: ["orange", "Blue"]
                		},
                		cubs:{
                			location: "Chicago",
                			teamColors: ["white", "Blue", "white"]
                		}
                	}
                
                	console.log(baseballTeams.mets.location); 		//<----  "NY"
                	console.log(baseballTeams.cubs.teamColors[0]);		//<---- "white"

/*
Definitions:

	A property is any value attach to an Object where the value is not a function.
	
	A method is a value attached to an Object where the value is a function.
	
	*** Use methods (in an Object) by invoking them like regular functions.
*/

                	var obj = {
                		name: 'doug',
                		age: 30,
                		sayHello: function(){
                			console.log("Hi!");
                		}
                	}
	
	object.name			//<---- 'doug'			<---- a property
	object.age			//<---- 30
	object.sayHello()		//<---- Hi			(you are invoking the function)
	object.sayHello			//<---- [Function: sayHello]  	(you are not invoking it, so you get that this 
									  //value is a function named sayHello)
									  //This value is a method.






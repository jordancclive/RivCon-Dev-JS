/*

-------------------------------------------------------------------------------

			Objects-Definitions

-------------------------------------------------------------------------------

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
              };

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

/*
-------------------------------------------------------------------------------

				Objects & Properties
				
				Core Introduction

-------------------------------------------------------------------------------

Understanding Objects is the key to becoming an expert JavaScript programmer. 
Objects are an unordered collection of properties. 
Each property consisting of a key and associated value pair.

Functions and Arrays (as well as Errors, Dates, etc) are special types of objects 
that are created using functions that are built into the JavaScript environment. 
Like normal objects, they are also able to hold any number of arbitrary properties.

There are two ways of accessing property values in JavaScript: 

		1.	dot notation and bracket notation. 
			Dot notation requires that you know the exact key name of the property you are trying to access. 
			For example:
*/
					var myObj = {name: 'Karen'};
					console.log(myObj.name); 	//this will print 'Karen'

					var key = "name";
					console.log(myObj.key) 		//this will be undefined
/*		
		2.	The second way is bracket notation. 
			Bracket notation allows you to evaluate the expression inside the brackets to a string, 
			and use that as your property key. 
			This allows you to 
				
				a) use variables names to access properties and 
				b) access properties whose key includes white space, special characters, or begins with a number.
*/
					var myObj = {name: 'Karen'};
					var key = "name";
					console.log(myObj[key]) 	//now we can get the value 'Karen'
/*
-------------------------------------------------------------------------------

Object structure:
				Object literal
				     ^^
				var myObj = {
						name:	"Karen M",				<---Property
						age:	26,
						pets:	[{name:	"Fira",	  species: "snake"},	<---Property
							 {name:	"Phoebe", species: "dog"}],	<---Property
						"likes-tea": true	^^			<---Property
						 ^^			^^
						Keys		      Values
				   (always a string)		Values can be any type of variable
			   
	Keys:  Do not have to be in quotes unless:  has spaces, special characters, starts with a number.
		They have the same requirement as variable names:
		

				Variable Names catch and hold values.
				The name must:
					- start with a character.
					- can contain numbers in the name.
					- can only have the following special characters: '$' or '_'. 

******	IMPORTANT  ******

	If you want to see if Karen likes tea and type:

			myObj.likes-tea		<---The system thinks you want to subtract the 
							variable "tea" from "myObj.likes"
			
	You will get an error because everything after the dot must conform to the variable designation
	In this case, you must use braket notation as follows:
	
			myObj.['likes-tea']  ---> will get:  true
			
-------------------------------------------------------------------------------

******	Notation  ******

	If I want to access the pet species, then I need to chain the .dot and braket notation as follows:
	
			myObj.pets[1].species	---> result:	"dog"
			
			
	














*/

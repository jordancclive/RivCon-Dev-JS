/* Referencing data in Nested Arrays & Objects can be confusing.

It is a good technique to use temporary variables in order to work your way to a piece of data.
This will keep you from loosing track of where you are in the nested data.                  */

//Simple example follows:

// A set of Objects in an Array which is in an Object in another Array.

			var classRoom = [
				{
					"Marnie" : [
							{"Monday" : true},
							{"Tuesday" : true},
							{"Wednesday" : true},
							{"Thursday" : true},
							{"Friday" : true}
						]
				},
				{
					"Lena" : [
							{"Monday" : false},
							{"Tuesday" : false},
							{"Wednesday" : true},
							{"Thursday" : false},
							{"Friday" : true}
						]
				},
				{
					"Shoshanna" : [
							{"Monday" : true},
							{"Tuesday" : true},
							{"Wednesday" : false},
							{"Thursday" : true},
							{"Friday" : false}
						]
				},
				{
					"Jessa" : [
							{"Monday" : false},
							{"Tuesday" : false},
							{"Wednesday" : false},
							{"Thursday" : false},
							{"Friday" : true}
						]
				}
			];
			
			console.log("We have an array with objects in it.");
			console.log("The first record in the top array is:" + "\n");
			console.log (classRoom[0]); 
			console.log("\n");
			
			console.log("Now we have an Object");
			console.log("The 1 key is -Marnie- and the value is an array:" + "\n");
			var temp = classRoom[0]["Marnie"];
			console.log (temp); 
			console.log("\n");
			
			console.log("We have another Array");
			console.log("We can get the first record of this array");
			console.log("which is another object:" + "\n");
			var temp2 = temp[0];
			console.log (temp2); 
			console.log("\n");
			
			console.log("This is the final object in our nested example");
			console.log("The 1 key is -Monday-");
			console.log("I want the value:" + "\n");
			var temp3 = temp2["Monday"];
			console.log(temp3);  

/* The result of this is:

			We have an array with objects in it.
			The first record in the top array is:
			
			{ Marnie: 
			   [ { Monday: true },
			     { Tuesday: true },
			     { Wednesday: true },
			     { Thursday: true },
			     { Friday: true } ] }
			
			
			Now we have an Object
			The 1 key is -Marnie- and the value is an array:
			
			[ { Monday: true },
			  { Tuesday: true },
			  { Wednesday: true },
			  { Thursday: true },
			  { Friday: true } ]
			
			
			We have another Array
			We can get the first record of this array
			which is another object:
			
			{ Monday: true }
			
			
			This is the final object in our nested example
			The 1 key is -Monday-
			I want the value:
			
			true

*/
              

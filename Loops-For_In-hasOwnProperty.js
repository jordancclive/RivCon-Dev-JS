/*
------------------------------------------------------------------

			For-In Loops
			
		      hasOwnProperty()

------------------------------------------------------------------

For_In loops:
*/
              var myObj = {};
              myObj = {names: "Vin", gender: "male", graduate: true};
              for (var k in myObj){
                  console.log(k);
                  console.log(myObj[k] + "\n");                        //<---- interpret k so must use bracket notation
              }

              /*results:

                        names
                        Vin

                        gender
                        male

                        graduate
                        true
              */

              //The "for / in" loop loops through the entire object.  The data that we are looking at are pieces of a record, namely
              //property/value (or key/value) pairs of one record which is the object itself.
              
              //A DBMS would be a collection of objects kind of like this:
              
              var person1 = { name: "Vin", gender: "M"};              //<---- objects
              var person2 = { name: "Karen", gender: "F"};
              var person3 = {name: "Ryan". gender: "M"};
              var people = [person1, person2, person3];               //<---- this array would be more of a database           


              //============================================
              function checkValue(obj, val){
	                           for (k in obj){
                                		if (obj[k] === val) return true;  //<---- looking up the value by key
                                  	}                                         //also the for/in loop the loop will cycle 
                                  	return false;                             //through all the keys looking for the value (val)
                              }                                             	  //use k, not i ---> because we are cycling through 
                                                                            	  //keys, not indexes.
                              // sample object follows
                              var obj = {
	                                   prop1:'stuff',
                                   	 prop2: 'other',
	                                   prop3: 5,
	                                   prop4: true,
	                                   prop5: [1,2,3,4]
                                  }

              console.log(checkValue(obj, 5));                //<----true
              console.log(checkValue(obj, 'dog'));            //<----false
/*              
------------------------------------------------------------------
		
		hasOwnProperty & For_In	Loops
	
------------------------------------------------------------------

An Example:
*/
	function Car(name, type, year){					//<----This is our constructor function
		this.name=name;
		this.type=type;
		this.year=year;
		this.keyInserted=false;
	}

	var instanceOfCar = new Car("Corolla", "Toyota", 2005);		//<----we are building our instance here
	
	//Let's add some methods to the prototype.
	
	Car.prototype.startEngine = function(){
	  if(this.keyInserted === false){
	    throw "Please insert a key";				//<----Throwing an error here if you haven't
	  }								//	inserted your key.
	  return "Engine Started";					//Note: errors stop the code and leave the function
	}								//	as if you ran a return.
	
	Car.prototype.insertKey = function(){
	  this.keyInserted = !this.keyInserted;
	}
	
	//note: key inserted = false, so cannot yet start the car.
	instanceOfCar.insertKey();					//<---we set the keyInserted value to true.
	instanceOfCar.startEngine();					//<---	"Engine Started" message.

	// Let's try it anyway:
	instanceOfCar.insertKey();					//<---we set the keyInserted value back to false.
	instanceOfCar.startEngine();					//<---tripped our error: Uncaught Please insert a key     

	console.log(instanceOfCar);

	Car {name: "Corolla", type: "Toyota", year: 2005, keyinserted: false}	//<----our console.log of the instance

	//Examined the instance as follows:
	Car
		keyInserted: false
		name: "Corolla"
		type: "Toyota"
		year: 2005
		__proto__: Object
			constructor: function Car(name, type, year)	//<---shows that this is an instance of Car constructor
			insertKey: function()				//<---our prototype methods are here
			startEngine: function()
			__proto__: Object
			
//------------------------------------------------------------------
	
	for(var key in instanceOfCar) {
		console.log(key, instanceOfCar[key]);		//<---	we are doing a for_In Loop
	}							//  *** take a look at the results below ***
/*
results of For_In Loop:

name Corolla
type Toyota
year 2005
keyInserted false							*** IMPORTANT ***

startEngine (){					<---	The for_In Loop looked at the methods that are on the 
	if(this.keyInserted === false){			internal prototype in addition to the objects keys.
	   throw "Please insert a key";			
	}						For_In access EVERY PROPERTY even in the prototype chain
	return "Engine Started";			that is enumerable (aka: countable). 
}							
							enumerable is a characteristic of a property itself.
insertKey (){						In other words, you can set enumerable to true or false.
	this.keyInserted = !this.keyInserted;		
}							We created these properties and enumerable
							is set to true by default.
							
							The built-in properties on the prototype have their 
							enumerable set to false by default.

------------------------------------------------------------------

If we do not want to loop over your user created methods, 		<--- IMPORTANT 
there are a few ways of handing this:

	by using the hasOwnPropeerty() method that is built in to all objects, as follows:
*/
	for(var key in instanceOfCar) {					//<---	we are doing a for_In Loop
		if(instanceOfCar.hasOwnProperty(key)){
		   	console.log(key, instanceOfCar[key]);		//<---	Now we are using the 
		}							//	.hasOwnProperty() method
	}
/*
		results of For_In Loop using the .hasOwnProperty() method:

		name Corolla						//<---	MUCH BETTER!!!
		type Toyota
		year 2005
		keyInserted false

------------------------------------------------------------------

An easier way of looping through an object and 
ensuring you have only the direct & innumrerable keys is to use:

	let keyArr = Object.keys(instanceOfCar);		<--- 	This will give you an array result
									with all the keys of the object as values.			
	Object.keys(instanceOfCar);
	["name", "type", "year", "keyInserted"]			<---	There you go.
									Now you can use a for loop
	keyArr;								or for each...
	["name", "type", "year", "keyInserted"]




*/

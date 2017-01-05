/*
-------------------------------------------------------------------------------

				                    Throwing Errors

-------------------------------------------------------------------------------

Example:
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
	    throw "Please insert a key";				                    //<---- *** Throwing an error here if you haven't  ***
	  }								//	inserted your key.
	  return "Engine Started";					                        //Note: errors stop the code and leave the function
	}								//	as if you ran a return.
	
	Car.prototype.insertKey = function(){
	  this.keyInserted = !this.keyInserted;
	}
	
	//note: key inserted = false, so cannot yet start the car.
	instanceOfCar.insertKey();					//<---we set the keyInserted value to true.
	instanceOfCar.startEngine();					//<---	"Engine Started" message.

	// Let's try it anyway:
	instanceOfCar.insertKey();					//<---we set the keyInserted value back to false.
	instanceOfCar.startEngine();					                      //<--- *** tripped our error: Uncaught Please insert a key ***    

	console.log(instanceOfCar);

	Car {name: "Corolla", type: "Toyota", year: 2005, keyinserted: false}	//<----our console.log of the instance

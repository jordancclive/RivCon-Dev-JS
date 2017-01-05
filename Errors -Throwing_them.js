/*
-------------------------------------------------------------------------------

				                    Throwing Errors

-------------------------------------------------------------------------------

Syntax:		throw expression; 

	The throw statement throws a user-defined exception. 
	Execution of the current function will stop (the statements after throw won't be executed), 
	and control will be passed to the first catch block in the call stack. 
	If no catch block exists among caller functions, the program will terminate.
	
Stmt examples:
	throw "Error2"; // generates an exception with a string value
	throw 42;       // generates an exception with the value 42
	throw true;     // generates an exception with the value true
	
Throwing Objects:

		function UserException(message) {
		   this.message = message;
		   this.name = "UserException";
		}
		function getMonthName(mo) {
		   mo = mo-1; // Adjust month number for array index (1=Jan, 12=Dec)
		   var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
		      "Aug", "Sep", "Oct", "Nov", "Dec"];
		   if (months[mo] !== undefined) {
		      return months[mo];
		   } else {
		      throw new UserException("InvalidMonthNo");
		   }
		}

		try {
		   // statements to try
		   var myMonth = 15; // 15 is out of bound to raise the exception
		   var monthName = getMonthName(myMonth);
		} catch (e) {
		   monthName = "unknown";
		   console.log(e.message, e.name); // pass exception object to err handler
		}
-------------------------------------------------------------------------------

Example:
*/
	function Car(name, type, year){				//<----This is our constructor function
		this.name=name;
		this.type=type;
		this.year=year;
		this.keyInserted=false;
	}

	var instanceOfCar = new Car("Corolla", "Toyota", 2005);	//<----we are building our instance here
	
	//Let's add some methods to the prototype.
	
	Car.prototype.startEngine = function(){
	  if(this.keyInserted === false){
	    throw "Please insert a key";				//<---- *** Throwing an error here if you haven't  ***
	  }					//	inserted your key.
	  return "Engine Started";					//Note: errors stop the code and leave the function
	}					//	as if you ran a return.
	
	Car.prototype.insertKey = function(){
	  this.keyInserted = !this.keyInserted;
	}
	
	//note: key inserted = false, so cannot yet start the car.
	instanceOfCar.insertKey();		//<---we set the keyInserted value to true.
	instanceOfCar.startEngine();		//<---	"Engine Started" message.

	// Let's try it anyway:
	instanceOfCar.insertKey();		//<---we set the keyInserted value back to false.
	instanceOfCar.startEngine();				//<--- *** tripped our error: Uncaught Please insert a key ***    

	console.log(instanceOfCar);

	Car {name: "Corolla", type: "Toyota", year: 2005, keyinserted: false} //<----our console.log of the instance

//-------------------------------------------------------------------------------

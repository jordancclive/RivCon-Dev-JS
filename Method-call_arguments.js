// .call() & argumets keyword

/* 	1)  Writing this function to show the arguments keyword and how the system
	      tracks arguments passed to a function. Which is in an object (see below)
    
    2)  Showing how to use call to turn the arguments object into an array
    
    3)  Shows how to use map to then add the numbers.
    
*/
	
		function lookAtArguments(){
			//'arguments' are the items passed to this function.
			//This is what the arguments key word is storing:
			console.log(arguments);				//result:	{ '0': 5, '1': 10, '2': 15, '3': 20, '4': 50 }
			
			//If you use call, here is how you can get the aguments into an array:
			let arr = [].slice.call(arguments);
			console.log(arr);				//result:	[ 5, 10, 15, 20, 50 ]
			
			return arr.reduce((prev,curr) => prev+curr);	//result: 100
		}

lookAtArguments(5,10,15,20,50);

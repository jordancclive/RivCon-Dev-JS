/* functionName.apply()		--  The apply method works for methods.

	specifically:  functionName.apply(null,parameter)

	Take an array and use the apply function to turn the array into numbers for a function
	
	There is no logic involved.  apply() just tries to fit the data into the function as best it can (see below)

*/

		let arr = [4, 10, 3];

		Math.max.apply(null,arr);		//Math.max can take n number of numbers.

		//returns 10

//-------------------------------

		let arr = [4, 10];

		function addTwo(a,b){
			return a+b;
		}

		addTwo.apply(null,arr);

		//returns 14

//--------------------------------

		let arr = [4, 10, 5, 40];
		let arr2 = [4, 10];
		let arr3 = [4, 10, 40];

		function addTwo(a,b,c){
			return a+b+c;
		}

		console.log(addTwo.apply(null,arr));		//returns: 19
		console.log(addTwo.apply(null,arr2));		//returns: NaN
		console.log(addTwo.apply(null,arr3));		//returns: 54

//--------------------------------



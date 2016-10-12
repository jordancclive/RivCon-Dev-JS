/* functionName.apply()		--  The apply method works for methods.

	specifically:  functionName.apply(null,parameter)

	Take an array and use the apply function to turn the array into numbers for a function

*/

let arr = [4, 10, 3];

Math.max.apply(null,arr);		//Math.max can take n number of numbers.

//returns 10

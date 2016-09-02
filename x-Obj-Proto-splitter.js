/*	Create a function that operates ON all strings called splitter. (Hint, figure out how you can get the information you need about a string through its prototype...remember 'this'.)
	
	splitter takes a number and returns a string with spaces between every nTH grouping of letters.
	
	This function is to perform the following operations.
	
	Remove all whitespace from both ends of the string passed in (but not whitespace in the middle)
	Uppercase all of the letters of a particular string.
	Break up the string into separate pieces based off the value passed in.
	Assume the inputted value is always a positive integer.
	
	Here are some examples of input and output. input: 'Hello'.splitter(2) output: "HE LL O"
*/


//String.prototype.splitter = 
function splitter (paramIn, grouping){
	let resultArr1 = [], resultArr2 = [], result = "";
	
	// If "paramIn" is a number convert it to a string.
	if (Number.isInteger(paramIn))paramIn.toString();
	
	// Make the string Uppercase
	else paramIn = paramIn.toUpperCase();
	
	// Split 'paramIn' into an array.
	resultArr1 = paramIn.split("");
		
	// Find that last non-blank index of the array
	let lenArr = resultArr1.length, lastIndexArr = 0;
	for (let i=lenArr-1; i >=0; i--){
		if (resultArr1[i] !== " "){
			lastIndexArr = i;
			break;
		}
	};
	
	// Put the result in 'resultArr2'
	let pass1 = true, counter=0;
	for(let i=0; i<= lastIndexArr; i++){

		// Pass the initial blank spaces
		if ((resultArr1[i] === " ") && pass1)continue;
		else pass1 = false;
			
		// Start making our new array
		counter+=1;
		if (counter <= grouping) resultArr2.push(resultArr1[i]);
		else{
			counter = 1;
			resultArr2.push(" ");
			resultArr2.push(resultArr1[i]);
		}
	}
	result = resultArr2.join("");
	return result;
}

// testing number value for paramIn.
let inputVal = 'Hello', grp = 2;
console.log("Gave splitter the value ->" + inputVal + "\n" + " The result is: " +splitter (inputVal, grp));
console.log("\n");
" ";

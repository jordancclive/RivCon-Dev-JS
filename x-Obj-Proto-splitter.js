/* Splitter

This problem wants us to create a Prototype method for all Strings.  

I started building a regular function for this problem and then converted it to a method.  
(I wanted to make sure things worked before I made life more complicated for myself)

The problem assumptions:
	Create a function that operates ON all strings called splitter. (Hint, figure out how you can get the information you need about a string through its prototype...remember 'this'.)
	
	splitter takes a number and returns a string with spaces between every nTH grouping of letters.
	
	This function is to perform the following operations.
	
	Remove all whitespace from both ends of the string passed in (but not whitespace in the middle)
	Uppercase all of the letters of a particular string.
	Break up the string into separate pieces based off the value passed in.
	Assume the inputted value is always a positive integer.
	
	Here are some examples of input and output. input: 'Hello'.splitter(2) output: "HE LL O"
*/

// This is the regular function:

	function splitter (paramIn, grouping){					// as a function needed two parameters:
		let resultArr1 = [], resultArr2 = [], result = "";		// The string: "paramIn" & the Grouping: "grouping"
											
		// If "paramIn" is a number convert it to a string.
		if (Number.isInteger(paramIn))paramIn.toString();
		
		// Make the string Uppercase
		else paramIn = paramIn.toUpperCase();
		
		// Split 'paramIn' into an array.
		resultArr1 = paramIn.split("");					// ".split" is a great thing to use.
			
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
		result = resultArr2.join("");					// ".join" puts the array back into a string
		return result;
	}
	
	// testing number value for paramIn.
	let inputVal = 'Hello', grp = 2;
	console.log("Gave splitter the value ->" + inputVal + "\n" + " The result is: " +splitter (inputVal, grp));
	console.log("\n");
	" ";

	/* The result:
		Gave splitter the value ->Hello
 		The result is: HE LL O
	*/



	
//  -----------------------------------------------------------------------
// Now for the method which is put in the String.prototype object:

/*	Create a function that operates ON all strings called splitter. (Hint, figure out how you can get the information you need about a string through its prototype...remember 'this'.)
	
	splitter takes a number and returns a string with spaces between every nTH grouping of letters.
	
	This function is to perform the following operations.
	
	Remove all whitespace from both ends of the string passed in (but not whitespace in the middle)
	Uppercase all of the letters of a particular string.
	Break up the string into separate pieces based off the value passed in.
	Assume the inputted value is always a positive integer.
	
	Here are some examples of input and output. input: 'Hello'.splitter(2) output: "HE LL O"
*/


	String.prototype.splitter = function (grouping){			// Now I only need the grouping parameter
		let resultArr1 = [], resultArr2 = [], result = "";
		
		// Make the string Uppercase
		// Split 'this' into an array.
		resultArr1 = this.toUpperCase().split("");			// "this" is the string from the method call.
			
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
		return result;								// I am returning a result for:
	}										// inputVal.splitter (grp) (method call)
	
	// testing number value for paramIn.
	let inputVal = 'Hello', grp = 2;
	console.log("Gave splitter the value ->" + inputVal + "\n" + " The result is: " + inputVal.splitter (grp));
	console.log("\n");
	
	/* The result:
		Gave splitter the value ->Hello
 		The result is: HE LL O
	*/
	
// If we look at the String prototype:



function String
	()arguments: null
	caller: null
	fromCharCode: function fromCharCode()
	fromCodePoint: function fromCodePoint()
		length: 1
		name: "String"
	prototype: String
		anchor: function anchor()
		big: function big()
		blink: function blink()
		bold: function bold()
		charAt: function charAt()
		charCodeAt: function charCodeAt()
		codePointAt: function codePointAt()
		concat: function concat()
		constructor: function String()
		endsWith: function endsWith()
		fixed: function fixed()
		fontcolor: function fontcolor()
		fontsize: function fontsize()
		includes: function includes()
		indexOf: function indexOf()
		italics: function italics()
		lastIndexOf: function lastIndexOf()
		length: 0
		link: function link()
		localeCompare: function localeCompare()
		match: function match()
		normalize: function normalize()
		repeat: function repeat()
		replace: function replace()
		search: function search()
		slice: function slice()
		small: function small()
		split: function split()
		splitter: function (grouping)			// ***** Here is our new method *****
		startsWith: function startsWith()
		strike: function strike()
		sub: function sub()
		substr: function substr()
		substring: function substring()
		sup: function sup()
		toLocaleLowerCase: function toLocaleLowerCase()
		toLocaleUpperCase: function toLocaleUpperCase()
		toLowerCase: function toLowerCase()
		toString: function toString()
		toUpperCase: function toUpperCase()
		trim: function trim()
		trimLeft: function trimLeft()
		trimRight: function trimRight()
		valueOf: function valueOf()
		Symbol(Symbol.iterator): function [Symbol.iterator]()
		__proto__: Object
		[[PrimitiveValue]]: ""
	raw: raw()
	__proto__: ()<function scope>
	

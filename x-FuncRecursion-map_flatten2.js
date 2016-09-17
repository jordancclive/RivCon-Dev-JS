// Flattens an hierarchical map into a single level

// This solution is not elegent, but it is my solution at my current skill level.

/*
The passed in argument will always be an object, but it may be empty. Make sure to correctly test for Arrays and nulls — they should be left as is in the result. The only property types will be:

true
false
Numbers
Strings
null
Arrays
Functions
Nested Maps
Keys can be any string of characters, excluding the '/' character.
*/

/*
Recursive aspect to this one:
		
	- Base Case:  	1. you have an object passed as an input.
					2. first check if keys exist in this object.  If no, return the null.
					3. yes: keys exist.
					4. values: string, number, array, function, true/false
					5. if yes: create a new array and put key/value in it.
					6. if an object call this function again and return until find #4 
					7. the set an indicator to true.....meaning:
					do steps 1-5 and append the original key to this object when adding to the new array.
					8. syntax original key "/" array key / value
					
These are the types that we may find in the onbject values:

typeof null;				// result = 'object'  	(done)
typeof testObj;				// result = 'object'..........(recursive condition)
typeof testArr; 			// result = 'object'  	(done)
Array.isArray(testArr);		//result = true  		(done)

typeof true;				// result = 'boolean'   (done)
typeof function(){};		// result = 'function'	(done)
typeof 5;					// result = 'number'	(done)
//----------------------------------------------
*/

let testObj = {
	'ff': null,
	'gg': 'This works',
	'hh': true,
	'mm': [9, 10, 11],
	'a': {
		'b': {
			'c': 12,
			'd': 'Hello World'
		},
		'e': [1,2,3],
		'f':''
	}
};
let testArr = [1,2,3,4,5];



function flattenMap(map) {
  	// setup a few variables
	let newObj = {}, tempObj = {}, keyArr = [], newKey='';
	
	// first determine if the object has keys
	if (Object.keys(map)){
		keyArr = Object.keys(map);
	}else return '';

	//----------------------------------------------
	//We now know we have an object with info and the keys are in keyArr
	//let's go thru the object.
	for(let i=0; i<keyArr.length; i++){
		
		// if the value is not an object, simply put the key/value in the new Array
		// Do the same if you find an array here
		if(typeof map[keyArr[i]] !== 'object' || Array.isArray(map[keyArr[i]]) || map[keyArr[i]] === null){
			newKey = keyArr[i];
			newObj[newKey] = map[keyArr[i]];
		} 
		
		//now we are dealing strictly with an object, so need to be recursive
		
		//The recursion will return a folded object to this point....named tempObj....
		//append the original key ---map[keyArr[i]]--- to this object when adding to the new array.
		//					syntax ........original key "/" array key / value
		//                  this ..........will be an already flattened array
		else {
			tempObj = flattenMap(map[keyArr[i]]);
			let keyArr2 = [];
			if (Object.keys(tempObj)){
				keyArr2 = Object.keys(tempObj);
			}else return '';
			for (j=0; j<keyArr2.length; j++){
				newKey = keyArr[i] + '/' + keyArr2[j];
				newObj[newKey] = tempObj[keyArr2[j]];
			}
		}
	}
	return newObj;
}


console.log(flattenMap(testObj));

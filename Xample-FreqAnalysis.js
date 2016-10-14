/*
	Frequency Analysis
	
	Write a function that takes a string of text (containing ONLY lowercase letters)
	and returns an object containing the normalized frequency for each letter.
	
	To find a letter's normalized frequency, divide the number of that letter's occurence by the total character length of the string.
	
	Example
		var testStr = 'abca';
		frequencyAnalysis(testStr) ==> 	{
											a : 0.5,
											b : 0.25,
											c : 0.25
										}
*/

var frequencyAnalysis = function(str) {
	resultObj = {};
	for(let i=0; i<str.length; i++){
		resultObj[str[i]] = resultObj[str[i]]+1 || 1;
	}
	for(let k in resultObj){
		resultObj[k] = resultObj[k] / str.length;
	}
	return resultObj;
}
let testStr = 'abca';
frequencyAnalysis(testStr);

//-----------------------------------

// ALTERNATIVE SOLUTION 
var frequencyAnalysis = function(str) {
	let frequency = {};
	for(let i=0; i<str.length; i++) {
		frequency[str[i]] = frequency[str[i]]+1/str.length || 1/str.length; 
	}
	return frequency; 
}

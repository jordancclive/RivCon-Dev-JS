/*
	PARSE CORPUS 
	
	Create a function that parses a multiline string and returns an array of the words in the string, uniformly formatted with no numbers or punctuation.
	
	Our poetry generator will consume a corpus text it will model it's output poetry on. 
	Create a function that parses a multiline string and returns an array of the words in the string, 
	uniformly formatted with no numbers or punctuation.
	
	ex)
		"How Do I love thee?
		Let me count the ways" --> ['how', 'do', 'I', 'love', 'thee', 'let', 'me', 'count', 'the', 'ways']
*/


function parseString(inputStr){
	let resultStr = inputStr.toLowerCase().replace(/[^a-z\s]/ig, "").split(' ');
	for(let i=0; i<resultStr.length; i++){
		if (resultStr[i] === 'i') resultStr.splice(i, 1, 'I');
	}
	return resultStr;
}


// regex example, .splice()

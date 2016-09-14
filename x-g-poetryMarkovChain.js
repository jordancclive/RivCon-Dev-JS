//----------------------------------------------
/* 
Function: parses a multiline string and returns an array of the words in the string, 
uniformly formatted with no numbers or punctuation.  (PARSE CORPUS)

example:
		"How Do I love thee?
		Let me count the ways" 
		
		returns:--> ['how', 'do', 'I', 'love', 'thee', 'let', 'me', 'count', 'the', 'ways']
*/

function parseString(inputStr){
	let resultArr = inputStr.toLowerCase().replace(/[^a-z\s]/ig, "").split(' ');
	for(let i=0; i<resultArr.length; i++){
		if (resultArr[i] === '') resultArr.splice(i, 1);
		if (resultArr[i] === 'i') resultArr.splice(i, 1, 'I');
	}
	return resultArr;
}
//----------------------------------------------
/*
Function: create a dictionary of all the unique words in our corpus, 
and an array of all the words that follow it.

Concept: A Markov Chain is a stochastic model of all possible states in a system, 
where each state is predicated on the previous state.

Example a markov chain of the following line: 
" I will fight to follow I will fight for love "

May look like :
			    {
			        I : ['will'],
			`        will : ['fight'],
			        fight : ['for', 'to'],
			        to : ['follow'],
			        for : ['love'],
			        love : [],
			        follow : ['I']
			    }
*/

function markovChain(inputArr){
	for(let i=0; i<inputArr.length; i++){
		// 1. add the element?
		overseer(addElement, inputArr[i], wordDictionary);
		if(i>0) overseer(tagElement, inputArr[i], wordDictionary, inputArr[i-1]);
	}
	return;
}
//----------------------------------------------

// This is our word dictionary ---> using the Markov Chain

let wordDictionary = {};

//----------------------------------------------

// call Back functions & overseer function
    
function overseer(operatorFunc, element, obj, element2, index, actionToDo){
    return operatorFunc(element, obj, element2, index, actionToDo);
}

function addElement(element, obj){
	if (!obj[element]) obj[element] = [];
	return obj;
}

function tagElement(element, obj, element2){
		let addIt = true;
		if (obj[element2]) {
			for(let i=0; i<element2.length; i++){
				if (obj[element2][i] === element) addIt = false;				
			}
			if(addIt) obj[element2].push(element);
		}
}





//----------------------------------------------
// parseString examples.
//markovChain(parseString("How Do I love thee? Let me count the ways"));
markovChain(parseString(" I will fight to follow I will fight for love "));
//----------------------------------------------
//Tested CallBack Functions:

//tests: overseer & addElement
//console.log(overseer(addElement, 'vin', wordDictionary));
console.log(wordDictionary);

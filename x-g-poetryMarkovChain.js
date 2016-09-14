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
		overseer(tagElement, inputArr[i], wordDictionary, inputArr[i-1]);
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
		if (obj[element2]) {
			let addIt = true;
			for(let i=0; i<obj[element2].length; i++){
				if (obj[element2][i] === element) addIt = false;
			}
			if(addIt) obj[element2].push(element);
		}
}
//----------------------------------------------

/*
Function writeLine() that takes a length of words n and returns a line of poetry.

	writeLine() will need a helper function that takes a word 
	and randomly chooses a word from it's Markov Chain array. 
	
	When a word has no entries in it's Markov Chain, 
	the program should choose a new word and continue the line 
	until it meets the word count.

	Call writeLine() a certain number of times to create an entire poem.
*/

// 1st get a random word in the dictionary, or in the value array.

function  genRandom (feed){ 
	let num = Math.round(Math.random()*feed)+1;
	return num;
}

// Get a word :
// needMore = 'yes' means needs a value array, 'no' means any word will do.

function genWord(needMore){
		let startIndex, startWord = '', entriesExist, phraseOut = '';
		do{
			startIndex = genRandom(Object.keys(wordDictionary).length);
			startWord = Object.keys(wordDictionary)[startIndex];
			entriesExist = wordDictionary[startWord].length;
			// Does this word need a value array?
			if (needMore==='no' || entriesExist>0) gotWord = true;
		}while (!gotWord);
		
		// add words to our line:
		phraseOut += startWord + " ";
}

// Create our poetry.  input = word length

function writeLine(wordCount){
	if (wordCount<1) return 'Enter a word count >= 1';
	let phraseOut = '';
	for(let i=1; i<=wordCount; i++){
		if (i===1 && wordCount===1) phraseOut += genWord('no');
		else if (i<wordCount) phraseOut += genWord('yes');
		else phraseOut += genWord('no');
	}
	return phraseOut;
}

//----------------------------------------------
// parseString examples.
markovChain(parseString("How Do I love thee? Let me count the ways"));
markovChain(parseString(" I will fight to follow I will fight for love "));
markovChain(parseString("Take this kiss upon the brow! And, in parting from you now, Thus much let me avow You are not wrong, who deem That my days have been a dream; Yet if hope has flown away In a night, or in a day, In a vision, or in none, Is it therefore the less gone? All that we see or seem Is but a dream within a dream. I stand amid the roar Of a surf-tormented shore, And I hold within my hand Grains of the golden sand-- How few! yet how they creep Through my fingers to the deep, While I weep--while I weep! O God! can I not grasp Them with a tighter clasp? O God! can I not save One from the pitiless wave? Is all that we see or seem But a dream within a dream?"));
markovChain(parseString("The most wasted of all days is one without laughter."));
markovChain(parseString("Be of love a little more careful than of anything."));
markovChain(parseString("I thank you God for this most amazing day, for the leaping greenly spirits of trees, and for the blue dream of sky and for everything which is natural, which is infinite, which is yes."));
markovChain(parseString("To be nobody but yourself in a world which is doing its best, night and day, to make you everybody else means to fight the hardest battle which any human being can fight; and never stop fighting."));
markovChain(parseString("Private property began the instant somebody had a mind of his own."));
markovChain(parseString("A wind has blown the rain away and blown the sky away and all the leaves away, and the trees stand. I think, I too, have known autumn too long."));
markovChain(parseString("A man's face is his autobiography. A woman's face is her work of fiction."));
//----------------------------------------------

// write some poetry:

console.log('result--->',writeLine(1));

//----------------------------------------------
//Tested CallBack Functions:

//tests: overseer & addElement
//console.log(overseer(addElement, 'vin', wordDictionary));
console.log('\n','The number of keys in our Dictionary: ',Object.keys(wordDictionary).length,'\n');
//console.log('\n',Object.keys(wordDictionary),'\n');
console.log(wordDictionary);
//----------------------------------------------end





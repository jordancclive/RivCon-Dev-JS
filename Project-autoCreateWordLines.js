//----------------------------------------------
// This is our word dictionary ---> using the Markov Chain 

/* Assumptions: 

 	- This dictionary is an "OBJECT" with "KEYS".  These "KEYS" are words 
		that were gleaned from input text.   <----(as Object keys)("KEYS")

	- Each "KEY" word associates with other words and are contained in the object as a
		"KEY/VALUE" pair.  
		
	- The "VALUE" is an "ARRAY" of words that, within the context of regular english sentences, 
		have followed the "KEY".  So the "VALUE" "ARRAY" has a relationship with the "KEY" word.
		This relationship is the equivalent of a linked list. "LINKED LIST"
*/

let wordDictionary = {};		// This is the dictionary of words.

//----------------------------------------------

/*	IMPORTANT:

	- The poetry line that this program creates a sentence of words that have a 
		linked relationship.
		
 	- The first word is picked at random.
 	
	- All subsequent words are picked as a result of the "KEY/VALUE" pair.
	
	- Sometimes depending on the line length and the dictionary's physical size 
		(the total amount of records that exist), the "LINKED LIST" may run its
		course.  This means that the program cannot make the full line requested
		by the program user.
		
	- As a result, at the time of this release (9/15/2016), the program will 
		give the user the line that was created even if it is not the requested length.
		
	- In the future, this program will "rollback" the result to a new line path in
		an attempt to create the requested line size.
*/
// This array will track the existing line, by word and provide the program the 
// ability to roll the created line back to a new path in an effort to create 
// the full requested line.

let rollBack = [];	

//----------------------------------------------

// Need this variable in order to prematurely stop processing line when 
// the "LINKED LIST" comes to a premature end. 

let continueProcessing = true;

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
// The result will give a number from 0 to (feed-1)
// Tested and this works.

function  genRandom (feed){ 
	let num = Math.round(Math.random()*(feed-1));
	return num;
}

// Get a word :
// needMore = 'true' means needs a value array, 'false' means any word will do.

function genWord(prevWord, needMore, firstTime){
		let startIndex, startWord, entriesExist, limiter=25;
		let gotWord = false;
		do{
			if (firstTime === true){
				limiter-=1
				startIndex = genRandom(Object.keys(wordDictionary).length);
				startWord = Object.keys(wordDictionary)[startIndex];
				console.log('prevWord: ', prevWord, '  needMore: ', needMore, '<---first time thru');
				console.log('startIndex: ',startIndex);				
				console.log('newword: ',startWord, '  array exist: ', wordDictionary[startWord].length);
				console.log('\n');
				//testing to make sure entries exist for the next word...
				if (!wordDictionary[startWord] || wordDictionary[startWord].length<1) entriesExist = false;
				else entriesExist = true;
				// Does this word need a value array?
				if (!needMore || entriesExist) gotWord = true;				
			}else {
				limiter-=1;
				console.log('prevWord: ', prevWord, '  needMore: ', needMore);
				// make sure if there is only one next word to get it directly.
				if (wordDictionary[prevWord].length ===1){
				startIndex = 0;
				console.log('assigned zero to startIndex');
				}else startIndex = genRandom(wordDictionary[prevWord].length);
				console.log('startIndex: ',startIndex);
				if (startIndex === -1){
						continueProcessing = false;
						entriesExist = false;
						gotWord = true;
						startWord = ' ';
						console.log('Came to a premature end of this line. -B-');
						break;
				}
				if (!wordDictionary[prevWord][startIndex]) 	entriesExist = false;
				else{
					//get the next word here
					startWord = wordDictionary[prevWord][startIndex];
					console.log('newword: ',startWord);
					// If needMore = false, then we are ok & done...or else
					// need to check if new word has entries in it....
					if (!wordDictionary[startWord] && needMore){
						entriesExist = true;
						startWord = " ";
					console.log('Stopping.  The Linked List ended.');
					}else {
						console.log('new word has/needs an array?: ', wordDictionary[startWord].length, needMore);
						console.log('\n');
						entriesExist = true;
						startWord = wordDictionary[prevWord][startIndex];
					}
				}	
			}
			// Does this word need a value array?
			if (!needMore || entriesExist) gotWord = true;				
		}while (!gotWord && limiter);
		// add words to our line:
		return startWord;
}

// Create our poetry.  input = word length
// This works perfectly fine.  Tested...

function writeLine(wordCount){
	if (wordCount<1) return 'Enter a word count >= 1';
	let phraseOut = '', prevWord = '';
	console.log('----------------------------------------------');
	console.log('wordCount: ', wordCount);
	console.log('----------------------------------------------');
	console.log('Develop the requested line:');
	console.log('\n');
	for(let i=1; i<=wordCount; i++){
		//----------------------------------------------
		console.log('continue: ',continueProcessing);
		if(!continueProcessing) phraseOut = phraseOut;
		//----------------------------------------------
		else if (i===1){
			if (wordCount-1) prevWord = genWord(prevWord, true, true);
			else prevWord = genWord(prevWord, false, true);
			phraseOut += prevWord + ' ';
		} else if (i<wordCount){
			prevWord = genWord(prevWord, true, false);
			phraseOut += prevWord + ' ';
		}else {
			prevWord = genWord(prevWord, false, false);
			phraseOut += prevWord + ' ';
		}
	}
	return phraseOut;
}

//----------------------------------------------
// parseString examples.
markovChain(parseString("How Do I love thee? Let me count the ways"));
markovChain(parseString(" I will fight to follow I will fight for love "));
markovChain(parseString("Take this kiss upon the brow! And, in parting from you now, Thus much let me avow You are not wrong, who deem That my days have been a dream; Yet if hope has flown away In a night, or in a day, In a vision, or in none, Is it therefore the less gone? All that we see or seem Is but a dream within a dream. I stand amid the roar Of a surf tormented shore, And I hold within my hand Grains of the golden sand-- How few! yet how they creep Through my fingers to the deep, While I weep while I weep! O God! can I not grasp Them with a tighter clasp? O God! can I not save One from the pitiless wave? Is all that we see or seem But a dream within a dream?"));
markovChain(parseString("The most wasted of all days is one without laughter."));
markovChain(parseString("Be of love a little more careful than of anything."));
markovChain(parseString("I thank you God for this most amazing day, for the leaping greenly spirits of trees, and for the blue dream of sky and for everything which is natural, which is infinite, which is yes."));
markovChain(parseString("To be nobody but yourself in a world which is doing its best, night and day, to make you everybody else means to fight the hardest battle which any human being can fight; and never stop fighting."));
markovChain(parseString("Private property began the instant somebody had a mind of his own."));
markovChain(parseString("A wind has blown the rain away and blown the sky away and all the leaves away, and the trees stand. I think, I too, have known autumn too long."));
markovChain(parseString("A man's face is his autobiography. A woman's face is her work of fiction."));
//----------------------------------------------

// write some poetry:

console.log('----------------------------------------------','\n','Our resulting prose is--->',writeLine(10));
console.log('----------------------------------------------');

//----------------------------------------------
//Tested CallBack Functions:

//tests: overseer & addElement
//console.log(overseer(addElement, 'vin', wordDictionary));
console.log('The number of keys in our Dictionary: ',Object.keys(wordDictionary).length,'\n');
//console.log('\n',Object.keys(wordDictionary),'\n');
//console.log(wordDictionary);
//----------------------------------------------end






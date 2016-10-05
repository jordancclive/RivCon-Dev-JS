/*  in this kata you have to write a simple Morse code decoder. 
While the Morse code is now mostly superceded by voice and digital data communication channels, 
it still has its use in some applications around the world.

The Morse code encodes every character as a sequence of "dots" and "dashes". For example, 
the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−. 
The Morse code is case-insensitive, traditionally capital letters are used. When the message is 
written in Morse code, a single space is used to separate the character codes and 3 spaces are 
used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−− ·−−− ··− −·· ·.

NOTE: Extra spaces before or after the code have no meaning and should be ignored.

In addition to letters, digits and some punctuation, there are some special service codes, 
the most notorious of those is the international distress signal SOS (that was first issued by Titanic), 
that is coded as ···−−−···. These special codes are treated as single special characters, 
and usually are transmitted as separate words.

Your task is to implement a function decodeMorse(morseCode), 
that would take the morse code as input and return a decoded human-readable string.

For example:

decodeMorse('.... . -.--   .--- ..- -.. .');
should return "HEY JUDE"
The Morse code table is preloaded for you as MORSE_CODE dictionary, feel free to use it. 

All the test strings would contain valid Morse code, so you may skip checking for errors and exceptions.
*/
//-------------------------------------------------------
// my solution:
  
          function decodeMorse (morseCode){
            let lettersArr = morseCode.split(' '), resultWords=[];
            let startMorse = false, lastIndex = 0;
            // Look to see if there are blank spaces at the end of the string
            // Keep track of the last non-blank index.
            for(let i=lettersArr.length-1; i>=0; i--){
              if (lettersArr[i]){
                lastIndex = i;
                break;
              }
            }
            //Build words & ignore the leading blanks
            let word = '', oneBlank = false;
            for(let i=0; i<=lastIndex; i++){
              if (!!lettersArr[i]) startMorse = true;
              if (startMorse){
                startMorse = true;
                if (lettersArr[i]) word += MORSE_CODE[lettersArr[i]];
                if (i === lastIndex) resultWords.push(word);
                if (!lettersArr[i] && !oneBlank){
                  resultWords.push(word);
                  word = '';
                  oneBlank = true;
                }else oneBlank = false;  			
              }
            }
            return resultWords.join(' ');
          }

//-------------------------------------------------------


// A much cooler solution:

	decodeMorse = function(morseCode){
	  function decodeMorseLetter(letter) {
	    return MORSE_CODE[letter];
	  }
	  function decodeMorseWord(word) {
	    return word.split(' ').map(decodeMorseLetter).join('');
	  }
	  return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
	}



//  Data file and call to function follows:

let MORSE_CODE = { 
	'-.-.--': '!',
	'.-..-.': '"',
	'...-..-': '$',
	'.-...': '&',
	'.----.': '\'',
	'-.--.': '(',
	'-.--.-': ')',
	'.-.-.': '+',
	'--..--': ',',
	'-....-': '-',
	'.-.-.-': '.',
	'-..-.': '/',
	'-----': '0',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'---...': ':',
	'-.-.-.': ';',
	'-...-': '=',
	'..--..': '?',
	'.--.-.': '@',
	'.-': 'A',
	'-...': 'B',
	'-.-.': 'C',
	'-..': 'D',
	'.': 'E',
	'..-.': 'F',
	'--.': 'G',
	'....': 'H',
	'..': 'I',
	'.---': 'J',
	'-.-': 'K',
	'.-..': 'L',
	'--': 'M',
	'-.': 'N',
	'---': 'O',
	'.--.': 'P',
	'--.-': 'Q',
	'.-.': 'R',
	'...': 'S',
	'-': 'T',
	'..-': 'U',
	'...-': 'V',
	'.--': 'W',
	'-..-': 'X',
	'-.--': 'Y',
	'--..': 'Z',
	'..--.-': '_',
	'...---...': 'SOS' };
  
  decodeMorse('.... . -.--   .--- ..- -.. .');

/*		...		Coding With Square strings		...

Description:

A squared string has n lines, each substring being n characters long: 

For example:

				s = "abcd\nefgh\nijkl\nmnop" is a squared string of size 4.

We will use squared strings to code and decode texts. To make things easier we suppose that our original text doesn't include the character '\n'.


Coding


Input:

				a text t of length l.

				Consider the smallest integer n such that n * n be greater or equal to l.

				Complete t with the char of ascii code 11 
				(we suppose that this char is not in our original text) 
				until the length of t is n * n.
				
From now on we can transform the new t in a squared string s of size n by inserting '\n' where needed.
Apply a clockwise rotation of 90 degrees to s: that's it for the coding part.



Decoding

Input:

				a squared string s resulting from the coding

				Apply a counter-clockwise rotation of 90 degrees to s

				Do some cleaning to have the original text t

				In other SqStr examples, you can see: 
				
						clockwise rotation of 90 degrees 
						counter-clockwise rotation of 90 degrees: 

Example:

				t = "I.was.going.fishing.that.morning.at.ten.o'clock"

				code(t) -> "c.nhsoI\nltiahi.\noentinw\ncng.nga\nk..mg.s\n\voao.f.\n\v'trtig"

				decode(code(t)) == "I.was.going.fishing.that.morning.at.ten.o'clock"

				(Dots indicate spaces since they are quite invisible).

*/

function code(str){
	let sqSize = sqStrSize(str), resultArr = [];
	str = str.split(''), counter=0;
	for(let i=0; i<str.length; i++){
		(resultArr[counter]) ? resultArr[counter] += str[i] : resultArr.push(str[i]);
		(counter===sqSize-1) ? counter=0 : counter++;
	}
	for (let i=counter; i<sqSize; i++){
		resultArr[i] += 'v\\'
	}
	return resultArr.map(elem => elem.split('').reverse().join('')).join('\n');
}

function decode(str){
	//do this with a regular expression to remove the 'v\' (because of the reversing)
	
}

function sqStrSize (str){
	for (let i=1; i< str.length; i++){
		if ((i*i)>str.length) return i;
	}
}


//test case:

t = "I.was.going.fishing.that.morning.at.ten.o'clock";

console.log(code(t));			// -> "c.nhsoI\nltiahi.\noentinw\ncng.nga\nk..mg.s\n\voao.f.\n\v'trtig"
console.log('\n');
//console.log(decode(code(t)));	// => "I.was.going.fishing.that.morning.at.ten.o'clock"





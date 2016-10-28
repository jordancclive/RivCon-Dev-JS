/*	...	Moves in squared strings (I)	...

Description:

This kata is the first of a sequence of four about "Squared Strings".

You are given a string of n lines, each substring being n characters long: For example:

					s = "abcd\nefgh\nijkl\nmnop"

We will study some transformations of this square of strings.

	- 	Vertical mirror: vertMirror
	
					vertMirror(s) => "dcba\nhgfe\nlkji\nponm"
					
	-	Horizontal mirror: horMirror

					horMirror(s) => "mnop\nijkl\nefgh\nabcd"

or printed:

					vertical mirror   |horizontal mirror   
					abcd --> dcba     |abcd --> mnop 
					efgh     hgfe     |efgh     ijkl 
					ijkl     lkji     |ijkl     efgh 
					mnop     ponm     |mnop     abcd

//-----------------------------------------------------------

Task:

Write these two functions	...	and	...		high-order function oper(fct, s) where

		fct is the function of one variable f to apply 
		to the string s (fct will be one of vertMirror, horMirror)

Examples:

		s = "abcd\nefgh\nijkl\nmnop"
		
		oper(vert_mirror, s) => "dcba\nhgfe\nlkji\nponm"
		
		oper(hor_mirror, s) => "mnop\nijkl\nefgh\nabcd"

Note:

The form of the parameter fct in oper changes according to the language. 
You can see each form according to the language in "Your test cases".
*/

// code follows:

function oper(fct, s){
	//This is a caller function.
	//parameter1(fct): 	the function.
	//parameter2(s):	the string to manipulate
	return fct(s);
}

function vertMirror(s){
	let workArr=s.split('\n');
	for(let i=0; i<workArr.length; i++){
		let resultStr='';
		for(let j=workArr[i].length-1; j>=0; j--){
			resultStr += workArr[i][j];
		}
		workArr[i]=resultStr;
	}
	return workArr.join('\n');
}

function horMirror(s){
	let workArr=s.split('\n'), resultArr=[];
	for(let i=workArr.length-1; i>=0; i--){
		resultArr.push(workArr[i]);
	}
	return resultArr.join('\n');
}

//test results:
s = "hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu";
console.log(oper(vertMirror, s));
console.log('\n');
console.log(oper(horMirror, s));


//----------------------------------------------

// More solutions that I did not think about when I was doing the problem:

function vertMirror(str) {
    return str.split('\n')
      .map(line => line.split('').reverse().join(''))		//reversed the element
      .join('\n')
}
function horMirror(str) {
    return str.split('\n')
      .reverse()						//reversed the array of elements.
      .join('\n')
}
function oper(fct, s) {
    return fct(s)
}

// more:

const vertMirror = str => 
{
  return str.split('\n').map(v => [...v].reverse().join('')).join('\n');
};

const horMirror = strng => strng.split('\n').reverse().join('\n');

const oper = (fct, s) => fct(s);


//more:

//written as 1 line (same as above)

function vertMirror(str){
  return str.split('\n').map( x => x.split('').reverse().join('') ).join('\n')
}
function horMirror(str){
  return str.split('\n').reverse().join('\n')
}
function oper(fn,str){
  return fn(str)
}

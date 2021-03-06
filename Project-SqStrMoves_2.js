/*			... Moves in squared strings (II) ...

Description:

You are given a string of n lines, each substring being n characters long: 

For example:

			s = "abcd\nefgh\nijkl\nmnop"

We will study some transformations of this square of strings.

Clock rotation 180 degrees: rot

			rot(s) => "ponm\nlkji\nhgfe\ndcba"

			selfie_and_rot(s) (or selfieAndRot or selfie-and-rot) 
			
			It is initial string + string obtained by clock rotation 180 degrees 
			with dots interspersed in order (hopefully) to better show the rotation when printed.


			s = "abcd\nefgh\nijkl\nmnop" --> 
			"abcd....\nefgh....\nijkl....\nmnop....\n....ponm\n....lkji\n....hgfe\n....dcba"
			
			or printed:
			
			|rotation        |selfie_and_rot
			|abcd --> ponm   |abcd --> abcd....
			|efgh     lkji   |efgh     efgh....
			|ijkl     hgfe   |ijkl     ijkl....   
			|mnop     dcba   |mnop     mnop....
			                           ....ponm
			                           ....lkji
			                           ....hgfe
			                           ....dcba

Task:

Write these two functions: 

						rot and selfie_and_rot
						
						and

						high-order function oper(fct, s) 
						
			where fct is the function of one variable f to apply to the string s 
			(fct will be one of rot, selfie_and_rot)
			
Examples:

			s = "abcd\nefgh\nijkl\nmnop"

			oper(rot, s) => "ponm\nlkji\nhgfe\ndcba"
			
			oper(selfie_and_rot, s) => "abcd....\nefgh....\nijkl....\nmnop....\n....ponm\n....lkji\n....hgfe\n....dcba"

*/



//I am finally getting CallBacks and arrow notation in my head.....



//This is the caller - high-order function.
function oper(fct, s){
	return fct(s);
}

function rot(s){
	return s.split('\n').reverse().map(elem => elem.split('').reverse().join('')).join('\n');
} 

function selfieAndRot(s){
	//create the right number of dots
	let dotIndex = s.indexOf('\n'), addDots= '';
	for (let i=0; i<dotIndex; i++){
		addDots+= '.';
	}
	
	let newArr = s.split('\n').map(elem => elem.split('').concat(addDots).join('')).join('\n');
	return newArr + '\n' + rot(newArr);
}


//test cases:
s = "abcd\nefgh\nijkl\nmnop";
console.log('\n');
console.log(oper(rot, s));
console.log('\n');
console.log(oper(selfieAndRot, s));
'';




//-----------------------------------

// Other solutions that I did not think of:

// The person who did this next result posted the rot function with an error.
// Although their selfie function was interesting.....
// It used a regular expression

function selfie(s) {
  return (s = s.replace(/.+/g, t => t + t.replace(/./g, ".")));
}

function oper(fn, s) {
  return fn(s);
}


//test cases:
s = "abcd\nefgh\nijkl\nmnop";
console.log(oper(selfie, s));
'';


//------------------------------------

//Note:  The .map in the rot & selfieAndRot function.

function rot(string) {
    return string.split('\n').reverse().map(e=> [...e].reverse().join('')).join('\n')
}
function selfieAndRot(string) {
    let arr = string.split('\n');
    let str = arr.map(e=> e+'.'.repeat(arr[0].length)).join('\n')
    return str+'\n'+ rot(str)
}
function oper(fct, s) {
    return fct(s)
}

//--------------------------------------

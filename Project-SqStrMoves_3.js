/*	...	Moves in squared strings (III)	...

You are given a string of n lines, each substring being n characters long: 

For example:

					s = "abcd\nefgh\nijkl\nmnop"

We will study some transformations of this square of strings.

		Symmetry with respect to the main diagonal: diag_1_sym (or diag1Sym or diag-1-sym)

					diag_1_sym(s) => "aeim\nbfjn\ncgko\ndhlp"
					
		Clockwise rotation 90 degrees: rot_90_clock (or rot90Clock or rot-90-clock)

					rot_90_clock(s) => "miea\nnjfb\nokgc\nplhd"
					
		selfie_and_diag1(s) (or selfieAndDiag1 or selfie-and-diag1) 
		It is initial string + string obtained by symmetry with respect to the main diagonal.

					s = "abcd\nefgh\nijkl\nmnop" --> 
					"abcd|aeim\nefgh|bfjn\nijkl|cgko\nmnop|dhlp"

		or printed for the last:
		
					selfie_and_diag1
					abcd|aeim
					efgh|bfjn
					ijkl|cgko 
					mnop|dhlp

Task:

		Write these functions diag_1_sym, rot_90_clock, selfie_and_diag1
		
		and

		high-order function oper(fct, s) where

					fct is the function of one variable f to apply to the string s 
					(fct will be one of diag_1_sym, rot_90_clock, selfie_and_diag1)

Examples:

		s = "abcd\nefgh\nijkl\nmnop"
		
		oper(diag_1_sym, s) => "aeim\nbfjn\ncgko\ndhlp"
		
		oper(rot_90_clock, s) => "miea\nnjfb\nokgc\nplhd"
		
		oper(selfie_and_diag1, s) => "abcd|aeim\nefgh|bfjn\nijkl|cgko\nmnop|dhlp"
*/

//caller function:
function oper(fct,s){
	return fct(s);
}

function rot90(s){
	return s.split('\n').map(elem => elem.split('').reverse().join('')).join('\n');
} 

function rot90Clock(str) {
    return rot90(diag1Sym(str));
}

function diag1Sym(str) {
	str = str.split('\n');
	let tempArr=[];
    for(let k in str){
    	for(let i=0; i<str[k].length; i++){
    		tempArr[i] = (tempArr[i]) ? tempArr[i] + str[k][i] : str[k][i];
    	}
    }
    return tempArr.join('\n');
}

function selfieAndDiag1(str) {
    return str.split('\n').map((elem,index) => elem + '|'+ diag1Sym(str).split('\n')[index]).join('\n');

}

//Test cases:

s = "abcd\nefgh\nijkl\nmnop";
console.log(oper(diag1Sym, s));			//result => "aeim\nbfjn\ncgko\ndhlp"
console.log('\n');
console.log(oper(rot90Clock, s)); 		//result => "miea\nnjfb\nokgc\nplhd"
console.log('\n');
console.log(oper(selfieAndDiag1, s));	//result => "abcd|aeim\nefgh|bfjn\nijkl|cgko\nmnop|dhlp"


//--------------------------------------------
// other solutions that I did not think of:

function diag1Sym(str) {
  let arr = str.split('\n');
  let s = [], t;
  for(let i = 0; i < arr.length; i += 1) {
    s.push(arr.map(a=>a[i]).join(''));			//interesting!  ...I could not figure out how to 
  }							// eliminate the for-in loop.  ...here it is!
  return s.join('\n');
}


//This is an odd one:

function transform(str, callback) {
  var  arr = str.split(/\n/).map(line => line.split(''))
  ,   line = ''
  , length = arr.length
  , result = [];

  for (var i = 0; i < length; i++) {
    line = '';

    for (var j = 0; j < length; j++)
      line = callback(line, arr, i, j, length - 1);

    result.push(line);
  }  

  return result.join("\n");      
}

const oper = (fct, s) => transform(s, fct);
const diag1Sym = (line, arr, i, j) => line + arr[j][i];
const rot90Clock = (line, arr, i, j, end) => line + arr[end - j][i];
const selfieAndDiag1 = (line, arr, i, j, end) => arr[i][end - j] + (j ? line : '|') + arr[j][i];


// This is another one that I have to figure out.....

function diag1Sym(strng) {
    let arr = strng.split("\n"),
        l = arr.length;
    return Array.from({length: l}, (_, k1) => Array.from({length: l}, (_, k2) => arr[k2][k1]).join("")).join("\n");
}

function rot90Clock(strng) {
    let arr = strng.split("\n"),
        l = arr.length;
    return Array.from({length: l}, (_, k1) => Array.from({length: l}, (_, k2) => arr[l - k2 - 1][k1]).join("")).join("\n");
}

function selfieAndDiag1(strng) {
    let arr = strng.split("\n"),
        sym = diag1Sym(strng).split("\n");

    return arr.map((v, k) => `${v}|${sym[k]}`).join("\n");    
}

function oper(fct, s) {
    return fct(s);
}

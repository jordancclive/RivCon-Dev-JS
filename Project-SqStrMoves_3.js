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


/*		...	Moves in squared strings (IV)	...

Description:

You are given a string of n lines, each substring being n characters long: For example:

					s = "abcd\nefgh\nijkl\nmnop"

We will study some transformations of this square of strings.

		Symmetry with respect to the main cross diagonal: diag_2_sym (or diag2Sym or diag-2-sym)

					diag_2_sym(s) => "plhd\nokgc\nnjfb\nmiea"

		Counterclockwise rotation 90 degrees: rot_90_counter (or rot90Counter or rot-90-counter)

					rot_90_counter(s)=> "dhlp\ncgko\nbfjn\naeim"

		selfie_diag2_counterclock (or selfieDiag2Counterclock or selfie-diag2-counterclock) 
		It is initial string + string obtained by symmetry with respect to 
		the main cross diagonal + counterclockwise rotation 90 degrees .

					s = "abcd\nefgh\nijkl\nmnop" --> 
					"abcd|plhd|dhlp\nefgh|okgc|cgko\nijkl|njfb|bfjn\nmnop|miea|aeim"

		or printed for the last:
					selfie_diag2_counterclock
					abcd|plhd|dhlp
					efgh|okgc|cgko
					ijkl|njfb|bfjn
					mnop|miea|aeim

Task:

		Write these functions diag_2_sym, rot_90_counter, selfie_diag2_counterclock

		and

		high-order function oper(fct, s) where

				fct is the function of one variable f to apply to the string s 
				(fct will be one of diag_2_sym, rot_90_counter, selfie_diag2_counterclock)
				
		Note:
		
				oper(diag_1_sym, s) => "aeim\nbfjn\ncgko\ndhlp"

*/

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

function diag2Sym(strng) {
    return diag1Sym(strng).split('\n').map(elem => elem.split('').reverse().join('')).reverse().join('\n');
}
function rot90Counter(strng) {
    return diag1Sym(strng).split('\n').reverse().join('\n');
}
function selfieDiag2Counterclock(strng) {
    return strng.split('\n').map((elem, index) => elem + '|' + diag2Sym(strng).split('\n')[index] + '|' + rot90Counter(strng).split('\n')[index]).join('\n');
}
function oper(fct, s) {
	//caller function
    return fct(s);
}

//test cases:


s = "abcd\nefgh\nijkl\nmnop";

console.log(oper(diag1Sym, s));					// => "aeim\nbfjn\ncgko\ndhlp"
console.log('\n');				
console.log(oper(diag2Sym, s));					// => "plhd\nokgc\nnjfb\nmiea"
console.log('\n');				
console.log(oper(rot90Counter, s));				// => "dhlp\ncgko\nbfjn\naeim"
console.log('\n');				

console.log(oper(selfieDiag2Counterclock, s));	
// =>		"abcd|plhd|dhlp\nefgh|okgc|cgko\nijkl|njfb|bfjn\nmnop|miea|aeim"







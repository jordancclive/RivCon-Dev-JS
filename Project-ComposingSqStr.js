/*
Description:

A squared string is a string of n lines, each substring being n characters long. 
We are given two n-squared strings. 

For example:		s1 = "abcd\nefgh\nijkl\nmnop" 	s2 = "qrst\nuvwx\nyz12\n3456"

Let us build a new string  strng  of size (n + 1) x n in the following way:

The first line of strng has the first char of the first line of s1 
plus the chars of the last line of s2.

			....in this case:   strng is a size of:  5.
		
				The first line is:  a +  3456 => a3456

The second line of strng has the first two chars of the second line of s1 
plus the chars of the penultimate (meaning: next to last) line of s2 except the last char

				The second line is:	ef + yz1 => efyz1 

and so on until the nth line of strng has the n chars of the nth line of s1 
plus the first char of the first line of s2.
		
				The third line is:	ijk + nu 	=>	ijkuv
				The fourth line is:	mnop + q	=>	mnopq 

Calling this function compose(s1, s2) we have:

compose(s1, s2) -> "a3456\nefyz1\nijkuv\nmnopq"
or printed:
abcd    qrst  -->  a3456
efgh    uvwx       efyz1
ijkl    yz12       ijkuv
mnop    3456       mnopq
*/

let s1 = "abcd\nefgh\nijkl\nmnop", s2 = "qrst\nuvwx\nyz12\n3456";

function compose(s1, s2){
	let s1Arr = [], s2Arr=[], resultArr=[];
	s1Arr = s1.split('\n'), s2Arr = s2.split('\n');
	startN = s1Arr.length
	for(let i=0; i<startN; i++){
		resultArr.push(s1Arr[i].slice(0,i+1) + s2Arr[startN-(i+1)].slice(0,s2Arr[i].length-i));
	}
	return resultArr.join('\n');
}

compose(s1, s2);

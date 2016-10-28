/*
	REVERSE STRING
	
	Create a function that takes a string of any length as input and returns that string reversed. 
	
	Use recursion ;)
	
*/

//The teachers answer:
		    	  		      
function reverse(str) {
	if(str.length <= 1) return str;
	else {
		return str[str.length-1] + reverse(str.slice(0, -1));
	}
}

console.log(reverse("hello!"));


//--------------------------------------------

//My answer the first try:

function revStr1 (str){
	let tempArr = str.split('');
	if (tempArr.length-1 ===0){
		return tempArr.join(''); 
	}else {
		let tempVar = tempArr[tempArr.length-1] + revStr1 (tempArr.slice(0,tempArr.length-1).join(''));
		return tempVar;
	}
} 
console.log(revStr('ReverseTheString'));

//--------------------------------------------

//My answer, the second try:

function revStr (str){
	if (str.length <=1)return str; 
	else {
		return str[str.length-1] + revStr (str.slice(0,str.length-1));
	}
} 
console.log(revStr('ReverseTheString'));



// my answer after some time in the future:

function revStr(str, len){
		len = (!len) ? str.length : len-1; 				//creating a default value.
		return (len === 1) ?  str[0] : str[len-1] + revStr(str,len);	//recursion: base case : recursive case.
}

revStr('ReverseTheString')



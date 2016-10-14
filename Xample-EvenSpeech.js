/*
	EVEN SPEECH
	
	Create a function that takes a string of words (no punctuation, each word is seperated by a space) and returns the string with only words of an even length. Any words with an odd length should have their last letter duplicated to even it out
	
	eg)
		evenIt('Hello my name is Karen') ==> 'Helloo my name is Karenn'

*/

function evenIt(str){
	let tempArr = str.split(' '), resultArr=[];
	for(let i=0; i<tempArr.length; i++){
		((tempArr[i].length)%2) ? resultArr.push(tempArr[i]+tempArr[i][tempArr[i].length-1]) : resultArr.push(tempArr[i]);
	}
	return resultArr.join(' ');
}
evenIt('Hello my name is Karen');

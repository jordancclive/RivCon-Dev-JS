/*
	Permutations Generator  => for up to 3 character strings
	
	Create a function that takes a string as input and returns an array of all possible permutations of that string. 
	
	Note: Make sure you don't count identicle permutations twice
	
	example 1:
	input: "the"
	output: ["eth", "het", "hte", "eth", "teh", "the"]
	
	example 2:
	input: "x"
	output: ["x"]
	
	example 3:
	input: "ab"
	output: ["ab", "ba"];



strategy:

Base case:
1. if length 1 done....return string. and return
2. if length 2 add str and reverse string into array and return

3. 123 132 213 231 312 321 
4 1234 1243

once the recursive function returns its array , add the removed letter to every element and return that result.

*/

function permutations(str){
	let resultArr=[], temp = '';
	if (str.length ===1){
		resultArr.push(str);
		return resultArr;
	}
	else if(str.length ===2){
		resultArr.push(str);
		temp = str[1] + str[0];
		resultArr.push(temp);
		return resultArr;
	}
	else{
		temp = str.slice(0,1);
		let tempArr = permutations(str.slice(1));
		for(let i=0; i<2; i++){
			resultArr.push(temp + tempArr[i]);
			resultArr.push(tempArr[i][0]+temp + tempArr[i][1]);
			resultArr.push(tempArr[i]+temp);
		}
	}
	return resultArr;
}

//test cases:

console.log('Perm1',permutations('t'));
console.log('Perm2',permutations('he'));
console.log('Perm3',permutations('the'));  //the question asked for up to a 3 character string.
//console.log('Perm4',permutations('they'));
//console.log('Perm5',permutations('their'));

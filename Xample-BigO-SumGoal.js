let arr=[1,2,3,4,5,6,7,8,9];

/* problem:
given:  array with ascending positive numbers, variable in size.
		a target sum.
		
return:	an array.
		Element 1:  2 numbers in this array add to the given sum return true, else false.
		Element 2:  array length.
		Element 3:  how many iterations it took to get the anser.

*/

//This is the 4n version

function sunIt(arr, goalSum){
	let counter=0;
	for(let i=0; i<arr.length-1; i++){
		for(let j=i+1; j<arr.length; j++){
			counter++
			if(arr[i]+arr[j] === goalSum) return [true, arr.length, counter];
		}
	}
	return [false, arr.length, counter];
}

console.log('sunIt function');
console.log(sunIt(arr,1));		//[ false, 9, 36 ]
console.log(sunIt(arr,10));		//[ true, 9, 8 ]
console.log(sunIt(arr,15));		//[ true, 9, 33 ]
console.log(sunIt(arr,17));		//[ true, 9, 36 ]
console.log(sunIt(arr,18));		//[ false, 9, 36 ]
console.log('\n');

//---------------------------------------------------------------
//This is the n version

function sunIt2(arr, goalSum){
	let lowIndex=0, highIndex=arr.length-1, counter=0;
	let limiter=15;
	do {
		limiter--
		counter++
		if(arr[highIndex]+arr[lowIndex]===goalSum) return[true, arr.length, counter];
		else (arr[highIndex]+arr[lowIndex]>goalSum) ? highIndex-- : lowIndex++;
		
	}while(highIndex>lowIndex);
	return [false, arr.length, counter];
}
'';


console.log('sunIt2 function');
console.log(sunIt2(arr,1));		//[ false, 9, 8 ]
console.log(sunIt2(arr,3));		//[ true, 9, 8 ]
console.log(sunIt2(arr,5));		//[ true, 9, 6 ]
console.log(sunIt2(arr,7));		//[ true, 9, 4 ]
console.log(sunIt2(arr,9));		//[ true, 9, 2 ]
console.log(sunIt2(arr,10));	//[ true, 9, 1 ]
console.log(sunIt2(arr,11));	//[ true, 9, 2 ]
console.log(sunIt2(arr,13));	//[ true, 9, 4 ]
console.log(sunIt2(arr,15));	//[ true, 9, 6 ]
console.log(sunIt2(arr,17));	//[ true, 9, 8 ]
console.log(sunIt2(arr,18));	//[ false, 9, 8 ]

//---------------------------------------------------------------

// another simple routine for finding the largest sum in nested arrays.


/*largestSub([[1,2,3,4], [7,8,9,10], [3,4,5,6]]) => 34

- I am going to loop thru the main array
- as I am looping, I am going to summ each array individually
- As i go, I will put the sum in a temp variable. and the index in another temp variable
- As I progresss, if the next sum is larger capture that sum and index.

- when done, return the sum.

...........did the following while I was in class.
*/
function largestSub (arr){
	let result = 0;
	for(let i=0; i<arr.length; i++){
		let sum=0;
		for (let j=0; j<arr[i].length; j++){
			sum += arr[i][j];
		}
		if (!i) result = sum
		else if (sum>result) result = sum;
	}
	return result;
}

largestSub([[1,2,3,4], [7,8,9,10], [3,4,5,6]]);
largestSub([[9,2,30,4], [7,8,19,10], [13,4,5,6]]);


//................did the following after the class was finished:

let arr = [[1,2,3,4], [7,8,9,10], [3,4,5,6]];

function largestSum(arr){
	let result = 0;
	for (let i=0; i<arr.length; i++){
		let sum = 0;
		sum = arr[i].reduce((prev,curr) => prev+curr);
		if (sum>result) (result = sum);
	}
	return result;
}
largestSum(arr);


//The instructor did this becasue he wanted to illustrate nested callbacks:



/* Arrays:
    *** Be Aware ***
    If you define an array and pass it to a function and change it within your function,
    you will be changing the original array.
    
    It is a better technique to assign the array to a new array within the function.
    ....that is unless you conciously want to change the original array.
*/

let arr = [1,2,3,4];

function addToArr(arr2, n){
	let newArr = arr2.slice(); 
	newArr.push(n);
	arr2.push(9);
	console.log('arr2:',arr2);
	return newArr; 
}

let secondArr = addToArr(arr, 5);
console.log('arr:',arr);
console.log('secondArr:',secondArr); 

//	results:
//		newArr: [ 1, 2, 3, 4, 5 ]	...newArr is assigned its information and is assigned new data in memory
//		arr2: [ 1, 2, 3, 4, 9 ]		...arr2 is a reference to the same physical data as ...arr
//		arr: [ 1, 2, 3, 4, 9 ]
//		secondArr: [ 1, 2, 3, 4, 5 ]	...secondArr is assigned the information from newArr by using return.
//						...newArr is a throw away variable, so it doesn't exist anymore.
//							but if it existed it would point to the same data as ...secondArr.

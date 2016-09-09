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
	return newArr; 
}

let secondArr = addToArr(arr, 5);
console.log(arr);
console.log(secondArr); 

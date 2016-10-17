/*
	BUBBLE SORT
	
	The Bubblesort Algorithm is one of many algorithms used to sort a list of similar items (e.g. all numbers or all letters) into either ascending order or descending order. Given a list (e.g.):

	[9,7,5,3,1,2,4,6,8]
	To sort this list in ascending order using Bubblesort, you first have to compare the first two terms of the list. If the first term is larger than the second term, you perform a swap. The list then becomes:
	
	[7,9,5,3,1,2,4,6,8] // The "9" and "7" have been swapped because 9 is larger than 7 and thus 9 should be after 7
	
	You then proceed by comparing the 2nd and 3rd terms, performing a swap when necessary, and then the 3rd and 4th term, then the 4th and 5th term, etc. etc. When you reach the end of the list, it is said that you have completed 1 complete pass.
	
	Create your own version of the Bubblesort algorithm that takes 2 inputs: an array of unsorted integers and a string "ASC" or "DESC". For "ASC", sort the array in ascending order, and descending order for DESC
	
	ex) 
		bubble([2,1,0,5], 'DESC') ==> [5,2,1,0]
		bubble([2,1,0,5], 'ASC') ==> [0,1,2,5]


 if asc one for loop, desc a different for loop characteristics.
 
 - regardless: outer loop must do length - 1 passes. from 0 starting point

 - the 2nd loop compares elements.... 0,1 ; 1,2 ; ... up to length-2;
 			The elements are swapped depending on asc or desc.
 */


function bubble(arr, ascDesc){
	let temp = 0;
	for(let i=0; i<arr.length-1; i++){
		let swapped = false;
		for(let j=0; j<arr.length-1; j++){
			if (ascDesc === 'ASC'){
				if (arr[j]> arr[j+1]) {
					temp = arr[j];
					arr[j] = arr[j+1];
					arr[j+1]=temp;
					swapped = true;
				}
			}else{
				if (arr[j]< arr[j+1]) {
					temp = arr[j];
					arr[j] = arr[j+1];
					arr[j+1]=temp;
					swapped = true;
				}
			}
		}
		if (!swapped) return arr; 
	}
	return arr;
}

//tests:
console.log(bubble([2,1,0,5], 'DESC')); 		//==> [5,2,1,0]
console.log(bubble([2,1,0,5], 'ASC')); 			//==> [0,1,2,5]
console.log(bubble([5, 6, 1, 2, 3, 5, 2, 3], 'ASC'));
console.log(bubble([5, 6, 1, 2, 3, 5, 2, 3], 'DESC'));

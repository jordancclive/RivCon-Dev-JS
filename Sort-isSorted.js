/*
Check if Array is Sorted
Complete the function isSorted, which takes an array as inputed and outputs a boolean 
indicating if the array's contents are in ascending order.

    isSorted([8,2,3,4])
    // -> false


    isSorted([2,3,4,8])
    // -> true

*/
        function isSorted(arr) {
        	for(let i=0; i< arr.length-1; i++){
        		if(arr[i] > arr[i+1]) return false
        	}
        	return true;
        }
        
        // tests follow:
        console.log(isSorted([8,2,3,4]));  
        console.log(isSorted([2,3,4,8])); 




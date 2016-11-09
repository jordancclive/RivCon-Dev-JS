/*
See below for problem description.....

Note:  This problem works outside of codewars. The problem itself requires the developer to create his/her own test cases.

I am having an issue with the test case methodology.  Plan to build a codewars problem that outlines the sites ambiguous docs.

.....to be continued......

*/

snail = function(array) {
	//resultArr = the answer
	let resultArr=[], leftArr=[], midArr=[];

	//base condition
	if (array.length<=1) return array;

	//workhorse loop
	for(let i=0; i<array.length; i++){
		if (i===0) resultArr = resultArr.concat(array[i]);
		else if (i===array.length-1) resultArr = resultArr.concat(array[i].reverse());
		else{
			midArr.push(array[i].slice(1,-1));
			leftArr.unshift(array[i][0]);
			resultArr = resultArr.concat(array[i][array[i].length-1]);
		}
	}
	
	// The left vertical side of the square array
	resultArr = resultArr.concat(leftArr);

	//The recursive case...
	midArr = snail(midArr);
	let temp = midArr.pop();
	if (temp) (typeof temp === 'number') ? midArr.push(temp) : midArr = midArr.concat(temp);
		
	return (midArr) ? resultArr.concat(midArr) : resultArr;
};

//snail([]);							//result:	[]
//snail([1]);							//result:	[1]
//snail([[1,2], [4,3]]);				//result:	[1,2,3,4]

//snail([[1,2,3], [8,9,4],[7,6,5]]);	
//snail([[1,2,3,4], [2,3,4,5],[1,6,5,6], [0,9,8,7]]);	
//snail([[1,2,3,4,5], [6,7,8,9,6], [5,4,5,0,7], [4,3,2,1,8], [3,2,1,0,9]]);			
//snail([[1,2,3,4,5,6], [1,2,3,4,5,6], [1,2,3,4,5,6], [1,2,3,4,5,6], [1,2,3,4,5,6], [1,2,3,4,5,6]]);
snail([[1,2,3,4,5,6,7], [1,2,3,4,5,6,7], [1,2,3,4,5,6,7], [1,2,3,4,5,6,7], [1,2,3,4,5,6,7], [1,2,3,4,5,6,7], [1,2,3,4,5,6,7]]);



//codewars test cases:
/*
//---------------------------------------------

describe("Solution", function(){
  it("should test for something", function(){
    Test.assertEquals("actual", "expected", "tests");
  });
});

*/
//---------------------------------------------


//---------------------------------------------
//  Background on this problem follows:
//---------------------------------------------
/*

Snail Sort

Given an n x n array, return the array elements arranged from outermost elements 
to the middle element, traveling clockwise.

Example:

		array = [[1,2,3], [4,5,6], [7,8,9]]
		snail(array) #=> [1,2,3,6,9,8,7,4,5]
		
		array = [[1,2,3], [8,9,4], [7,6,5]]
		snail(array) #=> [1,2,3,4,5,6,7,8,9]
		
NOTE: The idea is not sort the elements from the lowest value to the highest; 
the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as [[]]


//---------------------------------------------
//  Actions:
//---------------------------------------------

first if the array size is zero, return [[]];
create an empty array:  resultArr;
Note:  each index element is an array.

base condition:	length = 1 concat that 1 element and return from function.

condition #1: 	index = 0, 
				take the entire element and concat into resultArr;

Check if length-1 = current index, no: do the following:

			condition #2:   index = 1 to length-1, take the last element and add to array;

Check if length-1 = current index, yes: do the following:

			condition #3:	index = length-1, take the entire array and concat into resultArr;

Check if length-1 = current index, no: do the following:

			condition #4:	index = 1 to length-1, take the first element and add to array;

Check if length > 2, yes then do the following:

			condition #5:   remove the outer edge of the array.

			condition #6:	repeat step #1 to #5 until element size = 1 
			
Check if length = 2, yes then do the following:

			return resultArr
				
*/

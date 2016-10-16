/*
   Complete the two functions below. Both take 3 Numbers. getMedian() will return the Median (middle value) of the 3 numbers, while getMean will return the average. If not all the arguments are numbers, the function should return an error message, prompting the user to try again with proper inputs.
*/


var getMedian = function(a, b, c) {
	if (typeof a !=='number') console.log('Median:','Please give me 3 numbers');
	if (a<b){
		if (b<c) return b;
		else return (a<c) ? c : a;
	}else{
		if (a<c) return a;
		else return (b<c) ? c : b;
	}
};

var getMean = function(a, b, c) {
	if (typeof a !=='number') console.log('Mean','Please give me 3 numbers');
	return (a+b+c)/3;
}




//Tests - should all return true

console.log(getMean(1,2,3) === getMedian(1,2,3));

console.log(getMean(102,2,40) === getMedian(48,50,3));
 
console.log(getMedian(0,-10, 10) === getMedian(0, -10, 10));

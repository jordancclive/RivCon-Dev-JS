// Attach a method to the Array prototype called myMap.
// It should be utilized and perform exactly as Array.prototype.map does. Use the code snippet below as a guide.

// creating a function with a callback function map inside of it

Array.prototype.myMap = function (callFunc) {
	let tempArr = [];
	for(let i=0; i<this.length; i++){
		tempArr.push(callFunc(this[i], i));
	}
	return tempArr;
};

function valPlusInd(val, index) {
	return val + index;
}

var arr = [1,2,3,4,5];

var mapped = arr.myMap(valPlusInd);

console.log(mapped); // Should be [ 1, 3, 5, 7, 9 ]


function addWorld(str) {
	return str + ' World';
}

var arr2 = ['Hello', 'Great', 'Big'];

var mapped2 = arr2.myMap(addWorld);

console.log(mapped2); // Should be [ 'Hello World', 'Great World', 'Big World' ]

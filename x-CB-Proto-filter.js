// Attach a method to the Array prototype called myFilter.
// It should be utilized and perform exactly as Array.prototype.filter does. Use the code snippet below as a guide.

Array.prototype.myFilter = function (cBack){
	newArr = [];
	for(let i=0; i<this.length; i++){
		if(cBack(this[i])) newArr.push(this[i]);
	}
	return newArr;
};

function isEven(num) {
	return num % 2 === 0;
}

var arr = [0,1,2,3,4,5,6];

var filtered = arr.myFilter(isEven);

console.log(filtered); // should be [ 0, 2, 4, 6 ]

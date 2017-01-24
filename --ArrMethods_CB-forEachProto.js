// Attach a method to the Array prototype called myForEach.
// It should be utilized and perform exactly as Array.prototype.forEach does. Use the code snippet below as a guide.

Array.prototype.myForEach = function (cBack){
	for(let i=0; i<this.length; i++){
		cBack(this[i]);
	}
}

var sum = 0;

function addToSum(num) {
	sum += num;
}

var arr = [1,2,3];

arr.myForEach(addToSum);

console.log(sum); // 6

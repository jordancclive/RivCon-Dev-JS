// Attach a method to the Array prototype called myReduce.
// It should be utilized and perform exactly as Array.prototype.reduce does. Use the code snippet below as a guide.


Array.prototype.myReduce = function (cBack, start){
	let prev = start;
	for(let i=0; i<this.length; i++){
		prev = cBack(prev, this[i]); 
	}
	return prev;
};

function add(prev, current) {
	return prev + current;
}

var arr = [1,2,3,4,5];

var sum = arr.myReduce(add, 0);

console.log(sum);  // 15


function buildObject(prev, current) {
	prev[current] = current.charAt(0).toUpperCase() + current.slice(1);
	return prev;
}

var arr2 = ['cat', 'dog', 'fish'];

var obj = arr2.myReduce(buildObject, {});

console.log(obj);  // { cat: 'Cat', dog: 'Dog', fish: 'Fish'}


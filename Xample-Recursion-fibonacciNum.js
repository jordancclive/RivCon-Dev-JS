/*
	FIBONACCI
	
	Create a function that takes a number n and returns the nth number in the Fibonacci sequence.
	
	The Fibonacci sequence is a series of numbers, where each number is the sum of the two numbers preceding it.
	
	Ex)
		1, 1, 2, 3, 5, 8, 13, 21, 34, 55....
		
*/

//my result:

var fib = function(n) {
	return (n<2) ? n : fib(n-1)+fib(n-2);
}

console.log(fib(0));	//returns:	0
console.log(fib(1));	//returns:	1
console.log(fib(2));	//returns:	1 
console.log(fib(3));	//returns:	3
console.log(fib(6));	//returns:	8 
console.log(fib(9));	//returns:	34
console.log(fib(10));	//returns:	55



//---------------------------------

//cumbersonme result.......

arr = [1,1]
var fib = function(n) {
	debugger;
		if (n<=2) return 1;
		else {
			let x=arr.length-1 || 1, y=arr.length;
			for(let i=x; i<y; i++){
				let temp = arr[i-1] + arr[i]
				arr.push(temp);
			}
			if (n===arr.length) return arr[arr.length-1];
			else return fib(n);
		}
	}
console.log(fib(4));
console.log(fib(5)); // ===> 5);  //true
console.log(fib(7)); // ===>13);	
console.log(fib(9)); // ===> 34);
console.log(fib(11)); // ===> 89);


//----------------------------------

//Teacher's result:

		fib(1) // 1
		fib(0) // 0
		
		//base case
		//recursive case
*/

var fib = function(n) { //5
	// if(n===1) return 1;
	// if(n===0) return 0;
	if(n <= 1) return n;
	return fib(n-1) + fib(n-2);    //simple solution
	
}

fib(1); // 1
fib(0); // 0
console.log(fib(4));	//result:	3
console.log(fib(5));	//result:	5
console.log(fib(7));	//result:	13	
console.log(fib(9));	//result:	34
console.log(fib(11));	//result:	89

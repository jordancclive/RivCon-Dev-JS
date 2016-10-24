/*
	FACTORIAL 
	
	Define a function factorial() that takes a number n as input and returns n factorial
	
	Factorial = the product of all the numbers between n and 1. The factorial of 0 is 1
	
	n! = n * n-1 * n-2 ..... * 2 * 1;
*/

var factorial = function(n) {
	return (n===1 || n === 0) ? 1 : n * factorial(n-1); 
}


//Tests
console.log(factorial(0) === 1)
console.log(factorial(2) === 2);
console.log(factorial(5) === 120 );
console.log(factorial(10) === 3628800);

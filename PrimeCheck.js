/*
	PRIME CHECK
	
	Create a function that takes a number as an input and returns True if the input is prime and false if it isn't


-	if negative (multiply by -1) to make it positive.
-	if less than 2 or 3 , then it is a prime.
=============now the number is 4 or larger========================
-	Divide the number by 2.....no remainder?  yes not a prime.
=============now I have all odd numbers.
loop from 3 every other number until 1/2 of the number presented.
if no remainder not a prime, else prime.
*/

// My result:

	function primeCheck (value){
		if (value<0) return false;
		if (value ===2 || value ===3) return true; 
		if (!(value%2)) return false;
		let limit = Math.ceil(value/2);
		for(let i=3; i<=limit; i+=2){
			if (!(value%i)) return false;
		}
		return true;
	}

	//test case:
	console.log('check 20:',primeCheck(20));
	console.log('check 25:',primeCheck(25));
	console.log('check 7:',primeCheck(7));
	console.log('check 127:',primeCheck(127));
	console.log('check 133:',primeCheck(133));
	console.log('check 541:',primeCheck(541));

//-------------------------

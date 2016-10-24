//Complete Reverse FizzBuzz()
//The function should accept a number n, and console.log() all the numbers between 1-n. Any numbers divisible by 3 should say "Fizz", numbers divisible  by 5 should say "Buzz" and numbers divisble by 15 should say 'Fizzbuzz'

//eg FizzBuzz(16) => 16, FIZZBUZZ, 14, 13, FIZZ, 11, BUZZ, FIZZ, 8, 7, FIZZ, BUZZ, 4, FIZZ, 2, 1 

var FizzBuzz = function(n) {
	let result = "";
	if(n === 0) console.log('Done!');
	else{
		if (n%3 === 0) result = "FIZZ";
		if (n%5 === 0) result += "BUZZ";
		if (result === "") result = n.toString();
		console.log(result);
		FizzBuzz(n-1);			// Did this version for fun.....
	} 
	return
};

//tests
FizzBuzz(100);

//----------------------------------------------------

// The iteration version:  (This is the way to go.....)

var FizzBuzzI = function(n) {
	for(let i=n; i>0; i--){
		let result = "";
		if (i%3 === 0) result = "FIZZ";
		if (i%5 === 0) result += "BUZZ";
		if (result === "") result = i.toString();
		console.log(result);
	} 
};

//tests
FizzBuzzI(100);

//--------------------------------------------------------

//one more way.....

//Complete FizzBuzz()
//The function should accept a number n, and console.log() all the numbers between 1-n. Any numbers divisible by 3 should say "Fizz", numbers divisible  by 5 should say "Buzz" and numbers divisble by 15 should say 'Fizzbuzz'

//eg FizzBuzz(16) => 1, 2, FIZZ, 4, BUZZ, FIZZ, 7, 8, FIZZ,BUZZ, 11, FIZZ, 13, 14, FIZZBUZZ, 16 

var FizzBuzz = function(n) {
	for(let i = 1; i<=n; i++){
		let result = '';
		if (i%3 && i%5) result = i.toString();
		else {
			if (!(i%3)) result = 'FIZZ';
			if (!(i%5)) result += 'BUZZ';
		}
		console.log(result)
	}
	return;
}

//tests
FizzBuzz(100);

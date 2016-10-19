/*
	PERFECT NUMBERS
	
	A 'Perfect' number is a number whose sum of their divisors equals exactly that number. 
	The divisors do not include the number itself
	
    ex) 
    	6 is perfect because 1 + 2 + 3 === 6
    	16 is not perfect because 1 + 2 + 4 + 8 === 15
    	
    An "Abundant" number is a number whose sum of their divisors (exluding itself) is greater than that number
    
    ex) 
    	20 is abundance because 1 + 2 + 4 + 5 + 10 === 22 and 22 > 20
    	
    A "Deficient" number is a number whose sum of their divisors (excluding itself) is less than that number
    
    ex)
    	16 is deficiant because 1 + 2 + 4 + 8 === 15 and 15 < 16
    	
    	
    Create a function findPerfect() that takes a number as input and returns 
    "Perfect" if the number is perfect, "Abundance" if it is abundant and "Deficient" if it is deficient
    
    ex)
    	findPerfect(6) --> "Perfect"
    	findPerfect(20) --> "Abundant"
    	findPerfect(16) --> "Deficient"
*/

// my solution:

function findPerfect(n) {
	let limit = (n/2)+1, resultValue = '';
	let divisors = [1];
	let possibleP = PrimeValues(limit);
	
	//determine if a prime number is a divisor
	for(let i=0; i<possibleP.length; i++){
		if(n%possibleP[i] === 0) divisors.push(possibleP[i]);
	}
	
	//see if any more divisors exist
	for(let i=1; i<divisors.length; i++){
		for(let j=i+i; j<=n/2; j+=i){
			if(n%j===0 && divisors.indexOf(j)<0){
				divisors.push(j);
			} 
		}
		
		// compress array & determine result.
		let divisorsSum = 0;
		divisors.forEach(function(elem){
			divisorsSum +=elem;
		});
		if (divisorsSum === n) resultValue = 'Perfect';
		else if(divisorsSum > n) resultValue = 'Abundant';
		else resultValue = 'Deficient';
		
		//console.log results:
		console.log('input:',n);		
		console.log('result:',divisors);
		console.log('resultValue:',resultValue);
		console.log('\n');
		return resultValue;
	}
	
}

function PrimeValues(value) {
    let primes = [], tempArr=[];

    //fills an array with 'true' from 2 to the given value.
    for(let i = 2; i < value; i++) {
        primes[i] = true;
    }

    //work way thru array tagging primes & non-primes
    let limit = Math.sqrt(value);
    for(let i = 2; i < limit; i++) {
        if(primes[i] === true) {
            for(let j = i * i; j < value; j += i) {
                primes[j] = false;
            }
        }
    }

    // remove nonprimes from array.
    for(let i = 2; i < value; i++) {
        if(primes[i] === true) {
            tempArr.push(i);
        }
    }
    return tempArr;
}

//Test cases:
findPerfect(6);		// --> "Perfect"
findPerfect(20);	// --> "Abundant"
findPerfect(16);	// --> "Deficient"


// Instructors solution:

// I did not want to do it this way.

function findPerfect(n) {
	var sumOfDivisors = 0;
	
	for (var i = 1; i < n; i++) {
		if (n % i === 0) {
			sumOfDivisors += i;
		}
	}
	
	if (sumOfDivisors === n) {
		return "Perfect"
	} else if (sumOfDivisors < n) {
		return "Deficient"
	} else {
		return "Abundant"
	}
}

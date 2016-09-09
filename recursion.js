/* Recursion

A function that calls itself

A simple example:
*/

    //countdown function
    
    function countdown(n){
        console.log(n);
        if(n===0) console.log('Done!');     // Do the base case first....The case that ends the recursive function
        else countdown(n-1);                // This is the recursive case.
    }
    
    countdown(4);           // returns: 4  3  2  1  Done!
    

/* This all works as a result of something called the "Call Stack".  
.... these things are happening in sequence.....in a synchronous environment
.... so the recursive call stops the parent function (on down the line).

countdown(4);   
    countdown(3);
        countdown(2);
            countdown(1);
                countdown(0);  Once we get here.  The values returned from this function call (upwards)
                                                    work their way back up.  
                                                    (must do this for things to work properly)

/* -----------------------------------------------------
    When you do recursion there are 3 steps to think about:
    
    Step 1: Figure out the base case.  or when shoud a function stop calling itself.
    
    Step 2: Determine the recursive case.  ...when/why should you have a finction call itself.
    
    Step 3: Then modify the code as necessary.
*/

// Simple factorial example:

/*
	FACTORIAL 
	
	Define a function factorial() that takes a number n as input and returns n factorial
	
	Factorial = the product of all the numbers between n and 1. The factorial of 0 is 0
	
	n! = n * n-1 * n-2 ..... * 2 * 1;
*/

var factorial = function(n) {
	if (n<=1) return 1;
	return n * factorial(n-1);
}


//Tests
console.log(factorial(0) === 1)
console.log(factorial(2) === 2);
console.log(factorial(5) === 120 );
console.log(factorial(10) === 3628800);     // returns:  true for all of these.
    


// Another simple example = summ an array:

//Sum all the numbers in an array.

			//first do it iteratively:
			
			function largestNum (arr){
					let total = arr[0];
					for(let i=1; i<arr.length; i++){
						total += arr[i];
					}
					return total;
				}
				arr = [1,2,3,4,5,6,7,8,9];
				
				console.log(largestNum(arr));
				
			// now lets do it recursively:
			
				function largestNumRec (arr){
					let newArr = arr;
					if (newArr.length === 1) return arr[0]
					else return newArr.pop() + largestNumRec(newArr);
				}
				
					console.log(largestNumRec(arr));
			    

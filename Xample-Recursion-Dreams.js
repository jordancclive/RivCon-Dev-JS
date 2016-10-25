// 5) Inception

// Leonardo Dicaprio is stuck inside a dream. The dream that he's stuck in may actually be inside another dream, which may be inside another dream.. Our job is to figure out how many dreams deep Leo is. A dream, you might have guessed, looks like this: [].

// Write a function called inception that takes Leo inside his dream situation (an array, possibly multidimensional, with Leo in the middle) as a parameter, and returns a number that represents how many dreams deep Leo is. Your function may also take additional optional parameters if you wish. 

// Examples:
// inception(['Leo']) ==> 1
// inception([['Leo']]) ==> 2
// inception([[['Leo']]]) ==> 3  and so on...

// CODE HERE

/*
recursive problem
base case:  inside the first array there is not an array.
*/

function inception (dream){
	let dreams = 0;
	if (!Array.isArray(dream[0])) return dreams+=1;
	return inception(dream[0])+1;
}




// TESTS
console.log(inception(['Leo']) === 1);
console.log(inception([['Leo']]) === 2);
console.log(inception([[['Leo']]]) === 3);
console.log(inception([[[[['Leo']]]]]) === 5);

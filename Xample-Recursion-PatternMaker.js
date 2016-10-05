/*	Pattern Master
	
	create a function patternMaker() that takes two arguments: an integer n and a piece of data of any type. patternMaker() should return an array of the second argument, repeated n times
	
	ex)
		patternMaker(5, 'Boo') --> ['Boo', 'Boo', 'Boo', 'Boo', 'Boo']
		patternMaker(3, ['cat', 'dog']) --> [['cat', 'dog'], ['cat', 'dog'], ['cat', 'dog']]
 
The recursive solution:	*/

		function patternMaker(n, item) {
			let resultArr = [];
			resultArr.push(item);
			if(n!==1) resultArr = resultArr.concat(patternMaker(n-1, item));
			return resultArr;
		}
		patternMaker(3, ['cat', 'dog']);

//The non-recursive solution:

		function patternMaker(n, item) {
			var returnArr = [];
			for(var i = 0; i < n; i++) returnArr.push(item);
			return returnArr;
		}

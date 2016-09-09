/*
	MAP IT
	
	JavaScript is a cool language for so many reasons. One reason is how it treats functions as "First Class" citizens. This means you can pass functions as arguments to other functions!
	
	Check out how myFunc is defined and invoked below with console.log 
*/
	function myFunc(a, b) {
			return a(b);
		}
	
	myFunc(console.log, '\n\nHello world\n\n');
	
/*
	
	Your job is to create two functions: myMap() and myFlatten()
	
	The function myMap() that takes 2 arguments as input: an array and a function. myMap() should return a new array of all the items in the input array with the function argument applied to each of them
	
	ex
		var addTwo = function(b) {
			return 2 + b; 
		}
		
		myMap([1,2,3], addTwo) ===> [3,4,5]
		
		var addTwoToo = function(b) {
			return b.toString() + "two";
		}
		
		myMap([1,2,3], addTwoToo) ==> [1two, 2two, 3two]
		
		The function myFlatten() that takes 1 multidimensional array as input. myFlatten() should return a flat (single-dimensional) array containing all the elements of the input array
		
		ex
		    var myArr = [[1,2],['a','b','c'], [{name : 'Sally Bowls'}, {name : 'Alex Hamilton'}]]
		    
			myFlatten(myArr)  ==> [1,2,'a','b','c',{name : 'Sally Bowls'}, {name : 'Alex Hamilton'}]
*/
	// Array input to myflatten:
	
	var myArr = [[1,2],['a','b','c'], [{name : 'Sally Bowls'}, {name : 'Alex Hamilton'}]];

	//-----------------------------	

	function myFlatten (arrIn) {
		let newArr = [];
		for (let i=0; i<arrIn.length; i++){
			let tempArr = arrIn[i];
			for (let j=0; j<tempArr.length; j++){
				newArr.push(tempArr[j]);
			}
		}
		return newArr;
	}
	
	//Functions given as examples:
	
	var addTwo = function(b) {
			return 2 + b; 
		};
		
	var addTwoToo = function(b) {
			return b.toString() + "two";
		};
		
	//-----------------------------
	
	function myMap(arrIn, funcIn) {
		let newArr = [];
		for(let i=0; i<arrIn.length; i++){
			newArr.push(funcIn(arrIn[i]));
		}
		return newArr;
	}
	console.log('Input: [1,2,3]','addTwo: ',myMap([1,2,3], addTwo), '\n');
	console.log('Input: [1,2,3]','addTwoToo: ', myMap([1,2,3], addTwoToo), '\n');
	console.log('myFlatten: ' , myFlatten(myArr), '\n');

/*
			
		These can both be done iteratively (using a loop). But, what if our input had many nested elements?? 
		
		ex 	myMap([1,2,3,[4,5,[6]]], addTwo) ===> ???
		
		Our iterative functions can't do this!! But we can do it using recursion!
			
		myRecursiveMap([1,2,3,[4,5,[6]]], addTwo) ===> [3, 4, 5,[6,7,[8]]]
		
		Similarly, myFlatten can only take a single dimensional array. If we want to also flatten out the nested elements, we will need to use recursion.
		
		ex var myArr = [[1,2,['z',['8']]],['a','b','c',['hello']], [{name : 'Sally Bowls'}, {name : 'Alex Hamilton'}]]
		myFlatten(myArr)  ==> [1,2,'z','8',a','b','c','hello',{name : 'Sally Bowls'}, {name : 'Alex Hamilton'}]
*/

// New input to the recursive myFlatten:

	var myArr2 = [[1,2,['z',['8']]],['a','b','c',['hello']], [{name : 'Sally Bowls'}, {name : 'Alex Hamilton'}]];

	//-----------------------------	
	

	function myRecursiveMap(arrIn, funcIn) {
		let newArr = [];
		for(let i=0; i<arrIn.length; i++){
			if (Array.isArray(arrIn[i])){
				newArr.push(myRecursiveMap(arrIn[i], funcIn));
			}
			else newArr.push(funcIn(arrIn[i]));
		}
		return newArr;
	}
	

	
	function myRecursiveFlatten(arrIn){
		let newArr = [];
		for (let i=0; i<arrIn.length; i++){
			if(!Array.isArray(arrIn[i])) newArr.push(arrIn[i]);
			else newArr = newArr.concat(myRecursiveFlatten(arrIn[i]));
		}
		return newArr;
	}	
	
	
	
	
	
	
	
	
	// Test cases follow:
	console.log("\n\n\nRecursion functions follow:\n");
	console.log("Map input: ", [1,2,3,[4,5,[6]]], "\n");
	console.log('myRecursiveMap: ', myRecursiveMap([1,2,3,[4,5,[6]]], addTwo), "\n\n");
	
	console.log("\n\n---------------------:\n");
	console.log("Flatten input input:\n ", [[1,2,['z',['8']]],['a','b','c',['hello']], [{name : 'Sally Bowls'}, {name : 'Alex Hamilton'}]], "\n");
	
	console.log('output: \n', myRecursiveFlatten(myArr2));
"";

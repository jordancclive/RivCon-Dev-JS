/*
	MAP IT
	
	JavaScript is a cool language for so many reasons. One reason is how it treats functions as "First Class" citizens. This means you can pass functions as arguments to other functions!
	
	Check out how myFunc is defined and invoked below with console.log 
*/
	function myFunc(a, b) {
			return a(b);
		}
	
	myFunc(console.log, 'Hello world');
	
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
	console.log('Input: [1,2,3]','addTwo: ',myMap([1,2,3], addTwo));
	console.log('Input: [1,2,3]','addTwoToo: ', myMap([1,2,3], addTwoToo));
	console.log('myFlatten: ' , myFlatten(myArr));



	
	
	
	

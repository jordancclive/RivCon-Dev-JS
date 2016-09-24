// shortNamesOnly
/*
Take an array of objects (elements = people), return the ones whose names are <= 4 in length.
*/

let people = [
	{name: 'doug', age: 25}, {name: 'vin', age: 60}, {name: 'Sandra', age: 40}, {name: 'diana', age: 30}];
	
function shortNamesOnly(arr){
	return arr.filter(function(elem,index){
		return elem.name.length<=4;
	})
	
}
console.log(shortNamesOnly(people));		// result:  [ { name: 'doug', age: 25 }, { name: 'vin', age: 60 } ]


//the above callback is performing an "operation" or "evaluation" a property and therefor returns the entire selected object.
// below we are returning a certain key/value pair.  The one that is named.

//------------------------------------------------

// namesOnly
/*
Take an array of objects (elements = people), return the ones whose names are <= 4 in length.
*/

let people = [
	{name: 'doug', age: 25}, {name: 'vin', age: 60}, {name: 'Sandra', age: 40}, {name: 'diana', age: 30}];
	
function namesOnly(arr){
	return arr.map(function(elem,index){
		return elem.name;
	})
	
}
console.log(namesOnly(people));		// result: [ 'doug', 'vin', 'Sandra', 'diana' ]


//------------------------------------------------

// agesOnly
/*
Take an array of objects (elements = people), return the ones whose names are <= 4 in length.
*/

let people = [
	{name: 'doug', age: 25}, {name: 'vin', age: 60}, {name: 'Sandra', age: 40}, {name: 'diana', age: 30}];
	
function agesOnly(arr){
	return arr.map(function(elem,index){
		return elem.age;
	})
	
}
console.log(agesOnly(people));		// result: [ 25, 60, 40, 30 ]

//-------------------------------------------------

// generalizing the function so that it is multi-operational:


// agesOnly
/*
Take an array of objects (elements = people), return the ones whose names are <= 4 in length.
*/

let people = [
	{name: 'doug', age: 25}, {name: 'vin', age: 60}, {name: 'Sandra', age: 40}, {name: 'diana', age: 30}];
	
function agesOnly(arr, key){
	return arr.map(function(elem,index){
		return elem[key];
	})
	
}
console.log(agesOnly(people,'age'));		// result: [ 25, 60, 40, 30 ]

		// If you changes the argument to 'name', would get the names instead......

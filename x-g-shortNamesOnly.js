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
console.log(shortNamesOnly(people));

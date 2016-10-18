/*
Develop a dataset and report data from the DBMS.
*/

let person = {};
let people=[];

let str1 = 'Abercrombie, Neil, Male, Tan, 2/13/1943, Bishop, Timothy, Male, Yellow, 4/23/1967, Kelly, Sue, Female, Pink, 7/12/1959';
let str2 = 'Smith | Steve | D | M | Red | 3-3-1985 | Bonk | Radek | S | M | Green | 6-3-1975 | Bouillon | Francis | G | M | Blue | 6-3-1975';
let str3 = 'Kournikova Anna F F 6-3-1975 Red Hingis Martina M F 4-2-1979 Green Seles Monica H F 12-2-1973 Black';
let commaFormat = ['LastName', 'FirstName', 'Gender', 'FavoriteColor', 'DateOfBirth'];
let pipeFormat = ['LastName', 'FirstName', 'MiddleInitial', 'Gender', 'FavoriteColor', 'DateOfBirth'];
let spaceFormat = ['LastName', 'FirstName', 'MiddleInitial', 'Gender', 'DateOfBirth', 'FavoriteColor'];


function inputData(str, format, delim){
	let arrStr = [];
	if (delim === 'comma') arrStr = str.split(', ');
	else if (delim === 'pipe') arrStr = str.split(' | ');
	else arrStr = str.split(' ');

	// The input is separated, now use a do...while loop
	// go thru the input and follow along with the format array.
	// If you come to the end of the format array, start again.
	// If you come to the end of the input array, you are done.
	
	let indexInput = 0, lenInput = arrStr.length-1, inputDone = false;
	let indexFormat = 0, lenFormat=format.length-1;

	//build the object
	do{
		person[format[indexFormat]]=arrStr[indexInput];
		
		//increment indexes and loop.
		(indexInput===lenInput) ? inputDone=true : indexInput++;
		if (indexFormat!==lenFormat) indexFormat++;
		else {
			people.push(person);
			person = {};
			indexFormat=0;
		}
	}while (!inputDone);
}

//test cases:

//-----------------------------------------------------------
inputData(str1, commaFormat,'comma');
inputData(str2, pipeFormat,'pipe');
inputData(str3, spaceFormat,'space');
//tested....works great  people (array) contains objects
//						 person = object describing a person.
//-----------------------------------------------------------
//look at the people object and see what we see.
console.log('people:',people);
//-----------------------------------------------------------



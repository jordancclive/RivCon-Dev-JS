/*
Develop a dataset and report data from the DBMS.
*/

//-------------------------------------------------------
//Set up the core input and output variables

let person = {};
let people=[];

let str1 = 'Abercrombie, Neil, Male, Tan, 2/13/1943, Bishop, Timothy, Male, Yellow, 4/23/1967, Kelly, Sue, Female, Pink, 7/12/1959';
let str2 = 'Smith | Steve | D | M | Red | 3-3-1985 | Bonk | Radek | S | M | Green | 6-3-1975 | Bouillon | Francis | G | M | Blue | 6-3-1975';
let str3 = 'Kournikova Anna F F 6-3-1975 Red Hingis Martina M F 4-2-1979 Green Seles Monica H F 12-2-1973 Black';
let commaFormat = ['LastName', 'FirstName', 'Gender', 'FavoriteColor', 'DateOfBirth'];
let pipeFormat = ['LastName', 'FirstName', 'MiddleInitial', 'Gender', 'FavoriteColor', 'DateOfBirth'];
let spaceFormat = ['LastName', 'FirstName', 'MiddleInitial', 'Gender', 'DateOfBirth', 'FavoriteColor'];

//-------------------------------------------------------
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
		if (format[indexFormat]==='Gender'){
			if (arrStr[indexInput]==='M') person[format[indexFormat]]= 'Male';
			else if(arrStr[indexInput]==='F') person[format[indexFormat]]= 'Female';
			else person[format[indexFormat]]= arrStr[indexInput];
		}else person[format[indexFormat]]= arrStr[indexInput];
		
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

//-------------------------------------------------------
function sortObjData(criteria1, criteria1Order, criteria2, criteria2Order){
	// Use criteria1 to create (n) array lists (containing indexes)
	// within a sortCriteria1 array
	let sortVal1=[], resultArr=[];
	
	// create the entries
	let recordObj = {};
	for(let i=0; i<people.length; i++){
		recordObj = people[i];	//This is the record we are working on
		
		// recordObj[criteria1] is the value we are sorting
		//save values in sortVal1.
		if (sortVal1.indexOf(recordObj[criteria1])<0){
			sortVal1.push(recordObj[criteria1]);
		}
	}
	
	// sort the sortVal1 array
	bubble(sortVal1,criteria1Order);
	
	// outer loop is criteria1/sorted
	//inner loop gets the criteria2 data so we can sort it within the loop
	//Also in this inner loop we need to create resultArr 
	let tempArr=[], tempObj=[], indexCounter=0, resultIndex, firstPass = true;
	for(let i=0; i<sortVal1.length; i++){
		
		for(let j=0; j<people.length; j++){
			// identify criteria 1 data, then capture in tempArr criteria2 data.
			recordObj = people[j];
			if (recordObj[criteria1] === sortVal1[i]){
				tempArr.push(recordObj[criteria2]);
				tempObj.push(recordObj);
			}
			//sort criteria2 data
			bubble(tempArr,criteria2Order);
		}
		//using tempArr, get the sorted objects into resultArr
		for(let ii=0; ii<tempObj.length; ii++){
			if (firstPass) indexCounter=ii;
			resultIndex = tempArr.indexOf(tempObj[ii][criteria2]);
			(firstPass) ? resultArr[resultIndex]= tempObj[ii] : resultArr[resultIndex+indexCounter]= tempObj[ii];
		}
		//empty temp-variables to run thru next criteria
		indexCounter++;
		firstPass=false;
		tempArr=[];
		tempObj=[];
	}
	//-------------------------------------------------------
	//...Done...return sorted array:
	return resultArr;
}


//-----------------------------------------------------------
function reportData(criteria1, criteria1Order, criteria12, criteria12Order){
	let resultArr = sortObjData(criteria1, criteria1Order, criteria12, criteria12Order);
	console.log('resultArr',resultArr,'\n','\n');
	//output standard report once the information is sorted
	
	
	//............stuff to do here
	
}


//-----------------------------------------------------------
function bubble(arr, ascDesc){
	let temp = 0;
	for(let i=0; i<arr.length-1; i++){
		let swapped = false;
		for(let j=0; j<arr.length-1; j++){
			if (ascDesc === 'ASC'){
				if (arr[j]> arr[j+1]) {
					temp = arr[j];
					arr[j] = arr[j+1];
					arr[j+1]=temp;
					swapped = true;
				}
			}else{
				if (arr[j]< arr[j+1]) {
					temp = arr[j];
					arr[j] = arr[j+1];
					arr[j+1]=temp;
					swapped = true;
				}
			}
		}
		if (!swapped) return arr; 
	}
	return arr;
}


//-----------------------------------------------------------
//test cases:
//-----------------------------------------------------------
inputData(str1, commaFormat,'comma');
inputData(str2, pipeFormat,'pipe');
inputData(str3, spaceFormat,'space');
//tested....works great  people (array) contains objects
//						 person = object describing a person.
//-----------------------------------------------------------
reportData('Gender', 'ASC', 'LastName', 'ASC');
reportData('DateOfBirth', 'ASC', 'LastName', 'ASC');
reportData('LastName', 'DESC','NONE' , 'NONE');
'';

// Corey's Party - Listing the attendees in an object and counting people with the same first name.

              let coreysFriends = ['corey', 'corey', 'mom', 'corey','corey', 'dad', 'joe'];
              
              function countFriends(arr){
              	let resultObj = {};
              	for(let i=0; i<arr.length; i++){
              		if(i){
              			if (arr[i] in resultObj) resultObj[arr[i]] += 1;
              			else resultObj[arr[i]] = 1
              		}else resultObj[arr[i]] = 1;
              	}
              	return resultObj;
              }

// correct answer:  {corey: 4, mom: 1, dad: 1, joe: 1}

// Corey's solution follows:

function count(arr){
	let obj = {};
	debugger;
	for(let i = 0; i < arr.length; i++){
		let currentName = arr[i];
		obj[currentName] = ++obj[currentName] || 1;
	}
	console.log(obj);
}
console.log(countFriends(coreysFriends));
console.log(count(coreysFriends));
"";

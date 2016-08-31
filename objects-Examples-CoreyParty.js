// Corey's Party - Listing the attendees in an object and counting people with the same first name.
// correct answer:  {corey: 4, mom: 1, dad: 1, joe: 1}

//This is my code.....use truthy/falsey; scan through an array and build a result object.

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

//----------------------------------------
// Corey's (instructor) solution follows:
//Corey also uses truthy/falsey; scan through an array and build a result object.

// interesting bit of code:
// ----> obj[currentName] = ++obj[currentName] || 1; <----
// 

    	function count(arr){
    		let obj = {};
    		for(let i = 0; i < arr.length; i++){
    			let currentName = arr[i];
    			obj[currentName] = ++obj[currentName] || 1;     //<---- the first time through obj(currentName) is undefined
    		}                                                     //      As a result, this truthy expression increments an
    		return obj;                                           //      undefined value (getting undefined) and the system 
    	}                                                           //      takes the 1 (starting a key/value pair)
    	console.log(countFriends(coreysFriends));                   //      subsequent iterations use the ++ to increment the 
    	console.log(count(coreysFriends));                          //      value when currentName exists within the object.
    	"";


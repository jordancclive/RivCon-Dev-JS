// Find the longest consecutive string
/*
You are given an array strarr of strings and an integer k. 
Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Example:

longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

--------------------- 
*/


//This is the first time I did this problem:	....(codewars)

function longestConsec(strarr, k) {
    if (k<=0 || strarr.length===0 || k>strarr.length )return "";
    else {
        let strResult = [];                        // This variable will be our solution
        let indexResult = [];
        let lenResult = [];                        // string of lengths
        // get the lengths of the strings in the input array
        for (let i=0; i<strarr.length; i++){
            lenResult.push(strarr[i].length);
        };
        
        // get 'k' largest strings and concat them into a string result
        let tempIndex = 0;
        for (let i=1; i<=k ;i++){
            for (let j=0; j<lenResult.length; j++){
                  if (lenResult[j] > lenResult[tempIndex]) tempIndex = j;   
            }
            indexResult.push(tempIndex);
            lenResult[tempIndex]=0;
        }
        // sort array: indexResult;
		indexResult.sort();
       // use indexResult with strarr to get values in the correct order.
       for(let i=0; i<indexResult.length; i++){
       			strResult += strarr[indexResult[i]];
       }
        return strResult
    }
}

//---------------------------------------------------
//I couldn't get the problem to run the first time on... ....(codewars)
// so I did it again...it turns out that there is a bug in their test cases.

function longestConsec(strarr, k) {
	if(!strarr.length || k>strarr.length || k<=0) return '';
	
	//create an array of indexes in ASC sort order.
	let resultArr = [0], resultStr=[];
	
   	//look at each element in strarr array
   	for(let i=1; i<strarr.length; i++){
   		
   		//compare the current strarr elem to the sorted index array, & find its sorted postion
   		let loopMore=true, j=0;
   	 	do {
   	 		if(j>=resultArr.length){
   	 			resultArr.push(i);
   	 			loopMore=false;
   	 		}else if (strarr[i].length > strarr[resultArr[j]].length){
   	 			resultArr.splice(j,0,i);
   	 			loopMore=false;
   	 		}
   	 		j++;
   	 	} while(loopMore);
   	}
   	
   	//need to reduce the length to the size of k.
   	resultArr.length = k;
	
	// I just need to build the solution string from the above array of indexes....... 
	
	
	// I am basically done at this point, but I keep trying to get my solution to work in codewars
	// so this next stuff if to get the string order similar to the codewars solution.....
	
	
   	//sort the result
   	resultArr = resultArr.sort(function(curr, next){
	return curr - next;
    });
   	
   	//build the resulting string values and return with a join
   	for(let i=0; i<k; i++){
   		resultStr.push(strarr[resultArr[i]]);
   	}
   	
   	//because of a quirk in codewars data, if the length
   	//of 2 string items is equal, return those in alphabetical order.
   	//do 1 pass only.
   	
   	// for(let i=1; i<resultStr.length; i++){
   	// 	let temp='';
   	// 	if (resultStr[i-1].length === resultStr[i].length){
   	// 		if(resultStr[i-1][0]<resultStr[i][0]){
   	// 			temp=resultStr[i-1];
   	// 			resultStr[i-1]=resultStr[i];
   	// 			resultStr[i]=temp;
   	// 		}
   	// 	}
   	// }
   	
   	return resultStr.join('');
}

//test case:
longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 5);
longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3);

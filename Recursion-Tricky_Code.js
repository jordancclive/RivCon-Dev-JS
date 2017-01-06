/*
-----------------------------------------------------------------------------

		Weaving multiple arrays into one array

-----------------------------------------------------------------------------
*/

function interleave(){
 
    //coming in recursively, there will be only one argument at index: [0]
    //and it will be an array.  Need to compensate for this.

    let args;
    if (Array.isArray(arguments[0]) && arguments.length ===1){
        args = arguments[0];
    }else{
        args = Array.prototype.slice.call(arguments); 
    }  
    //args is now a usable array.
    
    let strToMix = args.length;     //shows how many args-strings exist.
    let index = 0;                  //largest index for all args
    let workingStr = '';

    //base case - Mix the 0 index together on all the possible strings
    for(let i=0; i<strToMix; i++){
          if (args[i][0]){                
              workingStr += args[i][0];
              args[i] = args[i].slice(1);
              if (index < args[i].length) index = args[i].length;
          }
    }   
    //recursive case
    if (index>0){
        workingStr += interleave(args); 
    } 
    return workingStr;   
}

/*
Wow, never considered using recursion for this. 
Great job figuring out how!
*/

/*  This (below) is the code I did in repl. 
    It has all of the console.logs in it and I want
    to keep them as a reminder of how I did this function:
*/

function interleaveVR(){
    /*
        ---------------------------------------------------------------------
        ******did this in repl ******
        ---------------------------------------------------------------------

    we need to use the arguments object.
    2 strings of equal length: Mix- add in order.
    2 strings unequal length: Mix - extra characters on the end.
    3-n number of equal length strings: Mix - add in order.
    */
    
    //coming in recursively, there will be only one argument at index: [0]
    //and it will be an array.  Need to compensate for this.
    let args;
    if (Array.isArray(arguments[0]) && arguments.length ===1){
        args = arguments[0];
    }else{
        args = Array.prototype.slice.call(arguments); 
    }  
    //args is now a usable array.
    
    let strToMix = args.length;     //shows how many args-strings exist.
    let index = 0;                  //largest index for all args
    let workingStr = '';
    
    console.log('args array: ',args);
    console.log('index at start of function: ', index, '\n'); 

    //base case - Mix the 0 index together on all the possible strings
    for(let i=0; i<strToMix; i++){
          if (args[i][0]){
            
              console.log('         args[i] in the loop, before slice: ', args[i], '\n');                
              
              workingStr += args[i][0];
              args[i] = args[i].slice(1);
              if (index < args[i].length) index = args[i].length;
              
              console.log('         index in base case loop: ', index);                  
              console.log('         args[i] after slice: ', args[i]);
              
          }
          
          console.log('\n','  workingStr after if, still in loop: ', workingStr,'\n');
    }

    console.log(' index after base case: ', index,'\n');
    console.log(' args array: ',args);
    console.log('\n','----------------------------------------');  
    console.log(' ----------recursive case coming---------');
    console.log(' ----------------------------------------','\n');
    
    
    //recursive case
    if (index>0){
        workingStr += interleave(args); 
    } 
    return workingStr;   
}


/*
-----------------------------------------------------------------------------

                Recursion with flattening 
                a multi-dimensional array

-----------------------------------------------------------------------------
*/
function search(inputFunc){
    let result;
    for(let i=0; i<this.length; i++){
      
        //recursive case
        if(Array.isArray(this[i])){
            //flatten Array (FA) (recursive function)
            //          returns flattened Array
            //call search and if returns true, 
            //          return true again.
            //or else loop some more.
            flatElement = flatten(this[i]);
            if (search.call(flatElement, inputFunc)) return true;
        //-----------------------------------
        //base case:    looking at an element
        }else{
            if (inputFunc(this[i])) return true; 
        } 
    }
    return false;
}

function flatten(arr){
	let resultArr=[];
    for(let i=0; i<arr.length; i++){
    	if(!Array.isArray(arr[i])) resultArr.push(arr[i]);
    	else resultArr = resultArr.concat(flatten(arr[i]));
    }
    return resultArr;
}

/*---------------------------------------------

		...with both forEach & reduce: 
		
-----------------------------------------------
*/
function search(func){
	var bool = false;
	this.forEach(function(val){
		if(func(val)){
			bool = true;
		} else if(Array.isArray(val) && !bool){			
			bool = search.call(val,func);			
		}
	});
	return bool;	
}



//using reduce:

function search(func) {
	return this.reduce(function(prev, cur) {
			debugger;

		if(func(cur)) {
			return true;
		} else if(Array.isArray(cur)) {

			if(!prev) {
				return search.call(cur, func);
			}
		} 
		return prev;
	}, false);
}

/*
-----------------------------------------------------------------------------

		tricky recursive function

-----------------------------------------------------------------------------
*/
function translate (str){
    //vowel   --> add 'ay'
    //consonent:
    //      regular:  move consonent to end and add 'ay'
    //      edge:  'qu' move both.
    // check for multiple words.

    let vowelSounds = ('aeiou'), foundVowel;
    let spacer = str.indexOf(' ');

    //base case:
    if (str.indexOf(' ') < 0){
            //vowel:
            if (vowelSounds.indexOf(str[0]) >= 0){
                str += 'ay';
            //one or multiple consonents 
            } else {
                //find the vowel:
                for(let i=1; i<str.length; i++){
                    if (vowelSounds.indexOf(str[i]) >= 0){
                        foundVowel = i;
                        //check for the edge case: 'qu'
                        if (str[i]==='u'){
                            if (str[i-1] === 'q') foundVowel +=1;
                        }
                        break;
                    }
                }
                        str = str.slice(foundVowel) + str.slice(0, foundVowel) + 'ay';
            }
            return str;            
    //recursive case:
    }else {
        str = translate(str.slice(0,spacer)) + ' ' + translate(str.slice(spacer+1));
    }
    return str;
}
/*
-----------------------------------------------------------------------------

                Recursion assorted examples:

-----------------------------------------------------------------------------
*/
function recSmallestInt(arr){
    //base case: 2 element array
    //return the smallest number
    if (arr.length === 2){
        return (arr[0]<arr[1]) ? arr[0] : arr[1];
    }
    //recursive case: arr>2:
    let smallest = recSmallestInt(arr.slice(1));
    return (arr[0]<smallest) ? arr[0] : smallest;
}

/*
Great job.

Actually, your base case could be even simpler: 
if the array is 1 element long, return that element. 
Try to keep the base case as simple as possible and do all computation in the recursive call.

-----------------------------
*/

//Recursive solution:
function runNumTimesRec(funcToRun, repeatNum){
    if (repeatNum>0){
        return funcToRun() + runNumTimes(funcToRun,repeatNum-1);
    }
}

//Iterative solution:
function runNumTimes(funcToRun, repeatNum){
    let result = '';
    for (let i=0; i<repeatNum; i++){
        result += funcToRun();
    }
    return result;
}

/*
Great job!
Fascinating that you used a recursive approach, I never considered doing it that way. 
The official solution uses a loop, just make sure you know how to solve this iteratively.
Note: functions that don't return anything return 'undefined' so there's no need to explicitly return that (or an empty string). 
Flip your logic around and your code looks cleaner:
function runNumTimes(funcToRun, repeatNum){
    if(repeatNum > 0) {
    	return funcToRun() + runNumTimes(funcToRun,repeatNum-1);
    } 
}

---------------------------------
*/

function factorialIterative(num){
    // equals n * (n-1) * (n-2) ... * 1;
    let resultNum = num;
    for(let i=num-1; i>1; i--){
        resultNum *= i;
    }
    return resultNum;
}

function factorial(num){
    //base case
    if (!num) return 1;
    //recursive case
    return num * factorial(num-1);
}

//-------------------------------------------------------------

function fib(n){
    //base case
    if (n<2) return 1;
    //recursive case
    return fib(n-1) + fib(n-2);
}

//-------------------------------------------------------------

function type(inputVar){
  return Object.prototype.toString.call(inputVar).slice(8, -1);
}

function stringify(valToString){
  console.log('original value: ',valToString);
    if (type(valToString)==='String'){  
        return '"' + valToString + '"';    
    }
    let result = [];
    if(type(valToString) === 'Array') {
        result = valToString.map(function(elem){
            return stringify(elem);
        });   
        return '[' + result.join(',') + ']';
    }
    if(type(valToString) === 'Object') {
        Object.keys(valToString).forEach(function(key){
          let keyValue = stringify(valToString[key]);
          result.push('"' + key + '": ' + keyValue);
        });   
        return '{' + result.join(',') + '}';
    }
        //because of type coersion, converts valToString to a string.
        return valToString + "";  
}


//--------------------------------------------------------

//Done iteratively:
function reduceRight(arr, startPt, funcInput){
    let workArr = arr.slice(0);
    let resultStr = '';
    for(let i=workArr.length-1; i>=0; i--){
        startPt = funcInput(startPt, workArr[i]); 
    }
    return startPt;
}

//Done Recursively:
function reduceRightRecursive(arr, startPt, funcInput){
    let workArr = arr.slice(0);
    //base case:
    if (workArr.length===1) return funcInput(startPt,workArr[0]);
    //recursive case:
    else return funcInput(reduceRightRecursive(workArr.slice(1), startPt, funcInput), workArr[0]);
}

//Great work on both



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
/*
-----------------------------------------------------------------------------

		Using filter to find the differences
		between 2 arrays
		
		then:
		tying it together with finding
		the Symmetric Difference between the arrays.
		

-----------------------------------------------------------------------------
*/
// iterative version
// function difference(arr1, arr2){
//     let resultArr = [];
//     if (arr1.length === 0) return [];
//     for (let i=0;i<arr1.length; i++){
//         if(arr2.indexOf(arr1[i]) <0) resultArr.push(arr1[i]);
//     }
//     return resultArr;
// }

// using filter
function difference(arr1, arr2){
    if (arr1.length === 0){
        return [];
    } 
    return arr1.filter(function(elem){
        if(arr2.indexOf(elem)<0)return elem;
    });
}

function symmetricDiff(arr1, arr2){
    if (arr1.length === 0){
        return [];
    } 
    let resultArr=[];
    return difference(arr1, arr2).concat(difference(arr2, arr1));
}
/*
-----------------------------------------------------------------------------

		A closure example.   ....passing functions		

-----------------------------------------------------------------------------
*/
// function sometimes(funcInput){
//     return funcInput; 
// }

function sometimes(funcInput){
    let count = 0;
    return function (a,b){
        count++;
        if (count > 3 && !(count%2)) return 'I do not know!';
        else return funcInput.apply(undefined, [a,b]); 
    }
}
/*
-----------------------------------------------------------------------------

	Passed an object to an array
	returned a function that:
	
		adds key value pairs to that object;
		changes passed values;
		or returns values;

-----------------------------------------------------------------------------
*/

function accessor (obj){
    return function(key, value){
        if (value) obj[key] = value; 
        return obj[key];}
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

*/
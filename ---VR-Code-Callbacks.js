/*
-----------------------------------------------------------------

            Call Backs:   .map

-----------------------------------------------------------------
*/

function callAll(obj, arrOfFunc){
    return arrOfFunc.map(function(elem){
        return elem.call(obj);
    });
}
/*
-----------------------------------------------------------------

            Call Backs:   .reduce

-----------------------------------------------------------------
*/
function reject(inputArr, funcCall){
    return inputArr.reduce(function(filtArr, elem){
        if (!funcCall(elem)){
               filtArr.push(elem);
        }
        return filtArr;
    },[]);   
}

//--------------------------

var callReduceOnThisArray = [1,2,3,4,5];

var sum = callReduceOnThisArray.reduce(function(total,elem){
      return total + elem;
    },100);

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

*/

/*
-----------------------------------------------------------------

            Call Backs:   .forEach

-----------------------------------------------------------------
*/

function filter(arr, func){
	var finalArr = [];

	arr.forEach(function(index){
		if(func(index)){
			finalArr.push(index);
		}
	});

	return finalArr;
}

/*
---------------------------------------more:
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

/*
Take a multi-dimensional array and flaaten it....then sum the elements.
*/

// screwed this up on a test......first attempt afterwards:

function flatten(arr){
	let resultArr=[];
    for(let i=0; i<arr.length; i++){
    	if(!Array.isArray(arr[i])) resultArr.push(arr[i]);
    	else resultArr = resultArr.concat(flatten(arr[i]));
    	console.log(resultArr);
    }
    return resultArr;
}

function sumArray(arr){
      return arr.reduce(function(prev, curr){     // This return is returning the callbacks result out of the function.
        return prev + curr;                       // This return is the callback function returning its result to the function
      }, 0);	
}



function multi_array_sum(arr) {
	let resultArr = flatten(arr);
    let sumIt=0;
    for(let i=0;i<resultArr.length; i++){
    	sumIt+=resultArr[i];
    }

	return sumIt;
}

multi_array_sum([1,[2,[3,4]],[5,6]]);

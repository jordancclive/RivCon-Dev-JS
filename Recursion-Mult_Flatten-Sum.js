/*
Take a multi-dimensional array and flatten it....then sum the elements.
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
      return arr.reduce(function(prev, curr){     
        return prev + curr;                       
      }, 0);	
}

function multi_array_sum(arr) {
	let resultArr = flatten(arr);
	return sumArray(resultArr);
}

multi_array_sum([1,[2,[3,4]],[5,6],[7,8,[3,4,5,[7]]]]);

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






















*/

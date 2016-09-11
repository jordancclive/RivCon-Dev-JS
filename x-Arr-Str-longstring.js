// Find the longest consecutive string



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

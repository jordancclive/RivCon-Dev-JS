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

function reject(inputArr, funcCall){
    return inputArr.reduce(function(filtArr, elem){
        if (!funcCall(elem)){filtArr.push(elem);}
        return filtArr;
    },[]);
    
}

/*
Nice work using reduce. This is actually a perfect use case for .filter
For readability, always use braces {} after if statments
*/
*/

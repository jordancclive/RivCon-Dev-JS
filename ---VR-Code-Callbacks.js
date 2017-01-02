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
-----------------------------------------------------------------


*/


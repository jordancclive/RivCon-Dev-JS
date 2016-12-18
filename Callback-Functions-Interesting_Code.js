function doubler(elem){
    return elem*2;
}

function map(arr, iteratorFunc){
    let sumArr=[];
    for (let i=0; i<arr.length; i++){
        sumArr.push(iteratorFunc(arr[i]));
    }
    return sumArr;
}

function filter(arr, iteratorFunc){
    let newArr=[];
    for(let i=0; i<arr.length; i++){
        if (iteratorFunc(arr[i])){
            newArr.push(arr[i])
        }
    }
    return newArr;
}

function contains(collection, target){
    //if an array do this one
    if(Array.isArray(collection)){
        for(let i=0; i<collection.length; i++){
            if (collection[i] === target) return true;
        }
    }else{
        let keys = Object.keys(collection);
        for(let i=0; i<keys.length; i++){
            if (collection[keys[i]] === target) return true;
        }        
    }
    return false;
}

//----------------------------------------------

function countWordsInReduce(start, collVar){
    return start + countWords(collVar);
}

function countWords(str){
    return str.split(' ').length;
}

//----------------------------------------------

function sum(arr){
    return reduce(arr,0,reduceArr);
}

function reduceArr(sum, collVar){
        return sum + collVar;
}

//----------------------------------------------

function every(collection, func){
    if (collection.length ===0) {return true;}
    return reduce(collection,true, function(result, element){
        if(element%2) {result = false};
        return result;
    });

} 

function any(collection, func){
    if (collection.length ===0) {return false;}
    return reduce(collection, false, function(result, element){
        if (element%2===0) result = true;
        return result;
    });
}

// //----------------------------------------------

function reduce(collection, reduceStart, combineFunc){
        for(let i=0; i<collection.length; i++){
            reduceStart = combineFunc(reduceStart,collection[i]);
        }
    return reduceStart;    
}

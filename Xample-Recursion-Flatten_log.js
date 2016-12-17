function deepForEach(arr, processFunc){
  if(arr.length){
    if(Array.isArray(arr[0])){
      deepForEach(arr[0],processFunc);    
    }else{
      processFunc(arr[0]);
    }
    deepForEach(arr.slice(1),processFunc);    
  }
}
deepForEach([1,2,[3,4],[5,6,[7]]], console.log);

/*
------------------------------------------------------------------------------

                                Recursion with 
                                Nested Arrays

------------------------------------------------------------------------------

Recursion and Arrays

Something to remember is that anything you can do with a loop, you can also do with recursion. 

------------------------------------------------------------------------------
*/

function forEach(arr, func) {
  if(arr.length) {
    func(arr[1]);
    forEach(arr.slice(1), func);
  }
}

forEach([1,2,3,4], console.log);
//1
//2
//3
//4 

//------------------------------------------------------------------------------

function deepForEach(nestedArr, func) {             //with a loop.
  for(var i = 0; i < nestedArr.length; i++) {
    if(Array.isArray(nestedArr[i])) {
      deepForEach(nestedArr[i], func);
    } else {
      func(nestedArr[i]);
    }
  }
}

//------------------------------------------------------------------------------

function deepForEach(arr, processFunc){             //with the loop removed.
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

/*returns:
1
2
3
4
5
6
7

------------------------------------------------------------------------------

Write a function that recursively counts and returns the number of elements in an array 
(should return the same value as the array's length property, 
but don't use that in your solution except to compute the base case).

Then write it so that it can count all the elements in a nested array (.length can't do that!). 
Do this using a loop and then using only recursion.

------------------------------------------------------------------------------

/*
Base case:  If array.length === 0, then no action
            if                = 1, then add to count can return.
            if                > 1 recursive           
*/

function countElem(arr){
  if(arr.length){return 1 + countElem(arr.slice(1))}
  return 0;
}

console.log(countElem([1,2,3,4,5,6,7])); 

//------------------------------------------------------------------------------

/*
count elements in a nested array
let arr = [1,2,[3,4],[5,6,[7]]];    
*/

function countElemNested(arr){                        //loop in this one with recursion.
  let count =0;
  for (let i=0; i<arr.length; i++){
    if(Array.isArray(arr[i])) count += countElemNested(arr[i]);
    else count++;
  }
  return count;
}

let arr = [1,2,[3,4],[5,6,[7]]];
console.log(countElemNested(arr));    //returns 7

//------------------------------------------------------------------------------

function countElemNested(arr){                        //no loop in this one with recursion.
  let count =0;                                       //    but with a count

  if (arr[0]){
    if(Array.isArray(arr[0])) {
      count += countElemNested(arr[0])
    }else {count++}
    count += countElemNested(arr.slice(1));
  }
  return count;
}


function deepCountElementsNoLoop(arr) {                //no loop, no count in this one with recursion.
  if(arr.length) {
    if(Array.isArray(arr[0])) {
      return deepCountElementsNoLoop(arr[0]) + deepCountElementsNoLoop(arr.slice(1))
    } else {
      return 1 + deepCountElementsNoLoop(arr.slice(1))
    }
  }
  else return 0;
}










/*

/*
-------------------------------------------------------------

            JavaScript Review

-------------------------------------------------------------
*/
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>

<script id="jsbin-javascript">
"use strict";
console.clear();

//-------------------------------------------------------------

//** function which return functions

const incrementByX = (x)=> {
  return (num)=> x + num;
};
const incrementBy10 = incrementByX(10);
console.log(incrementBy10(2));
console.log(incrementBy10(20));

//-------------------------------------------------------------

//** handling variable length of arguments

const printArguments = (...args)=> {
   args.forEach(arg => console.log(arg));
};
printArguments(1, 2, 3);
printArguments(1, 2, 3, 4);

//-------------------------------------------------------------

//Spreading an array

var myArray = [ 1, 2, 3, 4];
var newArray = [...myArray, 5, 6, 7];
console.log(newArray);

//-------------------------------------------------------------

//** passing multiple functions and reduce

console.log([1,2,3].reduce((sum, i)=>{
    return sum + i;
}, 0))
const processFunctions = (...fns)=> {
  return fns.reduce((memo, fn)=> {
    memo += fn(); 
    return memo;
  }, 0);
};
console.log(processFunctions(()=> 3, ()=> 4, ()=> 5));

//-------------------------------------------------------------

//** mapping

const createWordMap = (words)=> {
   return words.reduce((memo, word)=>{
     const letter = word.slice(0,1);
     memo[letter] = memo[letter] || [];
     memo[letter].push(word);
     return memo;
   }, {});
};
console.log(createWordMap(['woo', 'woot', 'fizz', 'foo', 'bar']));
const createWordCountMap = (words)=> {
   return words.reduce((memo, word)=>{
     const letter = word.slice(0,1);
     memo[letter] = typeof memo[letter] === 'undefined'? 0: memo[letter];
     memo[letter]++;
     return memo;
   }, {});
};
console.log(createWordCountMap(['woo', 'woot', 'fizz', 'foo', 'bar']));

//-------------------------------------------------------------

//* apply

const applyMe = (...args)=> {
  const fn = args.slice(0, 1)[0];
  return fn.apply(null, args.slice(1));
}
console.log(applyMe((a, b)=>{ return a + b;}, 1, 2))
console.log(applyMe((a, b, c)=>{ return a + b + c;}, 1, 2, 3))

//-------------------------------------------------------------

//** APPLY IN REVERSE

var applyMeInReverse = function applyMeInReverse() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  args.reverse();
  var fn = args.slice(0, 1)[0];
  return fn.apply(null, args.slice(1));
};
console.log(applyMeInReverse(1, 2, function (a, b) {
  return a + b;
}));
</script>


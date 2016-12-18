
//Boolean School

//Look at all the truthy/falsey values nested in the if statement. We want the truthCheck() function to evalutate to true. For any values that need to change, put a ! in front of them to flip their Boolean value

// eg !true === false  and !false === true


var truthCheck = function() {
	
	if(1 && true && !'' && !false && !0 && !-0 && !"" && !NaN && [] && "false" && !null && !undefined && {} && console.log) {
		return true;
	} else {
		return false
	}
}

console.log(truthCheck() === true);

//-----------------

//The following function does the same thing

function type(inputVar){
  return Object.prototype.toString.call(inputVar).slice(8, -1);  		//<----This function is like typeof ...
}



function type(inputVar){
  return Object.prototype.toString.call(inputVar);		//without the slice:  [object Number]
}								//		      [object String]...see below
								//The slice gets all the erroneous info out 
								//and gives you the datatype as a return value.


//variables of different types
var und = undefined,
  nll = null,
  bool = true,
  num = 123,
  str = "abc",
  fnc = function() {},
  arr = [],
  obj = {};


// The 'type' function will behave a lot like JavaScript's 
// typeof operator. See more here: 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

// You shouldn't be using recursion for the type function. 
//This is a utility function
// That you will be using in the next recursive function
// But don't use typeof in your solution!

describe('the utility function type', function() {
  it('returns the correct type of its input', function() {
    expect(type(und)).toEqual('Undefined');
    expect(type(nll)).toEqual('Null');					//<-----look at the return values.
    expect(type(bool)).toEqual('Boolean');
    expect(type(num)).toEqual('Number');
    expect(type(str)).toEqual('String');
    expect(type(fnc)).toEqual('Function');
    expect(type(arr)).toEqual('Array');
    expect(type(obj)).toEqual('Object');

	  
	  
	  
	  
	  

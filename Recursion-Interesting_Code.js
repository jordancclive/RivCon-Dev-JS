function factorialIterative(num){
    // equals n * (n-1) * (n-2) ... * 1;
    let resultNum = num;
    for(let i=num-1; i>1; i--){
        resultNum *= i;
    }
    return resultNum;
}

function factorial(num){
    //base case
    if (!num) return 1;
    //recursive case
    return num * factorial(num-1);
}

function fib(n){
    //base case
    if (n<2) return 1;
    //recursive case
    return fib(n-1) + fib(n-2);
}

function type(inputVar){
  return Object.prototype.toString.call(inputVar).slice(8, -1);
}

function stringify(valToString){
  console.log('original value: ',valToString);
    if (type(valToString)==='String'){  
        return '"' + valToString + '"';    
    }
    let result = [];
    if(type(valToString) === 'Array') {
        result = valToString.map(function(elem){
            return stringify(elem);
        });   
        return '[' + result.join(',') + ']';
    }
    if(type(valToString) === 'Object') {
        Object.keys(valToString).forEach(function(key){
          let keyValue = stringify(valToString[key]);
          result.push('"' + key + '": ' + keyValue);
        });   
        return '{' + result.join(',') + '}';
    }
        //because of type coersion, converts valToString to a string.
        return valToString + "";  
}

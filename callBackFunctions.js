// Call Back Functions

/*
  A high order language is one where all datatypes including functions has the ability 
  to be passed as inputs and outputs.
  
  We will be talking about array methods that take in functions as arguments....
  
  
An example:
*/

// This is an overseer function.  it takes in a variable and a function as inputs.
// It then returns the function invoked with the variable as its input.

    function overseer(num, operatorFunc){
        return operatorFunc(num);
    }

//-------------------------------------------

// here are 2 plain functions doing simple tasks:

    function addTwo(num){
      return num+2;
    }
    
    function multiplyByTwo(num){
      return 2*num;
    }

//-------------------------------------------

// notice we are not invoking the 2 functions sent as arguments, just the name of the function.

    console.log(overseer(10,addTwo));           //returns: 12
    console.log(overseer(10, multiplyByTwo));   //returns 20

//-------------------------------------------


// What follows are built-in array methods that expect custom callback function as an argument.


.forEach

.filter

.map

.reduce

.sort

//-------------------------------------------



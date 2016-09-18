// Call Back Functions - take in functions as a parameter.

/*
  A high order language is one where all datatypes including functions has the ability 
  to be passed as inputs and outputs.
  
  We will be talking about 5 array methods that take in functions as arguments....
  
  
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


// What follows are 5 built-in array methods that expect custom callback function as an argument.
/*

.forEach

.filter

.map

.reduce

.sort

//-------------------------------------------

A .forEach is a fancy wrapper for a for loop that is dealing with an array. It is a very generalized for loop with no return value.
Its return value is undefined.

      - When a .forEach executes,it automatically performs some action on each element.
      
      - It is a method that takes in an anonymous function (the callback function) as its parameter.
      
      - The arguments of this functions are:  value (an element of the array) & index of the array.
      
      An example:
*/
//-----------------------------------------------

      var num = 1;
      var arr = [1,2,3];
      
      arr.forEach(function(val, ind){         // As you can see this satement is wrtten showing .forEach as a method
                                              // passing an anonymous function and the 2 parameters to it.
        num *= val;                           // The function is doing one thing automatically to every element
                                              // of the array.  ...that is: num *= val;
      });
      
      console.log(num);     //result: 6
                                              // Once the function is finished the value num has now changed.
                                              
//-----------------------------------------------                                           
      






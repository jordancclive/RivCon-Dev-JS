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

.forEach(function(value, index));

    A .forEach is a fancy wrapper for a for loop that is dealing with an array. 
    It is a very generalized for loop with no return value.
    Its return value is undefined.
    
          - When a .forEach executes,it automatically performs some action on each element.
          
          - It is a method that takes in an anonymous function (the callback function) as its parameter.
          
          - The arguments of this functions are:  value (an element of the array) & index of the array.
          
          examples:
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
          let arr = [1,2,3,4];
          function sumArray(arr){                 // we are putting the callback function inside an array.
          	let sum = 0;
          	arr.forEach(function(elem){
          		sum +=elem;
          	});
          	return sum;
          }
          console.log(sumArray(arr));
          
    //----------------------------------------------- 
    
          let arr = [1,2,3,4];
          function sumArray(arr){         
              let sum = 0;
              arr.forEach(doSomething);   //We created our own callback function
              return;
          }
                    
          function doSomething(elem){
           	console.log(elem);            
          }
          sumArray(arr);
          
          /* result: 
              1
              2
              3
              4
          */

//----------------------------------------------- 
/*
.filter

    Imagine .filter looping over an array.  This method also takes a callback function that is fed 2 arguments
    1) the current value (the element) and 2) the index of that value.
    
    This method returns a new array as the return value.
          
          examples:
    */
    //-----------------------------------------------
    
          let ages = [18, 20, 21, 25, 15];
          function canDrink(arr){
              //This return refers to the condition at which an element is
              //put into the new array.
              return arr.filter(function(elem, index){
              		return elem>=21;		//This return refers to the condition at which an element is put into the new array.
              });
          }
          console.log('canDrink: ', canDrink(ages));
          console.log('original array: : ', ages);
          
          /* result:
                    canDrink:  [ 21, 25 ]
                    original array: :  [ 18, 20, 21, 25, 15 ]
          */

//-----------------------------------------------











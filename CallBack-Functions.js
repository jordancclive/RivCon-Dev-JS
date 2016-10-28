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

.forEach(function(value, index));   ......There is no return value.

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
.filter(function(value, index));   ......There is a return value.  Remember to send the result back with a return.

    Imagine .filter looping over an array.  This method also takes a callback function that is fed 2 arguments
    1) the current value (the element) and 2) the index of that value.
    
    This method returns a new array as the return value.
    
    ***   In this method you great a condition that if met the record gets put in the new array   ***
          
          examples:
    */
    //-----------------------------------------------
    
          let ages = [18, 20, 21, 25, 15];
          function canDrink(arr){
              //This return refers to the condition at which an element is
              //put into the new array.
              return arr.filter(function(elem, index){
              		return elem>=21;		//This return refers to the condition at which an element is put into the new array.
              });                     // The condition is run for every element in the array and returns all elements meeting
          }                           // the condition.
          
          console.log('canDrink: ', canDrink(ages));
          console.log('original array: : ', ages);
          
          /* result:
                    canDrink:  [ 21, 25 ]
                    original array: :  [ 18, 20, 21, 25, 15 ]
          */
          
          
          // shortNamesOnly
          //Take an array of objects (elements = people), return the ones whose names are <= 4 in length.

          let people = [
          	{name: 'doug', age: 25}, {name: 'vin', age: 60}, {name: 'Sandra', age: 40}, {name: 'diana', age: 30}];
          	
          function shortNamesOnly(arr){
          	return arr.filter(function(elem,index){
          		return elem.name.length<=4;
          	})
          	
          }
          
          console.log(shortNamesOnly(people));
          

//----------------------------------------------- 
/*
.map(function(value, index));   ......There is a return value and it is a new array.
                                      Remember to send the result back with a return.

    Imagine .map looping over an array.  This method also takes a callback function that is fed 2 arguments
    1) the current value (the element) and 2) the index of that value.
    
    This method also returns a new array as the return value.
    
        ***   In this method you do stuff to an element and all the records get put in the new array   ***
          
          examples:
    */
    //-----------------------------------------------

    // Let's do something with .forEach:
    
    let arr = [1,2,3,4];
    let newArr = [];
    arr.forEach(function(elem,index){
      newArr.push(elem+1);                  //remember .forEach does not return anything.
    })                                      //...so you are pushing the values into the newArray.
    
    console.log(newArr)   // result:  [2,3,4,5]
    
    
    // let's do the same thing with map:
    
    let arr = [1,2,3,4];
    let newArr = arr.map(function(elem,index){
      return elem+1;                        // Here .map does have a return value. ...and where you establish
    })                                      // the element actions.

    console.log('newArr: ',newArr);
    console.log('arr: ',arr);
    /*
    result:
	newArr:  [ 2, 3, 4, 5 ]		The return value within .map passes a new array result.
	arr:  [ 1, 2, 3, 4 ]		The original array is not changed.
    */

//----------------------------------------------- 
/*
.reduce(function(value, index));   
    
    The idea of a reduce is to collapse the array down into something else.
    
    Takes 2 parameters: 1- a callback, and 2- a starting value which you build on as you loop to each element.
    
    The callback is fed 4 arguments:
          - The previous value (starting value when index = 0)<-----what we are building
          - The current value (which is arr[index])
          - The current index
          - the original array that reduce is being called on.
          
    .reduce returns a collapsed array.
   
          
          examples:
    */
    //-----------------------------------------------

    let arr = [1,2,3,4];

    function sumArray(arr){
      return arr.reduce(function(prev, curr){     // This return is returning the callbacks result out of the function.
        return prev + curr;                       // This return is the callback function returning its result to the function
      }, 0);		// could have written this line:  })  since 0 is the default value.
    }

    sumArray(arr);		//returns: 10

    //-----------------------------------------------

    // coreys party re-visited:

    let arr = ['corey', 'mom', 'dad', 'doug', 'doug', 'doug'];

    function countRepeats(arr){
      return arr.reduce(function(prev, curr){
        prev[curr] = prev[curr]+1 || 1;
        return prev;
      }, {})	// we are starting with an empty object as our starting value. (which is 'prev').
    }

    countRepeats(arr);		//returns: { corey: 1, mom: 1, dad: 1, doug: 3 }

//----------------------------------------------- 
/*
.sort()

    Takes a callback that receives 2 arguments.
    
    Sort is looping thru the array.  On each round of the loop, the first callback argument is the index we are at.
    and the 2nd is the next index.  If the callback returns a postive number, then the elements are flipped (reversed).
    
    ***this method changes the original array.***
*/

    let people = [{name: 'corey', age: 24}, {name: 'mom', age: 70}, {name: 'dad', age: 77}, {name: 'doug', age: 30}];

    people.sort(function(curr, next){
      return curr.age - next.age;
    });

    //result:  [ { name: 'corey', age: 24 },{ name: 'doug', age: 30 },{ name: 'mom', age: 70 },{ name: 'dad', age: 77 } ]


//---------------------------------

// ES6 new updates:

          .forEach()
          
          let arr = [1,2,3,4];
          function sumArray(arr){               
          	let sum = 0;
          	arr.forEach((elem) => sum +=elem);
          	return sum;
          }
          console.log(sumArray(arr));          

          //------------

          .filter()

          let ages = [18, 20, 21, 25, 15];
          function canDrink(arr){
              return arr.filter((elem, index) => elem>=21);	
          }
          console.log('canDrink: ', canDrink(ages));		//result: 	canDrink:  [ 21, 25 ]
          console.log('original array: : ', ages);		//result:	original array: :  [ 18, 20, 21, 25, 15 ]

          //-------------
        
          .map()
            
          let arr = [1,2,3,4];
          //This is the usual way to do a .map call back:
          let mappedArr = arr.map(function(elem){
          return elem+1;
          });
          console.log(mappedArr);		//result: [ 2, 3, 4, 5 ]
	
          //This is the arrow function way:
          let mappedArr = arr.map(elem => elem+1);
          console.log(mappedArr);		//result: [ 2, 3, 4, 5 ]

          //------------

          .reduce()

          let reduceArr = arr.reduce((prev,next)=>prev+next);
          console.log(reduceArr);   //result: 10

          //If you have to go more than one line:
          reduceArr = arr.reduce((prev,next) => {
                return prev+next});
          console.log(reduceArr);   //result: 10
        
          //------------           

          .sort()

          let people = [{name: 'corey', age: 24}, {name: 'mom', age: 70}, {name: 'dad', age: 77}, {name: 'doug', age: 30}];

          people.sort((curr, next) => (curr.age - next.age));
          console.log(people);

          //result: 	[ { name: 'corey', age: 24 }, { name: 'doug', age: 30 }, { name: 'mom', age: 70 }, { name: 'dad', age: 77 } ]         

          //---------
        
//------------------------------------



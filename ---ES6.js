/* ES6 review
              ECMAScript 6 = 6th release of the ECMAScript language specification.
              
              'use strict' = you can utilize ES6 in node and in some browsers.

------------------------------

The Ternary Operator:  

	ES6 Specific:  (functions expressions)
*/	
		const capitalize = ( input )=> input.toUpperCase();
/*						 ^
		Will automatically return -------|	
		
		However, on multiple lines you need the return:
*/		
				/*This declares the function
				   ||	  ||
				   \/	  \/		*/
		const capitalize = ( input )=> {
			input = input + '!!!';
			return input.toUpperCase();
		}
/*	

	(not ES6 specific)
*/
              var someVariable = [condition] ? [if true] : [if false]
              
              //some examples:
              
              var simpleQuestion = 2>1 ? 'yes' : 'no';
              console.log(simpleQuestion)             //result: yes
              
              //-----------------------------
              
              var dayOfMonth = 21;
              var takesOutTrash = isEven(dayOfMonth) ? 'Vin' : 'Karen';
              console.log(takesOutTrash);

              function isEven(dayOfMonth){ return dayOfMonth % 2 ===0;}

              //-----------------------------

/*------------------------------

---->     var, let and const

          var = the variable is accessable within the entire function
          
          
          let = block scope designator.  let exists within the curly braces.  It is a throw away variable.
          
          
          const = is also a block scoping designator.  It designates that you are setting a constant variable.  
                  Once it is assigned, it cannot be changed.  It is a read only reference to a value. 
                  (it is & can only be a pointer only a pointer)
  
*/  
                  const x=5;
                  x++;              //This will fire an error and the code will not run 
                                    //because you are trying to change this constant 

                  const y = [1,2,3,4,5];
                  y.push(6);        //result: [1,2,3,4,5,6]
                                    // y is a pointer to an object.  Objects can always be changed.

                  y = [8,9,10];     //This will fire an error, because you are trying to change the pointer
                                    //to point ot another object which is not a legal operation.  
                                    //The pointer y is a constant. 

                  let y=5;
                  const x=y;        //<---This assigns 5 to x
                  y=6;              //<---y is independent of x, so y can still be changed
                  console.log(x);   //result: 5

                  //-----------------------------

/*------------------------------
                  
New String Methods:
*/
        str.includes(str2);
                     
        str.repeat(count);

        str.startsWith(str2);

        str.endsWith(str2);

        // some examples:

 		
        let str  = 'VinceRios';
        let str2 = 'HelloWorld';
        let str3 = 'ince';
        let str4 = 'Vin';
        let str5 = 'os';
        let count = 2;

        console.log('str3 in str?:',str.includes(str3));	
        //Validates whether str contains str3
        //result: true

        console.log('str3 in str2?:',str2.includes(str3));	
        //Validates whether str contains str3
        //result: false

        //---------

        console.log('str repeat 2*:',str.repeat(count));	
        //result: VinceRiosVinceRios

        //---------								

        console.log('str starts with str4?:',str.startsWith(str4));	
        //Validates whether str starts with str4
        //result: true

        console.log('str2 starts with str4?:',str2.startsWith(str4));	
        //Validates whether str2 starts with str4
        //result: false

        //---------

        console.log('str ends with str5?:',str.endsWith(str5));	
        //Validates whether str ends with str5
        //result: true

        console.log('str2 ends with str5:',str2.endsWith(str5));	
        //Validates whether str2 ends with str5
        //result: false

        //---------

/*------------------------------

New Number Methods:
*/
        Number.isInteger(n);    //This is a class (static) method.

                                // If you wanted to write this function yourself:
                                function isInt(n){
                                  //first make sure the argument is a Number
                                  if (typeof n !== 'number'){
                                    console.log('Enter a number');
                                    return false;
                                  }
                                  // the calculation
                                  //let temp = Math.floor(n);
                                  //return (n === temp) ? true : false;
                                  
                                  // You could have also done this:
                                  return (n % 1) ? false : true;
                                  
                                }
                                isInt(25);		// returns: true
                                isInt(25.5);		// returns: false

                                //---------

/*------------------------------

Arrow Functions:

      We can replace anonymous functions with an arrow symbol (AKA: arrow function).  '=>'
        
        - Parameters go on the left of the arrow.
        - The workings of the function go on the right of the arrow.
        
        - If the workings stay on one line then no return is needed.
        - If you use brackets, then you must use a return.
        
        //---------
        
/*-------------------------------

example:
*/
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
           
      





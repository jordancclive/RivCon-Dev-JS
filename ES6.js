/* ES6 review
              ECMAScript 6 = 6th release of the ECMAScript language specification.
              
              'use strict' = you can utilize ES6 in node and in some browsers.

------------------------------

The Ternary Operator:  (not ES6 specific)
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


*/

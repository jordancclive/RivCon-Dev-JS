/* Pass by Value vs. pass by Reference

            Primitive Variables such as numbers & strings are only passed by value.
            2 variables cannot point to the same physical number or string in a computer's memory.
            
            Complex datatypes such as arrays & objects may be passed by reference.
            Thus, multiple variables may point to, and be used to modify the same
            physical array or object.
            
            Redefining a variable or slicing it (in the case of arrays) breaks the spell
            of pass by reference.
            
            PBR vs PBV is not so much a technique, but a principle that explains how JavaScript
            behaves.  Keep in ind, and allow it to help you be more aware & deliberate in your coding.


What gets logged:
*/
      var arr=[1,2,3];
      var newArr = arr;
      newArr.push(4);
      
      console.log(newArr);    //result: [1,2,3,4] 
      console.log(arr);       //result: [1,2,3,4] 
      
/*                            All complex datatypes (not a primitive: booleans, undefined, null, number, string) 
                              get passed by their value.  In other words, the array itself ---> [1,2,3] is in memory.
                              The name:  arr & newArr are pointers to the array in memory.

                              When we say newArr = arr the term "newArr" is assigned a pointer to the same value in memory.
                              ....This is known as pass by reference.
      

What gets logged:
*/
      var arr=[1,2,3];
      var newArr = [1,2,3];
      newArr.push(4);
      
      console.log(newArr);    //result: [1,2,3,4] 
      console.log(arr);       //result: [1,2,3] 
                              //These are now 2 different arrays in memory and 2 pointers to 2 different things in memory.
  
//---------------------------------          
      
      let arr = [[1,2,3], 3, 4, 5];
      let newArr = arr[0];
      newArr.push(9);
      console.log(newArr);    // result: [ 1, 2, 3, 9 ]
      console.log(arr);       // result: [ [ 1, 2, 3, 9 ], 3, 4, 5 ]
                              //This is very interesting.......the element itself is a complex datatype, hence this result.
           
           
      
      var arr = [1,2,3);
      var newArr = arr.slice();
      newArr.push(4);
      console.log(newArr);    //result: [1,2,3,4] 
      console.log(arr);       //result: [1,2,3] 
                              // .slice() makes a copy (meaning: copies the elements one by one into a new physicl location.
                              //These are now 2 different arrays in memory and 2 pointers to 2 different things in memory.      
      
      console.log(arr === newArr)   //....returns false.  ..because the complex datatype equals is 
                                    //really looking at the elements positions in memory being the same.  
                                    //Which in this case is not true since you .sliced the original array
                                    //to a new location.



      var array = [1,2,3];
      function pushFour(arr){
            arr.push(4);
            return arr;
      }
      var newArr = pushFour(array);

      console.log(newArr);    //result: [1,2,3,4] 
      console.log(arr);       //result: [1,2,3,4]
                              //The result does not change even though you made the change inside of a function call.
                              // you are passing the reference of the array, not the array itself.



      var object = {};
      function addKeyVal(obj){
            obj.key = 'val';
            return obj;
      }
      var newObj = addKeyValue(object);

      console.log(newObj);    //result: {key: 'val'}
      console.log(object);    //result: {key: 'val'}  ...same concept for this complex datatype.



      var number = 3;
      function addOne(num){
            num++;
            return num;
      }
      var newNum = addOne(number);

      console.log(newNum);    //result: 4 ...These are primitive datatypes so you are passing the value and
      console.log(number);    //result: 3       not passing a reference pointer.  (you are making a copy every time)



      var string = 'Hello';
      function addWorld(str){
            str += ' World';
            return str;
      }
      var new Str = addWorld(string);

      console.log(newStr);    // result: 'Hello World'
      console.log(string);    //result: 'Hello'            ...again this is a primitive datatype.



      var arr = [1,2,3];
      function doStuff(arr){
            var newArr = arr;                   //newArr & arr are pointers to the same place [1,2,3]
            arr.push(4);                        //arr=[1,2,3,4] the original arr, the function arr and newArr
            arr = [4,5,6];                      //function arr=[4,5,6]  so it is reset to point to a new location 
            arr.push(7);                        //function arr = [4,5,6,7]
            return {arr:arr, newArr: newArr}
      }
      var obj = doStuff(arr);

      console.log(obj.newArr);      //newArr = [1,2,3,4]
      console.log(obj.arr);         //function arr = [4,5,6,7]
      console.log(arr);             //arr = [1,2,3,4] in the outer scope.





























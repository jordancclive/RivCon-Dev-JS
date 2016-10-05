/* Pass by Value vs. pass by Reference


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



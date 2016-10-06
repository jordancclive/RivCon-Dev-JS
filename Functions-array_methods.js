// functions-array_methods.js

              /*---------------
                Arrays are a list of values ( a DATASET) between square brakets with elements separated by commas.
                
                          var arrayName = [];  defines an array.
                          
                Note: Strings will not let you do the following:
                
                          var myArray = [];
                          myArray[0] = 50;
                          console.log(myArray[0]);    //result: 50

              */---------------

Array.isArray(array);         // this is a static method.

arr.concat(array);            

              // concatenate two instances of an array. returns the new array, not changing the originals.

              function patternMaker(n, item) {
                let resultArr = [];
                resultArr.push(item);
                if(n!==1) resultArr = resultArr.concat(patternMaker(n-1, item));
                return resultArr;
              }
              patternMaker(3, ['cat', 'dog']);

              //---------------

              function myRecursiveFlatten(arrIn){
                let newArr = [];
                for (let i=0; i<arrIn.length; i++){
                  if(!Array.isArray(arrIn[i])) newArr.push(arrIn[i]);
                  else newArr = newArr.concat(myRecursiveFlatten(arrIn[i]));
                }						                            // remember .concat() doesn't change the original arrays
                                                        //  You need to assign the result to a new variable.
                return newArr;
              }	

              //---------------

arr.indexOf(value);           

arr.join(delimiter);
arr.split(delimiter);

              //---------------
              
              let word = 'DOG';
              let arr = word.split('');   // result: [ 'D', 'O', 'G' ]
                        //empty quotes or empty brackets means split every character into an array element.
              let newWord = arr.join(''); //result = 'DOG'
              
              arr = word.split();         // result: [ 'DOG' ]
              
              arr = word.split('O');      // result: [ 'D', 'G' ]
              
              arr = word.split('');       // result: [ 'D', 'O', 'G' ]
              newWord = arr.join('/');    //result = D/O/G
              
              //---------------
              
              let date = new Date();
              console.log(date);                              
              // result:  Mon Sep 05 2016 15:26:52 GMT-0400 (EDT)     
              // need:    YYYYMMDDHHMMSS
              
              let dateArr = date.toString().split(' ');       
              // result: [ 'Mon', 'Sep', '05', '2016', '15:28:54', 'GMT-0400', '(EDT)' ]
              
              let newHMS = dateArr[4].split(':').join('');   
              // split that element and then rejoin it in-place, 
              // note: this did not work: dateArr[4].split(':').join('');  needed to assign it to a variable
              
              console.log(newHMS);                           
              // returns: 153513
              
              let monthLookup = {
              Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', 
              Jun: '06', Jul: '07', Aug: '08', Sep: '09', Oct: '10',
              Nov: '11', Dec: '12'}
              
              console.log(monthLookup[dateArr[1]]);           // returns: 09
              
              // have all the elements to create the YYYYMMDDHHMMSS
              
              let resultArr = [];
              resultArr[0] = dateArr[3];
              resultArr[1] = monthLookup[dateArr[1]];
              resultArr[2] = dateArr[2];
              resultArr[3] = newHMS;
              let result = resultArr.join('');
              
              console.log(resultArr);   // returns: [ '2016', '10', '05', '224733' ]

              //---------------
              
arr.pop();

              //---------------
              /* remove values to the end of an array.
              The pop method also 'returns' this value.
              */

              var myArray = [1,2,3,4,5,6];
              var num = myArray.pop();

              console.log(myArray);     //result: [1,2,3,4,5]
              console.log(num);         //result: 6

              //---------------
              var toDoList = [];
              
              function rememberTo(task){
                toDoList.push(task);
              }
              
              function whatIsNext(){
                return toDoList.shift();
              }

              function urgentToRemember (task){
                toDoList.unshift(task);
              }
              
              
              rememberTo('haircut');
              rememberTo('CT taxes');
              rememberTo('study');
              console.log(toDoList);                      //result: [ 'haircut', 'CT taxes', 'study' ]
              
              var nextToDo = whatIsNext();
              console.log('Next item to do:',nextToDo);   //result: Next item to do: haircut
              
              urgentToRemember('update resume');
              console.log(toDoList);                      //result: [ 'update resume', 'CT taxes', 'study' ]
              
              console.log(toDoList.pop());                //result: study
              console.log(toDoList);                      //result: [ 'update resume', 'CT taxes' ]
              
              //---------------

arr.push(value);

              //---------------
              /* Adds values to the end of an array.
              The push method also 'returns' a new length of an array
              */

              let arrX = [1,2,3,4];
              console.log('arrX.length:',arrX.length,'at start');   //returns: arrX.length: 4 at start
              let len = arrX.push(5);
              console.log('new arrX.length:', arrX.length);         //returns: new arrX.length: 5
              console.log('new values:', arrX);                     //returns: new values: [ 1, 2, 3, 4, 5 ]

              //---------------

              var toDoList = [];
              
              function rememberTo(task){
                toDoList.push(task);
              }
              
              function whatIsNext(){
                return toDoList.shift();
              }

              function urgentToRemember (task){
                toDoList.unshift(task);
              }
              
              
              rememberTo('haircut');
              rememberTo('CT taxes');
              rememberTo('study');
              console.log(toDoList);                      //result: [ 'haircut', 'CT taxes', 'study' ]
              
              var nextToDo = whatIsNext();
              console.log('Next item to do:',nextToDo);   //result: Next item to do: haircut
              
              urgentToRemember('update resume');
              console.log(toDoList);                      //result: [ 'update resume', 'CT taxes', 'study' ]
              
              console.log(toDoList.pop());                //result: study
              console.log(toDoList);                      //result: [ 'update resume', 'CT taxes' ]
              
              //---------------

arr.reverse(from, to);

arr.shift();
            
              //---------------
              // remove things to the start of an array 

              //---------------
              var toDoList = [];
              
              function rememberTo(task){
                toDoList.push(task);
              }
              
              function whatIsNext(){
                return toDoList.shift();
              }

              function urgentToRemember (task){
                toDoList.unshift(task);
              }
              
              
              rememberTo('haircut');
              rememberTo('CT taxes');
              rememberTo('study');
              console.log(toDoList);                      //result: [ 'haircut', 'CT taxes', 'study' ]
              
              var nextToDo = whatIsNext();
              console.log('Next item to do:',nextToDo);   //result: Next item to do: haircut
              
              urgentToRemember('update resume');
              console.log(toDoList);                      //result: [ 'update resume', 'CT taxes', 'study' ]
              
              console.log(toDoList.pop());                //result: study
              console.log(toDoList);                      //result: [ 'update resume', 'CT taxes' ]
              
              //---------------

arr.slice(from, to);

              //---------------
              /*   The following works for both strings and arrays

                  syntax: str.slice(beginSlice[, endSlice])
                  
                  beginSlice: The zero-based index at which to begin extraction.
                  endSlice:   Optional. The zero-based index at which to end extraction. 
                              (does not include this stated index value)               
                  
                  syntax: str.substr(start [, length])
                  
                  start:    Location at which to begin extracting characters.
                  length:   Optional. The number of characters to extract.
*/

              console.log([0,1,2,3,4].slice(2,4));              //result: [ 2, 3 ]
              console.log([0,1,2,3,4].slice(2));                //result: [ 2, 3, 4 ]
              console.log([0,1,2,3,4].slice());                 //result: [ 0, 1, 2, 3, 4 ]
              console.log('VincentJosephRios'.slice(2,4));      //result: nc
              console.log('VincentJosephRios'.slice(2));        //result: ncentJosephRios
              console.log('VincentJosephRios'.slice());         //result: VincentJosephRios

              console.log([0,1,2,3,4].substr(2,4));             //result: ERROR - does not work with arrays
              console.log([0,1,2,3,4].substr(2));               //result: ERROR - does not work with arrays
              console.log([0,1,2,3,4].substr());                //result: ERROR - does not work with arrays
              console.log('VincentJosephRios'.substr(2,4));     //result: ncen
              console.log('VincentJosephRios'.substr(2));       //result: ncentJosephRios
              console.log('VincentJosephRios'.substr());        //result: VincentJosephRios

              //---------------

arr.sort();

arr.splice(from, num);

str.substr(start [, length])        (NOT AN ARRAY METHOD.  This is only for strings)

              //---------------
              /*   The following works for both strings and arrays

                  syntax: str.slice(beginSlice[, endSlice])
                  
                  beginSlice: The zero-based index at which to begin extraction.
                  endSlice:   Optional. The zero-based index at which to end extraction. 
                              (does not include this stated index value)               
                  
                  syntax: str.substr(start [, length])
                  
                  start:    Location at which to begin extracting characters.
                  length:   Optional. The number of characters to extract.
              */

              console.log([0,1,2,3,4].slice(2,4));              //result: [ 2, 3 ]
              console.log([0,1,2,3,4].slice(2));                //result: [ 2, 3, 4 ]
              console.log([0,1,2,3,4].slice());                 //result: [ 0, 1, 2, 3, 4 ]
              console.log('VincentJosephRios'.slice(2,4));      //result: nc
              console.log('VincentJosephRios'.slice(2));        //result: ncentJosephRios
              console.log('VincentJosephRios'.slice());         //result: VincentJosephRios

              console.log([0,1,2,3,4].substr(2,4));             //result: ERROR - does not work with arrays
              console.log([0,1,2,3,4].substr(2));               //result: ERROR - does not work with arrays
              console.log([0,1,2,3,4].substr());                //result: ERROR - does not work with arrays
              console.log('VincentJosephRios'.substr(2,4));     //result: ncen
              console.log('VincentJosephRios'.substr(2));       //result: ncentJosephRios
              console.log('VincentJosephRios'.substr());        //result: VincentJosephRios

              //---------------

arr.unshift();
            
              //---------------
              // add things to the start of an array 

              //---------------
              var toDoList = [];
              
              function rememberTo(task){
                toDoList.push(task);
              }
              
              function whatIsNext(){
                return toDoList.shift();
              }

              function urgentToRemember (task){
                toDoList.unshift(task);
              }
              
              
              rememberTo('haircut');
              rememberTo('CT taxes');
              rememberTo('study');
              console.log(toDoList);                      //result: [ 'haircut', 'CT taxes', 'study' ]
              
              var nextToDo = whatIsNext();
              console.log('Next item to do:',nextToDo);   //result: Next item to do: haircut
              
              urgentToRemember('update resume');
              console.log(toDoList);                      //result: [ 'update resume', 'CT taxes', 'study' ]
              
              console.log(toDoList.pop());                //result: study
              console.log(toDoList);                      //result: [ 'update resume', 'CT taxes' ]
              
              //---------------

/* 
--------------------------------------------------------------------------------------------------

                                    Array_Methods
                                    
--------------------------------------------------------------------------------------------------

Refer to MDN documentation:   (Many more methods are here)  ...including more callbacks
                          
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype

--------------------------------------------------------------------------------------------------

If you use:   Object.getOwnPropertyNames()   <----In the parenthesis put "Array.prototype"

You will get all of the built in Properties for arrays.

--------------------------------------------------------------------------------------------------

Arrays are a list of values ( a DATASET) between square brakets with elements separated by commas.

          var arrayName = [];  defines an array.

Note: Strings will not let you do the following:

          var myArray = [];
          myArray[0] = 50;
          console.log(myArray[0]);    //result: 50


--------------------------------------------------------------------------------------------------


                                      CallBacks


--------------------------------------------------------------------------------------------------

                                        Filter

--------------------------------------------------------------------------------------------------

The filter() method creates a new array with all elements that pass the test implemented by the provided function.

        without filter                                          with filter
*/
        var arr = [                                             var arr = [
            {"name":"apple", "count": 2},                           {"name":"apple", "count": 2},
            {"name":"orange", "count": 5},                          {"name":"orange", "count": 5},
            {"name":"pear", "count": 3},                            {"name":"pear", "count": 3},
            {"name":"orange", "count": 16},                         {"name":"orange", "count": 16},
        ];                                                      ];
                                                                
        var newArr = [];                                        var newArr = arr.filter(function(item){
                                                                    return item.name === "orange";
        for(var i= 0, l = arr.length; i< l; i++){               });
            if(arr[i].name === "orange" ){                      
            newArr.push(arr[i]);                                console.log("Filter results:",newArr);
          }                                                     
        }                                                       //result:
                                                                //  Filter results: [{ "name": "orange", "count": 5 },
        console.log("Filter results:",newArr);                  //                  { "name": "orange", "count": 16 }]

/*--------------------------------------------------------------------------------------------------

                                        ForEach

--------------------------------------------------------------------------------------------------

The forEach() method executes a provided function once per array element.

        without forEach                                          with forEach
*/
        var arr = [1,2,3,4,5,6,7,8];                             var arr = [1,2,3,4,5,6,7,8];
                                                                 
        /* Uses the usual "for" loop to iterate*/                arr.forEach(function(item,index){
        for(var i= 0, l = arr.length; i< l; i++){                console.log(item);
          console.log(arr[i]);                                   
        }                                                        
        //result:    1    2    3    4   5   6   7   8  (on individual lines)

/*--------------------------------------------------------------------------------------------------

                                        map

--------------------------------------------------------------------------------------------------

The map() method creates a new array by calling a provided function on every element in this array.

  without map                                                      with map
*/
  var oldArr = [{first_name:"Colin",last_name:"Toh"},              var oldArr = [{first_name:"Colin",last_name:"Toh"},
          {first_name:"Addy",last_name:"Osmani"},                          {first_name:"Addy",last_name:"Osmani"},
          {first_name:"Yehuda",last_name:"Katz"}];                         {first_name:"Yehuda",last_name:"Katz"}];
                                                                   
  function getNewArr(){                                            function getNewArr(){
      var newArr = [];                                                 return oldArr.map(function(item,index){
                                                                           item.full_name = [item.first_name,item.last_name].join(" ");
      for(var i= 0, l = oldArr.length; i< l; i++){                         return item
          var item = oldArr[i];                                        });
          item.full_name =                                         }
              [item.first_name,item.last_name].join(" ");
          newArr[i] = item;                                        console.log(getNewArr());
      }

      return newArr;
  }

  /* result:
              [{ "first_name": "Colin", "last_name": "Toh", "full_name": "Colin Toh" },
               { "first_name": "Addy", "last_name": "Osmani", "full_name": "Addy Osmani" },
               { "first_name": "Yehuda", "last_name": "Katz", "full_name": "Yehuda Katz" }]

/*--------------------------------------------------------------------------------------------------

                                        reduce

--------------------------------------------------------------------------------------------------

The reduce() method applies a function against an accumulator and 
each value of the array (from left-to-right) has to reduce it to a single value.

          without reduce                                           with reduce
*/
          var arr = ["apple","orange","apple","orange","pear","orange"];

          function getWordCnt(){                                   function getWordCnt(){
              var obj = {};                                            return arr.reduce(function(prev,next){
                                                                           prev[next] = (prev[next] + 1) || 1;
              for(var i= 0, l = arr.length; i< l; i++){                    return prev;
                  var item = arr[i];                                   },{});
                  obj[item] = (obj[item] +1 ) || 1;                }
                          }                                        
              return obj;                                          console.log(getWordCnt()); 
          }
          console.log(getWordCnt());                     //result: { "apple": 2, "orange": 3, "pear": 1 }

/*--------------------------------------------------------------------------------------------------


                                        De method izing

                                         Demethodizing

--------------------------------------------------------------------------------------------------

These aforementioned methods are only available to Array but they do come in handy for 
Nodelist, jQuery Objects and even String.
*/
      <p>“ Java is to JavaScript what Car is to Carpet. ” - Chris Heilmann</p>

      <p>“ If debugging is the process of removing software bugs,
        then programming must be the process of putting them in. ” - Edsger Dijkstra</p> 

      // Demethodizing the Array method, forEach(),  into a generic "each"
                                
      var each = Function.prototype.call.bind([].forEach);    //<-- binding 'this' to the [].forEach
                                                              //  now 'each' = the forEach function
                                                              //  which means you can use it on other 'objects'
      var nodeList = document.querySelectorAll("p");

      each(nodeList,bold);

      function bold(node){
         node.style.fontWeight ="bold";
      }                          
  
      /*result:  (This will be bold)
      
            “ Java is to JavaScript what Car is to Carpet. ” - Chris Heilmann

            “ If debugging is the process of removing software bugs, 
              then programming must be the process of putting them in. ” - Edsger Dijkstra
                                
--------------------------------------------------------------------------------------------------


                                     Other Methods


--------------------------------------------------------------------------------------------------*/

Array.isArray(array);         // this is a static method.

//--------------------------------------------------------------------------------------------------

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

//--------------------------------------------------------------------------------------------------

arr.entries()

            let arr = [1,2,3,[4,5],6];

            let vin = arr.entries();

            console.log(vin.next().value);
            console.log(vin.next().value);
            console.log(vin.next().value);
            console.log(vin.next().value);
            console.log(vin.next().value);

            /*result:
            [ 0, 1 ]
            [ 1, 2 ]
            [ 2, 3 ]
            [ 3, [ 4, 5 ] ]
            [ 4, 6 ]
            */

//--------------------------------------------------------------------------------------------------

arr.indexOf(value);  

            var arr = ['apple','orange','pear'];

            console.log("found:", arr.indexOf("orange") != -1);

//--------------------------------------------------------------------------------------------------

arr.join(delimiter);    arr.split(delimiter);
              
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

//--------------------------------------------------------------------------------------------------
              
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

arr.reverse();

              //---------------
              // Inverts the order of an array

              var resultRange = [5,4,3];
              resultRange.reverse();        //result: [3,4,5]
              

              //---------------

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

array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

              //---------------
              /*
              
              start
              Index at which to start changing the array (with origin 0). 
              
              If greater than the length of the array, actual starting index 
              will be set to the length of the array. 
              
              If negative, will begin that many elements from the end of the array.
              
              
              deleteCount
              An integer indicating the number of old array elements to remove. 
              
              If deleteCount is 0, no elements are removed. In this case, 
              you should specify at least one new element. 
              If deleteCount is greater than the number of elements left in the array starting at start, 
              then all of the elements through the end of the array will be deleted.
              
              If deleteCount is omitted, deleteCount will be equal to (arr.length - start).
              
              
              item1, item2, ...
              The elements to add to the array, beginning at the start index. 
              If you don't specify any elements, splice() will only remove elements from the array.
              
              
              Return value

              An array containing the deleted elements. 
              If only one element is removed, an array of one element is returned. 
              If no elements are removed, an empty array is returned.
              */
              
              //Examples:

                    var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

                    // removes 0 elements from index 2, and inserts 'drum'
                    var removed = myFish.splice(2, 0, 'drum');
                    // myFish is ['angel', 'clown', 'drum', 'mandarin', 'surgeon']
                    // removed is [], no elements removed

                    // myFish is ['angel', 'clown', 'drum', 'mandarin', 'surgeon'] 
                    // removes 1 element from index 3
                    removed = myFish.splice(3, 1);
                    // myFish is ['angel', 'clown', 'drum', 'surgeon']
                    // removed is ['mandarin']

                    // myFish is ['angel', 'clown', 'drum', 'surgeon'] 
                    // removes 1 element from index 2, and inserts 'trumpet'
                    removed = myFish.splice(2, 1, 'trumpet');
                    // myFish is ['angel', 'clown', 'trumpet', 'surgeon']
                    // removed is ['drum']

                    // myFish is ['angel', 'clown', 'trumpet', 'surgeon'] 
                    // removes 2 elements from index 0, and inserts 'parrot', 'anemone' and 'blue'
                    removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');
                    // myFish is ['parrot', 'anemone', 'blue', 'trumpet', 'surgeon']
                    // removed is ['angel', 'clown']

                    // myFish is ['parrot', 'anemone', 'blue', 'trumpet', 'surgeon'] 
                    // removes 2 elements from index 2
                    removed = myFish.splice(myFish.length -3, 2);
                    // myFish is ['parrot', 'anemone', 'surgeon']
                    // removed is ['blue', 'trumpet']

                    const myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'surgeon'];
                    // removes 3 elements starting at index 2
                    const removed = myFish.splice(2);
                    // myFish is ['parrot', 'anemone']
                    // removed is ['blue', 'trumpet', 'surgeon']

              //---------------

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

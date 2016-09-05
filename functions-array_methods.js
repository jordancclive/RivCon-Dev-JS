// functions-array_methods.js

Array.isArray(array);         // this is a static method.

arr.concat(array);            // concatenate two instances of an array. returns the new array, not changing the originals

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
              
              console.log(result);
              
arr.pop();

arr.push(value);

arr.reverse(from, to);

arr.slice(from, to);

arr.sort();

arr.splice(from, num);

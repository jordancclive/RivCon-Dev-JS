/* Create a function that For every positive integer N, 
there exists a unique sequence starting with 1 and ending with N and such that every number 
in the sequence is either the double of the preceding number or the double plus 1.

Write a function that returns this sequence given a number N. 
Try generating the elements of the resulting list in ascending order, 
i.e., without resorting to a list reversal or prependig the elements to a list.

/*
Possible results:

		climb(10)  result: [1, 2, 5, 10]
		climb(13)  result: [1, 3, 6, 13]		
		
*/

//------------------------------------------
//This is my solution:

          function climb(n){
            // ...
            let resultArray = [];
            for(let i=n; i>0; i--){
            	if(i%2) {
            		resultArray.unshift(i);
            		i--;
            	}else resultArray.unshift(i);
            	i = (i/2)+1;
            }
          
            return resultArray;
          }
          
          climb(13);
          
//------------------------------------------
//Other solutions from codewars:




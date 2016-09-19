/*A 6-sided dice is rolled a number of times and the results are plotted as a character-based histogram.

Example:

6|##### 5
5|
4|# 1
3|########## 10
2|### 3
1|####### 7
Task

You will be passed all the dice roll results, and your task is to write the code to return a string 
representing a histogram, so that when it is printed it has the same format as the example.

Notes

There are no trailing spaces on the lines
All lines (including the last) end with a newline \n
A count is displayed beside each bar except where the count is 0
The number of rolls may vary but there are never more than 100
*/

// my results:

	function histogram(results) {
		resultStr = '';
		results.reverse();
		results.forEach(function(elem, index){
			resultStr += (6 - index) + '|';
			for (let i = 0; i< elem; i++){
				resultStr += '#';
			}
			if (elem) resultStr += ' ' + elem + '\n';
			else resultStr += '\n';
		});
	  return resultStr;
	}
	
	console.log(histogram([7,3,10,1,0,5]));


// other codewars results:

	// very cool:

	function histogram(results) {
	  var histogram = '';
	  
	  for (var i=5; i>=0; --i)
	    histogram += (i+1) + '|' + '#'.repeat(results[i]) + (results[i] > 0 ? ' ' + results[i] : '') + "\n";
	  
	  return histogram;
	}

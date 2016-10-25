// 4) Time Between

// If you've heard of the Big Bang, and you believe it happened, you know it was a fairly stupendous event. As such, a common way to measure time in our universe is in TSBB (time since Big Bang). TSBB notation looks like this: hours:minutes, where hours is the number of hours since the BB and minutes is the number of minutes. Here are some major events in the history of our universe in TSBB notaion:

// synthesis of Unicorns: 0:4 (0 hours and 4 minutes after the BB)
// multicellular life: 3:14 (3 hours and 14 minutes after the BB)
// development of beauty: 21:0 (21 hours and 0 minutes after the BB)

// Write a function called timeBetween that takes 2 times in TSBB notation as parameters in string form, and returns the amount of time between them in TSBB notation. The arguments will not be fed into the function in any particular order. 

// EXAMPLES
// timeBetween('0:14', '9:1');  ==> '8:47'
// timeBetween('130:16', '8:0');  ==> '122:16'


// CODE HERE

/*
split number into an array removing the ':'  			yes
convert the number to minutes.							yes
take larget number and subtract the lowest number.
get the number back into hours and minutes
put the colon back
return it.
*/

function timeBetween(str1, str2){
	let diffHr = 0, difMin = 0, difference='';
	let arr1 = str1.split(':');
	let arr2 = str2.split(':');
	
	//convert to a number
	for(let i=0; i<arr1.length; i++){
		arr1[i] = Number(arr1[i]);
		arr2[i] = Number(arr2[i]);
	}
	
	//convert to minutes
	let min1 = 0, min2 = 0, diffTemp=0;
	for(let i=0; i<arr1.length; i++){
		min1 += (i===0) ? arr1[i]*60 : arr1[i];
		min2 += (i===0) ? arr2[i]*60 : arr2[i];		
	}
		
	//get the difference	
	diffTemp = (min2>min1) ? min2 - min1 : min1 - min2;
	
	//convert it back to TSBB
	diffHr = Math.floor(diffTemp/60);
	difMin = diffTemp%60;
	difference = diffHr.toString() + ':' + difMin.toString();
	
	
	
	return difference;
}


// TESTS
console.log(timeBetween('0:14', '9:1') === '8:47');
console.log(timeBetween('130:16', '8:0') === '122:16');
console.log(timeBetween('0:59', '0:59') === '0:0');

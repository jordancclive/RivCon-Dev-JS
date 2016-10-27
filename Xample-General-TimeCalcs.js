/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

Some examples:

    Test.assertEquals(humanReadable(0), '00:00:00', 'humanReadable(0)');
    Test.assertEquals(humanReadable(5), '00:00:05', 'humanReadable(5)');
    Test.assertEquals(humanReadable(60), '00:01:00', 'humanReadable(60)');
    Test.assertEquals(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
    Test.assertEquals(humanReadable(359999), '99:59:59', 'humanReadable(359999)');
*/

//======================================

// My solution:

function humanReadable(totalSec){
	let resultArr= [];
	let timeHr = Math.floor(totalSec/3600), timeMin = Math.floor(((Math.floor(totalSec/60)) - timeHr*60));
	let timeSec= totalSec- (timeHr*3600 + timeMin*60);
	
	//put the variables in the array. Make them 2 digits....
	resultArr.push(timeHr.toString(),timeMin.toString(), timeSec.toString());
	
	for(let i=0; i<resultArr.length; i++){
		if (resultArr[i].length === 1) resultArr[i] = '0' + resultArr[i];
	}

	return resultArr.join(':');
}


//tests:
console.log(humanReadable(0));				//result: 	'00:00:00'
console.log(humanReadable(5));				//result:	'00:00:05'
console.log(humanReadable(60));				//result: 	'00:01:00'
console.log(humanReadable(86399));			//result: 	'23:59:59'
console.log(humanReadable(359999));			//result: 	'99:59:59'


//==========================================

//solutions that I would not have thought of:

function humanReadable(seconds) {
  var pad = function(x) { return (x < 10) ? "0"+x : x; }
  return pad(parseInt(seconds / (60*60))) + ":" +
         pad(parseInt(seconds / 60 % 60)) + ":" +
         pad(seconds % 60)
}

//==========================================

function humanReadable(seconds) {
var hours = parseInt( seconds / 3600 ) ;
var minutes = parseInt( seconds / 60 ) % 60;
var seconds = seconds % 60;

var pad = function(val){
  return val < 10 ?"0"+val:val;
}

return pad(hours) + ":" +pad(minutes) + ":" + pad(seconds);
}

//==============================================

function humanReadable(seconds) {
  return [seconds / 3600, seconds % 3600 / 60, seconds % 60].map(function(v) {
    v = Math.floor(v).toString();
    return v.length == 1 ? '0' + v : v;
  }).join(':');
}

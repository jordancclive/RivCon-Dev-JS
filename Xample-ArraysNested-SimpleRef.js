//Complete the function so that it takes a multi-dimensional array and returns 
// an object with nested properties

var sampleArr = [
	["animals", ["dogs", "cats", "pigs"]],
	["sopranos", ["Tony", "Carmella", "AJ", "Meadow"]],
	["guitars", ["Stratocaster", "Telecaster", "Gibson Flying-V"]]
];


function objectifier(arr) {
	resultObj = {};
	for(let i=0; i<arr.length; i++){
		resultObj[arr[i][0]] = arr[i][1];
	}
	return resultObj;
}

//Tests
/* Line below should log
   {
   	"animals" : ["dogs", "cats", "pigs"],
   	"sopranos" : ["Tony", "Carmella", "AJ", "Meadow"],
   	"guitars" : ["Stratocaster", "Telecaster", "Gibson Flying-V"]
   }
*/


console.log(objectifier(sampleArr));

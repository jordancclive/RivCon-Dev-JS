
//Boolean School

//Look at all the truthy/falsey values nested in the if statement. We want the truthCheck() function to evalutate to true. For any values that need to change, put a ! in front of them to flip their Boolean value

// eg !true === false  and !false === true


var truthCheck = function() {
	
	if(1 && true && !'' && !false && !0 && !-0 && !"" && !NaN && [] && "false" && !null && !undefined && {} && console.log) {
		return true;
	} else {
		return false
	}
}

console.log(truthCheck() === true);

/*
-----------------------------------------------------------------------------

	Passed an object to an array
	returned a function that:
	
		adds key value pairs to that object;
		changes passed values;
		or returns values;

-----------------------------------------------------------------------------
*/

function accessor (obj){
    return function(key, value){
        if (value) obj[key] = value; 
        return obj[key];}
}


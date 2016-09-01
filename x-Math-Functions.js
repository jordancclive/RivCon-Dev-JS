/* ROUND TOWN
	
	We will look at 3 Math functions in some depth: 
		Math.floor(x) 
		Math.ceil(x) 
		Math.round(x)               */
		
		
		 //Math.floor() returns the largest integer less than or equal to a given number.
		 //ex: 
		 		Math.floor(13.45); //==> 13
	
		//Math.ceil() returns the largest integer greater than or equal to a given number.
		//ex: 
		 		Math.ceil(13.45) //==> 14
		 		
		//Math.round() rounds to the nearest integer
		//ex: 
		 		Math.round(13.45) //==> 13
		 		Math.round(-214.55) //==> -215
	
	
	//Create a function sumMultiplyAndRound that takes 3 numbers. The function should sum the first two numbers 
	//passed in, round them down to the nearest integer. The rounded sum should then be multiplied by the third 
	//argument, rounded up and returned.
	//ex:
	
		//sumMultiplyAndRound(2, 3.5, 6.2) //==> 31

    		function sumMultiplyAndRound(x,y,z) {
    			var result = Math.ceil(Math.floor(x+y)*z);
    			return result;
    		}
    		sumMultiplyAndRound(2, 3.5, 6.2);

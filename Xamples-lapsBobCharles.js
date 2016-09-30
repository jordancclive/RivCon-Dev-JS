/*  The function should return an array:
				The first number is the number of laps that Bob has to run
				The second number is the number of laps that Charles has to run
	
	Examples
				nbrOfLaps(5, 3); // returns [3, 5]
				nbrOfLaps(4, 6); // returns [3, 2]
				
	The function takes two arguments:

				The length of Bob's lap (larger than 0)
				The length of Charles' lap (larger than 0)
Steps:

	1. determine which runner length is the shorter one.
	2. add that length to the total & check if the total is still shorter than the others' 
	   or equal to the others.
			
			- if equal done.
			- If still shorter, repeat.
			- if larger, switch and repeat.

*/

//------------------------------------my result:
var nbrOfLaps = function (x, y) {
	let distanceX=x, distanceY=y, lapX=1, lapY=1, limiter = 25;
	do{
		if (x===y) return [1,1];
		else if(distanceX<distanceY){
			lapX +=1;
			distanceX+=x;
		}else{
			lapY +=1;
			distanceY+=y;
		}
	}while (distanceX !== distanceY);
	return [lapX, lapY];
};

//------------------------------------other results:



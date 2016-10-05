/*
	Power Up!
	
	Create a function powerUp() that takes an integer as input. It should return a new number, created by summing each digit raised by a consecutive power
	
	ex)
		powerUp(761) --> 7^1 + 6^2 + 1^3 === 44
		powerUp(100) --> 1^1 + 0^2 + 0^3 === 1
*/

//My solution:

                function powerUp(num) {
                  let workArr = num.toString().split(""), power = 1, result=0;
                  for(let i=0; i<workArr.length; i++){
                    tempResult=1;
                    for(let j=1; j<=power; j++){
                      tempResult *=workArr[i];
                    }
                    result += tempResult;
                    power+=1;
                  }
                  return result;
                }
                powerUp(100);
                
                
// Instructor solution:


                function powerUp(num) {
                  var result = 0;
                  num = num.toString();                   // worked on the string (no conversion to an array)

                  for (var i = 0; i < num.length; i++) {
                    result += Math.pow(num[i],(i+1));     // used the math function instead of a loop.
                  }

                  return result;
                }

                console.log('44', powerUp(761));
                console.log('1', powerUp(100));

// simple check to see if a Palindrome exists in a string.

//my solution in class:

      anyPalindrome('racerace')
      function anyPalindrome(str){
      	let palTrue = false, count = 0;
      	if (str.length>2){
      		let workArr = str.split('').sort();
      		for(let i=0; i<workArr.length-1; i++){
      			if (workArr[i] === workArr[i+1]) i+=1;
      			else count += 1;
      		}
      		if (count<2) return true;
      	}
      	return palTrue;
      }

//----------------------

//my solution after class was over:

      function palindrome(str){
            resultObj={};
            for(let i=0;i<str.length; i++){
                  resultObj[str[i]] = resultObj[str[i]]+1 || 1;
            }
            let keys = Object.keys(resultObj), counter = 0;
            for (let i=0; i<keys.length; i++){
                  if (resultObj[keys[i]] !== 2){
                        counter+=1;
                  }
            }
            return (counter>1) ? false : true
      }

      palindrome('obbi'); 			//return: false.
      palindrome('racecar'); 			//return: true.
      palindrome('obb'); 				//return: true.


//-------------------------

// also with a for in loop to make it evven easier:

      function palindrome(str){
            resultObj={};
            for(let i=0;i<str.length; i++){
                  resultObj[str[i]] = resultObj[str[i]]+1 || 1;
            }
            let counter = 0;
            for (let k in resultObj){
                  if (resultObj[k] % 2) counter+=1;
            }
            return (counter>1) ? false : true
      }

//------------------------

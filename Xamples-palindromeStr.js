// simple check to see if a Palindrome exists in a string.


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


// simple check to see if a Palindrome exists in a number.


    anyPalindrome('10152'); //result: add 49.....10201
//	anyPalindrome('1052');	//result: add 59.....1111
      function anyPalindrome(num){
      	let palTrue = false, count = 0, numAdd=0, factor = 1;
      	let workArr = num.split('');
      	//get the numbers back into the array.
      	for(let i=0; i<workArr.length; i++){
      		workArr[i] = Number(workArr[i]);
      	}
      	
		//At this point, the workArr has the numbers back into it.
		/* steps:
					1. loop through array.
					2. make a note if the array is an even or odd length.
					if odd, then make addition adjustments simply
					if even, then add 1 to comparison number for carrying a digit.
		*/		
		let counter = Math.floor(workArr.length/2);
		let revCounter = workArr.length-1, adjust = 0;
		for(let i=0; i<=counter; i++){
  			if (workArr[i] !== workArr[revCounter]) {
  				if ((workArr[i]+adjust)>workArr[revCounter]){
  					numAdd = ((workArr[i]+adjust) - workArr[revCounter])*factor;
  					adjust = 0;
  				}else{
  					let temp = workArr[i] *10;
  					numAdd = (temp - workArr[revCounter])*factor;
  					adjust = 1;
  				}
  			}
  			revCounter-=1;
  			factor*=10;
  		}
      }

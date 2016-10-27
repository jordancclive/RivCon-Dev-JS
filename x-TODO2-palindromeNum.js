// simple check to see if a Palindrome exists in a number.


//    anyPalindrome('10152'); //result: add 49.....10201
	anyPalindrome('1052');	//result: add 59.....1111
      function anyPalindrome(num){
      	let numAdd=0, factor = 1, workArr = num.split('');
      	//get the numbers back into the array.
      	for(let i=0; i<workArr.length; i++){
      		workArr[i] = Number(workArr[i]);
      	}
      	console.log('----------');
      	console.log('intial variables:');
      	console.log('workArr:', workArr);
      	console.log('numAdd:', numAdd);
      	console.log('factor:', factor);
      	
		//At this point, the workArr has the numbers back into it.
		/* steps:
					1. loop through array.
					2. make a note if the array is an even or odd length.
					if odd, then make addition adjustments simply
					if even, then add 1 to comparison number for carrying a digit.
		*/		
		let counter = Math.floor(workArr.length/2)-1;
		let revCounter = workArr.length-1, adjust = 0, temp = 0;
      	console.log('counter:', counter);
      	console.log('revCounter:', revCounter);
      	console.log('adjust:', adjust);
      	console.log('----------','\n');
		for(let i=0; i<=counter; i++){
			console.log('i:', i);
			console.log('workArr[i]:', workArr[i]);
			console.log('workArr[revCounter]:', workArr[revCounter]);
			console.log('adjust:', adjust);
  			if (workArr[i] !== workArr[revCounter]) {
  				if (workArr[i]>(workArr[revCounter]-adjust)){
  					numAdd = ((workArr[i]+adjust) - workArr[revCounter])*factor;
  					adjust = 0;
  				}else{
  					if (i) temp = 10 + adjust;
  					else temp = (workArr[i]*10)+1;
  					console.log('temp:', temp);
  					numAdd += (temp - workArr[revCounter])*factor;
  					adjust = 1;
  				}
  			}
  			revCounter-=1;
  			factor*=10;
	      	console.log('numAdd:', numAdd);
	      	console.log('adjust:', adjust);
	      	console.log('factor:', factor);
	      	console.log('revCounter:', revCounter);  
      		console.log('----------','\n');	      	
  		}
  		console.log('The original number:', num);
  		console.log('We need to add:', numAdd,'to the original number');
  		let result = ((Number(num)) + numAdd).toString();
  		console.log('The palandrome is:', result);
      }
      '';

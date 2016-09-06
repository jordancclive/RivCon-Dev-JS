/*
	Advanced Counting
	
	We're going to rewrite our countdown function, but this time let's support negative numbers. If you pass the function a positive number, it counts down to 1. If you pass the function a negative number, it should count up to -1. You can assume the function will never be passed 0.
	 
	Please complete this problem in 2 ways.
	1. With a while loop
	2. With a for loop
	
	    count(4)
	    // 1
	    // 2
	    // 3
	    // 4
	    
	    count(-4)
	    // -4
	    // -3
	    // -2
	    // -1
	
*/

    function count(n) {
      console.log('countdown:');
      if (n>=1){
      	for(let i=n; i>0; i--){
      		console.log(i);
      	}
      }else{
      	let j=n;
      	while (j<0){
      		console.log(j);
      		j+=1
      	}
      }
    }
    count(7);
    count(-7);

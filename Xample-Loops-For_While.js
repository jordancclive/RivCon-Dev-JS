
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

// did this code after class was over:

// with a while loop

		function count(n) {
		  	let isNeg = (n<0) ? true : false;
		  	n = (isNeg) ? n*(-1) : n;
		  	do{
		  		console.log((isNeg) ? n*(-1) : n);
		  		n--;
		  	}while (n>0);
		  	console.log('Done');
		  	return;
		}

//with a for loop

			function count(n) {
			  	let isNeg = (n<0) ? true : false;
			  	n = (isNeg) ? n*(-1) : n;
			  	for(let i=n; i>0; i--){
			  		console.log((isNeg) ? n*(-1) : n);
			  		n--;
			  	};
			  	console.log('Done');
			  	return;
			}


			count(-10)

/* Process....

1. check to see if negative number.  ....neg = true? or false?
2. if negative make it a positive number.

do.......
	console.log number (*-1?)
	sub 1 from the number
	if zero, done or repeat.
*/

        

//------------------------------

// did this code while in class:

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

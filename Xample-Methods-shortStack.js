/*
	SHORT STACK
  
                  Nice routine that shows a few methods that are interesting.....

                        .toString()
                        .split()
                        Number()
                        .join()

	
	create a function shorten() that takes a number and an array of single-digit integers. shorten() should return the input number, with every digit from the array removed
	
	ex)
		shorten(1023, [1,2]) -->
		shorten(1245267194821, [2,3,4]) --> 15671981
*/

function shorten(num, arr) {
	let tempArr = num.toString().split(''), resultArr=[];
	for(let i=0; i<tempArr.length; i++){
		tempArr[i] = Number(tempArr[i]);
		if (arr.indexOf(tempArr[i])<0) resultArr.push(tempArr[i]);
	}
	return Number(resultArr.join(''));
}

shorten(1245267194821, [2,3,4]);

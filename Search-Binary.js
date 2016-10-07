// binary search

function binarySearch(sortedArr, elem){
		let lowIndex=0;
		let midIndex = Math.round(sortedArr.length/2);
		let highIndex=(sortedArr.length)-1;
		console.log('lowIndex:', lowIndex, 'midIndex', midIndex,'highIndex:',highIndex);
		let keepGoing = true, limiter=25;
		do {
			console.log('element:', elem);
			console.log('array#:',sortedArr[midIndex]);
			console.log('\n');
			if(elem === sortedArr[midIndex])return true;
			else if(elem>sortedArr[midIndex]) {
				lowIndex= midIndex;
				midIndex = Math.round((highIndex-midIndex)/2)+midIndex;
			}else {
				highIndex= midIndex;
				midIndex = Math.floor((midIndex-lowIndex)/2)+lowIndex;	
			}
			console.log('lowIndex:', lowIndex, 'midIndex', midIndex,'highIndex:',highIndex);
			if (lowIndex===highIndex)keepGoing=false;
			}while (keepGoing);
		return false;
}
binarySearch(sortedArr, 0)

//Develop a Pascal triangle..............................(my answer if the first one)

//This function gets the starting index for a Pascal triangle level being worked on.
function getIndex (level){
	if (level === 1) return 0;
	let result = 0;
	for (let i=level-1; i>0; i--){
		result += i;
	}
	return result;
}

// This function builds the triangle.....................
/*
		1. n = the number of rows, so will need a for loop to handle each row. 	....(1)
		2. The first row is always '1', so push a '1' into the array. 			....(2)
		3. After row 1, the rest needs to be calcualted.						....(3)
		4. Need to keep track of the previous row's elements for calculating
				the new row.													....(4)
		5. Now I am working on a specific row.									....(5)
		
		6. the first element?  	then it is 1									....(6)
		7. The last element?	that is also h-1								....(7)
		8. elements in between will be 99 for Now								....(8)
		
					
*/
function pascalsTriangle(n) {
	let newArr=[];
	
	//Build each row.		....			....	....	....		....(1)
	for(let h=1; h<=n; h++){
		
		// The first row is always 1		....	....	....		....(2)
		if (h === 1){
			newArr.push(1);
		
		// The rest of the rows are created here	....	....		....(3)	
		}else{
			
			// Track elements from the last row.
			// startIndex = the begining, newIndex-1 is the last		....(4)
			let newIndex=0, startIndex=0;
			startIndex = getIndex(h-1);
			newIndex = getIndex(h);

			//Work on the row			....		....	....		....(5)
			for(let j= 1; j<=h; j++){
				if (j===1){
					newArr.push(1);
					startIndex+=1;
				}else if (startIndex===newIndex) newArr.push(1);
				else{
					newArr.push(newArr[startIndex]+newArr[startIndex-1]);
					startIndex+=1;
				}
			}
		}		

	}
	return newArr;
}


//------------------------------------------------
//Other cool answers:

				function pascalsTriangle(n) {
				  var pascal = [];
				  var idx = 0;

				  for ( var i = 0; i < n; i++ ) {
				    idx = pascal.length - i;
				    for ( var j = 0; j < i+1; j++ ) {
				      if ( j === 0 || j === i ) {
					pascal.push(1);
				      } else {
					pascal.push( pascal[ idx+j ] + pascal[ idx+j-1 ] );
				      }
				    }
				  }

				  return pascal;
				}


//----------------------------------------------------





// Populate result list with the look and say numbers


//my result:

    function lookAndSay(data,len){
    	let resultArr = [], workIt = data;
    	
    	//This for loop controls how many times we will
    	//iterate this input.  Each time we iterate, we will write an element
    	//into the result array.  (this element will be an array)
    	
    	for(let i=1; i<=len; i++){
    		let thisResult = [], counter=0, theChar = '', workStr = '';
    		
    		//Work on the input string from data.
    		for(let j=0; j<workIt.length; j++){
    			if(j === 0){
    				//set the counter & track the element
    				theChar = workIt[j];
    				counter=1;
    			}else{
    				// See if the element changes.
    				if (workIt[j] !== theChar){
    					//add this calculation & keep processing
    					workStr += counter.toString() + theChar;
    					counter =1;
    					theChar = workIt[j];
    				}else counter+=1;
    			}
    		}
    		//This above block ends the current string analysis
    		
    		workStr += counter.toString() + theChar;
    		thisResult.push(workStr);
    		resultArr.push(thisResult);
    		workIt = workStr;
    		
    	}
    	//This above block ends that last iteration.
    	return resultArr;
    }
    
     lookAndSay('1',5);
     
     
// code wars results:

        

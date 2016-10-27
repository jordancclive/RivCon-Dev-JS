function longest(s1, s2) {
  // your code
  let sAll = s1+s2;
  sAll.toLowerCase;
  //first lets sort the string.
   arrTemp = sAll.split('').sort(), resultArr=[];
   //remove dups
   for(let i=0; i<arrTemp.length; i++){
   		if(i===0) resultArr.push(arrTemp[0]);
   		else {
   			if(arrTemp[i] !== arrTemp[i-1]) resultArr.push(arrTemp[i]);
   		}
   }
   return resultArr.join('');
}

longest('vin', 'happyday')    //=> 'adhinpvy'

// .split(), .sort(), .push(), .join()

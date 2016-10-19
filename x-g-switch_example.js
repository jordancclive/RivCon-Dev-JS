function likes(names) {
  // TODO
  if (!names.length) return 'no one likes this';
  let resultStr = '', counter=0;
  
  /*
  Process:
      When the the first person (index 0) is read:
         - add the name.                          (I)(Done)
         - if the only person, add ' likes this' after name.   (A)(Done)
         - if 2 people are in the array add 'and ' after name. (B)(Done)
         - if 3 or more people: ', ' after name.  (C)(Done)
         
      When the second person is read (index 1):
         - add the name.                          (J)(Done)
         - are there only 2? , add: ' like this' after name. (D)(Done)
         - or else add ' and '                    (E)(Done)
      
      When the 3rd person is read (index 2):
          - add the name.                          (K)(Done)
         - if there are only 3 people, then add: ' like this' after name.  (F)(Done)
         - if there are more than 3 do not add the name at all henceforth. (G)(Done)
      
      Throughout for ea record read add 1 to the counter. (L)(Done)
         
      When the last record is read, add:  ' (counter) others like this'    (H)
   */
  
  //Iteration Example:
  
    for(let i=0; i<names.length; i++){
        if (i>1) counter +=1;  
        // For the 1st & second person read, include their name.
        if ((i < 3 && names.length <=3) || (i <2 && names.length >3)) resultStr += names[i];                                                // (I, J, K)(G)(Done)
        if (i === 0 && names.length ===1) resultStr += ' likes this';                                        // (A)(Done)
        else if ((i === 1 && names.length ===2) || (i===2 && names.length ===3)) resultStr += ' like this';   // (D)(F)(Done)
        else if ((i === 0 && names.length ===2) || (i ===1 && names.length >2)) resultStr += ' and ';         // (B)(E)(Done)
        else if (i === 0 && names.length >2) resultStr += ', ';                                              // (C)(Done)
        else if (i === names.length-1) resultStr += counter + ' others like this';                               // (H)(Done)                                                                                           // (L)(Done)
    }
    return resultStr;
  }
 //---------------------------------------------------------- 
  
  //  This is by far the best way to write this routine.
  
  function likes2(names) {
  names = names || [];
  switch(names.length){
    case 0: return 'no one likes this';
    case 1: return names[0] + ' likes this';
    case 2: return names[0] + ' and ' + names[1] + ' like this';
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
}
//----------------------------------------------------------
  
console.log('\n\n\n','Iteration example follows: ', '\n')
    console.log(likes([]));										//	'no one likes this');
    console.log(likes(['Peter']));								// 'Peter likes this');
    console.log(likes(['Jacob', 'Alex']));						// 'Jacob and Alex like this');
    console.log(likes(['Max', 'John', 'Mark']));				// 'Max, John and Mark like this');
    console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));		// 'Alex, Jacob and 2 others like this');
     console.log(likes(['Alex', 'Jacob', 'Mark', 'Max', 'Vinny']));		// 'Alex, Jacob and 2 others like this');

console.log('\n\n\n','Switch example follows: ', '\n')
    console.log(likes2([]));										//	'no one likes this');
    console.log(likes2(['Peter']));								// 'Peter likes this');
    console.log(likes2(['Jacob', 'Alex']));						// 'Jacob and Alex like this');
    console.log(likes2(['Max', 'John', 'Mark']));				// 'Max, John and Mark like this');
    console.log(likes2(['Alex', 'Jacob', 'Mark', 'Max']));		// 'Alex, Jacob and 2 others like this');
     console.log(likes2(['Alex', 'Jacob', 'Mark', 'Max', 'Vinny']));		// 'Alex, Jacob and 2 others like this');

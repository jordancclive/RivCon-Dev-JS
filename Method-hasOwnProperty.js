// hasOwnProperty.js

// This method tells you if a certain property exists exactly in that object  ---> not in the prototype object.

    let obj = {
        name: 'Vinny',
        age: 50
    };
    
    Object.prototype.someThing = 500;
    console.log('we can see obj.someThing: ',obj.someThing);  
    
    for(var k in obj){
    	console.log(k);		//we can still see it.					(***B***)
    }
    
    //but if we use hasOwnProperty, we can see if it is really there or on the prototype
    
    for(var k in obj){
    	if (obj.hasOwnProperty(k)) console.log(k);		//we can't  still see it.  (***A***)
    	//if (k in obj) console.log(k);				//we would still see it.   (***B***)
    }
    
 /*  
    results:
	
	name
	age
	someThing		//This result did not use .hasOwnProperty		(***B***)
*/


// shown another way:

		console.log('someThing' in obj)  		// returns true
		console.log(obj.hasOwnProperty('someThing'))	// returns false
/*	
	name
	age				//This result was using .hasOwnProperty
					so you are seeing only properties on the immediate object   (***A***)
*/
    

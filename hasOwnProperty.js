// hasOwnProperty.js

// This method tells you if a certain property exists exactly in that object  ---> not in the prototype object.

    let obj = {
        name: 'Vinny',
        age: 50
    };
    
    Object.prototype.someThing = 500;
    
    console.log('All objects have access to the prototype, so we can see obj.someThing: ',obj.someThing);  
    
    for(var k in obj){
    	console.log(k);		//we can still see it.								   (***B***)
    }
    
    //but if we use hasOwnProperty, we can see if it is really there or on the prototype
    
    for(var k in obj){
    	if (obj.hasOwnProperty(k)) console.log(k);		//we can't  still see it.  (***A***)
    }
    
 /*  
    results:
	
	name
	age
	someThing		//This result did not use .hasOwnProperty					(***B***)
	
	name
	age				//This result was using .hasOwnProperty
					so you are seeing only properties on the immediate object   (***A***)
*/
    

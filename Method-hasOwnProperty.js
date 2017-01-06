/*
------------------------------------------------------------------------

			    Method
			.hasOwnProperty()

------------------------------------------------------------------------
*/
function Rectangle(color, height, width){
        this.color = color;
        this.height = height;
        this.width = width;
        Rectangle.prototype.getArea = function(){
            return this.height * this.width;
        }
}

function findObjPropsHasOwn(obj){
    let resultArr = [];
    for (let k in obj){
        if (obj.hasOwnProperty(k)) resultArr.push(k);
    }
    return resultArr.join(', ');
}

function findObjKeys(obj){
    let resultArr = Object.keys(obj);
    return resultArr.join(', ');
}

/*
------------------------------------------------------------------------
Nice work.

Suggestions:

Use braces {} after if statments, it makes your code easier to read and is pretty much standard syntax.

Array methods can be joined, so you can actually do this:

function findObjKeys(obj){
	return Object.keys(obj).join(', ');
}


*/




*/
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
    

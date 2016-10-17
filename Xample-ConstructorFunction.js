/*
Write a constructor function for a Polygon (shape with straight lines as sides, e.g. square, triangle, octagon). Polygons should have a number of sides, a color, and a name.

Create three shapes (of your choice) using the `new` keyword and your Polygon constructor function.

Questions to think about/answer:
1. What does `this` refer to in the Polygon constructor function? e.g. this.name

			Answer:	refers to the empty object.

2. For each of the created shapes, what does `this` refer to?

			Answer	refers to the specific instance of the object. 
			
			Things to remember about `this` and constructor functions:
			
				- The `this` keyword in an object constructor does not have a value. 
				  It is only a substitute for the new object.
				  
				- The value of `this` will become the new object when 
				  the constructor is used to create an object.
				  
				- Remember: `this` is not a variable. It is a keyword. 
				  You cannot change the value of this. The value of `this` changes 
				  depending on how functions are invoked (global vs. function context)


3. What does the `new` keyword do?

			The 'new'keyword does 4 things:
			1. It invokes the constructor function.
			2. creates an empty object.
			3. sets 'this' to the new empty object.
			4. returns the new object: creating an object and assigning to it the name you gave it.
			

4. Why do you use the `new` keyword with constructor functions?

			'new' invokes the constructor function.
	
			Objects created with `new` and constructor functions inherit the constructor function's prototype 
			(the properties in the constructor function and any properties/methods defined on the 
			constructor's prototype, like the following).
*/			
			Polygon.prototype.getInfo = function() {
				return "I am a " + this.color + " " + this.name + " with " + this.sides + " sides."
			}
//----------------------------------

//create the constructor:
function Polygon(name, sides, color ){
	this.name = name;
	this.sides = sides;
	this.color = color;
}


//create the objects
let polygon1 = new Polygon('square', 4, 'brown');
let polygon2 = new Polygon('triangle', 3, 'red');
let polygon3 = new Polygon('octogon', 8, 'yellow');


//resulting objects:

console.log('polygon1:', polygon1);
console.log('polygon2:', polygon2);
console.log('polygon3:', polygon3);

// polygon1: { name: 'square', sides: 4, color: 'brown' }
// polygon2: { name: 'triangle', sides: 3, color: 'red' }
// polygon3: { name: 'octogon', sides: 8, color: 'yellow' }

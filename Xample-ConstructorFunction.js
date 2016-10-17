/*
Write a constructor function for a Polygon (shape with straight lines as sides, e.g. square, triangle, octagon). Polygons should have a number of sides, a color, and a name.

Create three shapes (of your choice) using the `new` keyword and your Polygon constructor function.

Questions to think about/answer:
1. What does `this` refer to in the Polygon constructor function? e.g. this.name

			Answer:	refers to the empty object.

2. For each of the created shapes, what does `this` refer to?

			Answer	refors to the specific instance of the object. 

3. What does the `new` keyword do?

			The 'new'keyword does 4 things:
			1. 

4. Why do you use the `new` keyword with constructor functions?

*/

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

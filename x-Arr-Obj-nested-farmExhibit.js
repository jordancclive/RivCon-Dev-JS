// Arrays and Objects nested ...

//This is my result...I assumed that a person went to all the exhibits.
// As a result, I had to move throught the objects and arrays in a more complex way.

//Animal constructor function
function Animal(species, call) {
  this.species = species;
  this.call = call;
  this.speak = function () {
  	console.log("The " + this.species + " says " + this.call)
  }
}

//The Animals. Follow the design pattern to make as many as you want and add them to the zoo
var horse = new Animal('horse', 'neigh');
var wolf = new Animal('wolf', 'growl');
var squirrel = new Animal('squirrel', 'chip chip');
var cow = new Animal('cow', 'moo');
var narwhal = new Animal('narwhal', 'blub blub');
var okapi = new Animal('okapi', '???');


//Zoo object with nested exhibit objects
var zoo = {
	"exhibits" : 
	{
		"Farm" : {
			"animals" : [cow, horse],
			"open" : true
		},
		
		"Grasslands" : {
			"animals" : [okapi],
			"open" : false
		},
		
		"Forest" : {
			"animals" : [wolf, squirrel],
			"open" : true
		},
		
		"Arctic" : {
			"animals" : [narwhal],
			"open" : false
		}
	}
};

//Complete this function that will take an exhibit string as an input
// The funcion should "visit" the given exhibit (if it is open) and log out each of the animals "speaking". If the exhibit isn't open, the function should log a message telling the visitor to try another one

function visit(exhibit) {
	let everyE = {}, oneE = [], animal = [];
	console.log('We went to the following exhibits:\n');
	for(let k in exhibit){
		everyE = exhibit[k];
		for (let l in everyE){
			if(everyE[l].open) {
				oneE.push(l);
				console.log(l, ' was open\n');
			}else console.log(l, ' was closed', '\n');
		}
		console.log('\n'); 
		console.log('We saw a bunch of animals:\n');
		for(let i=0; i<oneE.length; i++){
			for(let j=0; j<everyE[oneE[i]].animals.length; j++){
				let temp = everyE[oneE[i]].animals[j];
				temp.speak();
				console.log('\n');
			}
		}
	}
}

// call the function:
visit(zoo);


//--------------------------------------------------

// Instructors result assumes that you submit the exibit as an argument...


//Animal constructor function
function Animal(species, call) {
  this.species = species;
  this.call = call;
  this.speak = function () {
  	console.log("The " + this.species + " says " + this.call)
  }
}

//The Animals. Follow the design pattern to make as many as you want and add them to the zoo
var horse = new Animal('horse', 'neigh');
var wolf = new Animal('wolf', 'growl');
var squirrel = new Animal('squirrel', 'chip chip');
var cow = new Animal('cow', 'moo');
var narwhal = new Animal('narwhal', 'blub blub');
var okapi = new Animal('okapi', '???');


//Zoo object with nested exhibit objects
var zoo = {
	"exhibits" : {
		"Farm" : {
			"animals" : [cow, horse],
			"open" : true
		},
		"Grasslands" : {
			"animals" : [okapi],
			"open" : false
		},
		"Forest" : {
			"animals" : [wolf, squirrel],
			"open" : true
		},
		"Arctic" : {
			"animals" : [narwhal],
			"open" : false
		}
	}
};

//Complete this function that will take an exhibit string as an input
// The funcion should "visit" the given exhibit (if it is open) and log out each of the animals "speaking". If the exhibit isn't open, the function should log a message telling the visitor to try another one

function visit(exhibit) {
	var thisExhibit = zoo.exhibits[exhibit];
	if(!thisExhibit.open) {
		console.log("Sorry, the " + exhibit + ' is closed' );
	} else {
		var animals = thisExhibit.animals;
		for(var i = 0; i < animals.length; i++) {
			animals[i].speak()
		}
	}
	
}
visit("Forest")
visit("Grasslands")

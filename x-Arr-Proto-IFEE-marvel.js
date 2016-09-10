/*
	MARVEL CIVIL WAR
	
   Given an Array of superhero objects, create a function that checks if the heroes with a true "is_registered" property also have a "secret_identity".
   
   If they are unregistered, or registered without their secret identity, add them to a "Government Watch" array and log their "testify" functions to the console.
*/

//Superhero Constructor
function Superhero(name, identity, registered) {
	this.hero_name = name;
	this.secret_identity = identity;
	this.is_registered = registered;
	this.testify = function() {
		return "My name is " + this.hero_name;
	};
}

var ironMan = new Superhero('Iron Man', 'Tony Stark', true);
var spiderMan = new Superhero('Spider Man', 'Peter Parker', false);
var hawkeye  = new Superhero('Hawkeye', null, false);
var winterSoldier  = new Superhero('Winter Soldier', 'Bucky Barnes', false);
var captainAmerica = new Superhero('Captain America', 'Steve Rogers', false);
var theVision = new Superhero('The Vision', null, true);
var blackWidow  = new Superhero('Black Widow', 'Natasha Romanoff', false);
var blackPanther = new Superhero('Black Panther', "T'Challa", true);

// This is the array of superhero objects....
var civilWar = [ironMan, spiderMan, hawkeye, winterSoldier, captainAmerica, theVision, blackWidow, blackPanther];
//-------------------------------------------

/* need a function that looks at this civilWar array
	and builds the "Government Watch array".

	gov Watch will be an array with: superhero names.
	This array will feed a console.log statement heroname.testify().
*/

(function WatchThem (){
	let newArr = civilWar, isRegistered ='', hasIdentity = '', govWatch = [];
	for(let i=0; i<newArr.length; i++){
		isRegistered = newArr[i].is_registered;
		hasIdentity = newArr[i].secret_identity;
		if (!isRegistered || (isRegistered && !hasIdentity)){
			govWatch.push(newArr[i].hero_name);
			console.log(newArr[i].testify());
		} 
	}
	console.log('\n',govWatch);
})();

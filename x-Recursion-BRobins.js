//    This is a great example of a recurive function


//Baskin Robbins 31 is a popular game in Korea
//Players sit in a circle and hold out 1-5 fingers and begin counting them.
//The player holding the 31st finger wins.

//Complete this function. You should assign a random # of 1-5 to each player and somehow associate it with the name. Starting with Ayanna, determine who is holding up the 31'st finger and return their name

function  genRandom (){ 
	let num = Math.round(Math.random()*4)+1;
	return num;
}

var baskinRobbins31 = function (count) {
	var players = ['Ayanna', 'Ben', 'Ceren', 'Dan', 'Eric'];
	let result = '';
	if (typeof count !== "number") count = 0;
	for(let i=0; i<players.length; i++){
		fingers = genRandom ();
		count += fingers;
		if(count>=31) return players[i];
		else if (i === players.length-1) result = baskinRobbins31(count);
	}
	return result;
};

//Tests
console.log(baskinRobbins31() + ' must drink');
console.log(baskinRobbins31() + ' must drink');
console.log(baskinRobbins31() + ' must drink');

//--------------------------------------------------------
// or

function  genRandom (){ 
	let num = Math.round(Math.random()*4)+1;
	return num;
}

var baskinRobbins31 = function (count) {
	var players = ['Ayanna', 'Ben', 'Ceren', 'Dan', 'Eric'];
	let result = '';
	if (typeof count !== "number") count = 0;
	for(let i=0; i<players.length; i++){
		fingers = genRandom ();
		count += fingers;
		if(count>=31) return players[i];
		else if (i === players.length-1) return = baskinRobbins31(count);
		//This previous statement is the key to recursion.
		// Most times you are calculating something within the recursive calls and
		// need to pass some result back up the call stack or the value will not 
		// make it out of the set of functions and back into the Parent program.
	}
};

//Tests
console.log(baskinRobbins31() + ' must drink');
console.log(baskinRobbins31() + ' must drink');
console.log(baskinRobbins31() + ' must drink');

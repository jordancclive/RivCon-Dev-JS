// 3) Who Likes?

// Write a function whoLikes that takes 2 paramters: an array of objects and a string. The array will be an array of people objects. Each person object will have a name key with a string value, and a nested object called foodEnjoyed that has different foods as keys, each with a value of true or false depending on whether the person enjoyed it: 

/*
[
	{
		name: 'person name',
		foodEnjoyed: {
			eggyweggs: false,
			fried_lobster footsteps: true,
			fine_juices: true,
			beta_carrotene: false
		}
	},
	... more people
]
*/

// The string will be a certain kind of food. Your job is to return an array of all the people's names who have enjoyed it. 


// CODE HERE

	function whoLikes(people, food){
		let resultArr = [];
		
		//go thru the array of people
		for(let i=0; i<people.length; i++){
				let person = people[i];
				//if food value is true push into result array
				if (person.foodEnjoyed[food]) resultArr.push(people[i].name);
		}
		return resultArr;
	}



// TESTS
var people = [
	{
		name: 'person1',
		foodEnjoyed: {
			'eggyweggs': false,
			'fried lobster footsteps': true,
			'hot sauce': true
		}
	},
	{
		name: 'person2',
		foodEnjoyed: {
			'fine juices': false,
			'fried lobster footsteps': true,
			'jello': true
		}
	},
	{
		name: 'person3',
		foodEnjoyed: {
			'low interest credit': false,
			'beta carrotene': true,
			'catfish': true
		}
	}
];

var likes1 = whoLikes(people, 'fried lobster footsteps');
console.log(Array.isArray(likes1));
console.log(likes1.length === 2);
console.log(likes1[0] === 'person1');
console.log(likes1[1] === 'person2');

var likes2 = whoLikes(people, 'beta carrotene');
console.log(Array.isArray(likes2));
console.log(likes2.length === 1);
console.log(likes2[0] === 'person3');

var likes3 = whoLikes(people, 'low interest credit');
console.log(likes3.length === 0);

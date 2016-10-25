// 2) FinnelSchloon Glacier

// For years geologists have been studying FinnelSchloon Glacier, which I just made up. This particular glacier is of interest because it picks up speed everyday, such that tomorrow it will be moving down the gently sloping landscape 5% faster than the rate it traveled today, eroding everything in its path. Unfortunately, it's heading straight for the historic fishing village of Glumforgotten. 

// We need you to write a function called howLong, which will calculate how long the fishermen of Glumforgotten have. Your function should take 2 number parameters: 1) the distance from the terminus of FinnelSchloon Glacier to Glumforgotten (in km), and 2) the current speed the glacier is advancing (in km/day). It should return the number of days until the glacier reaches the town (if the glacier reaches town on the first day, that counts as 1 day). Both the distance and velocity will be positive numbers. 


// SOLUTION
function howLong(distance, velocity) {

	var travelled = 0;
	var days = 0;

	while (travelled < distance) {
		travelled += velocity;
		velocity *= 1.05;
		days++;
	}

	return days;
}


// TESTS
console.log(howLong(0.6, 0.7) === 1);
console.log(howLong(60, 0.7) === 35);
console.log(howLong(600, 0.7) === 78);

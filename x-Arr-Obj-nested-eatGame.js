/*
	EAT IT!
	
	Create a function that will 'judge' the results of a competitive eating competition
	
	There are 3 foods:
	
		pizza: 2 points
		hotdog : 3 points
		cheeseburger : 5 points
	
	Your function will take an array of objects. Each object contains the competitor's name, and the number of each food item they've eaten. 
	
	You should return an array of objects, with each object containing the player's name and their total score
	
	eg:
		Input: [
				  {name: "Habanero Harry", pizza: 5 , hamburgers: 17, hotdogs: 11},
				  {name: "Big Bob" , pizza: 20, hamburgers: 4, hotdogs: 11}
				]
				
		Output: [
				  {score: 134, name: "Big Bob"},
				  {score: 98, name: "Habanero Harry"}
				]		
	
*/

var competitors = [
		{name: "Big Bernie" , pizza: 20, cheeseburger: 4, hotdog: 11},
		{name: "Habanero Hillary" , pizza: 2, cheeseburger: 14, hotdog: 3},
		{name: "Doughboy Donald" , pizza: 18, cheeseburger: 2, hotdog: 12},
		{name: "Creepy Cruz" , pizza: 1, cheeseburger: 1, hotdog: 0}
	]

function eatGame(objIn){
		/*	There are 3 foods:
								pizza: 2 points
								hotdog : 3 points
								cheeseburger : 5 points
		*/
		let resultObj = {}, results = 0, resultArr = [];
		for(let i=0; i<objIn.length; i++){
			resultArr.push({name: objIn[i].name, score: (2*objIn[i].pizza)+(3*objIn[i].hotdog)+(5*objIn[i].cheeseburger) });
			
		}
		return resultArr;
}
console.log(eatGame(competitors));
"";

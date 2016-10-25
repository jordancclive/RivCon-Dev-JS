/*
	FOREIGN LOOPS
	
	Create a function that takes an animal name and iterates over the petSounds array and logs all the international sounds that animal makes to the console along with the country of origin. The log should follow the format "[animal]s in [country] say [sound]"
	
		eg)
			makeNoise('dog') ==> 'Dogs in America say Woof! Woof',
								 'Dogs in Germany say Wau! Wau',
								 ....
								 'Dogs in Algeria say Wuaf Wuaf!'
	
	Like many programming problems, this exercise is simple but tricky. When faced with uncertainty, programmers will often look up their languages documentation for further insight.
	
	Think careful about what kind of for loop to use. Check out the 'Iterations' section of the MDN JavaScript documentation for different loop styles: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements#Iterations
*/

var petSounds =	[
		{ "dog": {
			"America" : "Woof! Woof!",
			"Germany" : "Wau Wau!",
			"England" : "Bow wow!",
			"Uruguay" : "Jua jua!",
			"Afrikaans" : "Blaf!",
			"Korea" : "Mong mong!",
			"Iceland" : "Voff voff!",
			"Albania" : "Ham!",
			"Algeria" : "Ouaf ouaf!"
			}
		 },
		 { "cat": {
			"America" : "Meow",
			"Germany" : "Miauw!",
			"England" : "mew mew",
			"Uruguay" : "Miau Miau!",
			"Afrikaans" : "Purr",
			"Korea" : "Nyaong!",
			"Iceland" : "Kurnau!",
			"Albania" : "Miau",
			"Algeria" : "Miaou!"
			}
		 },
		 { "chicken": {
			"America" : "Cluck cluck",
			"Germany" : "tock tock tock",
			"England" : "Cluck Cluck",
			"Uruguay" : "gut gut gdak",
			"Afrikaans" : "kukeleku",
			"Korea" : "ko-ko-ko",
			"Iceland" : "Chuck-chuck!",
			"Albania" : "Kotkot",
			"Algeria" : "Cotcotcodet"
			}
		 }
 	]
 	makeNoise('chicken');
 	function makeNoise(animal){
 		let sounds='';
 		for(let i=0; i<petSounds.length; i++){
 			if (petSounds[i][animal]) sounds =  petSounds[i][animal];
 		}
 		let countries = Object.keys(sounds);
 		for(let i=0; i<countries.length;i++){
 			let result = animal + 's in ';
 			result += countries[i] + ' say ' + sounds[countries[i]];
 		console.log(result); 			
 		}
 		
 		
 		console.log();
 	}

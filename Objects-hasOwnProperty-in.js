The --> in <-- operator:

	returns true if the object has the specified property and flase if it is not there.
	
	Note:  the .hasOwnProperty does the same thing, but it is a safer operator, so try to use this one.
	
	
		var disneyMovies = {
			Alladdin: {
				release: "1992"
			},
			LionKing: {
				release: "1994"
			}
			ToyStory: {
				release: "1995"
			}
		};
		
		console.log("Alladdin" in disneyMovies)  <---- true
		console.log("Psycho" in disneyMovies)  <---- false
		
		console.log(disneyMovies.hasOwnProperty("Alladdin"))  <---- true		
		console.log(disneyMovies.hasOwnProperty("Phycho))  <---- false
		
				****  Note:  It is not checking nested properties. ****
		
		

/*
	NICKNAME GENERATOR
	
	Write a naive nickname generator function that takes a name and returns the first 3 or 4 letters (4 letters if the 3rd is a vowel)
	
	eg  nickName("daniel") ==> 'dan'
		nickName("Beowulf") ==> 'Beow'
*/

	function nickName(name) {
		var result="", strVowels="aeiouAEIOU";
		if (name.length<4) return name;
		for(var i=0; i<4; i++){
			result +=name[i];
			if (i === 2 && strVowels.indexOf(name.charAt(2)) < 0) return result;
		}
		return result;
	}

console.log("Function #1: get a nickname of:      --> " + "amanda");	
console.log("             using indexOf & charAt: --> " + nickName("amanda"));	



// Alternative function

	function nickName2(name) {
		var vowels = 'aeiouAEIOU';
		var thirdLetter = name.charAt(2);
		//check if 3rd letter in name is a vowel
		if(vowels.indexOf(thirdLetter) >= 0) {
			return name.substr(0, 4);
		} else {
			return name.substr(0,3);
		}
	}

console.log("\n")
console.log("Function #2: get a nickname of:      --> " + "Daniel");	
console.log("    using charAt, indexOf & substr:  --> " + nickName2("Daniel"));	
""


/*  Notes

Methods used:

.charAt(index);

.substr(x,y);  up to and not including "y"

.indexOf(searchValue, [, fromIndex]);  returns the first occurence of, if not found returns -1



*/






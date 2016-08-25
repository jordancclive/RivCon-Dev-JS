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
			if (i === 2 && strVowels.indexOf(name.charAt(2)) ===-1) return result;
		}
		return result;
	}

nickName("amanda")	


var drakeGenerator = {
	parseText : function() {
		var text = this.hotlineBling + this.jumpman + this.startedFromTheBottom;
		return text.toLowerCase().replace(/[^a-z\s]/ig, "").split(' ');                 //<----notice.  www.regex101.com for syntax
	},
	generateMarkov : function() {
		var wordpairs = {};
		var words = this.parseText();
		// For every word
		for (var i = 0; i < words.length - 1; i++) {
		  var currentWord = words[i];
		  var nextWord = words[i+1];
		
		  if (wordpairs[currentWord]) {
		    wordpairs[currentWord].push(nextWord);
		  } else {
		    wordpairs[currentWord] = [nextWord];
		  }
		}
		return wordpairs;
	},
	randomlyChoose : function(wordArray) {
		var index = Math.floor(wordArray.length * Math.random());
  		return wordArray[index];
	},
	writeLine : function(min_length) {
		var words = this.parseText();
		var wordpairs = this.generateMarkov();
		var word = this.randomlyChoose(words);
		var phrase = [word]; // start the phrase
		while(wordpairs[word]) {
			var next_words = wordpairs[word];
			word = this.randomlyChoose(next_words);
			phrase.push(word);
			if(phrase.length > min_length) {
				break;
			}
		}
		return phrase.join(' ');
	},
	writeSong : function(n) {
		for(var i = 0; i < n; i++) {
			var l = Math.floor(Math.random() * 10) + 1;
			console.log(this.writeLine(l))
		}
	},
	hotlineBling : 'You used to call me on my You used to, you used to, Yeah, You used to call me on my cell phone, Late night when you need my love, Call me on my cell phone, Late night when you need my love And I know when that hotline bling That can only mean one thing I know when that hotline bling. That can only mean one thing. Ever since I left the city, You got a reputation for yourself now. Everybody knows and I feel left out. Girl you got me down, you got me stressed out, Cause ever since I left the city, you started wearing less and goin out more. Glasses of champagne out on the dance floor Hangin with some girls I\'ve never seen before',
	jumpman : 'Jumpman, Jumpman, Jumpman, them boys up to something. They just spent like two or three weeks out the country. Them boys up to something they just not just bluffing. You don\'t have to call I hit my dance like Usher I just found my tempo like I\'m DJ mustard. I hit the Ginobili with my left hand up like woo. Lobster and celine for all my babies that I miss. Chicken fingers, french fries for them hoes that wanna diss Jumpman, Jumpman, Jumpman, them boys up to something Uh uh, uh uh, think I need some Robitussin. Way too many questions you must think I trust you. You searching for answers I do not know nothing (Woo!) I see em tweaking they know something coming (Woo!) Jumpman, Jumpman, Jumpman, them boys up to something (Woo!)',
	startedFromTheBottom :" Started from the bottom now we're here"
}

drakeGenerator.writeSong(20);

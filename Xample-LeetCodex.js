/*
	1337 Translator
	
	"Leet" or "1337" is a popular alternative alphabet used by internet geeks.
	
	Create a translator function that takes a string and outputs that string translated to leet
	
	Leet Codex:
		A -> @
		B -> 8
		C -> (
		D -> |)
		E -> 3
		F -> ph
		G -> g
		H -> #
		I -> l
		J -> _|
		K -> |<
		L -> 1 
		M -> |'|'|
		N -> /|/
		O -> 0 
		P -> |D
		Q -> (,)
		R -> |2
		S -> 5
		T -> +
		U -> |_|
		V -> |/
		W -> |/|/'
		X -> ><
		Y -> j
		Z -> 2
		
	ex)
		translate('Daniel') -> '|)@/|/l31'
*/


let leetCodex= {'A': '@', 'B': '8', 'C': '(', 'D': '|)', 'E': '3', 'F': 'ph', 'G': 'g', 'H': '#', 'I': 'l', 'J': '_|', 'K': '|<', 'L': '1', 'M': "|'|'|", 'N': '/|/', 'O': '0', 'P': '|D', 'Q': '(,)', 'R': '|2', 'S': '5', 'T': '+', 'U': '|_|', 'V': '|/', 'W': "|/|/'", 'X': '><', 'Y': 'j', 'Z': '2'};

function translate(str){
	tempStr = str.toUpperCase();
	let resultStr = '';
	for(let i=0; i<tempStr.length; i++){
		resultStr += leetCodex[tempStr[i]];
	}
	return resultStr;
}

//function call:
translate('Daniel'); 	//-> '|)@/|/l31'

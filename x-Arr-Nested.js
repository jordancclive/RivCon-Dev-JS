/*
	Weigh In
	
	Create a function that iterates over the "Wrestlers" multidimensional array and returns a flat array of objects containing the names and weights of all wrestlers > 90kg
*/


var wrestlers = [
	['Stone Cold Steve Austin', {specialMove : 'Stun Gun'}, '92kg'],
	['John Cena', '82kg'],
	['The Rock', {retired : true}, '100kg'],
	['CM Punk', '75kg']
];


function weighIn(weight) {
	let newArr=[];
	for (let i=0; i<wrestlers.length; i++){
		let wrestler = wrestlers[i];
		let temp = [];
		for (let j=0; j<wrestler.length; j++){
			if (typeof wrestler[j] === 'string') temp.push(wrestler[j]);    // notice when you push, do not use an element #
		}                                                                 // you are pushing elements one after another
		if(Number(temp[1].slice(0, temp[1].length-2))>weight){
			let obj = [];                                                   // Once you have the array result, then create
			obj[temp[0]] = temp[1];                                         // an object to be added to the result array
			newArr.push(obj);                                               // again push one element after the other into
		}                                                                 // the result array.
	}
	return newArr;
}

weighIn('90');

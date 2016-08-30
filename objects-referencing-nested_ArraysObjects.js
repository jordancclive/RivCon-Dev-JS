/*
Referencing data in Nested Arrays & Objects can be confusing.

It is a good technique to use temporary variables in order to work your way to a piece of data.
This will keep you from loosing track of where you are in the nested data.
*/

//Simple example follows:

var classRoom = [
	{
		"Marnie" : [
				{"Monday" : true},
				{"Tuesday" : true},
				{"Wednesday" : true},
				{"Thursday" : true},
				{"Friday" : true}
			]
	},
	{
		"Lena" : [
				{"Monday" : false},
				{"Tuesday" : false},
				{"Wednesday" : true},
				{"Thursday" : false},
				{"Friday" : true}
			]
	},
	{
		"Shoshanna" : [
				{"Monday" : true},
				{"Tuesday" : true},
				{"Wednesday" : false},
				{"Thursday" : true},
				{"Friday" : false}
			]
	},
	{
		"Jessa" : [
				{"Monday" : false},
				{"Tuesday" : false},
				{"Wednesday" : false},
				{"Thursday" : false},
				{"Friday" : true}
			]
	}
];
              	  
var temp = classRoom[0]["Marnie"];
var temp2 = temp[0];
var temp3 = temp2["Monday"];
console.log(temp3);     
              

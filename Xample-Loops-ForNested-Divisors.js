function divisors(divArr, lowLimit, highLimit){
	for(let i=lowLimit; i<=highLimit; i++){
			let count=0, divTrue=false, label='';
		
		for(let j=0; j<divArr.length; j++){
			if(!(i%divArr[j])){
				divTrue=true;
				count++;
			}
		}
		label = i.toString();
		if (divTrue && count === 1) label += ' one_true';
		else if(divTrue && count < divArr.length) label += ' many_true';
		else if (divTrue && count === divArr.length) label += ' all_true';
		console.log(label);
	}
}
divisors([2, 3, 5], 1, 30);

/*
1
2 one_true
3 one_true
4 one_true
5 one_true
6 many_true
7
8 one_true
9 one_true
10 many_true
11
12 many_true
13
14 one_true
15 many_true
16 one_true
17
18 many_true
19
20 many_true
21 one_true
22 one_true
23
24 many_true
25 one_true
26 one_true
27 one_true
28 one_true
29
30 all_true
*/

function powersOfTwo(n){
	let resultArr = [1];
	if (n<0) return [];
	if (!n) return resultArr;
	for(let i=1; i<=n; i++){
		let temp = 2*(resultArr[i-1]);
		resultArr.push(temp);
	}
  	return resultArr;
}


let newArr = powersOfTwo(2);
console.log(newArr);
'';

function getMiddle(s){
  //Code goes here!
  let temp = s.toString();
  let tempLen = temp.length;
  let start = 0;
  if(tempLen%2) {
  	//odd
  	start = Math.floor(tempLen/2);
  	return temp.slice(start, start+1);
  }else{
  	//even
  	start = (tempLen/2)-1;
  	return temp.slice(start, start+2);
  }
}


console.log(getMiddle("test"));  //,"es");
console.log(getMiddle("testing"));  //,"t");
console.log(getMiddle("middle"));  //,"dd");
console.log(getMiddle("A"));  //,"A");

// .slice(), Math.floor(), 

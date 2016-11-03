/*		...		Coding With Square strings		...

//-----------------------------------------------
Note:  There are a lot of alternative solution to look at in this project exercise.

	callbacks, regular expressions, '...' and more to see and analyze.

//-----------------------------------------------


Description:
 
A squared string has n lines, each substring being n characters long: 

For example:

				s = "abcd\nefgh\nijkl\nmnop" is a squared string of size 4.

We will use squared strings to code and decode texts. 
To make things easier we suppose that our original text doesn't include the character '\n'.


Coding


Input:

				a text t of length l.

				Consider the smallest integer n such that n * n be greater or equal to l.

				Complete t with the char of ascii code 11 
				(we suppose that this char is not in our original text) 
				until the length of t is n * n.
				
From now on we can transform the new t in a squared string s of size n by inserting '\n' where needed.
Apply a clockwise rotation of 90 degrees to s: that's it for the coding part.



Decoding

Input:

				a squared string s resulting from the coding

				Apply a counter-clockwise rotation of 90 degrees to s

				Do some cleaning to have the original text t

				In other SqStr examples, you can see: 
				
						clockwise rotation of 90 degrees 
						counter-clockwise rotation of 90 degrees: 

Example:

				t = "I.was.going.fishing.that.morning.at.ten.o'clock"

				code(t) -> "c.nhsoI\nltiahi.\noentinw\ncng.nga\nk..mg.s\n\voao.f.\n\v'trtig"

				decode(code(t)) == "I.was.going.fishing.that.morning.at.ten.o'clock"

				(Dots indicate spaces since they are quite invisible).

*/



//...............my solution:


function code(str){
	let sqSize = sqStrSize(str), resultArr = [];
	if(!sqSize) return '';
	str = str.split(''), counter=0;
	for(let i=0; i<str.length; i++){
		(resultArr[counter]) ? resultArr[counter] += str[i] : resultArr.push(str[i]);
		(counter===sqSize-1) ? counter=0 : counter++;
	}
	resultArr = resultArr.map(elem => elem.split('').reverse().join(''));
	//finish off the column the for loop was working on.
	for (let i=counter; i<sqSize; i++){
		resultArr[i] = '\v' + resultArr[i];
	}
	// see if the rows & column match up.
	let elemLen = resultArr[0].length;
	if (elemLen < resultArr.length){
		for(let i=0; i<resultArr.length; i++){
			resultArr[i] = '\v' + resultArr[i];		
		}		
	}
	return resultArr.join('\n');
}

function decode(str){
	if(!str) return '';
	let resultArr=[];
	//do this with a regular expression to remove the '\v'
	str = str.replace(/\v/g,'').split('\n').map(elem => elem.split('').reverse().join(''));
	for(let i=0; i<str.length; i++){
		let tempLen = str[i].length;
		for (let j=0; j<tempLen; j++){
			(resultArr[j]) ? resultArr[j] += str[i][j] : resultArr.push(str[i][j]);
		}
	}
	return resultArr.join('');
}

function sqStrSize (str){
	for (let i=1; i<= str.length; i++){
		if ((i*i)>str.length) return i;
	}
	return 0;
}


//test case:

t = "I.was.going.fishing.that.morning.at.ten.o'clock";
console.log(code(t));			// -> "c.nhsoI\nltiahi.\noentinw\ncng.nga\nk..mg.s\n\voao.f.\n\v'trtig"
console.log('\n');
console.log(decode(code(t)));	// => "I.was.going.fishing.that.morning.at.ten.o'clock"
console.log('\n');

// t = "What do you remember? When I looked at his streaky glasses, I wanted " +
//          "to leave him. And before that? He stole those cherries for me at midnight. We were walking " +
//          "in the rain and I loved him. And before that? I saw him coming " +
//          "toward me that time at the picnic, edgy, foreign.";

// console.log(code(t));			
// console.log('\n');
// console.log(decode(code(t)));	
// console.log('\n');

// t = 'And on black ground a bear-skin rug of snow. The sparks made no attempt to be the moon. They were content to figure in the trees As Leo, Orion, and the Pleiades. And that was what the boughs were full of soon.'; 


// console.log(code(t));			
// console.log('\n');
// console.log(decode(code(t)));	
// console.log('\n');

/*

const data1 = 

		"What do you remember? When I looked at his streaky glasses, I wanted " +
         "to leave him. And before that? He stole those cherries for me at midnight. We were walking " +
         "in the rain and I loved him. And before that? I saw him coming " +
         "toward me that time at the picnic, edgy, foreign."
         
const data2Sol =

	"fa  h ttrheI ilS\nitifakw   s'irdo\nc cotnihftivce m\neAereocaihree,we\n.n   wedroe . i \n\vdIdT , es t Sls\n\v seoe t.eIaFola\n" +
	"\vw s nIo   srm y\n\voatso  Bwhtoee \n\vulrautpuhoem nt\n\vlsuyghetold sdh\n\vdoc hir  d wa e\n\v  tt niif ohyi \n\vsgihoksfawfa nw\n" +
	"\vuroaf h vi ti o\n\vfent I iotd nfr"
	
	
.......need to decode this:

'\u000b t e,h eb TnoA\n\u000bfht  etyenh un\n\u000buehPO o  oernd\n\u000bl alrt wt  ud \n\u000blbteirfehasg o\n\u000b o ioeiretp an\n\u000bouwanege tao  \n\u000bfgad,su merfbb\n\u000b hse  rcomk el\n\u000bss saAeoopssaa\n\u000bo w.ns nnt nrc\n\u000bowh d it. mo-k\n\u000bneaA Lne taws \n\u000b.rtnte nTod.kg\n\u000b\u000be dhotth e ir', 

instead got: ' t e,h eb TnoA\nfht  etyenh un\nuehPO o  oernd\nl alrt wt  ud \nlbteirfehasg o\n o ioeiretp an\nouwanege tao  \nfgad,su merfbb\n hse  rcomk el\nss saAeoopssaa\no w.ns nnt nrc\nowh d it. mo-k\nneaA Lne taws \n.rtnte nTod.kg\n\u000be dhotth e ir'

decoded: And on black ground a bear-skin rug of snow. The sparks made no attempt to be the moon. They were content to figure in the trees As Leo, Orion, and the Pleiades. And that was what the boughs were full of soon.

*/

//-------------------------------------------------------

// now let's look at solution that I did not think of:

//-------------------------------------------------------

// I have to look at this again and again......

function code(s) {
  let str = s.replace(/\n/g, '')			// regular expression
  ,   len = str.length
  ,   res = '';
  
  let n = Math.ceil(Math.sqrt(len))
  ,   m = n * (n - 1);
  
  for (var i = 0; i < n; i++) {
    res += "\n";
    
    for (var j = 0; j < n; j++)
      res += str[m + i - n * j] || "\v";
  }
  
  return res.slice(1);
}

function decode(s) {
  let res = code(code(code(s)));
  return res.replace(/(\n|\v)/g, '');
}




// another one:


function code(s) {
  const n = Math.ceil(Math.sqrt(s.length));
  s += '\v'.repeat(n*n - s.length);
  return Array.from({length: n}, (_, r) => Array.from({length: n}, (_, c) => s[n*(n - c - 1) + r]).join('')).join('\n');
}
function decode(s) {
  const ss = s.split('\n'), n = ss[0].length;
  return Array.from({length: n}, (_, r) => Array.from({length: n}, (_, c) => ss[c][n - r - 1]).join('')).join('').replace(/\v/g, '');
}


//more:


function rotateSquareArray90DegClockwise(a) {
    var a2 = Array(a.length).fill("");
    for (var i = 0; i < a.length; i++) {
      for (var j = a.length-1; j >= 0; j--) {
          a2[i]+=a[j][i]
      }
    }
    return a2;
}
function rotateSquareArray90DegCounterclockwise(a) {
    var a2 = Array(a.length).fill("");
    for (var i = 0; i < a.length; i++) {
      for (var j = 0; j < a.length; j++) {
          a2[i]+=a[j][a.length-1-i];
      }
    }
    return a2;
}
function code(t) {
    var n = Math.sqrt(t.length)%1 === 0 ? Math.sqrt(t.length) : Math.ceil(Math.sqrt(t.length));
        t += String.fromCharCode(11).repeat(n*n-t.length);
    var a = [];
    
    for (var i = 0; i < t.length; i+=n) {
      a.push(t.substr(i,n));
    }
    
    return rotateSquareArray90DegClockwise(a).join("\n");
}
function decode(s) {
    return s? rotateSquareArray90DegCounterclockwise(s.split("\n")).join("").replace(/\u000b/g,"") : s;
}



//    more:


function code(s) {
    const sSplit = s.split('');
    const n = Math.ceil(Math.sqrt(s.length));
    const t = Array.from({length: n}, (...mapArgs) => {
        const substring = sSplit.filter((...filterArgs) => filterArgs[1] % n === mapArgs[1]);

        if (substring.length < n) {
            substring.push('\v'.repeat(n - substring.length));
        }

        return substring.reverse().join('');
    });

    return t.join('\n');
}

function decode(s) {
    const sSplit = s.split('\n');
    const n = sSplit.length;

    let t = '';

    for (let j = n - 1; j >= 0; j--) {
        for (let i = 0; i < n; i++ ) {
            if (sSplit[i].charAt(j) === '\v') break;

            t += sSplit[i].charAt(j);
        }
    }

    return t;
}




//more more more:


function code(s){
  if (!s){return ''}
  let n = Math.ceil(Math.sqrt(s.length));
  let retStr = [], tmp = '';
  while (s.length < n*n){s += '\v'}
  for (let i = 0; i < s.length; i+=n){
    retStr.push(s.substring(i,i+n) + '\n');
  }
  for (let j = 0; j < n; j++){
    for (let k = n - 1; k >= 0; k--){
      tmp += retStr[k][j];
    }
    tmp += '\n';
  }
  return tmp.substring(0, tmp.length - 1);
}
function decode(s){
  if (!s){return ''}
  let ar = s.split('\n');
  let n = ar.length;
  let str = '';
  for (let i = n - 1; i >= 0; i--){
    for (let j = 0; j < n; j++){
      str += ar[j][i];
    }
  }
  return str.replace(/[\v]+/g,'');
}




///and one more:


function code(s) {
var len=s.length,i=0,j=0;
if(s==='')
return '';

var array=Array(Math.ceil(Math.sqrt(len))).join(".").split(".");
var length=array.length;
var pad=length*length-len;
s=s+Array(pad+1).join("\v");

for( i=0;i<length;i++)
{

for(j=0;j<=length;j++)
{
var c=s.charAt(length*(length-j)+i);
array[i]=array[i]+c;
}
}
var k=array.join("\n");
return k;
}

function decode(s) {
var len=s.length,i=0,j=0,temp=0;
if(s==='')
return '';
s=s.replace(/\r?\n|\r/g, "");
var length=Math.sqrt(s.length);
var array=Array(Math.ceil(length)).join(".").split(".");
for( i=0;i<length;i++)
{
for(j=0;j<length;j++)
{
var c=s.charAt(length*(j)+length-i-1);
array[i]=array[i]+c;
}
}
var k=array.join('');
k=k.replace(/\r?\v|\r/g, "");
return k;
}



// even more



function code(s) {
  const size = Math.ceil(Math.sqrt(s.length));
  const size2 = size * size;
  const sSquared = s + '\v'.repeat(size2 - s.length);
  const sRotated = new Array(size).fill(null).map((_, i) =>
    new Array(size).fill(null).map((_, j) =>
      sSquared.charAt(size * (size - j - 1) + i)
    ).join('')
  ).join('\n');
  return sRotated;
}

function decode(s) {
  const rows = s.split('\n');
  return rows.map((row, j) =>
    row.split('').map((_, i) =>
      rows[i].charAt(rows.length - 1 - j)
    ).join('')
  ).join('').replace(/\v+/g, '');
}




// I have more.........




function code(s) {
  const n = Math.ceil(Math.sqrt(s.length));
  let arr = [];
  while(s.length < n*n) {
    s += '\v';
  }
  while(s.length) {
    s.slice(0, n).split('').forEach((c, i) => {
      arr[i] = !arr[i] ? c : c + arr[i];
    });
    s = s.slice(n);
  }
  return arr.join('\n');
}

function decode(s) {
  const n = Math.ceil(Math.sqrt(s.length));
  let arr = [];
  s.split('\n').forEach((line) => {
    line.split('').forEach((c, i) => {
      arr[n-i] = !arr[n-i] ? c : arr[n-i] + c;
    });
  });
  return arr.join('').replace(new RegExp('\v', 'g'), '');
}




//  .................and more:




function rot90Clock(str) {
  let c = diag1Sym(str);
  return c.split('\n').map(a=>a.split('').reverse().join('')).join('\n');
}

function diag1Sym(str) {
  let arr = str.split('\n');
  let s = [], t;
  for(let i = 0; i < arr.length; i += 1) {
    s.push(arr.map(a=>a[i]).join(''));
  }
  return s.join('\n');
}

function diag2Sym(strng) {
    let arr = strng.split("\n"),
        l = arr.length;
    return Array.from({length: l}, (_, k1) => Array.from({length: l}, (_, k2) => arr[l - k2 - 1][l - k1 - 1]).join("")).join("\n");
}

function rot90Counter(strng) {
    let arr = strng.split("\n"),
        l = arr.length;
    return Array.from({length: l}, (_, k1) => Array.from({length: l}, (_, k2) => arr[k2][l - k1 - 1]).join("")).join("\n");
}

function code(s) {
    // your code 
    var strlen = s.length, n, res= "" ; 
    while(!Number.isInteger(Math.sqrt(strlen))){
      s+= "\u000b" ; 
      strlen++ ; 
    }
    n = Math.sqrt(strlen) ;

    for(let i = 0 ; i < strlen ; i+= n ){
      if(i+n == strlen) res+= s.slice(i, i+n); 
      else res+= s.slice(i, i+n) + "\n"; 
    }
    return rot90Clock(res) ; 
     
    
    
    
}

function decode(s) {
    s = rot90Counter(s) ; 
    return s.replace(/\n|\u000b/g,"") ; 
    
}








/*
-----------------------------------------------------------------------------

		A closure example.   ....passing functions		

-----------------------------------------------------------------------------

		Closure with a bit of split, splice and join

-----------------------------------------------------------------------------
*/
function rotater(str){
    let reversal = false;
    return function(num){
        if (num === str.length){
            reversal = !reversal;
            return str;
        }
        if (reversal){
            return str.split('').splice(str.length - num).join('') + str.split('').splice(0, str.length - num).join(''); 
        }else{
            return str.split('').splice(num).join('') + str.split('').splice(0,num).join('');            
        }
    };
}

-------------------------------
*/
// function sometimes(funcInput){
//     return funcInput; 
// }

function sometimes(funcInput){
    let count = 0;
    return function (a,b){
        count++;
        if (count > 3 && !(count%2)) return 'I do not know!';
        else return funcInput.apply(undefined, [a,b]); 
    }
}

//-----------------------------------------------------------------------------
/*  Secret Guest List Functions
        guestListFns arguments/return value:
            guestListArr = original guest List
            value = any value...."the code"

            returns an array of functions (guestListFns)
            These functions accept the code(value)
            these functions return the guest name (string).
            example:
            var guest = guestListFns[1](512); // guest ==> "Guest-Ben";

        guestListFns arguments/return value:
            guestListFns = return value from guestListFns
            value = "the code" from guestListFns 

            returns an array of guests (guestList)           

*/
function guestListFns(guestListArr, value){
    var resultArr = [], guestObj={}, index;
    guestObj[value] = guestListArr;
    for(var j=0; j<guestListArr.length; j++){
      resultArr = createFunc(resultArr, guestObj, j, value);
    }
    return resultArr;
}

function generateGuestList(guestArr,value){
    var resultArr=[];
    for (var guestIndex=0; guestIndex<guestArr.length; guestIndex++){
      resultArr.push(guestArr[guestIndex](value));
    }
    return resultArr;
}

function createFunc(resultArr, guestObj, j, value){
  // Do not want to create a function within a loop, 
  // sending the information here in order to build the function
  // and push it into an array.
  
          resultArr.push(function(code){return (code === value) ? guestObj[code][j] : 'Secret-Code: Invalid'});
  
  //sending the array back the the main program
  return resultArr;
}
//---------------------------------

function concatString(){
    var args = Array.prototype.slice.call(arguments);
    return args.join('');
}

function yourFunctionRunner(){
    let resultVal = '';
    let args = Array.prototype.slice.call(arguments);
    for(let i=0; i<args.length; i++){
        resultVal += args[i](); 
    }
    return resultVal;
}

function makeAdder(argA){
    return function (value){return value +argA;}
}

function once(func){
    let counter=0;
    return function(){
        counter++;
        (counter===1) ? func() : console.log('limit reached');
    }
}

function createObjectWithClosures(){
    let obj={};
    obj.oneIncrementer = function(){
        let temp = (obj.getValue()) ? obj.getValue()+1 : 1; 
        obj.setValue(temp);
    };
    obj.tensIncrementer = function(){
        let temp = (obj.getValue()) ? obj.getValue()+10 : 10; 
        obj.setValue(temp);
    };
    obj.getValue = function(){
        return this.value;
    };
    obj.setValue = function(value){
        this.value = value;
    };
    return obj;
}

//----------------------------------------------------------------------------

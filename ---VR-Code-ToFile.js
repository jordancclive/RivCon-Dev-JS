


//-------------04----6.00 points----------------------------

function keyAdder(){
    let obj = this;
    let keys = Object.keys(obj);
    return keys.reduce(function(sum, elem){
      return (typeof obj[elem] === 'number') ? sum + obj[elem] : sum;
    },0);
}

//-------------05----6.00 points-(extra credit 2 pts)-------

function Laptop(year, hd){
    this.year = year;
    this.hd = hd;
}
Laptop.prototype.checkSpecs = function(){
    return 'Year: ' + this.year + ', HD: ' + this.hd;
};

function Macbook(year, hd, color){
    Laptop.apply(this, arguments);
    this.color = color;
}

function extendWithObjectCreate(construc1, construc2){
    construc1.prototype = Object.create(construc2.prototype);
    //This wasn't asked for, but I thought it "right"
    //to put it in anyway.
    construc1.prototype.constructor = construc1;
}

function extendWithNewKeyword(){
    arguments[0].prototype = new arguments[1]();
}

//-------------06----8.00 points----------------------------

function interleave(){
    /*
        ---------------------------------------------------------------------
        ******did this in repl and did not have the time to clean it up******
        ---------------------------------------------------------------------

    we need to use the arguments object.
    2 strings of equal length: Mix- add in order.
    2 strings unequal length: Mix - extra characters on the end.
    3-n number of equal length strings: Mix - add in order.
    */
    
    //coming in recursively, there will be only one argument at index: [0]
    //and it will be an array.  Need to compensate for this.
    let args;
    if (Array.isArray(arguments[0]) && arguments.length ===1){
        args = arguments[0];
    }else{
        args = Array.prototype.slice.call(arguments); 
    }  
    //args is now a usable array.
    
    let strToMix = args.length;     //shows how many args-strings exist.
    let index = 0;                  //largest index for all args
    let workingStr = '';
    
    console.log('args array: ',args);
    console.log('index at start of function: ', index, '\n'); 

    //base case - Mix the 0 index together on all the possible strings
    for(let i=0; i<strToMix; i++){
          if (args[i][0]){
            
              console.log('         args[i] in the loop, before slice: ', args[i], '\n');                
              workingStr += args[i][0];
              args[i] = args[i].slice(1);
              if (index < args[i].length) index = args[i].length;
              
              console.log('         index in base case loop: ', index);                  
              console.log('         args[i] after slice: ', args[i]);
              
          }
          console.log('\n','  workingStr after if, still in loop: ', workingStr,'\n');
    }

    console.log(' index after base case: ', index,'\n');
    console.log(' args array: ',args);
    console.log('\n','----------------------------------------');  
    console.log(' ----------recursive case coming---------');
    console.log(' ----------------------------------------','\n');
    
    
    //recursive case
    if (index>0){
        workingStr += interleave(args); 
    } 
   
    return workingStr;   
}















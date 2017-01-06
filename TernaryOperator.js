
The Ternary Operator:
*/
              var someVariable = [condition] ? [if true] : [if false]
              
              //some examples:
              
              var simpleQuestion = 2>1 ? 'yes' : 'no';
              console.log(simpleQuestion)             //result: yes
              
              //-----------------------------
              
              var dayOfMonth = 21;
              var takesOutTrash = isEven(dayOfMonth) ? 'Vin' : 'Karen';
              console.log(takesOutTrash);

              function isEven(dayOfMonth){ return dayOfMonth % 2 ===0;}

              //-----------------------------

//------------------------------

function alternate (funcInput){
    let count = 0;
    return function(){
        count++;
        (count===1) ? funcInput() : count = 0;
    }
}

function twice(funcInput){
    let count = 0;
    return function(){
        count++;
        return (count<3) ? funcInput() : 0;
    }
}

/*  More good work. 
    Interesting treatment of count in alternate, 
    using a boolean would be simpler than an integer.
*/

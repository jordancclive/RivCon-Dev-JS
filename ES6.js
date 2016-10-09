/* ES6 review
              ECMAScript 6 = 6th release of the ECMAScript language specification.

------------------------------

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

/*------------------------------


*/

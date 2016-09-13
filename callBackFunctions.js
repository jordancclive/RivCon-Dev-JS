// Call Back Functions

/*
  A high order language is one where all datatypes including functions has the ability 
  to be passed as inputs and outputs.
  
  We will be talking about array methods that take in functions as arguments....
  
  
An example:
*/

    function overseer(num, operatorFunc){
        return operatorFunc(num);
    }

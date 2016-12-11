/*
---------------------------------------------------------------------

                  All Kinds of Loops

---------------------------------------------------------------------
Overview

        Looping is a powerful part of any programming language and 
        allows you to repeat a task until a conditional expression evaluates to false. 
        
        Normally a loop has:

                Initial Value (Starting Point)
                
                Loop Body (The code that runs each pass of the loop)
                
                Conditional Expression (Evaluated each pass of the loop, when it evaluates to false the loop is exited)
                
                Counter (the variable that changes each pass of the loop)
                
        A loop is a great way to run a block of code over and over until a condition is met. 
        The Loops TestSpec will also introduce you to looping over 
        an object's keys and values using a for in loop. 
        Remember, it's not good practice to use a for in loop to traverse arrays!

        The goal of this TestSpec is to become familiar and comfortable with looping, 
        using nested loops, and looping over an object.

---------------------------------------------------------------------

For loops:                            _counter change
                                     |
                for (var i=0; i<10; i++){};
                      ^         ^
                      |         |
    counter initialization    condition for continuing

---------------------------------------------------------------------

For loops with 2 variables:

                let arr = [1,2,3,4,5,6];
                
                for (var a=0, z=arr.length-1; z>=0; a++, z--){
                        console.log(arr[a], arr[z]);
                }
            
            result:
            
                1  6
                2  5
                3  4
                4  3
                5  2
                6  1
            
            You iterated both ways at the same time.

---------------------------------------------------------------------

A For loop using a string as the counter vairable.

                for( let str = 'x'; str.length<10; str+='x'){
                      console.log(str);
                }
          
            result:
    
                x
                xx
                xxx
                xxxx
                xxxxx
                xxxxxx
                xxxxxxx
                xxxxxxxx
                xxxxxxxxx
                
  ---------------------------------------------------------------------
  
  Let's do it with an array:
  
                for(let arr = []; arr.length<5; arr.push('x'){
                    console.log(arr);
                }
              
            result:
              
                []
                ['x']
                ['x','x']
                ['x','x','x']
                ['x','x','x','x']
                
   ---------------------------------------------------------------------
   
   
   





*/

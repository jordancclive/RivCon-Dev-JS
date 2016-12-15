/*
------------------------------------------------------------------------

                      Functional_Programming

------------------------------------------------------------------------

Functional Programming is what we call a programming paradigm. 

You can think of a programming paradigm as a specific style of programming. 
Some languages make it easier to code in certain paradigms than others.

Some other programming paradigms that you've encountered include imperative programming and object oriented programming.

            Imperative Programming:   (in order commands that a program performs)(step by step)
*/            
                  var numberArray = [3,6,9], sum = 0;             //<---top down, step by step and 
                  for (var i=0; i< numberArray.length; i++) {     //    immediately performing the commands.  
                      sum += numberArray[i];
                  }
                  console.log("sum is , sum");             
/*                                                                  <---side effect.  something happens out the
                                                                        environment outside the program.
            
            Note: C is an example of a program that primarily uses an imperative programming style.      
            
            
            Object Oriented Programming (Java primarily takes advantage of this style)
            
            Objects are used to descibe "Objects" in real life. The object holds the state of, as an example, a person.
*/            
                  function Student(name){
                      this.name=name;
                      this.grades = [];
                      this.sumOfGrades = 0;
                      this.addGrade = function(grade){
                          this.grades.push(grade);
                      };
                      this.getGradeAverage(){
                          return this.sumOfGrades/this.grades.length;
                      }
                  }

                  var student = new Student("Vince");

                  student.addGrade(80);
                  student.addGrade(76);
                  student.addGrade(90);
                  student.getGradeAverage();  //returns:  82
/*

        Functional programming is characterized by pure, higher-order functions and immutable data. 

        When using functional programming, programs are designed using functions as the primary building blocks 
        instead of using objects to hold state. Functional programming also emphasizes modularity.

        For example, you could write a function that loops over an array and prints out each element. 
        Then you write another function that loops over an array and adds the elements to some variable. 
        There is now repetition in your code. Both functions loop over an array and perform some action.

        We can separate these two purposes into separate functions--

                    - a looping function that takes some function as an argument, 

                    - and a function that can be passed into the looping function. 

             We'll call our looping function forEach, and the function we pass in is called a callback.
        */

//------------------------------------------IMPORTANT-------------------------------------------------------------

//This is  not the Array method .forEach.  This is a self created method that is equivalent to the forEach method.

//----------------------------------------------------------------------------------------------------------------

                    function forEach(arr, callback) {
                       for(var i = 0; i < arr.length; i++) {
                         callback(arr[i]);
                       }
                    }

                    var arr = [1,2,3,4,5]
                    forEach(arr, function() {console.log})
                    
                    //Now we can call forEach with different functions passed in. 
                    //Now our code is more DRY (Don't Repeat Yourself) and more readable.

------------------------------------------------------------------------















*/

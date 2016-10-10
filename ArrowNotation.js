Arrow Functions:

      We can replace anonymous functions with an arrow symbol (AKA: arrow function).  '=>'
        
        - Parameters go on the left of the arrow.
        - The workings of the function go on the right of the arrow.
        
        - If the workings stay on one line then no return is needed.
        - If you use brackets, then you must use a return.
        
        //---------
        
/*-------------------------------

example:
*/
          .forEach()
          
          let arr = [1,2,3,4];
          function sumArray(arr){               
          	let sum = 0;
          	arr.forEach((elem) => sum +=elem);
          	return sum;
          }
          console.log(sumArray(arr));          

          //------------

          .filter()

          let ages = [18, 20, 21, 25, 15];
          function canDrink(arr){
              return arr.filter((elem, index) => elem>=21);	
          }
          console.log('canDrink: ', canDrink(ages));		//result: 	canDrink:  [ 21, 25 ]
          console.log('original array: : ', ages);		//result:	original array: :  [ 18, 20, 21, 25, 15 ]

          //-------------
        
          .map()
            
          let arr = [1,2,3,4];
          //This is the usual way to do a .map call back:
          let mappedArr = arr.map(function(elem){
          return elem+1;
          });
          console.log(mappedArr);		//result: [ 2, 3, 4, 5 ]
	
          //This is the arrow function way:
          let mappedArr = arr.map(elem => elem+1);
          console.log(mappedArr);		//result: [ 2, 3, 4, 5 ]

          //------------

          .reduce()

          let reduceArr = arr.reduce((prev,next)=>prev+next);
          console.log(reduceArr);   //result: 10

          //If you have to go more than one line:
          reduceArr = arr.reduce((prev,next) => {
                return prev+next});
          console.log(reduceArr);   //result: 10
        
          //------------           

          .sort()

          let people = [{name: 'corey', age: 24}, {name: 'mom', age: 70}, {name: 'dad', age: 77}, {name: 'doug', age: 30}];

          people.sort((curr, next) => (curr.age - next.age));
          console.log(people);

          //result: 	[ { name: 'corey', age: 24 }, { name: 'doug', age: 30 }, { name: 'mom', age: 70 }, { name: 'dad', age: 77 } ]         

          //---------
        
//------------------------------------

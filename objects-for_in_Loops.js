//for/in loop:

              var myObj = {};
              myObj = {names: "Vin", gender: "male", graduate: true};
              for (var k in myObj){
                  console.log(k);
                  console.log(myObj[k] + "\n");                        //<---- interpret k so must use bracket notation
              }

              /*results:

                        names
                        Vin

                        gender
                        male

                        graduate
                        true
              */

              //The "for / in" loop loops through the entire object.  The data that we are looking at are pieces of a record, namely
              //property/value (or key/value) pairs of one record which is the object itself.
              
              //A DBMS would be a collection of objects kind of like this:
              
              var person1 = { name: "Vin", gender: "M"};              //<---- objects
              var person2 = { name: "Karen", gender: "F"};
              var person3 = {name: "Ryan". gender: "M"};
              var people = [person1, person2, person3];               //<---- this array would be more of a database           


              //============================================
              function checkValue(obj, val){
	                           for (k in obj){
                                		if (obj[k] === val) return true;  //<---- looking up the value by key
                                  	}                                         //also the for/in loop the loop will cycle 
                                  	return false;                             //through all the keys looking for thi value (val)
                              }                                             	  //use k, not i ---> because we are cycling through 
                                                                            	  //keys, not indexes.
                              // sample object follows
                              var obj = {
	                                   prop1:'stuff',
                                   	 prop2: 'other',
	                                   prop3: 5,
	                                   prop4: true,
	                                   prop5: [1,2,3,4]
                                  }

              console.log(checkValue(obj, 5));                //<----true
              console.log(checkValue(obj, 'dog'));            //<----false
              
              

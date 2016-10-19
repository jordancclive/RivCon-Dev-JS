/* Objects - Referencing/Adding properties:
*/

              var emptyObj = {};                              //<---- initialize variable as an empty object
              
              emptyObj.key1 = "value1";                       //<---- assign 1 key: value pair
              emptyObj["key2"] = "value2";                    //<---- assign another value pair using []
              
              console.log(emptyObj);                          //<---- { key1: "value1", key2: "value2" }
              
              console.log(emptyObj.key1);                     //<---- "value1"
              console.log(emptyObj["key1"]);                  //<---- "value1"
              console.log(emptyObj.key2);                     //<---- "value2"
              console.log(emptyObj["key2"]);                  //<---- "value2"
              console.log(emptyObj.key3);                     //<---- undefined (since you never entered anything for a key3 property)
              
              var strKey = "key2";
              console.log(emptyObj[strKey]);                  //<---- "value2"  
                                                                      //remember that Keys (Properties) must always be a string.
                                                                      //so here is when you must use bracket notation to 
                                                                      //identify values for keys that are assigned to this 
                                                                      //variable called strKey.  ...use bracket notation when
                                                                      //you are uncertain what you are looking up. 


// Getting the keys for an Object:

let obj = {name: "Doug", age: 39, graduate: true, eyes: "Brown"};
Object.keys(obj);                                               //<----  result will be:    [ 'name', 'age', 'graduate', 'eyes' ] 


// getting an array of values for an object:

                function getValues(obj){                        //<---- pass an object
                  let vals = [];                                //<---- you are going to put the values in this array
                  for(let k in obj){                            //<---- cycle through the object
                    vals.push(obj[k]);                          //<---- for this object & every value push it into the array
                  }
                  return vals;                                  //<---- return your array with your values
                }


//removing a property from an object:

              delete emptyObj.key2;                           //<---- removing a property from an object
              console.log(emptyObj);                          //<---- { key1: "value1" }

    // another example:
    
              var anObject = {left:1, right:2};
              console.log(anObject.left);       //returns:  1
              delete anObject.left              //deletes the key value pair
              console.log(anObject.left);       // undefined
              console.log("left" in anObject);  //returns:  false
              console.log("right" in anObject); //returns:  true


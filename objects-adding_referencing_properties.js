/* Objects - Adding/Referencing properties:
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


//removing a property from an object:

              delete emptyObj.key2;                           //<---- removing a property from an object
              console.log(emptyObj);                          //<---- { key1: "value1" }



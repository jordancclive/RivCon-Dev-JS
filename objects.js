/* Objects

Look at objects as a bag of keys ("strings") and when you pull out a key (or know a particular key)(use a key), you can access 
that key's values. So we have a bunch of doors and these keys open the door to the values inside.  Unless we have that key, we
can't access the value. ......Key : Value.    .....key (===property) : Value.

As an example:  If you go to a dictionary (an object is similar to a dictionary).  You would go to a word in the dictionary 
(The Key or the property) and then you can see the definition (Value for the word).


Defining an Object:

              var dictionary = {                          <----  the braces tell JS that this variable is an object and the 
                    sunny: "cheerful, optimistic",                contents (property: value pairs) are within the curly braces.
                    design: "contrive, devise"            <----  property: "value" or "value1, value2..."
              };                                          <----  Note:  The value in this case is a string, but it can be
                                                                  whatever datatype you want it to be.  The key(property)
                                                                  must always be a string. Written either:  name: or "name":

              var person1 = {
                    name: "Alex",
                    age: 31,
                    degree: true,
                    eyes: "Brown"

              var unusualObj = {
                    array: [1,2,3,[4,5]],                     <---- an array with another nested array inside it
                    resultBoolean: true,                      <---- a boolean value
                    str: "this is a string",                  <---- a string value
                    nestedObj: {                              <---- a nested Object
                      str2: "a different string",
                      anotherObj: {                           <---- another more deeply nested object
                        key: "string value",
                      }
                    }
                  }


Adding/Referencing properties:

              var emptyObj = {};                              <---- initialize variable as an empty object
              
              emptyObj.key1 = "value1";                       <---- assign 1 key: value pair
              emptyObj["key2"] = "value2";                    <---- assign another value pair using []
              
              console.log(emptyObj);                          <---- { key1: "value1", key2: "value2" }
              
              console.log(emptyObj.key1);                     <---- "value1"
              console.log(emptyObj["key1"]);                  <---- "value1"
              console.log(emptyObj.key2);                     <---- "value2"
              console.log(emptyObj["key2"]);                  <---- "value2"
              console.log(emptyObj.key3);                     <---- undefined (since you never entered anything for a key3 property)
              
              var strKey = "key2";
              console.log(emptyObj[strKey]);                  <---- "value2"  
                                                                      remember that Keys (Properties) must always be a string.
                                                                      so here is when you must use bracket notation to 
                                                                      identify values for keys that are assigned to this 
                                                                      variable called strKey.  ...use bracket notation when
                                                                      you are uncertain what you are looking up. 


removing a property from an object:

              delete emptyObj.key2;                           <---- removing a property from an object
              console.log(emptyObj);                          <---- { key1: "value1" }


for/in loop:

              var myObj = {};
              myObj = {names: "Vin", gender: "male", graduate: true};
              for (var k in myObj){
                  console.log(k);
                  console.log(myObj[k] + "\n");                        <---- interpret k so must use bracket notation
              }

              results:

                        names
                        Vin

                        gender
                        male

                        graduate
                        true

              The "for / in" loop loops through the entire object.  The data that we are looking at are pieces of a record, namely
              property/value (or key/value) pairs of one record which is the object itself.
              
              A DBMS would be a collection of objects kind of like this:
              
              var person1 = { name: "Vin", gender: "M"};              <---- objects
              var person2 = { name: "Karen", gender: "F"};
              var person3 = {name: "Ryan". gender: "M"};
              var people = [person1, person2, person3];               <---- this array would be more of a database           












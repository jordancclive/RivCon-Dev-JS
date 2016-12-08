/*
------------------------------------------------------------------------------

                                Objects
                                
                             Things to know

------------------------------------------------------------------------------

    Remember:  Objects consist of:   Objects, Arrays, and Functions

------------------------------------------------------------------------------

Arrays are specific kinds of Objects.....
*/


        var arr = [1,2,3,4];                          //<---- defined a simple array

        arr.karen = "karen";                          //<---- just added a key/value pair (property/value)
        "karen"


        dir(arr);                                     //<---inspecting the array and we find...

              Array[4]

                0: 1                                  //<---here are the expected indexes.
                1: 2
                2: 3
                3: 4
                karen: "karen"                        //<---- we also find the property/value pair
                length: 4                             //      because arrays are also objects and can have these pairs too.
                                                      //      This prop/value will not show up in a for loop.
                __proto__: Array[0]

/*
------------------------------------------------------------------------------

Functions are objects too.  Let's take a look:
*/

        function vince(){
          console.log("hello");
        }

        vince.fullstack = "fullstack";
        "fullstack"

        dir(vince);
                function vince()

                    arguments: null
                    caller: null
                    fullstack: "fullstack"                    //<----there it is, because functions are objects too.
                    length: 0                                 //<----This prop/value is separate for the body of the function
                    name: "vince"

                    prototype: Object                         //<----Just a note that only functions have a prototype property.
                    __proto__: ()
                    [[FunctionLocation]]: VM325:1
                    [[Scopes]]: Scopes[1]

------------------------------------------------------------------------------







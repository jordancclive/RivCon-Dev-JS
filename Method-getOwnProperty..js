/*
------------------------------------------------------------------------

                        getOwnPropertyDescriptor()
                        getOwnPropertyDescriptors()                    
                        getOwnPropertyNames()
                        getOwnPropertySymbols()
                    
------------------------------------------------------------------------

The above are powerful methods.....
*/
              function hello(str){
                    return str;
              }
              hello.myProperty = 10;

              typeof hello                                //<---- function  (because this object is callable
                                                          //      it is designated as a "function" (a type of Object)
              Object.getOwnPropertyNames(hello);          //<----The properties that exist for a function returns in an array.
              
              //result:   
              //["length", "name", "arguments", "caller", "prototype", "myProperty"]
                                                                            ^
              //                                                           Here is the property that we created (above)

















*/

/*
---------------------------------------------------------------------

                    Test Driven Development
                    
         https://jasmine.github.io/2.0/introduction.html

---------------------------------------------------------------------

Overview:

        The proper workflow (and best practice) for TDD(Test Driven Development) is to first write tests, 
        then create the code that passes the tests.
        
---------------------------------------------------------------------

                    Jasmine is a test runner

---------------------------------------------------------------------

The Basics:

        The Test itself (in its own file):     --->will call it: testSpecs

        You start with defining in your head what we want the function to do first.
        
        Jasmine uses a global function called "describe".  This function sections off specs for a function to test, so we can
        start a describe block as follows:
        
                                                             *<----It takes an anonymous function as the second parameter.
                      describe('The 'welcome' function', function(){});
                                         *<----It takes some text as the first parameter
                      
                      Note:  all of the tests will go inside this anonymous function and the function will return a string.
                      
        
        What happens inside of the anonymous function is something called a unti test.  
        Unit test are designated by using the keyword:  "it".  
        
                      it('returns Welcome to Foundations', functions(){
                      
                      });
                      
                      
        Inside this unit test, we need to tell Jasmine what specifically we are testing and what the result needs to be.
        We do this by using the global function:  "expect"
        
                      it('returns Welcome to Foundations', functions(){
                            expect(welcome().toEqual(Welcome to Foundations!);
                      });
        
        ---------------------------------------------------------------------

        The actual function that does something:        ----> will call it test

                      function welcome(){
                          return "Welcome to Foundations!";
                      }



*/

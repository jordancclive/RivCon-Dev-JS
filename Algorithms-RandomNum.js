/*
-----------------------------------------------------------------

                  Generate a Random Number

-----------------------------------------------------------------
*/

function generateWinningNumber(){
    return Math.ceil(Math.random()*100);  //gives a range from 1-100
}

/*
-----------------------------------------------------------------

Generalized (2 ways):
*/

    return Math.ceil(Math.random()*(max-min + 1));        //gives a range from min to max

    return Math.floor(Math.random()*(max-min + 1))+min.

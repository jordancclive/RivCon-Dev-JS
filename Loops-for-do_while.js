// Summary discussion on loops....


//-------------------------------

/* "for" loops:

Remember to use them when you have a set amount of things to iterate through.  
Have a starting & ending position.  Typically use this when you have a flat datatype like a string or an array.
Most of the time you will be using .length (there are exceptions to this).

The structure is:

    for ( initialize the loop ; chk to continue the loop ; after each iteration update the loop ) 
                  { some code to do stuff };
*/

    for(let i=0, i< arr.length, i++){
        console.log('hello!')
    };


//-------------------------------

/* Nested "for" loops let you represent multiple dimensions of information. (aarays & objects).  As an example:

    You can wrap arrays in other arrays creating a two dimensional array:
    
    say 1 = tree and 0 = empty space and you wanted to create a grid of a park... */
    
    let park = [
            [0, 0, 0, 1],
            [0, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 1]
        ];
    
    // which is a 2 dimentional array that is 4x4.
    
    console.log(park[1][1])     //returns: 1 (or tree) (remember indexes start at 0)
    
    //if you wanted to traverse your way through the grid, you would need one loop to 
    // traverse rows and another loop for the columns, as follows:
    
    for(let i=0; i<park.length, i++){
        for(let j=0, j<park[i].length; j++){
            console.log(park[i][j]);
        }
    }                   
    //returns:  every individual spot within all of the arrays.
    

//-------------------------------   

/* "for" "in" llops go through objects:

The structure is:

    for ( var event in map ) { some code to do stuff };
    
    The 'event' = the property
    map[event] = value for the property


so if I had this data:
*/
    let park = [
        {name: 'Vinny'},
        {name: 'Corey'}
    ];
    for(let i=0; i<park.length; i++){
        for(let k in park){
            console.log(k, park[i][k]);
        }
    }                   
    //returns:  name 'Vinny'  and name 'Corey' (2 lines as it iterates)


//-------------------------------   

/* There are 2 types of "while" loops: */

                while( counter condition ){
                    some code and a change to the counter to loop some more
                };
                // This one checks the condition first
                
                do { something} while ( counter condition );
                // This will run at least once and then it checks the condition

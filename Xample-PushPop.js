/*
	PUSH POP
	
	Write your own versions of Push and Pop
	
	Push takes two arguments, an array, and a value to to that array. The function should return the array modified to include the new value.

    push([8,2,3,4], 5)
    // -> [8,2,3,4,5] 
    
    Pop is a function that manipulates an array. You can think of it like the opposite of push. It takes the last thing off the array and returns it

    var arr = [1,2,3,4];
    pop(arr)
    // -> 4

	While it returns the last thing in the array, it also removes it from the array. If you inspect `arr` after calling pop, it will be `[1,2,3]`.
*/

        function push(arr, val) {
        	arr[arr.length] = val;
        	return arr
        }
        
        
        function pop(arr) {
        	let arrTemp= [], result = arr[arr.length-1];
        	for(let i=0; i<arr.length-1; i++){
        		arrTemp[i] = arr[i]
        	}
        	arr = arrTemp;
        	console.log('array result: ', arr);
        	return result;
        }

	// alternative solution to pop:

 	function pop(arr) {
        	result = arr[arr.length-1];
        	arr.length --;
        	console.log('array result: ', arr);
        	return result;
	}

	// another alternative

			function pop(arr) {
			let result = arr.splice(arr.length-1,1);
			console.log('array result: ', arr);
			return result;
			}

			// testing results:
			var arr = [8,2,3,4];
			console.log('passing the following: ', arr);
			console.log('pop function result:', pop([8,2,3,4]));

			/*passing the following:  [ 8, 2, 3, 4 ]
			array result:  [ 8, 2, 3 ]	
			pop function result: [ 4 ]
			*/


        // testing results:
        var arr = [1,2,3,4];
        console.log('passing the following: ', arr);
        console.log('pop function result: ', pop(arr));
        
        console.log('\n');
        console.log('passing the following: ', [8,2,3,4], 5);
        console.log('push function result: ', push([8,2,3,4], 5));

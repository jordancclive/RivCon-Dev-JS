/* ATTENDENCE CHECK
Create a function that takes a weekday String as an argument. It then iterates over the classRoom array 
and returns an array of all the students present for class on that weekday   */

//instructors code:

    function classCheck(day) {
    	var classRoom = [
    	{
    		"Marnie" : [
    				{"Monday" : true},
    				{"Tuesday" : true},
    				{"Wednesday" : true},
    				{"Thursday" : true},
    				{"Friday" : true}
    			]
    	},
    	{
    		"Lena" : [
    				{"Monday" : false},
    				{"Tuesday" : false},
    				{"Wednesday" : true},
    				{"Thursday" : false},
    				{"Friday" : true}
    			]
    	},
    	{
    		"Shoshanna" : [
    				{"Monday" : true},
    				{"Tuesday" : true},
    				{"Wednesday" : false},
    				{"Thursday" : true},
    				{"Friday" : false}
    			]
    	},
    	{
    		"Jessa" : [
    				{"Monday" : false},
    				{"Tuesday" : false},
    				{"Wednesday" : false},
    				{"Thursday" : false},
    				{"Friday" : true}
    			]
    	},
    	{
    		"Ray" : [
    				{"Monday" : true},
    				{"Tuesday" : true},
    				{"Wednesday" : false},
    				{"Thursday" : false},
    				{"Friday" : true}
    			]
    	},
    	{
    		"Adam" : [
    				{"Monday" : false},
    				{"Tuesday" : true},
    				{"Wednesday" : true},
    				{"Thursday" : false},
    				{"
    
    
    	var attendance = [];
    	//loop over students
    	for(var i = 0; i < classRoom.length; i++) {                 //looping over the array
    		for (var name in classRoom[i]) {                        //classroom[i] is an object, name is the key/property
    			var attendanceArr = classRoom[i][name];             //attendanceArr = array containing the day/attended values
    			//looping over attendence array
    			for(var j = 0; j < 5; j++) {
    				if(attendanceArr[j].hasOwnProperty(day)) {      //look for the desired day...
    					if(attendanceArr[j][day] === true) {        //is that value true?
    						attendance.push(name)                   // track the name
    					}
    				}
    			}
    		}
    	}
    	return attendance;
    }
    
    classCheck('Monday')

//--------------------------------------------------------------------------
    
// This code was done after I left the course.....
    
/*
	ATTENDENCE CHECK
	
	Create a function that takes a weekday String as an argument. It then iterates over the classRoom array and returns an array of all the students present for class on that weekday
*/

function aCheck(str){
	let namesStudent = [];
	
	//get student names 
	for(let i=0; i<classRoom.length; i++){
		let obj = classRoom[i];
		let name = (Object.keys(obj)).join('');
		let inClassArr = obj[name];
		
		//Check students object for a value of true.
		for(let j=0; j<inClassArr.length; j++){
			let inClass = inClassArr[j];
			if(inClass[str] === true) namesStudent.push(name);
		}
	}
	return namesStudent;
}

aCheck("Friday");

/*
task:

	str = weekday
	
	return	An array of students present for class that weekday. 

Steps:

	get keys from the first object  =  Student names.
	
	check to see if the next objects key  (student nm obj) has a value of true.
	
	If yes, then push the name into a reuslt array.
*/ 

//---------------------------------------------------------------------------

//  This code was developed when I started the class.........

// My code is not as elegant, but does the job.
//  I needed to see what i was doing in more detail than the instructor
        
        //My code:
        
        function attendence(arr, weekday){
        	let resultArr = [], studentRecord, studentNm, daysAtAllStudents;
        	
        	// the following loop iterates thru 1 object at a time.
        	// studentRecord = object with one key/value pair
        	// studentNm = the key for studentRecord (and the student's name as a string)
        	// studentRecord[studentNm] = the value (which is an array of objects.)
        
        	for(let i=0; i<arr.length; i++){
        		studentRecord = arr[i];
        		studentNm = (Object.keys(studentRecord))[0]; 
        		
        		// I now need to iterate thru this array getting the object inside.
        		// classDayAttended equals this object
        		// This object also has 1 key/value pair.
        		// the key in this case is the week day for attendence.
        
        		for(let j=0; j<(studentRecord[studentNm]).length ; j++){
        			daysAtAllStudents = (studentRecord[studentNm])[j];
        			if (daysAtAllStudents[weekday]){
        				resultArr.push(studentNm);
        				break;
        			}
        		}
        	}
        	return resultArr;
        }
        
        //input into the function:
        //tested all permutations
        
        let day = 'Monday';
        console.log("The student's here on " + day + " are as follows:");
        console.log(attendence(classRoom, day));
        console.log('\n');
        day = 'Tuesday';
        console.log("The student's here on " + day + " are as follows:");
        console.log(attendence(classRoom, day));
        console.log('\n');
        day = 'Wednesday';
        console.log("The student's here on " + day + " are as follows:");
        console.log(attendence(classRoom, day));
        console.log('\n');
        day = 'Thursday';
        console.log("The student's here on " + day + " are as follows:");
        console.log(attendence(classRoom, day));
        console.log('\n');
        day = 'Friday';
        console.log("The student's here on " + day + " are as follows:");
        console.log(attendence(classRoom, day));
        console.log('\n');
        ""


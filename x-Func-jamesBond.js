/*  Scope issue with nested functions

varable assignments and nested functions


	bond is a function variable that is a part of the main function.
	We need to keep in mind hoisting within the function.
	
	Action 1: functions within are hoisted to the top of this function
	Action 2: variable declarations are then hoisted to the top
	Action 3: variable assignments are made in place.
	Action 4: The function runs in order
	
	Note: 
	
		1. 	These nested functions are IIFEs 
			(immediately-invoked function expressions)
	
		2. 	So they are going to be hoisted and run in order where they are placed in the function.
		   
		3. 	When a variable is passed in as an argument, 
			the parameter is a variable local to the nexted function. namely: where the 
			variable assignment is made.  If the variable exists globally, the global value is, 
			in essence, a different variable.
			
			
===============================
  Sniping Bond
  
  DO NOT RUN THE CODE YET
  
  Look at each of the Bond Villain IIFEs (immediately-invoked function expression) inside the badGuys function.
  For each villain, write a prediction about whether bond (007) will be passed into the functions scope. Finally run the functions, and consider why or why not your predictions matched.
  
  Reading: 
  IIFE : https://developer.mozilla.org/en-US/docs/Glossary/IIFE
  Scope : http://www.sitepoint.com/demystifying-javascript-variable-scope-hoisting/
=============================== */


var badGuys = function() {
	
	/* -------------------------
	...so first let's check if the variable bond is defined here. 
	Does the variable have a value?   */
	console.log('-----------------');
	console.log('main function is running now \n')
	console.log('bond should exist with no value here: ', bond,'\n');

	var bond = '007';
	
	/* -------------------------
	The variable should have a value here   */
	console.log('We just assigned a value to bond here: ', bond, '\n');
		console.log('because of hoisting this assignment will \nhappen below the nested functions\n');
	// -------------------------
	
	
	(function oddJob() {
		
		/* The parent assign '007' to the variable bond.
		so (bond === '007') should be true. */
		console.log('-----------------');
		console.log('we have entered the function oddJob \n');
		console.log('no parameters were passed')
		console.log('bond should = 007. value is: ' + bond);
		// -------------------------
		
		// The variable AgentinScope should = true
		var AgentinScope = (bond === '007');
		// Let's check to see the variable next
		console.log('Prediction: Result should be true.' + '\n');
		// -------------------------
		
		console.log("Bond in OddJob's scope->" + AgentinScope + '\n');
	})();

	
	(function goldFinger(bond) {
		
		/* bond is passed in as an argument
		It seems that because of hoisting, bond is undefined*/
		console.log('-----------------');
		console.log('we have entered the function goldFinger \n');
		console.log('bond was passed in')
		console.log('bond should be undefined. value is: ' + bond);
		// -------------------------
		
		// The variable AgentinScope should = false
		var AgentinScope = (bond === '007')
		// Let's check to see the variable next
		console.log('Prediction: Result should be false.' + '\n');
		// -------------------------
		
		console.log("Bond in Gold Finger's scope->", AgentinScope, '\n');
	})();

	
	(function scaramanga(target) {

        var target = bond;
        
        /* target is assigned the value:  bond (= the global variable)
		so it should equal 007  */
		console.log('-----------------');
		console.log('we have entered the function scaramanga \n');
		console.log('bond (= the global variable) was assigned')
		console.log('bond should be 007. value is: ' + bond);
		// -------------------------
		
		// The variable AgentinScope should = true
		var AgentinScope = (bond == '007')
		
		// Let's check to see the variable next
		console.log('Prediction: Result should be true.' + '\n');
		// -------------------------
		console.log("Bond in Scaramanga's scope", AgentinScope, '\n');
	})();
	
	
	(function drNo() {
		var bond = 'Body Double';

		/* bond is defined as a local variable here  */
		console.log('-----------------');
		console.log('we have entered the function drNo \n');
		console.log('bond should be a local variable-> Body Double')
		console.log('bond value is: ' + bond);
		// -------------------------
		
		// The variable AgentinScope should = false		
		var AgentinScope = (bond === '007');
		
		// Let's check to see the variable next
		console.log('Prediction: Result should be false.' + '\n');
		// -------------------------
		
		console.log("Bond in  Dr. No's scope", AgentinScope,  "\n");
	})();
	
	
	(function Jaws(agent) {
		var agent = bond;
		bond = 'Body Double';
		
		/* bond, the global varable is forever changed here
		to 'Body Double*/
		console.log('-----------------');
		console.log('we have entered the function Jaws \n');
		console.log('bond, the global variable, has changed \nto:-> Body Double\n')
		console.log('bond value is: ' + bond,'\n'), '\n';
		// -------------------------
		
		// The variable AgentinScope should = true
		/* agent, although incorrectly defined twice
		was assigned the orginal 007 bond value before 
		being changed globally */
		
		console.log('agent, although incorrectly defined twice\nwas assigned the orginal 007 bond value before being changed globally\n');
		var AgentinScope = (agent === '007');
		
		// Let's check to see the variable next
		console.log('Prediction: Result should be true.' + '\n');
		// -------------------------
		
		console.log("Bond in Jaws' scope", AgentinScope,  "\n");
	})();

	
	(function elChiffre() {
		var agent = bond;
		bond = 'Body Double';
		
		/* bond, was 'Body Double, so agent is also.*/
		console.log('-----------------');
		console.log('we have entered the function elChiffre \n');
		console.log('bond was:-> Body Double and now so is agent\n')
		console.log('bond value is: ' + bond), '\n';
		console.log('agent value is: ' + agent,'\n'), '\n';
		// -------------------------
		
		// The variable AgentinScope should = false
		var AgentinScope = (agent === '007');
		
		// Let's check to see the variable next
		console.log('Prediction: Result should be false.' + '\n');
		// -------------------------
		
		console.log("Bond in El Chiffre's scope", AgentinScope,  "/n");
	})();
	
}

//Run the function......
badGuys()
'';

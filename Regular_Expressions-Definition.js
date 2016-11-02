Regular Expressions:

let email = 'anEmailOfSomeone@gmail.com'

email.match(/@/);	//result:  	=> [ '@', index: 16, input: 'anEmailOfSomeone@gmail.com' ]

email.match(/e/);	//result:	=> [ 'e', index: 12, input: 'anEmailOfSomeone@gmail.com' ]
					// this only gives you the first one (it is case sensitive)
					
email.match(/e/g);	//result:	=> [ 'e', 'e' ] showing you that there are 2 'e's
					// The 'g after the '/' is a master command meaning global.
					
email.replace(/e/, 'zz');	//result:	=> 'anEmailOfSomzzone@gmail.com'
							//This replaced the first 'e' with 'zz'
							
email.replace(/e/g, 'zz');	//result:	=> 'anEmailOfSomzzonzz@gmail.com'
							//This replaced the all 'e's with 'zz', globally (do it for all the 'e's)	
							

// go to www.regex101.com for help doing this regular expression concept.
	

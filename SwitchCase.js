// Outlining "Switch"

//first an if statement:

        if (variable === 'val1') action1();
        else if (variable === 'val2') action2();
        else if (variable === 'val3') action3();
        else action4();

// The equivalent switch statement:

        switch (expr) {
          case "Oranges":
            console.log("Oranges are $0.59 a pound.");
            break;
          case "Apples":
            console.log("Apples are $0.32 a pound.");
            break;
          case "Bananas":
            console.log("Bananas are $0.48 a pound.");
            break;
          case "Cherries":
            console.log("Cherries are $3.00 a pound.");
            break;
          case "Mangoes":
          case "Papayas":
            console.log("Mangoes and papayas are $2.79 a pound.");
            break;
          default:
            console.log("Sorry, we are out of " + expr + ".");
        }
        
        console.log("Is there anything else you'd like?");
        
        
//What if you forget the "break":

        var foo = 0;
        switch (foo) {
          case -1:
            console.log('negative 1');
            break;
          case 0: // foo is 0 so criteria met here so this block will run
            console.log(0);
            // NOTE: the forgotten break would have been here
          case 1: // no break statement in 'case 0:' so this case will run as well
            console.log(1);
            break; // it encounters this break so will not continue into 'case 2:'
          case 2:
            console.log(2);
            break;
          default:
            console.log('default');
        }
        
//This is an example of a single operation sequential switch statement, 
//where four different values perform exactly the same.

        var Animal = 'Giraffe';
        switch (Animal) {
          case 'Cow':
          case 'Giraffe':
          case 'Dog':
          case 'Pig':
            console.log('This animal will go on Noah\'s Ark.');
            break;
          case 'Dinosaur':
          default:
            console.log('This animal will not.');
        }
        
//This is an example of a multiple-operation sequential switch statement, 
//where, depending on the provided integer, you can receive different output. 
//This shows you that it wil traverse in the order that you put the case statements, 
//and it does not have to be numerically sequential. In JavaScript, you can even mix in 
//definitions of strings into these case statements as well.

        var foo = 1;
        var output = 'Output: ';
        switch (foo) {
          case 10:
            output += 'So ';
          case 1:
            output += 'What ';
            output += 'Is ';
          case 2:
            output += 'Your ';
          case 3:
            output += 'Name';
          case 4:
            output += '?';
            console.log(output);
            break;
          case 5:
            output += '!';
            console.log(output);
            break;
          default:
            console.log('Please pick a number from 0 to 6!');
        }

        //Output from this example:
        
        /*
        Value	Log text
        foo is NaN or not 1, 2, 3, 4, 5 or 10	Please pick a number from 0 to 6!
        10	Output: So What Is Your Name?
        1	Output: What Is Your Name?
        2	Output: Your Name?
        3	Output: Name?
        4	Output: ?
        5	Output: !
        */

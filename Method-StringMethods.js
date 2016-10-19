//functions-string_methods.js

    str.concat(str);
    
    str.charAt(num);
                        "stringvariable".charAt(2) // result: 'r'
    
    str.indexOf(value);
    
    str.split(delimiter);
    
    str.toLowerCase();
    
    str.toUpperCase();

//------------------------------
// ES6 new string methods:
            
                    str.includes(str2);

                    str.repeat(count);

                    str.startsWith(str2);

                    str.endsWith(str2);

                    // some examples:


                    let str  = 'VinceRios';
                    let str2 = 'HelloWorld';
                    let str3 = 'ince';
                    let str4 = 'Vin';
                    let str5 = 'os';
                    let count = 2;

                    console.log('str3 in str?:',str.includes(str3));	
                    //Validates whether str contains str3
                    //result: true

                    console.log('str3 in str2?:',str2.includes(str3));	
                    //Validates whether str contains str3
                    //result: false

                    //---------

                    console.log('str repeat 2*:',str.repeat(count));	
                    //result: VinceRiosVinceRios

                    //---------								

                    console.log('str starts with str4?:',str.startsWith(str4));	
                    //Validates whether str starts with str4
                    //result: true

                    console.log('str2 starts with str4?:',str2.startsWith(str4));	
                    //Validates whether str2 starts with str4
                    //result: false

                    //---------

                    console.log('str ends with str5?:',str.endsWith(str5));	
                    //Validates whether str ends with str5
                    //result: true

                    console.log('str2 ends with str5:',str2.endsWith(str5));	
                    //Validates whether str2 ends with str5
                    //result: false

                    //---------

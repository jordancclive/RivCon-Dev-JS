/*  Process & analyzing 2 arrays
    looking at similarities and differences between the 2 arrays.
*/
        
                        function process2Arrays(arr1, arr2) {
                            /*
                            Return an array with the following elements:
                            (1) bothArrays:		Number of elements that are present in both arrays
                            (2) oneArray:		Number of elements that are present in only one array
                            (3) inArr1:			Number of remaining elements after extracting to arr1, 
                                                    the elements that are present in arr2.
                            (4) inArr2:			Number of remaining elements after extracting to arr2, 
                                                    the elements that are present in arr1.
                            */
                            //setup these above variables...
                            let bothArrays = 0, oneArray = 0, inArr1 = 0, inArr2 = 0;
                            console.log('arr1', arr1);
                            console.log('arr2', arr2);

                            //First lets see if either/both array(s) = zero length...
                            if(!arr1.length && !arr2.length) return [bothArrays, oneArray, inArr1, inArr2];
                            else if(!arr1.length){
                                oneArray = arr2.length;
                                inArr2 = arr2.length;
                                return [bothArrays, oneArray, inArr1, inArr2];
                            }else if(!arr2.length) {
                                oneArray = arr1.length;
                                inArr1 = arr1.length;
                                return [bothArrays, oneArray, inArr1, inArr2];		
                            }else{
                                //Let's loop through one of the arrays:
                                for(let i=0; i<arr1.length; i++){
                                    //Is the element in arr2?
                                    if(arr2.indexOf(arr1[i])>=0) {
                                        bothArrays+=1;
                                    }else{
                                        oneArray+=1;
                                        inArr1+=1;
                                    }
                                }

                                //Lets loop with the other array:
                                for(let i=0; i<arr2.length; i++){
                                    //Is the element in arr1?
                                    if(arr1.indexOf(arr2[i])<0) {
                                        oneArray+=1;
                                        inArr2+=1;
                                    }
                                }
                            }
                            return [bothArrays, oneArray, inArr1, inArr2];
                        }
                        arr1 = [0, 35, 17, 6, 7, 10, 11, 46, 47, 16, 49, 20, 14, 23, 25, 26, 29]; 
                        arr2 = [0, 6, 17, 42, 43, 47, 16, 49, 50, 21, 28, 30];
                        //result: [6, 17, 11, 6]);
                        process2Arrays(arr1,arr2);

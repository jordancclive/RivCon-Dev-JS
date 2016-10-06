/*  Process & analyzing 2 arrays
    looking at similarities and differences between the 2 arrays.
*/
        
        function process2Arrays(arr1, arr2) {
          let bothArrays = 0, oneArray = 0, inArr1 = 0, inArr2 = 0;
          let doneWithArr1=false;
          //loop through Array 1
          for(let i=0; i<arr1.length; i++){
            //loop through Array 2
            for(let j=0; j<arr2.length; j++){


              console.log('Arr1:',arr1[i],'Arr2:',arr2[j]);
              console.log('Before:      ','bothArrays:',bothArrays,'oneArray:',oneArray,'inArr1:',inArr1,'inArr2:',inArr2);
              if(doneWithArr1){
                  inArr2+=1;
                  oneArray+=1;
              }else{
                if (arr1[i] === arr2[j]){
                  bothArrays+=1;
                  arr2.shift();
                  if (i !== arr1.length-1) break;
                  else doneWithArr1 = true;
                }else if (arr1[i]>arr2[j]){
                  inArr2+=1;
                  oneArray+=1;
                }else{
                  inArr1+=1;
                  oneArray+=1;
                  if (i !== arr1.length-1) break;
                  else{
                    doneWithArr1 = true;
                    inArr2+=1;
                    oneArray+=1;
                  }
                }
              }
            console.log('After(in j):','bothArrays:',bothArrays,'oneArray:',oneArray,'inArr1:',inArr1,'inArr2:',inArr2);
            }
          console.log('After(in i): ','bothArrays:',bothArrays,'oneArray:',oneArray,'inArr1:',inArr1,'inArr2:',inArr2);
          }
            return [bothArrays, oneArray, inArr1, inArr2];
        }
        arr1 = [1, 2 ,3,4, 5 ,6 ,7 ,8 ,9];
        arr2 = [2, 4, 6, 8, 10, 12, 14];			//[4, 8, 5, 3]
        process2Arrays(arr1,arr2);

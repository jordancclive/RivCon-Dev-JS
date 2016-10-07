//Selection Sort  - O(n^2)

function selectionSort(arr){
    for(let i=0; i<arr.length-1; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]>arr[j]){
                let temp = arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr;
}

selectionSort([4,2,3,1]);

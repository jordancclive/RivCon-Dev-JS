//classic sum of squares in a list.  The list may have nested entries.

function SumSquares(l){
    let resultSumSq = 0;
    if(!Array.isArray(l)) return (l*l);
    else{
        for(let i=0; i<l.length; i++){
            if(!Array.isArray(l[i])) resultSumSq += (l[i]*l[i]);
            else resultSumSq += SumSquares(l[i]); 
        }
    }
    return resultSumSq;
}

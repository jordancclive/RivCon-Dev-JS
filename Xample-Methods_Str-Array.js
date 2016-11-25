//remove the first & last character

function removeChar(str){
 return (str.length >2) ? str.split('').slice(1,-1).join('') : str;
};

removeChar('vinny');

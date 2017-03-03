/*
---------------------------------------------------------------

              Index Table in Memory

---------------------------------------------------------------

console.clear();

const users = ['Vin', 'Karen', 'Gary', 'Roy', 'Scott', 'Greg', 'Victor', 'Val'];
  
const map = users.reduce(function (resultObj, user) {
    let firstLtr = user.slice(0, 1);
    resultObj[firstLtr] = typeof resultObj[firstLtr] !== 'undefined' ? resultObj[firstLtr] +1 : 1;
    return resultObj;
}, {});





















*/

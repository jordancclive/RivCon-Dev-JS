//Constructor function for Mammal:

function Mammal(name){
    this.name=name;
    this.offspring=[];
}
//---------------------------
//Methods for Mammal follows:

Mammal.prototype.sayHello = function (){
   return "My name is " + this.name + "!";
}
Mammal.prototype.haveBaby = function (){
    let temp = new Mammal('Baby Joe');
    this.offspring.push(temp);
    return temp;
}
//---------------------------
//now about cats:

//The constructor function
function Cat(name, color){
    Mammal.call(this, name);
    this.color = color;
}
//---------------------------
//Link cats to Mammals:
Cat.prototype = Object.create(Mammal.prototype);
Cat.prototype.constructor = Cat;
//---------------------------
//Link Cat methods:
Cat.prototype.haveBaby = function (color){
    let temp = new Cat('Baby Garfield', color);
    this.offspring.push(temp);
    return temp;
}


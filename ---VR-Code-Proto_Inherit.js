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
    let child = new Mammal();
    child.name = 'Baby ' + this.name;
    this.offspring.push(child);
    return child;
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
    let child = new Cat('Baby ' + this.name, color);
    this.offspring.push(child);
    return child;
}


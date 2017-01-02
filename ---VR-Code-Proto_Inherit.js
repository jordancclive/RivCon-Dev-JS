/*
-----------------------------------------------------------------

        complicated methods.

-----------------------------------------------------------------
*/
function MyEventEmitter(){
    this.events = {};
}
MyEventEmitter.prototype.addListener = function(eventInput, callFunc){
    let resultArr = (this.events[eventInput]) ? this.events[eventInput]: [];
    resultArr.push(callFunc);
    this.events[eventInput] = resultArr;
};
MyEventEmitter.prototype.emit = function(){
    let args = Array.prototype.slice.call(arguments);
    if(args.length >2){
        this.events[args[0]][0].apply(null,[args[1]]);
        this.events[args[0]][1].apply(null,[args[2]]);
    } else{
        let eventArr =  this.events[args[0]];
        for (let k in eventArr){
            eventArr[k].apply(null,[args[1]]);
        }
    }
};

/*
-----------------------------------------------------------------

        Prototpye chain:    changing the chain

-----------------------------------------------------------------
*/
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
//Link cats to Mammals:                         //<--- breaking the prototype chain
Cat.prototype = Object.create(Mammal.prototype);
Cat.prototype.constructor = Cat;
//---------------------------
//Link Cat methods:
Cat.prototype.haveBaby = function (color){
    let child = new Cat('Baby ' + this.name, color);
    this.offspring.push(child);
    return child;
}


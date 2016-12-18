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

/*
---------------------------------------------------------------------

                Computer simple game - Pokemon
---------------------------------------------------------------------                
 */           
            
function Pokemon(name, health, attackBonus){
    this.name=name;
    this.health=health;
    this.attackBonus=attackBonus;
}

//Fixed after comments from mentor.  
//      Methods should be separate from the constructor function.
//      isDefeated return changed as illustrated.

Pokemon.prototype.biteAttack = function(){
    return this.attackBonus +2;
}
Pokemon.prototype.isDefeated = function(){
    return this.health <=0;
}

function simulateBattle(pokemon1, pokemon2, firstMoveName){
    do {
        if (firstMoveName === pokemon1.name) pokemon2.health -= pokemon1.biteAttack(); 
        else pokemon1.health -= pokemon2.biteAttack();
        firstMoveName = (firstMoveName === pokemon1.name) ? pokemon2.name : pokemon1.name; 
    } while((pokemon1.isDefeated() === pokemon2.isDefeated());
    
    if (pokemon1.isDefeated()) return pokemon2.name + " Wins!";
    else return pokemon1.name + " Wins!";
}
            


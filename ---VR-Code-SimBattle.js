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



/*
Nice use of ternary operators. 

isDefeated can actually be written more simply since a Javascript evaluation will return true or false:

Pokemon.prototype.isDefeated = function(){ 
    return this.health <= 0; 
};

Instead of while((!Pokemon1.isDefeated()) && (!Pokemon2.isDefeated())), 
you can write while(Pokemon1.isDefeated() === Pokemon2.isDefeated()) since 'false === false' returns true;
*/

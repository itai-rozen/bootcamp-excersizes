function Pokemon(pokemonName, pokemonType, pokemonAttackList){
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
}

const squirtle = new Pokemon('squirtle', 'water',['whiplash','golden shower'])
const charmander = new Pokemon('charmander', 'fire', ['chafing balls','heart burn'])
const pikachu = new Pokemon('pikachu','electricity',['lightning bolt','Tlat Fazi'])
Pokemon.prototype.callPokemon = function(){
    console.log(`I choose you, ${this.name}!`)
}

Pokemon.prototype.attack = function(n){
    console.log(`the attack you chose: ${this.attackList[n]}`)
}
squirtle.callPokemon()
charmander.callPokemon()
pikachu.callPokemon()
pikachu.attack(1)
charmander.attack(0)
squirtle.attack(1)
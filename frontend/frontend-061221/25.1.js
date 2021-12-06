
const hero = {
    health: 5,
    power: 68,
    getStrength : function() {
        if (this.health <= 5) {
            return this.power - 10
        } else return this.power;
    }
}


function whoIsStronger(getStrength) {
    const myStrength = 82;
    console.log(getStrength())
    if (getStrength() < myStrength) {
        return "I am stronger";
    } else return "You are stronger";
}
console.log(whoIsStronger(hero.getStrength));
// when calling the function, the 'this' keyword refers to the global scope and not the object scope, thus
// returning undefined. if we want 'this' to point to the hero object we need to bind the function
// to the hero object
console.log(whoIsStronger(hero.getStrength.bind(hero)));

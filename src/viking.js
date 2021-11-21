// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health
    this.strength = strength
  }

  attack(){
    return this.strength;
  }
  receiveDamage(damage){
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super()
    this.name = name
    this.health = health
    this.strength = strength
  }

  receiveDamage(damage){
    this.health = this.health - damage;
    if (this.health > 0){
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry(){
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  

  receiveDamage(damage){
    this.health = this.health - damage;
    if (this.health > 0){
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor(){
    this.vikingArmy = []
    this.saxonArmy = []
  }
  addViking(VikingObject){
    this.vikingArmy.push(VikingObject);
  }

  addSaxon(SaxonObject){
    this.saxonArmy.push(SaxonObject);
  }
  vikingAttack(){
    const randomSaxon = Math.floor(this.saxonArmy.length * Math.random())
    const randomViking = Math.floor(this.vikingArmy.length * Math.random())
    const saxonDamage = this.vikingArmy[randomViking].attack()
    const resultDamage = this.saxonArmy[randomSaxon].receiveDamage(saxonDamage)
    this.saxonArmy = this.saxonArmy.filter((saxonSoldier)=>{
      return saxonSoldier.health > 0;
    })

    return resultDamage;
  }
  saxonAttack(){
    const randomSaxon = Math.floor(this.saxonArmy.length * Math.random())
    const randomViking = Math.floor(this.vikingArmy.length * Math.random())
    const vikingDamage = this.saxonArmy[randomSaxon].attack()
    const resultDamage = this.vikingArmy[randomViking].receiveDamage(vikingDamage)
    this.vikingArmy = this.vikingArmy.filter((vikingSoldier)=>{
      return vikingSoldier.health > 0;
    })

    return resultDamage;
  }
  showStatus(){
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length === 0){
      return `Saxons have fought for their lives and survived another day...`;
    } else if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1){
      return `Vikings and Saxons are still in the thick of battle.`
    }
  }

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}

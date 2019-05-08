/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
'use strict';

function GameObject(charAttrs) {
  this.createdAt = charAttrs.createdAt;
  this.name = charAttrs.name;
  this.dimensions = charAttrs.dimensions;
}

// creating the detroy() method and attaching to prototype
GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game. :( Pwned.`;
};

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(statsAttrs) {
  GameObject.call(this, statsAttrs); /* this calls down props and maps them? */
  this.healthPoints = statsAttrs.healthPoints;
}

// inhertance of GameObject properties.
CharacterStats.prototype = Object.create(GameObject.prototype);
// Creating .takeDamage() method and attachign to prototype.
CharacterStats.prototype.takeDamage = function takeDamage() {
  return `${this.name} took damage!!!`;
};

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(infoAttrs) {
  CharacterStats.call(this, infoAttrs); /* same note */
  this.team = infoAttrs.team;
  this.weapons = infoAttrs.weapons;
  this.language = infoAttrs.language;
}

// Inherting from CharacterStats
Humanoid.prototype = Object.create(CharacterStats.prototype);
// Creating the greet() method and attaching it to the prototype
Humanoid.prototype.greet = function() {
  return `${this.name} offers an enthusiastic greeting in ${this.language}!`;
};

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: ['Staff of Shamalama'],
  language: 'Common Tongue'
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: ['Giant Sword', 'Shield'],
  language: 'Common Tongue'
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: ['Bow', 'Dagger'],
  language: 'Elvish'
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(archer.weapons);
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
function Villain(villainAttrs) {
  Humanoid.call(this, villainAttrs);
  this.name = villainAttrs.name;
}

function Hero(heroAttrs) {
  Humanoid.call(this, heroAttrs);
  this.name = heroAttrs.name;
}

const villain = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 3,
    width: 25,
    height: 44
  },
  healthPoints: 100,
  name: 'Beavis',
  team: 'Burger World',
  weapons: ['Useless Spatula'],
  language: 'Gibberish'
});

const hero = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 3,
    width: 25,
    height: 44
  },
  healthPoints: 50,
  name: 'Charlie Sheen',
  team: 'Team #Winning',
  weapons: ['Terrible Sword of Destruction'],
  language: 'Tigrese'
});

Villain.prototype.subtractHealth = function() {
  if (this.healthPoints <= 0) {
    return `You're done dude! You lose!`;
  } else {
    return `You're alive and well, fight on sir!`;
  }
};

Hero.prototype.takeDmg = function() {
  if (this.healthPoints <= 0) {
    return `You're done dude! You lose!`;
  } else {
    return `You're alive and well, fight on sir!`;
  }
};

console.log(villain);
console.log(villain.subtractHealth());

console.log(hero);
console.log(hero.takeDmg());
// console.log(hero.subtractHealth());
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

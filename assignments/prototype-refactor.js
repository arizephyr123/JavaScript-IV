/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

// ## `prototype-refactor` - Take existing code and make it modern.

// * You're going to work with your prototypes assignment you built out yesterday.
// * `Challenge:` **Convert** all of your constructors into ES6 Classes using the `class` and `extends` keywords. You should be able to run your same logs and they should build out the proper expected behaviors.

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

// function GameObject(attributes) {
//     this.createdAt = attributes.createdAt;
//     this.name = attributes.name;
//     this.dimensions = attributes.dimensions;
//   }

//   GameObject.prototype.destroy = function () {
//     return `${this.name} was removed from the game.`;
//   };
//    //stretch prototype function
//    GameObject.prototype.status = function () {
//     return `${this.name} has ${this.healthPoints} Health Points.`;
//   };

class GameObject {
  constructor(attributes) {
    this.CreatedAt = attributes.createdAt;
    this.name = attributes.name;
    this.dimensions = attributes.dimensions;
  }
  destroy() {
    return `${this.name} was removed from the game.`;
  }
  status() {
    return `${this.name} has ${this.healthPoints} Health Points.`;
  }
}

/*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
// function CharacterStats(attributes) {
//   this.healthPoints = attributes.healthPoints;
//   this.name = attributes.name;
//   GameObject.call(this, attributes);
// }

// CharacterStats.prototype = Object.create(GameObject.prototype);

// CharacterStats.prototype.takeDamage = function() {
//   return `${this.name} took damage.`;
// };

class CharacterStats extends GameObject {
  constructor(attributes) {
    super(attributes);
    this.healthPoints = attributes.healthPoints;
  }
  takeDamage() {
    return `${this.name} took damage.`;
  }
}

/*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */

// function Humanoid(attributes) {
//   this.team = attributes.team;
//   this.weapons = attributes.weapons;
//   this.language = attributes.language;
//   CharacterStats.call(this, attributes);
// }

// Humanoid.prototype = Object.create(CharacterStats.prototype);

// Humanoid.prototype.greet = function() {
//   return `${this.name} offers a greeting in ${this.language}.`;
// };

class Humanoid extends CharacterStats {
  constructor(attributes) {
    super(attributes);
    this.team = attributes.team;
    this.weapons = attributes.weapons;
    this.language = attributes.language;
  }
  greet(){
    return `${this.name} offers a greeting in ${this.language}.`;
     };
}

// //converting Stretch
// class Villian extends Humanoid(attributes){
//     constructor(attributes){
//     super(attributes);
//     }
//     hit(){
//         return `${this.name} cast a Cruciatus Curse.`;
//     }
// }

// class Hero extends Humanoid(attributes){
//     constructor(attributes){
//     super(attributes);
//     }
//     defend(){
//         return `${this.name} has defended an attack!`;
//     }
// }

// //create Object instances
// const goodWizard = new Hero({
//     createdAt: new Date(),
//     dimensions: {
//       length: 1,
//       width: 2,
//       height: 4
//     },
//     healthPoints: 10,
//     name: "Harry Potter",
//     team: "Gryffindor,",
//     weapons: ["Magic Wand"],
//     language: "English"
//   });
  
//   const evilWizard = new Villian({
//     createdAt: new Date(),
//     dimensions: {
//       length: 2,
//       width: 2,
//       height: 2
//     },
//     healthPoints: 15,
//     name: "Lord Voldemort",
//     team: "Slytherin",
//     weapons: ["Magic Wand"],
//     language: "English"
//   });
  
//   console.log("****Stretch actions below****");
//   console.log(evilWizard.hit()); //
//   console.log(goodWizard.defend()); //
//   console.log(goodWizard.status());
//   console.log(evilWizard.status());
//   console.log(archer.status());
//   console.log(swordsman.status());
//   console.log(mage.status());
  
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
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


//==================
//Below to end of doc are notes/ pre-converted material from JSIII project

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

//vilian constructor
// function Villian(attributes) {
//   Humanoid.call(this, attributes);
// }

// Villian.prototype = Object.create(Humanoid.prototype); //passing Humanoid properties

// //villian function
// Villian.prototype.hit = function() {
//   return `${this.name} cast an Alohamorah spell.`;
//};



//==================
//Hero Constructor:
// function Hero(attributes) {
//   Humanoid.call(this, attributes);
// }

// Hero.prototype = Object.create(Humanoid.prototype);
// Hero.prototype.defend = function() {
//   return `${this.name} has defended an attack!`;
// };

// //create Object instances
// const goodWizard = new Hero({
//   createdAt: new Date(),
//   dimensions: {
//     length: 1,
//     width: 2,
//     height: 4
//   },
//   healthPoints: 10,
//   name: "Harry Potter",
//   team: "Gryffindor,",
//   weapons: ["Magic Wand"],
//   language: "English"
// });

// const evilWizard = new Villian({
//   createdAt: new Date(),
//   dimensions: {
//     length: 2,
//     width: 2,
//     height: 2
//   },
//   healthPoints: 15,
//   name: "Lord Voldemort",
//   team: "Slytherin",
//   weapons: ["Magic Wand"],
//   language: "English"
// });

// console.log("****Stretch actions below****");
// console.log(evilWizard.hit()); //
// console.log(goodWizard.defend()); //
// console.log(goodWizard.status());
// console.log(evilWizard.status());
// console.log(archer.status());
// console.log(swordsman.status());
// console.log(mage.status());

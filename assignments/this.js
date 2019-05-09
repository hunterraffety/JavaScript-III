/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. The initial state of 'this' when called is dependent on the environment it's being called and whether or not 'use strict' is implemented. If it's not, it's called on the browser window. If it's in a node environment, then it's called on the Global environment, which I assume only exists in node.js applications.
 *
 * 2. Implicit binding means that whenever a function is called which may be located within the object, or outside of it if referenced inside of the object as a value on a property, it will automatically belong to the object it's attached to with a period.
 *
 * 3. A new binding is created when we set up a template object that will allow us to duplicate it and it's properties (and even extend them by adding to the prototype) on various instances that we create.
 *
 * 4. Explicit binding is intitiated using .bind, .call, and .apply. It allows us to specifically attach what that object is set or attached to.
 *
 *
 * write out a code example of each explanation above
 */

// Principle 1 - attaching this to a window
// code example for Window Binding
function windowBinding() {
  return this;
}

// function invokation
windowBinding();

console.log(this);

// Principle 2 -- creating an implicit binding when a method created within a function is attached to an object on the left side of our .
// code example for Implicit Binding
const myObj = {
  greeting: 'Hello',
  sayHello: function(name) {
    return `${this.greeting} my name is ${name}`;
  }
};

console.log(myObj.sayHello('Hunter'));

// obj is the parameter
const sayNameFunc = obj => {
  // creating the sayName method on this object
  obj.sayName = function() {
    return `Hello, my name is ${this.name}`;
  };
};

// objects we are creating that gets attached to the sayName function
const me = { name: 'Hunter' };
const you = { name: 'Turkey' };

// passing in the parameters of "me" and "you" when executing the function sayNameFun
sayNameFunc(me);
sayNameFunc(you);

// invokation of our functions on the objects we created
console.log(me.sayName());
console.log(you.sayName());

// Principle 3 -- contructor functions and New binding
// code example for New Binding
function Voter(name) {
  this.voterName = name;
  this.desire = "I'd like to register to vote, my name is ";
  this.speak = () => {
    return `${this.desire} ${this.voterName}.`;
  };
}

const hunter = new Voter('Hunter');
const anotherDude = new Voter('Turkey');

hunter.speak();
anotherDude.speak();

console.log(hunter.speak());
console.log(anotherDude.speak());
// Principle 4
// code example for Explicit Binding
function Musician(arch) {
  this.name = arch.name;
  this.instrument = arch.instrument;
  this.yearsPlaying = arch.yearsPlaying;
  this.bandName = arch.bandName;
  this.tellDetails = function() {
    return `Heya, what's up? I play in ${this.bandName}`;
  };
}

const newMusician = new Musician({
  name: 'Hunter',
  instrument: 'Drums',
  yearsPlaying: 15,
  bandName: 'Turkeys on the Run'
});

console.log(newMusician);

console.log(newMusician.tellDetails());

Musician.prototype.tellDetail = function() {
  return `Heya, my name is ${this.name}`;
};

const newMusician2 = new Musician({
  name: 'Hunterasdasdsadasdasd',
  instrument: 'Drums',
  yearsPlaying: 15,
  bandName: 'Midnight Sun Run'
});

const newMusician3 = new Musician({
  name: 'asdkjlasdljkasdjlkdas',
  bandName: "Judge Judy's Subjects"
});

console.log(newMusician.tellDetail());
console.log(newMusician2.tellDetail());
console.log(newMusician3.tellDetail());

console.log(newMusician.tellDetails());
console.log(newMusician2.tellDetails());
console.log(newMusician3.tellDetails());

console.log(newMusician3.tellDetail.apply(newMusician2));
console.log(newMusician.tellDetail.apply(newMusician3));
console.log(newMusician3.tellDetail.apply(newMusician));

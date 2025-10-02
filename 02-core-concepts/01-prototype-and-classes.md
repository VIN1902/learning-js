# What is Prototype
- Each datatype/datastructure in JS is associated with a built-in global constructor function. (Array, Object, Function)
    - ex: let arr = [] is derived from a global Array constructor
    - In ES6 terms think of it as instances of a class

- These global objects have some functionalities defined in them so that each instance derived from it 'inherits' those same funcitonalities.
    - ex: arr.map() is coming from map function defined in Array{}

- Each of these global objects have a key(property) called 'prototype' which stores these functions.

- whenver you create an instance of them, JS automaticaly sets '__proto__' that stores all the functions from its parent
    - arr.__proto__ = Array.prototype (this link enables inheritance)
    - When you call arr.map(), JavaScript looks up map in arr itself, and if it doesn't find it, it checks arr.__proto__ (which points to Array.prototype).

- So every instance has a __proto__ property (a reference, not a copy) that links to its global object's (constructor function) .prototype.

- This kind of inheritance is called prototype chain.
    - if you want to break chain: arr.__proto__ = null
    - At the top of the chain is the global Object constructor. Every other built-in constructor function’s prototype eventually links to Object.prototype.

- In coding standard we prefer former instead of latter:
    1. Object.getPrototypeOf(arr) === Array.prototype
    2. arr.__proto__ === Array.prototype

## Clarifications
- In ES5 and before, Constructor functions were the main method for object instantiation and inheritance.
    - ES6 classes are just a cleaner way to do the same thing.
- Brendan Eich invented the concept of constructor functions in JavaScript.
    - Global constructor functions (Array, Object, Function, etc.) were later formalized and improved by ECMAScript in later versions.
- 'new', 'constructor functions' and 'prototype inheritance' were part of JavaScript since its creation in 1995.

# What is constructor function
- A constructor function is simply a regular function used to create objects following a specific structure.
- Instead of returning a value manually, a constructor function is used with the new keyword to create an instance (object).
```js
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

console.log(person1.name); // Alice
console.log(person2.age);  // 30
```

# How 'new' works
- In simple terms it allocates a new memory space in heap and then return its address
- In depth:
    1. Creates a new empty object {}
    2. Sets the prototype of this object to the constructor function’s .prototype.
    3. Calls the constructor function, passing this as the newly created object.
    4. Returns the new object (unless the function explicitly returns a different object).

# Achieve inheritance
```js
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding a method to the prototype
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

const person4 = new Person("Dave", 35);
person4.greet(); // Hello, my name is Dave
```

# In ES6, Classes were introduced to sugar-coat contructor functions and prototype inheritance
```js
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const person6 = new PersonClass("Hank", 55);
person6.greet(); // Hello, my name is Hank
```
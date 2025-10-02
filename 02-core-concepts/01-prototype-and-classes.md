# What is Prototype
- Each datatype/datastructure in JS is associated with a built-in global constructor function. (Array, Object, Function)
    - ex: 'let arr = []' is short hand for 'let arr = new Array()'. So its ultimately created from Array constructor.
    - In ES6 terms think of it as instances of a class.

## Prototypes provide functionality
- These global objects have some functionalities defined in them so that each instance derived from it 'inherits' those same functionalities.
- ex: arr.map() is coming from map function defined in Array.

## .prototype vs .__proto__ 
- Constructor functions (like Array) have a .prototype property, which stores shared methods. Instances don’t have .prototype; they have __proto__ pointing to that prototype.

- Whenver you create an instance of them, JS automaticaly sets '__proto__' that links to .prototype property of parent which has the methods defined for sharing.
- arr.__proto__ = Array.prototype (this link enables inheritance)
- When you call arr.map(), JavaScript looks-up 'map' method in arr itself, and if it doesn't find it, it checks arr.__proto__, which points to Array.prototype and there does exits a map() method.

## Prototype chain
- So every instance has a __proto__ property (a reference, not a copy) that links to its global object's (constructor function) '.prototype' property.

- This kind of inheritance is called prototype chain.
- if you want to break chain: arr.__proto__ = null (not used in real-code)
- At the top of the chain is the global Object constructor. Every other built-in constructor function’s prototype eventually links to Object.prototype. This is the root.

## Prefered syntax
- In coding standard we prefer former instead of latter:
    1. Object.getPrototypeOf(arr) === Array.prototype
    2. arr.__proto__ === Array.prototype
- __proto__ is non-standard legacy (now standardized only for web compat). Object.getPrototypeOf is the preferred modern way.

## Prototype tools
1. Object.create() - Lets you create a new object with a specific prototype, without calling a constructor function.
```js
const parent = { greet() { console.log("hi"); } };
const child = Object.create(parent);
child.greet(); // "hi"
```
2. Changing prototypes dynamically
```js
Object.setPrototypeOf(obj, newProto)
```
3. hasOwnProperty vs. inherited props - Useful for distinguishing between properties directly on an object vs. coming from the prototype.
```js
arr.hasOwnProperty("map"); // false (comes from Array.prototype)
```

## Clarifications
- In ES5 and before, Constructor functions were the main method for object instantiation and inheritance.
    - ES6 classes are just a cleaner way to do the same thing.
- Constructor functions have been part of JS since its creation by Brendan Eich in 1995.
    - Global constructor functions (Array, Object, Function, etc.) were later formalized and improved by ECMAScript in later versions.
- 'new', 'constructor functions' and 'prototype inheritance' were part of JavaScript since its creation in 1995.

___
***
---

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

## How 'new' works
- In simple terms it allocates a new memory space in heap and then return its address
- In depth:
    1. Creates a new empty object {}
    2. Sets the prototype of this object to the constructor function’s .prototype.
    3. Calls the constructor function, passing this as the newly created object.
    4. Returns the new object (unless the function explicitly returns a different object).

## Achieve inheritance
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

// The chain
console.log(person4.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null
```

## In ES6, Classes were introduced to sugar-coat contructor functions and prototype inheritance
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

## Relevance of constructor functions
- Everything (datatypes/datastructures) in JS is inheriting using prototypes, from global constructor functions. (Promises, Array, Date, Function, etc).
- all the global constructor functions are inheriting from a global 'Object' constructor function.
- so kind of we can say 'everything in js is an object'.
    - primitives like 42, true, "abc" are not objects but have object wrappers (Number, Boolean, String) so they behave like objects when accessed.
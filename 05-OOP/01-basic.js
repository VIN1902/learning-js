// Object literal = the base unit in JS. It is collection of properties and methods.

let myObj = {
    name: "Vikas",
    age: 23,
    programming: function () {
        console.log(`${this.name} can code.`)
    }
}

// this = current context, decided at call time by base-object

// usecase: myObj.programming() or console.log(myObj.name)

// Problem with literals = what about situation where i need to make more objects which all have the same properties and methods but different values for each.

// Constructor Functions = make a general blueprint and then use it to make new seperate instances/copy to update/add new properties/methods.

function Person(name, age) {
    this.name = name 
    // could be written as name = name but that's confusing which is parameter and which is function's (or later instance's) variable/property.
    // so use this to specify the context of variable name, who does it belong to at call time.
    this.age = age

    this.programming = function () {
        console.log(`${this.name} can code.`)
    }

    return this
}

// let personOne = Person("vikas", 23)
// console.log(personOne)
// without the 'new' keyword 'this' is not binded to an empty object (created for this instance) and instead is binded to undefined in strict and global object (window/{}) in non-strict.
// so undefined.name = name is a TypeError (in strict mode) otherwise log just prints the global object assigned to 'this' (in non-strict)

let personOne = new Person("Vikas", 23)
console.log(personOne)

// abstraction, polymorphism and encapsulation is already achieved with constructor function and new keyword.

/*
new keyword: (was always there in JS even before ES6 classes)
1. create an empty new object.
2. new object is linked to the prototype property of constructor function (access to its propertis/methods).
3. constructor function is called with arguments and 'this' is bound to newly created object.
4. return the new object.
*/

// console.log(personOne istanceOf Person)

/*
JS BEHAVIOUR is prototypal chaining. It keeps on looking for more data in the parent object's properties/methods.
everything chains up to Object constructor function and beyond is Null. (functions, strings, array, etc.)
read more in previous notes.
*/

// inheritance

Object.prototype.myProperty = function () {
    console.log(this)
    console.log(`I injected a property in the global constructor function.`)
}
let carObj = {car: "i10"}
carObj.myProperty()
let carArr = ['toyota', 'kia', 'bmw']
carArr.myProperty()
"vikas".myProperty()

let user = {
    id: 123,
    work: 'basic'
}

let teacher = {
    moreWork: "teaching",
    __proto__: user
}

let janitor = {
    moreWork: "cleaning"
}

janitor.__proto__ = user

console.log(user.id)
console.log(teacher.id)
console.log(janitor.id)

/*
before:
janitor.__proto__ = Object.prototype (default)
so => janitor --> Object.prototype --> null

after:
janitor.__proto__ = user (i made prototype of janitor point directly to user object)
but user.__proto__ = Object.prototype
so => janitor --> user --> Object.prototype --> null

gotcha:
janitor.__proto__ = user.prototype (converts to janitor.__proto__ = undefined), as '.prototype' property is only available to constructor funtions not regular objects.
janitor.__proto__ = user.__proto__ (converts to janitor.__proto__ = Object.prototype cause user.__proto__ === Object.prototype), skips the inhertance from user object.

i could have done: user.__proto__ = null, so that janitor stops inheritance at user object only.

modern syntax is:
Object.setPrototypeOf(janitor, user)
*/
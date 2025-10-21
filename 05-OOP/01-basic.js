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

    return this // implicitly this executes even if you don't write it.
}

// let personOne = Person("vikas", 23)
// console.log(personOne)
// without the 'new' keyword 'this' is not binded to an empty object (created for this instance) and instead is binded to undefined (strict mode is default in node, otherwise binded to window/global node object in non-strict mode)
// so undefined.name = name is a TypeError

let personOne = new Person("Vikas", 23)
console.log(personOne)

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
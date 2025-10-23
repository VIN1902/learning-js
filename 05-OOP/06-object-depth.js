// can Math.PI value be changed? No its contant but dive deeper.

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor)
/*
Output:
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}

These keys (writable,enumerable,etc.) are so hard-coded withing c++ engine and checks that you can't override these. Which further prevents you from doing something like:
Math.PI = 69 // no error just prints actual value.
*/

// Can we have these immutable properties for our own objects that we create?

/*
Side Note:
- 'new' keyword actually has the 'constructor function'. The function which you write after it like new fnx() is just a normal function.
- 'Object.create()' similarly has the 'factory function'. Which creates a new object for you. Just another method to create object than just using object-literals.
*/

const myObj = {
    name: "Vikas Indora",
    age: 23,

    learnJS: function() {
        return `can learn JS`
    }
}

console.log(Object.getOwnPropertyDescriptor(myObj, "name"))
/*
Output:
{
  value: 'Vikas Indora',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

Object.defineProperty(myObj, 'name', {
    writable: false,
})

myObj.name = "Sakiv Indora"
console.log(myObj.name) // still shows "Vikas Indora"

// enumerable still set to true, so this is possible:
for (let key in myObj){
    if (typeof myObj[key] !== 'function'){
        console.log(`${key} key has value of ${myObj[key]}`)
    }
}

/*
iterate over object using for-of loop:

for (let [key, value] of Object.entries(myObj)){
    if (typeof value !== 'function'){
        console.log(`${key} key has value of ${value}`)
    }
}
*/
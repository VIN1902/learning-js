// symbol datatype
/*
- call Symbol('description') to create new unique value each time even with same description. That description is just a label, not the value.
    - You can’t set a “value inside a symbol” (assignment not possible) — only associate it via object keys.
    - Symbols are primitive and immutable — they don’t have internal data slots.
    - If you want to associate data with a symbol, you must store it somewhere else (like an object, map, etc.).
- to use them as object key use [] notation.
- they are used to create hidden or non-colliding properties. that is they don't appear in loops. (for-in, Object.keys, JSON.stringify).
- to retrieve them use Object.getOwnPropertySymbols(myData)
*/
const sym1 = Symbol('desc1')
const sym2 = Symbol('desc2')
console.log(sym1) // Symbol(desc1)
console.log(typeof sym1) // symbol
console.log(sym1.description) // desc1
console.log(sym1 === sym2) // false

console.log('------------------------------------------------------------')

/*
Singleton object is fromed using:
Object.create()
new Object()
*/

// object literals (non-singleton object)

let myData = {
    name: 'Vikas',
    age: 23,
    isLonely: true,
    [sym1]: "value of sym1 associated to it via object key", // use [] to set a Symbol as key and associate some data to it.
    address: {
        flat: 68,
        block: 'A',
        apartment: 'Parwana',
        city: 'Mayur Vihar',
        state: 'Delhi',
        pincode: 110091,
        landmark: ['ASN School', 'Samachar Apartment']
    }
}
console.log(myData.address.landmark[0]) // ASN School
console.log(myData['address']['flat']) // 68
console.log(typeof myData[sym1]) // string (value associated to symbol key is a string)
console.log(myData[sym1] == sym1) // false

// Object.freeze(myData) // freeze the object from any re-assignment/changes, basically make object immutable

//copy objects
let sourceObj1 = {1: 'a', 2: 'b'}
let sourceObj2 = {3: 'c', 4: 'd'}
let targetReturn = Object.assign({}, sourceObj1, sourceObj2)
// Object.assign(target, src, src, src) -> return target back after merging all the srcs into it.
console.log(targetReturn)

let newData = myData // doesn't copy 'newData' has same address as 'myData' pointing to same mem. space in heap, so any change in one changes other.

newData = {
    ...myData,
    oldAddress: {
        flat: 91,
        block: null,
        apartment: 'Sadar',
        city: 'Mayur Vihar',
        state: 'Delhi',
        pincode: 110091,
        landmark: ['ASN School', 'Samachar Apartment']
    }
}
console.log(newData)

console.log('------------------------------------------------------------')

console.log(Object.keys(myData)) // returns an array of keys
console.log(Object.values(myData)) // return an array of values
console.log(Object.entries(myData)) // returns an array of arrays like [ [ 'name', 'Vikas' ], [ 'age', 23 ], [], [] ]

console.log(myData.hasOwnProperty('isLonely')) // true

console.log('------------------------------------------------------------')

// Object Destructuring
/*
NOT destructuring
let name = myData.name
let age = myData.age
*/
let {name: userName, age} = myData; // object destructuring -> renaming using 'originalName : newName'
console.log(userName + ' ' + age);
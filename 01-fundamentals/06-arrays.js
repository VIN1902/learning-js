// Array methods: (reas as: 'Some ART is Very FFF grade, Foreach and Every RSS member Join)
/*
.some()
ART -> Add/Remove (.push(), .pop(), .shift(), .unshift()) and Transform (.map(), .filter(), .reduce())
F -> .fill()
F -> .find(), .findIndex()
F -> .flat(), .flatMap()
.forEach()
.every()
R -> .reverse()
S -> .sort()
S -> .splice()
J -> .join()

iterators: .keys(), .values(), .entries()
.with(), .toSorted(), .toReversed()
*/

// Common Methods: IS A LIC (read as: 'is a LIC (good/bad)' or 'SILK' where K is broken into I and C )
/*
I -> .indexOf(), .lastIndexOf()
S -> .slice()
A -> .at()
L -> .length
I -> .includes()
C -> .concat()
*/

let arr = [1,2,3,4,5,6,7,8,9]

// Array Methods =>
// some = Tests whether at least one element in an array satisfies a provided condition. return true if any elements passes, return false if any one element not satisfy.
let boolReturn = arr.some((e)=>e%2===0)
console.log(boolReturn) // true

// every = Tests whether all elements in an array satisfy a provided condition., return true is every element passes, return false if even one fails the condition.
boolReturn = arr.every((e)=>e%2===0)
console.log(boolReturn) // false

let lenReturn = arr.push(69)
console.log(lenReturn) // length is 10
let elementReturn = arr.pop()
console.log(elementReturn) // 69
lenReturn = arr.unshift(67)
console.log(lenReturn) // length is 10
elementReturn = arr.shift()
console.log(elementReturn) // 67

let arrReturn = arr.filter((e)=>e%2===0)
console.log(arrReturn) // [ 2, 4, 6, 8 ] is a shallow copy of original

arrReturn = arr.map((e)=>e*10)
console.log(arrReturn) // this is a new array

let accReturn = arr.reduce((acc, curr) => acc + curr, 0)
console.log(accReturn) // 45

arr.fill(0, 6, 8) // Fill with 0 from position 6 until position 8, modifies the original
console.log(arr) // [1, 2, 3, 4, 5, 6, 0, 0, 9]

arr = [1,2,3,4,5,6,7,8,9]

elementReturn = arr.find((e)=>e%2===0) // 2
console.log(elementReturn)
let indexReturn = arr.findIndex((e)=>e%2===0)
console.log(indexReturn) // 1

let nestedArr = [0, 1, [2, [3, [4, 5]]]]
arrReturn = nestedArr.flat(Infinity)
console.log(arrReturn) // [ 0, 1, 2, 3, 4, 5 ]

arrReturn = arr.flatMap((e)=> e===1 ? [1, 1] : e)
console.log(arrReturn) // [1,1,2,3,4,5,6,7,8,9]

arr.forEach((e) => {
    console.log(e)
})

arrReturn = arr.toReversed() // to modify the original use .reverse()
console.log(arrReturn) // [9,8,7,6,5,4,3,2,1]

let stringReturn = arr.join('-')
console.log(stringReturn)

arrReturn = arr.toSpliced(1,1,69) // to modify the original use .splice()
console.log(arrReturn)

let jumbledArray = [2,543,11,42,6546,323,577]
jumbledArray.sort((a,b)=>a-b)
console.log(jumbledArray)

/*
Methods which are modifying the original array:
.fill()
.reverse()
.splice()
.sort()
*/

console.log('--------------------------------------------')

// concatination
let newArr = [10,11,12,13]
arr.concat(newArr)
let concatUsingSpread = [...arr, ...newArr, 14,15,16]
console.log(concatUsingSpread);

// array destructuring -> no need to rename, array is sequential
let [num1, num2] = arr;
console.log(num1, num2); // 1 2
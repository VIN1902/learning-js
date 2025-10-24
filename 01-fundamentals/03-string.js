// String methods: P LMN TW SRC (read as: 'पीना है lemon, T.V. source देखते हुए ।' )
/*
P -> .padStart(), padEnd()

L -> localeCompare()
M -> .match(), .matchAll()
N -> .normalize()

T -> .trim(), .trimStart(), .trimEnd()
W -> .endsWith(), .startsWith()

S -> .split()
S -> .search()
R -> .repeat()
R -> .replace(), replaceAll()
C -> case -> .toUpperCase(), .toLowerCase()
C -> .charAt(), .charCodeAt()/.codePointAt(), count() only in python
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

// ------------------------

// let str = new String('my string')

// string interpolation
let myName = 'Vikas'
console.log(`Hello! My name is ${myName}.`)

// acess
console.log(myName[0])

// Common Methods =>

let str = 'Hello'

let getIndex = str.indexOf('e')
console.log(getIndex) // 1

let sliceSection = str.slice(1,3)
console.log(sliceSection) // 'el'

let sectionAtIndex = str.at(-1)
console.log(sectionAtIndex) // 'o'

let lenOfString = str.length
console.log(lenOfString) // 5

let checkSectionExists = str.includes('ll')
console.log(checkSectionExists) // true

let concatString = str.concat(' ', 'world')
console.log(concatString) // 'hello world'

// String Methods =>

let paddingAtStart = str.padStart(str.length + 5, ' ')
console.log(paddingAtStart) // '     Hello'
let paddingAtEnd = str.padEnd(str.length + 5, 'X')
console.log(paddingAtEnd) // 'HelloXXXXX'

let localeCompare = str.localeCompare("HĒLLO", "en" , {sensitivity: 'base'})
console.log(localeCompare) // 0 -> same

let regex = /[A-Z]/g
console.log(str.match(regex)) // ['H']

console.log("\u00F1".normalize("NFD") === "\u006E\u0303".normalize("NFD")) // true

let trimmedStr = "        removed all white spaces     ".trim()
console.log(trimmedStr) // 'removed all white spaces'

let checkStartsWith = str.startsWith('H')
console.log(checkStartsWith) // true
let checkEndsWith = str.endsWith('.')
console.log(checkEndsWith) // false

let indexOfMatch = str.search(/[a-z]/)
console.log(indexOfMatch) // 1

let splitIntoArray = str.split('')
console.log(splitIntoArray) // ['h', 'e', 'l' , 'l', 'o']

let repeatString = str.repeat(3)
console.log(repeatString) // 'HelloHelloHello'

let replaceString = str.replace("H", "h")
console.log(replaceString) // 'hello'

let changeCase = str.toLowerCase().toUpperCase()
console.log(changeCase) // 'HELLO'

sectionAtIndex = str.charAt(1)
console.log(sectionAtIndex) // 'e'

let charCode = "ॐ".codePointAt(0)
console.log(charCode) // 2384

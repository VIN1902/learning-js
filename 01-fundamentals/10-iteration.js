function printLine() {
    console.log("--------------------------------------------------------------------------------");
}

// for loop (1. setup a iteration count 2. setup a condition till when that iteration count will change 3. setup a means for iteration count to change)

for (let i = 1; i <= 3; i++) {
  console.log(i)
}

for (let i = 1; i <= 3; i++) {
  if (i === 2) {
    console.log('Detected:',i)
    break // from this point, end the whole loop and don't move to any of the further iterations.
  }
  console.log(i)
}

for (let i = 1; i <= 3; i++) {
  if (i === 2) {
    console.log('Detected:',i)
    continue // from this point, skip over this whole iteration scope (not just if block but the whole for block) and move on to next iteration.
  }
  console.log(i)
}

printLine()

// while (entry-control loop: checks the condition from start before entering the loop)

let iterationCount = 0
while (iterationCount < 10) {
  console.log(`value in while-loop is ${iterationCount}`)
  iterationCount += 2
}

// do-while (exit-control loop: makes sure body is executed atleast once before condition is checked)

iterationCount = 0
do {
  console.log(`value in do-while-loop is ${iterationCount}`)
  iterationCount += 3
} while (iterationCount < 10)

printLine()

// Higher order loops => 
// 1. for-of (iterates over values of iterables. array, string, map, etc are considered iterables) 
// 2. for-in (iterates over keys of objects. objects aren't considered an iterable)

let marvelHeros = ['spiderman', 'ironman', 'hulk', 'squirrelgirl']

for (let hero of marvelHeros) {
  console.log(hero)
}

// map - its an object BUT: ordered key-value pairs, unique values only, keys are not just string but can be anything, you have acces to methos like get,set,has,delete

let countryCode = new Map()
countryCode.set(91, "India")
countryCode.set(1, "USA")
countryCode.set(1, "USA")
countryCode.set(81, "Japan")
countryCode.set(7, "Russia")

for (let [key, value] of countryCode) {
  console.log(`+${key} for ${value}`)
}

// Two main ways of iterating over an object: 
// 1. use for-in loop
// 2. convert the object into an iterable ( obj to map using new Map(obj.entries()), obj to array using Object.entries()/keys()/values() )
let languages = {
  "JS": "javascript",
  "PY": "python",
  "CPP": "c++",
  "RB": "ruby"
}

for (let key in languages) {
  console.log(`${key} stands for ${languages[key]}`)
}

for (let [key, value] of Object.entries(languages)) {
  console.log(`${key} stands for ${value}`)
}

for (let i = 0; i < Object.keys(languages).length; i++){
  console.log(Object.keys(languages)[i])
}

printLine()

// array-only special loop: forEach() its a method. It doesn't return anything (undefined).
// So, with .forEach() either print or direct use. If you want to return a new array or perform condition checks then use .filter(), .map(), .reduce()

let dcHeros = ['flash', 'superman', 'batman', 'wonderwoman']

dcHeros.forEach((value, index, array)=>{
  console.log(value);
  console.log(index);
  console.log(array);
})

let langData = [
  {
    langName: "Javascript",
    fileName: ".js"
  },
  {
    langName: "Python",
    fileName: ".py"
  },
  {
    langName: "Java",
    fileName: ".java"
  },
]

langData.forEach((obj)=>{
  console.log(obj.fileName)
})

printLine()

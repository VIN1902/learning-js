# Overview

1. JS Engine
- Callstack + heap + interpeter/compiler (JIT)
- runs code synchronously on a single thread
- ex: V8, spidermonkey

2. JS Runtime Environment
- JS engine + env. APIs + event-Loop & queues 
- interact with environment asynchronously.
- ex: browsers (chrome, firefox), node, bun, deno

# Stack
- primitive data and function execution context (FEC) is stored here.
- limited size. ordered in LIFO fashion.
- lifetime of data is tied till FEC pops.
    - global variables exist in GEC which is there for the lifetime of the script.
    - Global vs local EC only affects lifetime of primitive value, not the storage type (both always in stack, unless quirky engine-optimization).
- actual data is stored only for primitive datatypes but for non-primitive objects only the reference (memory address) to value is stored in the variables here.
- faster memory access time.

```js
let str1 = 'vikas'
let str2 = str1 // the copy of str1 value is stored in new str2 variable on stack
str2 = 'sakiv'
console.log(str1) // 'vikas'
console.log(st2) // 'sakiv' 
```

# Heap
- Objects (non-primitive data) is stored here.
- dynamic size. large and unordered pool of data.
- lifetime of data managed by garbage collector.
- actuall non-primitive object value is stored here not the reference.
- slower memory access time.

```js
let obj1 = {
    name: 'vikas',
    age: 23
}
// obj1 only holds the reference to the actual value stored on heap

let obj2 = obj1 // the reference is assigned to obj2, so obj2 also points to same object value stored in heap

obj2.name = 'sakiv'
console.log(obj1.name) // sakiv
conosle.log(obj2.name) // sakiv
```
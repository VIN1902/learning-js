# ... (spread operator)
1. first use:
- When used outside function parameters, the ... operator expands (spreads) elements of an iterable.
```js
let arr = [1,2,3]
console.log(...arr)
// same as console.log(1,2,3); Output: 1 2 3
```
2. second use: (rest parameter)
- when passed as an parameter to a function along with some variable name, it collects all the arguments into an array.
- Inside a function parameter, ...args doesn't spread but collects the arguments.
```js
function myFunction(...values) {
    console.log(values);
}
myFunction(10, 20, 30); 
// Output: [10, 20, 30]
```
## iterables
- those which can be looped over using for-of loop (arrays, strings, map/set). OBJECTS ARE NOT ITERABLE.
```js
const obj = { a: 1, b: 2 };
for (const value of obj) {
    console.log(value);
}
// Output: Uncaught TypeError: obj is not iterable
```
- BUT!!! JS allow ...obj only in a specific case that is inside another object literals. spread operator is not spreading OR collecting, but copying now.
```js
const obj = { a: 1, b: 2 };
const newObj = { ...obj, c: 3 };
console.log(newObj);
// Output: { a: 1, b: 2, c: 3 }
```
-  "If ... is inside {}, it works with objects. If ... is inside [], it only works with arrays (or other iterables). If ... is inside function parameter then it collects the arguments into an array."
- {...obj} works, but [...obj] doesn't , obj must be an iterable (not objects!) to work in latter.
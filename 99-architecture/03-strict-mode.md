# Modes of operation
1. Non-strict mode
- default on any script, more flexible, more unexpected behaviour.

2. Strict mode
- Strict Mode acts as a directive to the JS engine to enable a tighter set of rules, forcing the engine to perform additional syntax and runtime error checks before execution. Overhauls the context of 'this' binding and more.
- add code(with quotes) "use strict;", constraint, engine does error (syntax and runtime) checks before executing.
- Prevents use of undeclared variables
```js
// Non-strict mode
x = 10;
console.log(x); // Outputs 10

// Strict mode
"use strict";
y = 20; // Throws a reference error
```
- Prevents duplicate function parameters
```js
// Non-strict mode
function foo(x, x) {
    return x + x;
}
console.log(foo(1, 2)); // Outputs 4

// Strict mode
"use strict";
function bar(y, y) { // Throws a syntax error
    return y + y;
}
```
- Prevents 'this' inside a function (not as a method to object) from refering to global object, its undefined instead.
- Prevents deleting properties from objects that are not configurable.
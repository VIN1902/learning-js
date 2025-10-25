let a = 100; // global-scope
const b = 200;
if (true) {
  let a = 10; // block-scope
  const b = 20;
  var c = 30;
}

console.log(a);
console.log(b);
console.log(c); // var values are accessible outside of block scope, which causes errors

/*
- Before ES6, only functions created scope. var variables are function-scoped, so if-else or loops did not create a scope for var.
- With ES6, let and const are block-scoped. That means any { ... } (including if, for, while blocks) creates a block scope, but this is not a new execution context—it's just a new lexical environment.
- So, block-scoping is different from a function EC. It's a smaller scope layer that sits inside the current execution context’s scope chain (not on top of it).

- Summary: var only works on function-scope (global if no function), as in old pre-ES6 days only functions created their scope. But now braces create block scope which allows let and const to form a scope-layer inside of EC and not accessible outside of it.
*/
const dt = Temporal.PlainDateTime.from('2025-10-26T14:00');
console.log(dt.add({days: 5}));

/*
In case of nested functions:

function x () {
  let a;
  function y () {
    let b;
    console.log(a);
  }
  function z () {
    console.log(b);
    console.log(a);
  }
}

parents can NOT access child-functtion's variables.
children can access its parent's scope variables.
siblings can NOT acces each other's scope variables.
*/

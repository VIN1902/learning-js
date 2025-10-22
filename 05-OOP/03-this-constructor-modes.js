/* CASE 1 (non-strict)
function MyFnx(param) {
    this.param = param
    return this
}

let storeValue = MyFnx('vikas')
console.log(storeValue)

- For a bare-function call 'this' inside is assigned value of global-object (window/{node}).
- So, statement 'this.param = param' doesn't throw an error and global-object is returned at the end of FEC of this function and printed.
- If you didn't write a return statement, undefined would be returned by default and that would be printed.
*/

/* CASE 2 (strict)
"use strict"
function MyFnx(param) {
    this.param = param
    return this
}

let storeValue = MyFnx('vikas')
console.log(storeValue)

- For a bare-function call 'this' inside is assigned value of undefined.
- So, statement 'this.param = param' throws a TypeError cause you are trying to do basically 'undefined.param = param'.
- If you didn't write a return statement, the error would still occur mid FEC of the function and prevent it from completing.
*/

/* CASE 3 ('new' is doing its own thing regardless)
function MyFnx(param) {
    this.param = param
    return this
}

let storeValue = new MyFnx('vikas')
console.log(storeValue)

- Function is called but this time with 'new' keyword, so internally 'new' => 
    1. creates new object
    2. link the prototype-chain
    3. call constructor with arguments and assign the value of newly created object to 'this'
    4. return the new object
- So this time around 'this' value is decided by 'new' regardless of strict or non-strict mode. code executes normally.
- If you didn't write a return statement, that doesn't matter cause 'new' is returning its own object at the end anyway.
*/

/*
function Random(param) {
    // var param; (implictly created)
    param = param
    return this
}

const r = Random('abc')
console.log(r)

// so the code executes fine, by returning the global-object as bare-function call's 'this'.
// but param = param is useless code, as inside FEC the self assignment of a parameter to a implictly declared varibale of it is pointless.
*/

/*
function Random(param) {
    this.param = param
    return this
}

const r = Random('abc')
console.log(r)

// everything is same as before, but instead of a useless self-assignment, we add a property called param with value abc to the global object. that global object is printed.
*/

/*
function Random(param) {
    param = param
    return this
}

const r = new Random('abc')
console.log(r)

// 'new' keyword did its thing: create new object, link prototype chain, call the constructor with arguments and assign this new object to 'this', finally return new object.
// during the constructor call with arguments step, the self-assignment took place for the variable but didn't show up in log cause when FEC of Random() was popped the param variable was also gone. the log only shows the empty new object that was created and it never got any variable/property added to it.
*/

/*
function Random(param) {
    this.param = param
    return this
}

const r = new Random('abc')
console.log(r)

// 'new' keyword did its thing: create new object, link prototype chain, call the constructor with arguments and assign this new object to 'this', finally return new object.
// during the constructor call with arguments step, as 'this' was now new object so this.param = param statement added a new property to this newly created object as argument its value that we passed. so log shows a new object with param: abc key-value pair.

// Without 'this', the engine performs identifier lookup (scope lookup) through the function’s lexical environment chain (FEC → outer → GEC), which are referenced by execution contexts on the call stack. But When 'this' is used, the engine performs a property lookup on the object bound to 'this', which resides in the heap.

// RHS: param -> resolves via scope lookup inside the function’s local variables (which in this case was found to be withing scope of Random function when param varibale was implicitly created (var param;), by just passing 'param' named parameter).
// LHS: this.param -> engine doesn’t check the scope; it immediately performs a property lookup on the heap object that this currently references (creating it if it doesn’t exist).
*/
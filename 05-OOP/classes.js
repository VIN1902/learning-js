// small discussion on 'this' and constructor function before ES6 classes:
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

//-----------------

//ES6 Classes:

class User {
    constructor(username, email, password){
        this.username = username,
        this.email = email,
        this.password = password
    }
}
/*
function SetUsername(username) {
    return this
}

let storeReturnValue = SetUsername("vikas")
console.log(storeReturnValue) // undefined in strict mode, global object (window or {}) in non-strict/script mode
// if you don't write 'return this' statement then non-specified return statement in function always give undefined regardless of mode.
*/

/*
"use strict"
function SetUsername(username) {
    this.username = username
    return this
}

let storeReturnValue = SetUsername("vikas")
console.log(storeReturnValue) // TypeError cause of undefined.username = username (trying to assign string to undefined)
// THIS CASE IS ONLY WHEN USING STRICT MODE, otherwise if you are explicitly returning 'this' then 'this' is assigned to global object in bare-function call. and if you aren't returning anything then undefined is returned by default in any case.
*/

/*
function SetUsername(username) {
    this.username = username
    return this
}

let storeReturnValue = new SetUsername("vikas")
console.log(storeReturnValue) 
// variable holds new instance object with 'this' bound to it and the prototype-linking set. (all done by 'new' keyword)
// regardless if you write a return statement or not, and regardless of mode, the 'new' keyword at the end returns a new object, so that gets printed.
*/

// Call -> using this method, the function is called with a specified 'this' value and arguments provided individually.
// usefull to sepicify under which context should the function run in-case its own EC is popped.

/*
function SetUsername(username) {
    this.username = username
}

function CreateUser(username, email, password) {
    SetUsername(username)

    this.email = email
    this.password = password
}

let userOne = new CreateUser("sakiv", "sakiv@gmail.com", 123)
console.log(userOne)

Output => TypeError (strict mode) or CreateUser {email: 'sakiv@gmail.com, password: 123} (non-strict mode)
because:
1. first GEC was created
    - during memory creation phase the function body was as-it-is stored and userOne was undefined.
    - during code execution phase the CreateUser() function was run.
2. FEC for CreateUser was put on callstack on top of GEC and started executing function's code synchronosly.
3. FEC for SetUsername was put on callstack on top of previous FEC.
4. When FEC of SetUsername executed its code, set 'this' value (undefined or window/{}), and then finally popped from callstack. Along with it 'this' value was erased.
5. Now control back to FEC of CreateUser and in which the 'this' value for email and password was correctly set to instance object newly created by 'new' keyword.
6. Output only shows email and password in the instance object cause EC for username was popped off and no-one knows about it now.
*/

function SetUsername(username) {
    this.username = username
}

function CreateUser(username, email, password) {
    SetUsername.call(this, username)

    this.email = email
    this.password = password
}

let userOne = new CreateUser("sakiv", "sakiv@gmail.com", 123)
console.log(userOne)

// Output is CreateUser {username: "sakiv", email: 'sakiv@gmail.com, password: 123}

/*
This time cause of 'call' method the SetUsername was called under a different context (this) with its arguments individually, both of which we specified.
'this' context was specified to be used of CreateUser function and 'new' keyword is handling the 'this' assignment for it.
*/

// Apply is the same as call, only difference is instead of passing arguments individually you pass an array of it.

function SetSomething(username, x, y, z) {
    this.username = username
    this.x = x
    this.y = y
    this.z = z
}

function CreateSomething(username, x, y, z, email, password) {
    SetSomething.apply(this, [username, x, y, z])

    this.email = email
    this.password = password
}

let something = new CreateSomething("sakiv", 1,2,3, "sakiv@gmail.com", 123)
console.log(something)
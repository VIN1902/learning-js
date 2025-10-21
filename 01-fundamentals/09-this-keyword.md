# This keyword
- 'this' refers to the context of something. meaning changes with context.
- The value of 'this' is determined at call time by the function’s "base object" (the thing before the dot when the function is invoked).
- If 'this' is defined inside an object's function then at time of calling that function under the context of its object, 'this' is assigned that value.
```js
let myObj = {
    name: "vikas",
    myFnx: function (){
        return console.log(this)
    }
}
myObj.myFnx() // this = myObj (non-strict & strict mode)
```
- If 'this' is defined in a bare function (not inside any object) then at time of function call, 'this' is give context of global object, as by itself it didn't have any base object so use global Object.
- The value of this inside a function is not about which object the function is, but about how the function is called.
```js
function bareFunctionCall(){
    return console.log(this)
}
bareFunctionCall() // this = window (non-strict) and this = undefined (strict)
```
- arrow function behave differnt as they capture 'this' from their defining scope (either global or whatever function wrapped it).
```js
let myObj = {
    name: "vikas",
    myArrowFnx: ()=>{return console.log(this)}
}
myObj.myArrowFnx() // this = window (non-strict & strict)
```
- if 'this' was defined inside a constructor function then at time of calling/exectution only the newly created object (instance) is assigned to 'this' as that's the base object now.
- constructor functions (classes by extension) and new keyword binds 'this' to the instance object created. 
- JS creates a new empty object ({}), binds 'this' to it, and returns it.
```js
function ConstructorFnx(name, age){
    this.name = name
    this.age = age
    console.log(this)
}

let instance = new ConstructorFnx("Vikas", 23)
console.log(instance) // this = instance object created using new (non-strict & strict)
```
- manual binding of this is possible using call,apply,bind. we specify which base object to call it under regardless where its originally defined.
```js
let myObj = {
    name: "vikas",
    myFnx: function (){
        return console.log(this)
    }
}

let otherObj = {
    name: "Harsh"
}
myObj.myFnx.call(otherObj) // this = otherObj as specified in call argument (non-strict & strict)
```
- Final clarrification: 'this' was designed to be call-site dependent, not definition-site dependent.
```js
/*
bare call → global/undefined
method call → object before dot
new → new object
arrow → lexical this
call/apply/bind → manually specified
*/
```
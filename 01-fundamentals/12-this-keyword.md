# This keyword
- 'this' refers to the context of something. meaning changes with context.
- The value of 'this' is determined at call time by the function’s "base object" (the thing before the dot when the function is invoked).

## Example
- _Without 'this', the engine performs identifier lookup (scope lookup) through the function’s lexical environment chain (FEC → outer → GEC), which are referenced by execution contexts on the call stack. But When 'this' is used, the engine performs a property lookup on the object bound to 'this', which resides in the heap._
```js
function Random(param) {
    this.param = param
    return this
}

const r = new Random('abc')
console.log(r)

// RHS: param -> resolves via scope lookup inside the function’s local variables (which in this case was found to be withing scope of Random function when param varibale was implicitly created (var param;), by just passing 'param' named parameter).
// LHS: this.param -> engine doesn’t check the scope; it immediately performs a property lookup on the heap object that this currently references (creating it if it doesn’t exist).
```

## Different scenarios where 'this' is used

1. **Object Literal**
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

2. **Bare-Function Call**
- If 'this' is defined in a bare function (not inside any object) then at time of function call, 'this' is give context of global object, as by itself it didn't have any base object so use global Object.
- The value of this inside a function is not about which object the function is, but about how the function is called.
```js
function bareFunctionCall(){
    return console.log(this)
}
bareFunctionCall() // this = window (non-strict) and this = undefined (strict)
```

3. **Arrow Function**
- arrow function behave differnt as they capture 'this' from their defining scope (either global or whatever function wrapped it).
```js
let myObj = {
    name: "vikas",
    myArrowFnx: ()=>{return console.log(this)}
}
myObj.myArrowFnx() // this = window (non-strict & strict)
```

4. **Constructor Function and 'new'**
- if 'this' was defined inside a constructor function then at time of calling/exectution only the newly created object (instance) is assigned to 'this' as that's the base object now.
- constructor functions (classes by extension) and new keyword binds 'this' to the instance object created. 
- 'new' keyword:
    1. Creates a new empty object {}
    2. Link the prototype of this new object to the constructor function’s .prototype property, now it has access to all the defined properties/methods.
    3. Calls the constructor function with specified arguments and bind 'this' to new object. ('this' is assigned value of this fresh object)
    4. Returns the new object (unless the function explicitly returns a different object).
```js
function ConstructorFnx(name, age){
    this.name = name
    this.age = age
    console.log(this)
}

let instance = new ConstructorFnx("Vikas", 23)
console.log(instance) // this = instance object created using new (non-strict & strict)
```

5. **Functon Methods (call, apply, bind)**
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

## Summary
- Final clarrification: 'this' was designed to be call-site dependent, not definition-site dependent.
```js
/*
method call → object before dot
bare call → global/undefined
arrow → lexical this
new → new object
call/apply/bind → manually specified
*/
```
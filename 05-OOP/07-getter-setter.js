// getter-setter: methods which allow a degree of encapsulation for properties and method, that you don't want instances to have direct access of.
// or to simply give a customized access rather than the direct control of sensitive data.

class User {
    constructor(name, email, password){
        this.name = name
        this.email = email
        this.password = password
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value
    }
}

const userOne = new User('vikas', 'v@mail.com', 'fsaklEWROUvcjlk<M')
userOne.password = 'azk'
console.log(userOne.password)

/*
RangeError: Maximum call stack size exceeded
cause setter/getter (first setter then getter) and constructor are in race-condition to keep on operating on callstack to do the same task.
this makes the memory for callstack full and causes stack overflow.
this happens cause you use same variable name for property that you are trying to make getter/setter for.
fix is to just use different variable name and assign the original property variable to that.

the name of setter/getter method needs to be exact same as the property you are tyring to encapsulate.
but the name of new property that you assigning the modified property must be different (like starting with underscore).
outside the class you still mention 'password', but cause you have a getter/setter the property which you actually interact with is _password internally.
*/

/*
Before classes getter/setter =>

function User(name, email, password) {
    this._name = name
    this._email = email
    this._password = password

    Object.defineProperty(this, "password", {
        get: function () {
            return this._password.toUpperCase()
        },
        set: function (value) {
            this._password = value
        }
    })
}

const userOne = new User('vikas', 'v@mail.com', 'afk')
userOne.password = 'qwerty'
console.log(userOne.password)
*/

// function -> A factory that is part of a bigger factor that only focus on one single functionality and is only concerned with incoming data (that we don't know what type will come), its processing and what it returns back to some other factory or manager (node).

function printLine (){
    console.log("--------------------------------------------------------------")
}

let globalScopeVar = 'in global'

function setGlobal() {
    globalScopeVar = 'hacked'
    let blockScopeVar = 'in block'
}

setGlobal()

printLine();

// iffy -> run the function as soon as it is made

let config = function () {}();
(()=>{})();

// this keyword: context -> exact same thing can have different meanings (संदर्भ) baat kis baare mei ho rhi hai

let person1 = {
    name: "Vikas",
    greet: function (location) {
        console.log(`Hello ${this.name} from ${location}`);
    }
}

let person2 = {
    name: "Harsh"
}

// is there a way to give method greet to person2 but give context of name as harsh?

person1.greet.call(person2, 'Delhi')
// call method works on a function (which is an instance of function object)
// its first argument is the 'this' value to use when calling the function
// rest arguments are the function's arguments.

// used when we want to switch context
// say it in hindi: 'greet' function person1 ka tha isliye normally uska hi 'this' value use krega but jab call method chalaya then hum 'this' value (context) ko specifiy kar sakte hai ki kiska use krke person1 ka function 'greet' chalana hai.

person1.greet.apply(person2, ["Delhi"])
// apply is exact same as call method, just takes array for rest of the function arguments

let person2Greet = person1.greet.bind(person2, 'Delhi')
// bind, binds the context of whatever this value you want so that later on if whole thing is executing under different context it still has some meaning
// bind returns us a function as a copy
person2Greet();

printLine();

console.log("I am first");

const obj = {
    personName: "Urmila",
    greet: function () {
        console.log(`Hello ${this.personName}`);
    }
}

// setTimeout(obj.greet, 3 * 1000);
/*
first 'iamfirst' gets logged by callstack then remove it
then obj was created and heap (global scope, so keep it until whole program is not done)
then setTimeout() was encountered so send it to browser to start a clock of 3s and register the greet function: function () {console.log(`Hello ${this.personName}`);}
then callstack moves ahead and executes 'iamlast'

now callstack if free so it deletes/removes the obj in heap as global context is over as whole program is over.

then after 3s callback queue recieves greet fn and event loop sends it to callstack to get executed.

now callstack has one new job so a new global context is created (new program one can say losely).
issue is that in this new context 'obj' was never created so no context exits for greet's this value.
hence it returns 'undefined'
*/

// setTimeout( obj.greet.bind(obj) , 2 * 1000);
// greet method, joki 'obj' ka hai, jab browser mei jayega to apne sath 'obj' ka context sath lejayega. kya pta baadme 'obj' ka context ho ya naa ho. isiko to 'bind' khete english mei.

console.log('I am last')

printLine()

console.log('Hi');

setTimeout(() => console.log('Timer 1'), 2*1000);

Promise.resolve().then( () => console.log('Promise resolve') )
// this was in micro task queue so gets priority over task queue timers to come into callstack

setTimeout(() => console.log('Timer 2'), 2*1000);

console.log("Bye");

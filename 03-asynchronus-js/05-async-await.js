let promiseOne = new Promise((resolve, reject)=>{
    setTimeout(() => {
        //some async task is going on (pending state)
        resolve({name:"Vikas Indora", enroll:22104039, age:23})
        reject({message:"Error occured in async task"})
    }, 1000);
})

// promiseOne
//     .then(data=>console.log(data))
//     .catch(err=>console.log(err))


// to further improve this then/catch syntax async-await was introduced as more syntax-sugar

async function consumePromiseOne() {
    console.log('a')
    let result = await promiseOne
    console.log(result)
    console.log('b')
}

console.log('c')
consumePromiseOne()
console.log('d')

/*
Synchronous-looking syntax (you are even using 'await' which means pause), but asynchronous behavior:

- unless the await keyword is encountered inside the async-function the function itself executes commands like a normal-function.
- when await comes, the async-function suspends its execution context (EC), for promise object to resolve or reject (its still in pending state).
- anything lexically after the await line is registered as a callback to the runtime environment (browser/node). Which then is sent to microtask queue.
- the control immediately returns to main thread (callstack) as EC for async-function is suspended and saved in memory.
- the commands execute normally in callstack until it gets empty (GEC is still there).
- the promise settles, if it was within a timer, then it first went to macrotask queue and when callstack was empty it came in to get executed to call either resolve() or reject() to set the promise as fulfilled/settled.
- now promise is settled so values get assigned, the callback of remaining code in async-function is scheduled to microtask queue and when callstack is empty it enters there for execution.
- returning callback resumes its EC (conceptually like creating a new one) on top of GEC and executes its remaining code then pops, followed by GEC pop and eventual garbage collection as no more asnc task are there and event-loop is free therefore script ends.
*/

// async-await has am issue normally where it sucks in handling errors.
// for that we have a syntax of try-catch block. if you don't use that like in example above, it means you are assuming that the promise is sure to give something in the variable and not considering that things can go wrong.

async function consumePromiseOneAgain() {
    try {
        let result = await promiseOne
        console.log(result)
    } catch (errors) {
        console.log(errors)
    }
}

consumePromiseOneAgain()

// Fetch API

async function getUserData(){
    try {
        const userData = await fetch("https://jsonplaceholder.typicode.com/users/1")
        const data = await userData.json()
        console.log(data)
    } catch (error) {
        console.log("Error is fetching: ", error);
    }
}

getUserData()

// fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then((userData)=>{
//         let data = userData.json()
//         return data
//     })
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch(err=>console.log(err))
//     .finally(()=>console.log("Fetch handled using then/catch."))


/*
Story of Fetch API:

- an api for fetching resources over a network. works on request-response model.
- when you write `let res = fetch('...');`, then two things happen:
    1. A Promise object is created in memory. let call it 'dataPromise'. it has onFulfilled[] and onRejected[] hidden arrays.
    2. browser/node sends a https request over the network.
- if the request was successfull and a connection is established on network then its response object is sent to onFulfilled array.
- if the request was unsuccssfull and no connection is established (no internet, DNS failure, timeout, etc.) then network sends no response object and error is sent to onRejection array.
    - even if you get 404 as response its still a response meaning network request was succefull and response placed in onFullfiled array.
- When the response object arrives successfully, dataPromise is fulfilled and stores that Response object. When there’s a failure, it’s rejected with an Error object.
- This promise object then assigns your variable 'res' with correct response/error object.
*/
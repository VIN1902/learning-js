/*
Not always non-blocking code is necessary.
like showing some success message to user for a database query, even before the database was able to connect.
Sync and Async both have their use-cases. 
*/

/*
ABSTRACT AWAY THE LOWER-LEVEL ARCHITECTURE WHEN WRITING WITH PROMISES OR ASYNC/AWAIT

don't think anymore about how callbacks are flowing in the runtime (engine,queues,environment/api,eventloop, etc), if you find that too confusing or hard.

because:
- Promises and async/await don’t create a new execution model.
- They just use the same concepts (callbacks, queues, closures) behind cleaner syntax.
- Its implementation details are intentionally abstracted away to work with them as black-box tools for async tasks. that's why they are called syntactical-sugar.
- Callbacks/Closures are raw JS logic and behaviour that is easy to 'see' how it works at low level.
*/

/*
Promise were introduced as syntax-sugar over callback.
Promise is a intermediate value which is immediatly returned so that the rest of the code can move on.

Promise has 3 states:
1. Pending - initial state, neither fulfilled nor rejected
2. Fulfilled - operation was successfull
3. Rejected - operation failed
*/

// Promise creation
let promiseOne = new Promise(function (resolve, reject) {
    // some async task like networking, I/O, crypto, Database, etc.
    setTimeout(() => {
        console.log('async task 1')
        resolve() // establishes a connection to .then() method during consumption
    }, 1000);
})

// Promise consumption
promiseOne.then(function () {
    console.log('async task 1 resolved')
})

// -------------

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('async task 2')
        resolve({"name": "Vikas Indora", "age": 23})
    }, 1000);
}).then(function (data) {
    console.log('async task 2 resolved');
    console.log(data);
})

let promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username: "Harsh", password: "123"})
        } else {
            reject('Error: Something went wrong')
        }
    }, 1000);
})

promiseThree.then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
}).catch((err)=>console.log(err))
.finally((()=>console.log('PromiseThree is either resolved or rejected'))) // chaining + finally gets called regardless of what happened.

// async-await

let promiseFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({username: "Javascript", password: "456"})
        } else {
            reject('Error: JS went wrong')
        }
    }, 1000);
})

async function consumePromiseFour(){
    const result = await promiseFour // assumes that whenever promise gets resolved there will be some value. no gracefull error handling for that wrap everything in this function in try-catch block.
    console.log(result);
}
consumePromiseFour()

// promisification => converting a legacy code running on callbacks to support promises by building a wrapper function.
// make promise versions of readFile, writeFile, unlink

import fs from 'fs'

function readFilePromise(filename, encoding) {
    return new Promise( (resolve, reject)=>{
        fs.readFile(filename, encoding , (err, data)=>{
            if(err){
                reject(err)
            } else{
                resolve(data)
            }
        })
    } )
}
// reject(), resolve() signal that user's .catch(), .then() method to be called 

function writeFilePromise(filename, content) {
    return new Promise( (resolve, reject)=>{
        fs.writeFile(filename, content, (e)=>{
            if(e){
                reject(e)
            } else{
                resolve()
            }
        })
    } )
}

function unlinkPromise(filename) {
    return new Promise( (resolve,reject)=>{
        fs.unlink(filename, (e)=>{
            if(e){
                reject(e)
            } else{
                resolve()
            }
        })
    } )
}
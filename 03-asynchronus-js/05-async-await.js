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
- the commands execute normally in callstack until it gets empty (GEC is still there) and event loop puts the now-fullfilled promise from the microTask Queue back in the callstack.
- returning callback resumes its EC (conceptually like creating a new one) on top of GEC and executes its remaining code then pops, followed by GEC pop and eventual garbage collection as no more asnc task are there and event-loop is free therefore script ends.
*/
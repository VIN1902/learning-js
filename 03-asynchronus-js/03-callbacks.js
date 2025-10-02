/*
- Closure = a function that retains access to the Lexical Environment of its parent, even after the parent's Execution Context has been popped off the callstack. 
- The parent's Environment Record (variables, parameters, functions) is kept alive in the heap by the engine, because the inner function's outer reference still points to it.
*/

// Usual way is to return an inner-function (a function defined inside another function). or when callbacks becomes closures too.

function outer() {
    let counter = 0
    return function inner() {
        return ++counter
    }
}

let storeInner = outer()
console.log(storeInner()) // 1
console.log(storeInner()) // 2
console.log(storeInner()) // 3
console.log(storeInner()) // 4

/*
1. GEC created -> memory creation phase: storeInner = undefined and outer = function body, code execution phase: FEC for outer() was created.
2. counter assigned 0, its actually stored in outer's environment record (ER) that is inside its lexical environment (LE).
3. inner closes over counter (or informaly we say: engine noticed inner() is trying to reach the outer function's variable). At runtime, since inner is returned, its outer reference points to outer’s LE, keeping outer’s ER alive in heap.
4. outer function's stack-frame popped as it returned inner function to storeInner as written. but the counter variable is still live in record retained in heap.
5. For console.log(storeInner()): First, a new EC is created for inner (via storeInner). That EC is pushed to callstack, executes, returns a value pop EC of inner. That value is then passed into console.log, which itself creates another EC.
6. in the stack-frame of storeInner which is just inner() function the couter is return AFTER increment cause of pre-increment operator. counter variable was accessible from record stored in heap by engine.
7. its stack-frame is popped and value is returned to console.log's stack-frame which does its job of priniting and pops.
8. this repeats for all log statements.
9. finally when no more stack-frame to execute the GEC is popped. global variables like storeInner were never scoped to GEC so don't delete/pop immediately with GEC's stack-frame but they do eventually get garbage collected when the script ends.
*/

// ------------------------------------------------------------------------------------------------

/*
Callback = a function that is passed as an argument to another function and is expected to be called after some operation execution within that recieving function.
*/

// To run these examples as intended for understanding comment everything else temporarily.

// Example 1
function callbackFn() {
    return console.log('This function was passed to another function and is now executed')
}

setTimeout(callbackFn, 0);

// Example 2
import fs from "fs"

console.log("Sync Start")
let content = fs.readFileSync('./README.md', 'utf-8')
console.log(content)
console.log("Sync end")
// readFileSync waits for the time-taking I/O operation before moving on to next-in-order line. but that makes my code slow and blocking.

console.log('Async Start')
fs.readFile('./README.md', 'utf8', (err, data)=>{
    if (err) {
        return console.log("Some error occured reading data.");
    } else {
        return console.log("Data is: \n",data);
    }
})
console.log('Async End')

/*
# How Async code is handled by JS runtime environment using a single thread:
1. console.log('Async Start') executes – It prints immediately.
2. fs.readFile() is called – Since fs.readFile is an asynchronous operation handled by Node's I/O APIs, it is offloaded to the Node.js internal I/O thread pool.
3. Callback Registration – Node.js registers the callback (err, data) => { ... }, and the fs.readFile() function completes its setup, then control moves to the next line.
4. console.log('Async End') executes – Since the event loop does not wait for the I/O operation to complete, this line executes immediately after fs.readFile().
5. I/O Completion – Once the file read operation is completed, its callback is placed in the callback queue (task queue).
6. Event Loop Execution – The event loop checks if the call stack is empty. After 'Async End' is printed, the stack is clear, so the callback from the task queue is pushed to the stack.
7. Callback Execution – The callback runs, printing either "Error occurred: ..." if an error happens or "Success: {data}" if the file read succeeds.
*/

// Example 3

// convert this blocking code into async:
console.log('Sync add Start');
function add(a,b) {
    return a+b
}
let r1 = add(1,2)
console.log(r1)
console.log('Sync add end');

//async version:
console.log('Async add start');
function asyncAdd(a,b,cb) {
    setTimeout(()=>{
        cb(a+b);
    }, 3000)
}
asyncAdd(1,3,output=>console.log(output))
console.log('Async add end');

// Example 4

/*
Task:
1. read a file
2. create a new file and copy its content
3. delete the file
*/

fs.readFile('sample.txt', 'utf-8', (err, data)=>{
    if(err){
        console.log('read krne mei erro aagya',err);
    } else {
        console.log('ye lo file read hogyi', data);
        fs.writeFile('backup.txt', data, (err)=>{
            if(err){
                console.log('write krne mei error agya',err);
            } else {
                fs.unlink('sample.txt', (err)=>{
                    if(err){
                        console.log('delete krne mei error agya',err);
                    } else {
                        console.log('ye lo hogya delete');
                    }
                })
            }
        })
    }
})

/*
# WHAT IS CALLBACK HELL?
- when tasks are dependent upon execution of some prior task then to make the newer task execute asynchronously we need to call a callback within a callback.
- Callback hell happens when async tasks depend on each other, leading to deep nesting.
- This results in poor readability and any more task added only adds to the problem.

- Promises were introduced as syntactical-sugar over the callbacks.
- Promises is also doing callback stuff but its whole gimmick is that unlike async fn that depend only on callbacks, promises enabled async fn give us a promise as an Immediate value.
- So using this immediate value the program can run synchronously as it wanted to by design (and also the readability perks)
*/
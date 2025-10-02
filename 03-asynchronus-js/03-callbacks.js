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
# JavaScript Runtime Architecture
This document explains JavaScript execution from a **low-level design (LLD)** and **high-level design (HLD)** perspective, covering **callstack, event loop, queues, runtime environment, memory, and asynchronous behavior**.

# High level Design
1. Script starts → GEC created → memory phase → code phase  
2. Synchronous code runs → callstack executes functions one-by-one, each functions is used to create its own stack-frame by engine.
3. Async tasks handed to runtime after being completed → queued in macro/microtask queues  
4. Event loop monitors stack → pushes ready tasks from queues to stack  
5. Closures and callbacks can access variables even after function's stack-frames are popped  
6. Script ends → GEC stack-frame popped, global variables remain until program ends
7. Final Points:
    - Stack = synchronous execution; Queue = async scheduling; Heap = long-term storage  
    - Global vs local variable lifetime differs  
    - TDZ enforces safe use of `let/const`  
    - Debugging errors often involves reading callstack traces


# Low Level Design
## LLD of Callstack
- analogy: pile of boxes on top of one another.
- when a function is called a new box is added on top. each function has something called its 'execution-context' which is abstract container and 'stack-frame' is the physical container that's placed on callstack. When a new EC is created, the engine pushes a corresponding Stack Frame onto the Call Stack.
- so, pile = callstack, box = stack-frame of function
- now stack-frame consists of 1. function's parameters 2. local variables 3. info about return statement when function finishes
- there's also something called Global Execution Context (GEC). its the first stack-frame that engine loads in callstack to run the script. even if there's no function declared or used in the script.
- when a function is done executing its stack-frame is popped, along with whatever it had. similar case in GEC.
- key is that, local variables are scoped to stack-frame of thier respective functions.
    - when function ends the local variables are garbage collected if there's no longer reachable by closure/callback.
    - if callback or inner function refrences those local variables then engine keeps them around in heap even after the stack-frame is popped.
- global variables are scoped to global environment record not to GEC's stack-frame.
    - they aren't deleted even if GEC's stack-frame is popped. eventually when scipts completly terminates and its sure that its no more reachable then data inside is collected.
    - GEC stack-frame is popped when script ends, but the Global Environment Record (object where global variables live) persists until process/tab ends.
    - GEC end is when script ends but global environment record ends when runtime environment stops running and looking for async-events.
- callstack's role is to keep executing functions (stack-frame) one-after-another ASAP and hands-off the time-taking tasks/functions which tend to cause blocking to runtime environment (node or browser) so its handled there. this keeps the flow synchronous inside the callstack.
- there's also two phases 1. memory phase 2. code phase, 
    - memory phase only the memory is loaded with variables as undefined and functions as their entire body. (hoisting)
    - code phase then line-by-line goes over script and assigns the variables with actual values if defined.
- let and const are also hoisted like var is but they have temporal dead zone (TDZ), the space above the declaration is not allowed to use the variables. throws error. whereas var allows use of variables above declaration but is assigned to undefined.
- callstack works on a single thread, async nature is achieved via runtime env + queues + event loop.

### Lexical environment
- In CS lexical mean based on written structure of source code not runtime behaviour.
- In JS, every time a function is invoked, an Execution Context (EC) is created. This EC lives on the callstack as a stack-frame.
- Inside each EC, the engine also creates a Lexical Environment (LE). Think of this as the “variable storage + scope rules” attached to that stack-frame.
- An LE has two parts:
    1. Environment Record (ER) - storage of variables, parameters, function declarations.
    2. Outer reference - a pointer to parent's LE. This is how the scope chain is built.
- lexical envrionment record - the ER - is responsible for actually storing the variable of a function that are in its 'scope'.
- the term lexical decides this scope based on where the function was written in source code not where it was called (that would be dynamic scope).
- Execution Context = the “control box” for a function.
- Lexical Environment = the “variable box + scope chain” inside it.

## LLD of Heap
- Heap stores objects, arrays, and functions (actual data). 
- Stack stores references (address to memory space in heap) of heap objects.
- Closures keep heap data alive even after stack-frame is popped.

## LLD of Runtime Environment
- JS engine + runtime environment (browser or Node.js).  
- Provides APIs for async operations:  
  - Timers (`setTimeout`, `setInterval`)  
  - DOM events (browser)  
  - I/O, file system (Node.js)  
- Handles async tasks outside the main callstack.
- Recieves the callback from a time-taking function in callstack and loads it into its memory.
- Once the actual operation (timer, I/O, event) is complete, the runtime hands the callback over to the appropriate queue (microtask or macrotask).
- Ex: setTimeout is a regular function which but it carries callback in it which runtime env stores.

## LLD of Task Queues
- **Macro-task queue**: `setTimeout`, `setInterval`, I/O callbacks  
- **Micro-task queue**: Promises (`.then/.catch`), `queueMicrotask`  
- Event loop prioritizes microtasks over macrotasks.

## LLD of Event Loop
- Continuously checks:
  1. Is callstack empty?  
  2. If yes, takes next task from **microtask queue** → executes  
  3. Then checks **macrotask queue** → executes next  
- Ensures **non-blocking behavior** in single-threaded JS.

# An Example to see it in action
```js
function timer() {
  let msg = "Hello after 2s";
  setTimeout(function() {
    console.log(msg);
  }, 2000);
}
timer();
/*
How engine executed this code and how callback became a closure:
1. First the GEC - global execution context, was created the initial stack-frame for the whole program.
2. During memory phase the function's body was stored as-it-is to 'timer' variable. 
3. During code phase function defination was useless but 'timer()' line was important as now the stack-frame is under execution.
4. Callstack creates stack-frame for fucntion timer on top of GEC.
5. Local variable 'msg' was scoped to the stack-frame of this timer function (FEC - function execution context).
6. setTimeout scheduled a task with the runtime environment (Web API), then immediately returned control to the JS engine. Time-taking and blocking work was handed-off to runtime environment along with 2s timer. This was it prevented the js-thread from being blocked to perform this time-consuming task.
7. As callback inside setTimeout() was leaving the callstack, engine said store the 'msg' to heap for long-term as callback is trying to reach it (entire lexical environment record was retained in heap by the engine as it needed to outlive the FEC of parent function because the callback referenced it). Now 'msg' was no longer attached to its function's stack-frame.
8. Finally the stack-frame of timer function was popped but not the msg variable and its data in it.
9. In runtime env. the callback was registered in its memory and after the internal clock of 2 seconds ran out it was sent to MacroTask Queue.
10. Now event loop checked that the callstack was empty so it allowed the callback from Queue to enter to make a new stack-frame for execution on top of the GEC (GEC remains alive and running for the async callback that is remaining).
11. In this new stack-frame the console.log() did its job and tried to access 'msg' variable which it got from heap.
12. After the callback FEC finished (popped), control returned to the GEC. The GEC itself is popped only when the program ends and the event loop has no more work.
13. Finally the program ended and everything was done, If no other references to msg, garbage collector may now clean it.
- But key thing to note here is that callback remembered its outer function's variable even when its stack-frame (execution context) was gone. This is the defination of closure. So the callback became a closure also.
- It still had access to the lexical environment (msg) of its parent (timer) after the parent’s execution context was gone.
- msg was a local variable but it was just a string, a primitive datatype. so it was stored in stack directly not heap.
    - when engine noticed that callback was trying to reach msg, it moved whole lexical environment record of it to heap.
    - this is different from simply moving the string (primitive) value because, record also has the binding (assignment of value to variable).
    - That’s why even if you changed msg later (e.g., to "Bye"), the closure would still see the latest value, because it still points to the binding, not a frozen copy.
    - in most languages primitive values are stored directly on stack but in JS primitive values are stored in the variable’s environment record. That environment record itself is managed in the call stack (inside the execution context).
*/
```
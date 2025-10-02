# JavaScript Runtime Architecture
This document explains JavaScript execution from a **low-level design (LLD)** and **high-level design (HLD)** perspective, covering **callstack, event loop, queues, runtime environment, memory, and asynchronous behavior**.

# High level Design
1. Script starts → GEC created → memory phase → code phase  
2. Synchronous code runs → callstack executes functions one-by-one  
3. Async tasks handed to runtime after being completed → queued in macro/microtask queues  
4. Event loop monitors stack → pushes ready tasks from queues to stack  
5. Closures and callbacks can access variables even after stack-frames are popped  
6. Script ends → GEC stack-frame popped, global variables remain until program ends
7. Final Points:
    - Stack = synchronous execution; Queue = async scheduling; Heap = long-term storage  
    - Global vs local variable lifetime differs  
    - TDZ enforces safe use of `let/const`  
    - Debugging errors often involves reading callstack traces


# Low Level Design
## LLD of Callstack
- analogy: pile of boxes on top of one another.
- when a function is called a new box is added on top. each function has something called its 'stack-frame' or 'execution-context'.
- so, pile = callstack, box = stack-frame of function
- now stack-frame consists of 1. function's parameters 2. local variables 3. info about return statement when function finishes
- there's also something called Global Execution Context (GEC). its the first stack-frame that engine loads in callstack to run the script. even if there's no function declared or used in the script.
- when a function is done executing its stack-frame is popped, along with whatever it had. similar case in GEC.
- key is that, local variables are scoped to stack-frame of thier respective functions.
    - when function ends the local variables are garbage collected if there's no longer reachable by closure/callback.
    - if callback or inner function refrences those local variables then engine keeps them around in heap even after the stack-frame is popped.
- global variables are scoped to global object (window/node object) not to GEC's stack-frame.
    - they aren't deleted even if GEC's stack-frame is popped. eventually when scipts completly terminates and its sure that its no more reachable then data inside is collected.
    - GEC stack-frame is popped when script ends, but the Global Environment Record (object where global variables live) persists until process/tab ends.
- callstack's role is to keep executing functions (stack-frame) one-after-another ASAP and hands-off the time-taking tasks/functions which tend to cause blocking to runtime environment (node or browser) so its handled there. this keeps the flow synchronous inside the callstack.
- there's also two phases 1. memory phase 2. code phase, 
    - memory phase only the memory is loaded with variables as undefined and functions as their entire body. (hoisting)
    - code phase then line-by-line goes over script and assigns the variables with actual values if defined.
- let and const are also hoisted like var is but they have temporal dead zone (TDZ), the space above the declaration is not allowed to use the variables. throws error. whereas var allows use of variables above declaration but is assigned to undefined.
- callstack works on a single thread, async nature is achieved via runtime env + queues + event loop.

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
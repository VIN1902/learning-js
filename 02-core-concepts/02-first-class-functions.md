# First Class Function
A concept in JS that allows a function to be:
- stored in a variable
- stored in a data structure (like array,object)
- passed as an argument in another function
- returned from another function

Because of this, functions in JS are not just blocks of code, but also **values**.

## Use cases of concept called first class funcitons
- high order functions
- closure
- callback
- function composition
- currying
- and more...

# Lexical scoping mechanism (The base rule)
- Lexical scoping means the scope of a variable is determined by where it is written in the source code, not by where or how the function is called.
- “Lexical” = based on the code’s physical location in the source, not where its called.
- _“You can tell what variables a function can access just by looking at where it’s written — not where it’s run.”_
- It happens during compile/parse time (when and where its written).
- A function can access:
    - Its own local variables
    - Variables from outer (parent) functions
    - Global variables
- A function cannot access variables from functions that are declared inside it (child functions).
```js
function outer() {
  let a = 10
  function inner() {
    console.log(a)
  }
  inner()
}

outer() // 10
```

## How lexical scoping works
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

# Closure
- Closure is a function that remembers the variables from its outer-function scope (inner-function has acces to outer-function's scope) even after that stack-frame has ended.
- _"A closure is the combination of a function and its lexical environment (scope chain) that existed when it was created."_
- Closure = must be inner function + survives beyond parent + keeps access to outer variables
- All closures are inner functions, but not all inner functions are closures.
- Closures persist because the lexical environment of parent has environment record which is kept in the heap, from stack where its usually is. This is decided by JS engine if some function tries to reach outer-function's variables.
    - during scope analysis (before execution), the engine already marks variables as captured and to be placed in heap. done during memory phase of callstack.
```js
function parent() {
  let a = 10;
  return function inner() { // The inner function must “escape” (returned or passed out), so it outlives the parent.
    console.log(a);
  };
}
const fn = parent(); // parent finishes
fn(); // logs 10 → inner “closes over” a
```
```js
// NOT A CLOSURE
function parent() {
  let a = 10;
  function inner() {
    console.log(a);
  }
  inner(); // called immediately
}
parent(); // inner disappears after parent finishes
```

# Callback
- Callback is a function passed as an argument to another function.
- The parent function “calls back” the function at the right time.
```js
function parent(callback) {
  console.log("Parent starts");
  callback(); // call the callback
  console.log("Parent ends");
}

function child() {
  console.log("Child runs");
}

parent(child);
```
- Callbacks are possible only because functions are first-class (we can pass them like values).
```js
setTimeout(() => console.log("Runs later"), 1000);
```
- callback is the arrow function inside the argument and the outer function (setTimeout) calls it within itself likely stated in its defination.

## How Callbacks and Closures relate
- A callback becomes a closure if it uses variables from the parent’s scope after the parent is gone.
- Callback may or may not be a closure, depending on whether it captures variables.
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
- Many async callbacks (like setTimeout, event listeners) are closures, because they keep using variables from their parent function even after the parent has finished. so callback + closure = common case.

# Clearing Lexical Scoping and closure doubts
```js
function outer() {
  let a = 10

  function inner() {
    console.log(a)
  }

  return inner
}
```
1. Lexical Scoping (compile-time)
- When the JS engine reads this:
    - It knows that inner is lexically inside outer.
    - So inner can access a.
- (No execution yet — just scope mapping / rule.)
2. Closure (runtime)
- When you run:
    ```js
    const fn = outer() // outer() executes, returns `inner`
    fn() // executes later
    ```
- outer() finishes → normally, local variables (like a) would be gone.
- But since inner is still referencing a, JS keeps that environment alive.
- That preserved lexical environment + the function = closure.

## Summary
- lexical scoping is only the rule which says that inner has access to outer's scope (variable, etc). decided before runtime.
- but there is a case where inner is not able to follow that rule, that is when outer is dead (FEC popped) and inner is trying to access scope of something that doesn't exit anymore.
- for that case inner needs something more than just a rule, it needs a system where it can store the lexical scope in heap, for later use even after outer is dead. now inner can access the scope from the stored memory of outer who is now dead at the runtime.

### more accurately
- Lexical scoping is just a rulebook.
    - It says: “Functions can access variables from their outer (lexically enclosing) scopes.”
    - This rule is decided before runtime, during code parsing.
- However, at runtime, when the outer function finishes, its Execution Context (FEC) is popped off the call stack, and normally its local variables would disappear.
- Now comes the tricky case:
    - If an inner function defined inside that outer function still exists (like being returned or passed around), it still needs access to those variables from the dead outer scope.
- To handle that, JavaScript’s engine uses closures — it moves (or rather keeps alive) the outer function’s lexical environment in the heap, so the inner function can continue to reference it even after the outer function’s context is gone.
- So, the rule (lexical scoping) says inner should be able to access those variables, and the mechanism (closure) makes that rule actually possible at runtime.
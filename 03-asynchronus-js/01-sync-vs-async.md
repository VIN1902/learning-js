# Synchronous Vs Asynchronous
In CS we define:
- synchronous -> one thing at a time, in a strict order, blocking the next task until the first one finishes. (things are waiting for each other in execution)
- asynchronous -> Tasks don't block each other. A slow task can start, but the program moves on to the next task without waiting.

- Synchronous = Must Wait -> freezes execution making it slow
- Asynchronous = Can Move On While Waiting -> fast but difficult to manage

It’s not about whether things are happening simultaneously in real life—it’s about whether they must wait for each other in execution.

# Why JavaScript Needs Callbacks, Queues, and Event Loops
- JavaScript was originally designed as a single-threaded language running in the browser.
- Because of this, blocking operations (like reading a file, making an API call, or querying a database) would freeze the entire execution.
- To avoid this, JavaScript offloads async tasks (I/O, timers, API calls) to the Node.js environment or browser Web APIs and later executes the result using callbacks, promises, or async/await. (callback is registered by these env, and then when it is finished executing inside env, it gets passed on to task/microtask queues and then event loop checks state of callstack and queues to decide what to do after)

# How Other Languages Handle Async Code
- Multi-threaded Languages (Python, Java, C++, C#)
- A thread is the smallest unit of execution within a program. It is a sequence of instructions that can run independently.
- multi-threading is multiple of such independent sequence of instructions running in parallel
- multi-threading, callbacks, promises, async/await are all methods of achieving concurrency.
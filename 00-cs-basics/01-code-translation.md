# What is translation

- On a broader sense this just means conveting code into a machine-understandable form.

1. **Compilation**
- Converting source code into another form/file (machine code or bytecode) before execution.
- A file is generated and that gets executed by OS or VM.

2. **Interpretation**
- Reading and executing code line-by-line at runtime.
- No file is generated; execution happens in realtime.

3. **JIT (just-in-time) compilation**
- Mix of both
- It first interprets code for quick execution, then compiles frequently used code paths into optimized machine code while the program runs.

Speed: Compilation > JIT Compilation > Interpretation

# Comparing translation/code execution among different languages

1. Python
- Source code -> compiled by CPython into bytecode (.pyc files).
- Bytecode -> interpreted by Python Virtual Machine (PVM), which executes it.
- No JIT by default so slower than java but can enbale it using PyPy compiler instead of CPython.

2. Java
- Source code -> compiled by javac (from the JDK) into bytecode (.class files).
- Bytecode -> executed by the Java Virtual Machine (JVM), which can either interpret it or Just-In-Time (JIT) compile it into native machine code for better performance. (latter option is opted by mordern JVM)

3. C++
- Source code -> Ahead-of-Time (AOT) compiled by a compiler like g++ or clang++ into machine code (.exe or binary).
- Machine code → directly executed by the operating system without a virtual machine.

4. JavaScript
- Source code -> Just-In-Time (JIT) compiled and interpreted by a JS engine (like V8 in Chrome or SpiderMonkey in Firefox).
- JS engine = callstack + taskQueue + microTaskQueue + eventLoop + heap
- JS runtime environment = JS engine + runtime provide api
- JS is dynamic: Other languages separate compilation and execution clearly, while JavaScript blurs this boundary.
- A JS engine JIT-compiles some parts into machine code but still needs an interpreter to handle dynamic code execution. So you can say its JIT + Interpreter.

## Insights
- Runtime-Dependent Execution
    - C++ code runs directly on the OS.
    - Java code runs inside the JVM.
    - Python runs in PVM.
    - JavaScript cannot run on its own—it needs a runtime (browser or Node.js) to provide key features.
- JS is asynchronous by default (single-threaded and non-blocking) while others rely on multithreading to achieve concurrency (blocking by default). 
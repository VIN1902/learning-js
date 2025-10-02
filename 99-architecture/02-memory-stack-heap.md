# How stack/heap is slightly different
- In low-level languages (like C/C++), primitive values are directly stored on the stack, and objects are manually allocated on the heap.
- In JavaScript, the stack doesn’t directly store “values.”
- Instead, it stores lexical environment records (execution contexts).
    - Each record holds bindings (like “variable msg exists, currently points to "Hello after 2s"”).
    - So it’s not just raw data, but also information about the declaration, scope, assignment, and lifetime. It is more 'live'.
- When the function ends, its stack-frame is popped.
    - Normally, its environment record is gone too.
    - BUT if some inner function/closure references that environment, the whole record (not just the value) is moved to the heap for long-term storage.
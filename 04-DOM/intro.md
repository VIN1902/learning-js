# Document Object Model
- A web API that connects webpage content to the programming language like JS.
- This is done by modeling the document (webpage) as objects and representing them in a tree structure.
- Each node of the tree is an object of HTML document's content/parts (head, body, etc).

# Interfaces
- Interface describes the behaviours that a node can display.
- DOM interfaces describe standard behaviors (and sometimes list known properties) that DOM nodes can have.
- It's up to the specific nodes in the tree to implement the interfaces they need.
- For example, the `EventTarget` interface represents (but isn't) all nodes that have an `addEventListener()` method. It's then up to specific elements like `<button>` and `<div>` to implement the required methods.
- This is done to abstract away the individual implementation of these behaviour in each node and instead foucs on the general behaviour that a node can have.

# Window and document object
- The global object conists of properties and methods for not the just the document object but the entire tab of a brower.
- Within it is the document object which the actuall HTML page that's rendered on screen, and contains further nodes.
- To access: `console.log(window.document)` or just `console.log(document)` and if you want it as object then `{ document: document }`.
- Inside this object representation of document there are properties and methods. Notice how methods are set to null, so you can assign them your own functions.
```js
document.body.innerText = ""
const myHeading = document.createElement('h1')
document.body.appendChild(myHeading)
setInterval(()=>{
    const now = new Date()
    myHeading.innerText = `Time is ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
}, 1000)
```
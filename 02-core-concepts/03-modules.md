# Modules
- Split code into files for encapsulating logic.
- Export them for reuse in other files.

# Types of modules
1. Own code
- written by programmer in .js files.
- you make it.
- stored in local machine.
2. Built-in
- written by runtime env. makers.
- provided by runtime environments (browser/node) as standard-library.
- compiled into runtime binary by engine. not stored on disk.
- ex: fs/http/crypto/os (node), URL/fetch/document/console (browser)
3. Third-party
- written by other developers.
- downloaded from package managers like npm over the internet.
- stored in local machine inside nodu_modules/ directory.
- ex: express, react, etc.

# Different methods for modules
1. CommonJS (CJS)
```js
// file1.js
function add(a, b) { return a + b; }
module.exports = { add };

// file2.js
const math = require('./file1.js');
console.log(math.add(2, 3));
```
- used in node environment by default, non-standard.
- synchronous

2. ES Modules (ESM)
```js
// file1.js
export function add(a, b) { return a + b; }

// file2.js
import { add } from './file1.js';
console.log(add(2, 3));
```
- official ECMAScript Standard
- Asynchronous
- sets the node to use strict-mode by default

# Setup ESM in node
- all .js files by defualt are treated as CJS by node.
- explicitly need to tell node to use ESM.
1. change package.json
```json
{
    "type": "module"
}
```
2. file extension
- use .cjs for CJS and .mjs for ESM.
- usefull for a mixed system.

# What is package.json
- A JSON file in root directory, to store info/metadata about node project.
- Its used by node and npm to:
    - Install and manage dependencies.
    - Run scripts (like npm start, npm test).
    - Specify module system (CommonJS vs ES Modules).
    - Share your project/package with npm registry.

## How to create
1. Automatic by npm
```bash
npm init
```
2. Manually add the fields in file named package.json
 
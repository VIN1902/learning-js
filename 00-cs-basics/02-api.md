# API

## what is it?
-   api -> provides us the functionality to interact with outside world (outside from a language's scope), does so by hiding away the core implementation of functionality and provides you with tools directly.
-   it can be getting its data from outside server or inbuilt like in a browser but as long as the above sentence is adhered to in spirit anything (even these two cases) can be called an "api"
-   Think of an API as just a way to expose functionality without showing internal details.
-   Web APIs (Built into the Browser)/ Node APIs -> Functions like console.log(), fetch(), and setTimeout() are provided by the browser. Even though they are pre-written into the browser (inside the window object), they are still considered APIs because they expose certain functionalities in a structured way.
-   Third-Party APIs (External Services) -> These APIs (like YouTube API, Twitter API) are hosted on another server, and your JavaScript code sends a request to their servers to use their functionality.

### Reworded for clarity
-   An API provides functionality to interact with the outside world (anything beyond the core language itself). It does this by:
    1. Hiding the complex implementation of the functionality.
    2. Providing easy-to-use tools that allow you to interact with that functionality.
-   This applies to:
    1. External APIs (like REST APIs, Google Maps, Twitter API) → Fetching data from a remote server.
    2. Built-in APIs (like fetch(), setTimeout(), console.log()) → Provided by the browser or Node.js to extend JavaScript's capabilities.
-   If something hides its inner workings and exposes tools for you to interact with something outside the core language, it qualifies as an API—whether it's inbuilt or external!

### Difference Between Web APIs & External APIs

| **Feature**                   | **Web APIs (`fetch()`, `setTimeout()`)**      | **Third-Party APIs (Google Maps, Twitter API)**                         |
| ----------------------------- | --------------------------------------------- | ----------------------------------------------------------------------- |
| **Who provides it?**          | The **browser** (prebuilt in `window` object) | A **third-party service** (Google, Twitter, etc.)                       |
| **Where is the code?**        | Already built into Chrome/Firefox/Safari      | Hosted on an external server                                            |
| **How do you use it?**        | Call the method directly (`fetch(url)`)       | Send a request to their server (`fetch("https://api.twitter.com/...")`) |
| **Do you need the internet?** | ❌ No (runs locally)                          | ✅ Yes (needs network request)                                          |

## Application Programming Interface
-   "Application Programming Interface" means: A system that provides pre-defined tools (functions, methods) to allow your program to interact with it, without exposing the internal code.

| **Term**        | **Meaning in Context**                                                                                     |
| --------------- | ---------------------------------------------------------------------------------------------------------- |
| **Application** | The system providing the functionality (e.g., Browser, Node.js, a remote service like Twitter API).        |
| **Programming** | Code written to interact with that system.                                                                 |
| **Interface**   | A predefined way (methods/functions) to access the system’s features without knowing the internal details. |

1. Node.js APIs (like fs.readFile())
    - The Application is the Node.js runtime.
    - JavaScript programs interact with file systems, networks, etc.
    - The interface consists of methods like fs.readFile() (to read files).
2. External APIs (like Twitter API, Google Maps API)
    - The Application is an external service (e.g., Twitter).
    - Your JavaScript program makes HTTP requests to get data.
    - The interface is the REST API (like GET https://api.twitter.com/user).

## Misconception
- ✔️ APIs = Interfaces meant for PROGRAMS (languages) to interact with software.
- ✔️ UI features (like the Bezier tool) = Meant for HUMANS to interact with software.
- ✔️ If a UI feature has a scripting/programmatic way to use it, then THAT part is an API.

- programmatic access/interaction: It means a program (code) interacts with something instead of a human manually doing it. APIs are primarily for programs to talk to software.
    - Ex: Fetching Weather Data
    - Manual way: Open a browser, search "weather in New York," and read the result.
    - Programmatic way: Write JavaScript to fetch the weather automatically.
- It means one software (or script) interacts with another software using predefined rules (API calls, function calls, etc.) instead of human input.
- API = UI for programs , well kinda

# Modern s/w reality
- 80% of modern software is just a wrapper over another API
- Most devs aren’t building “new” tech, they’re packaging existing APIs with a better UI for specific markets.
- That’s just how modern tech works. Advancing technology today doesn’t mean reinventing the wheel, but improving what already exists.
- The real value in software development today isn’t who writes the most “original” code—it’s who solves real-world problems in the smartest way.
- Tech is not about reinventing things—it’s about making things easier, faster, and more useful.
- If you’re an indie dev without a team, budget, or years of free time, then using APIs is actually your superpower.
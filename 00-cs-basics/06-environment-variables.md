# What is it
- Storing global data for programs without hardcoding it into the software itself.
- what kind of data?
    - sensetive one
    - configuration setting to modify s/w later without chaning its code
    - key-value pair
- OS stores it for:
    - system wide settings
    - security reasons
    - flexibility to modify programs
- Environment variables are temporary and only exist while the program is running. Once the app stops, they are lost unless permanently set in the OS.

# How JS uses it
- node has its own global object that gets these from OS.
- instead of hardcoding api keys and ports, we can instead set a environment variable (programatically using JS, so API??) and then store the actual content into a .env file for our own reference. Now, the JS program can retrieve environment variables dynamically.
- dotenv package lets us load these variables from '.env' file to 'process.env' node object.

## process.env
- process.env is an API provided by Node.js that allows your JavaScript application to interact with the OS and retrieve environment variables from it.
- Think of process.env like a waiter in a restaurant:
    - Your JS app = A customer ordering food
    - The OS = The restaurant kitchen where food (data) is stored
    - Environment variables = Ingredients in the kitchen
    - process.env (Node API) = The waiter that goes into the kitchen, retrieves the ingredients, and brings them to your table
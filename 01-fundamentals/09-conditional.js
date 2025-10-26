/* 
`if (condition) {} else {}`

- concept is if the 'condition' is evaluated as truthy value then its block runs otherwise if evaluated as falsy value then else block runs.
- in JS falsy values are: [false, 0 (-0 and 0n), '', null, undefined, NaN]. everything else is truthy.
- truthy values gotchas: "false", '0', ' ',  [],  {},  function(){}

if ('') {
    // task 1
} else {
    // task 2    
}
- in this example empty string is evaluated as falsy value therefore else block is executed i.e. task 2.
*/

// if ask for masala maggi then add spices else give plain maggi
function cookMaggi(type) {
    type = String(type).toLowerCase();
    if (type === "masala maggi") {
        return `Adding spices please wait`;
    } else {
        return `Serving plain maggi right up`;
    }
}

function calcDiscount(totalAmount) {
    totalAmount = Number(totalAmount);
    if (totalAmount > 1000) {
        return `Your final amount is ${totalAmount - (0.1 * totalAmount)} after 10% discount`;
    } else {
        return `Your final amount is ${totalAmount}, no discount applicable`;
    }

    // Ternary Operator => condition ? truthy-execution : falsy-execution;
    //return totalAmount>1000 ? totalAmount * 0.9 : totalAmount;
}
console.log(calcDiscount('999'));

function trafficLight(light) {
    light = String(light).toLowerCase();
    // if (light === 'green'){
    //     return 'Go'
    // } else if (light === 'yellow'){
    //     return 'Slow Down'
    // } else if (light === 'red'){
    //     return 'Stop'
    // } else {
    //     return 'Invalid Traffic Light'
    // }
    
    switch(light){
        case 'green':
            console.log('Go');
            break;
        case 'yellow':
            console.log('Slow Down');
            break;
        case 'red':
            console.log('Stop');
            break;
        default:
            console.log('Invalid Traffic Light')
    }
    
}
// Inside switch case break or return -> break stops only switch not function and return stops the entire function implicitly stopping the switch too.
// break; to prevent waterfall condition.
trafficLight('gReeN')

function checkTruthyValue(value) {
    if(value){
        console.log(`${value} is Truthy`);     
    } else {
        console.log(`${value} is Falsy`);
    }
}

checkTruthyValue([])
checkTruthyValue({})
checkTruthyValue('')
checkTruthyValue([1,2])
checkTruthyValue({age: 22})
checkTruthyValue('Vikas')
checkTruthyValue(0)
checkTruthyValue(-1)
checkTruthyValue(null)
checkTruthyValue(undefined)

function login(username, password){
    return (username === 'admin' && password === 1234) ? 'login successful' : 'login failed'
}
console.log(login('ad',1212));
// && -> both conditions should be true then only execute
// || -> any first condition among multiple conditions, if found to be true then execute

// nullish coalescing operator (??) - made for cases where we can get either null or undefined we don't know. and we don't want to assign null or undefined.
let complexDataFromGodKnowsWhere;
complexDataFromGodKnowsWhere = 'very complex string data' ?? 10 // 'very complex string data'
complexDataFromGodKnowsWhere = null ?? 20 // 10
complexDataFromGodKnowsWhere = undefined ?? 30 // 30
complexDataFromGodKnowsWhere = null ?? 1 ?? 234 ?? 'wtf' ?? 0 ?? {key: "that's crazy"} // 1 (got null but don't let null get assigned instead assign whatever value mentioned is available first.)

// check if array is empty
let emptyarr = []
if (emptyarr.length === 0) console.log('array is empty'), console.log('another statement fit in one line');

// check if object is empty
let emptyobj = {}
if (Object.keys(emptyobj).length === 0) console.log('object is empty')
/* 
`if (condition) {} else {}`

- concept is if the 'condition' is evaluated as truthy value then its block runs otherwise if evaluated as falsy value then else block runs.
- in JS falsy values are: false, 0, '', null, undefined, NaN. everything else is truthy.

if (false) {
    // task 1
} else {
    // task 2    
}
- in this example false is evaluated as falsy value therefore else block is executed i.e. task 2.
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
// function -> A factory that is part of a bigger factor that only focus on one single functionality and is only concerned with incoming data (that we don't know what type will come), its processing and what it returns back to some other factory or manager (node).

// if(this block only executes when condition evalutes as true){}

function calcDiscount(totalAmount) {
    totalAmount = Number(totalAmount);
    if (totalAmount > 1000) {
        return `Your final amount is ${totalAmount - (0.1 * totalAmount)} after 10% discount`;
    } else {
        return `Your final amount is ${totalAmount}, no discount applicable`;
    }

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

const balance = new Number(1000.9823)

console.log(typeof balance) // object
console.log(typeof balance.toString()) // string
console.log(balance.toFixed(2)) // 1000.98
console.log(balance.toPrecision(5), typeof balance.toPrecision(5)) // 1001.0 string
console.log(balance.toExponential()) // 1.0009823e+3
console.log(balance.toLocaleString("ar-EG")) // ١٬٠٠٠٫٩٨٢
console.log(balance.valueOf()) // 1000.9823

const num = 99231999.67
console.log(`₹ ${num.toLocaleString('en-IN')}`)

// Math object

console.log(Math.PI);
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.2)); // 4
console.log(Math.ceil(4.2)); // 5 
console.log(Math.floor(4.9)); // 4
console.log(Math.min(3,2,1,5,6)); // 1
console.log(Math.max(3,2,1,5,6)); // 6

Math.random() // float number b/w 0 and 1
Math.floor((Math.random()*10)) + 1

const min = 10
const max = 20
// to get random number b/w 10 and 20
Math.floor(Math.random() * (max - min + 1)) + min

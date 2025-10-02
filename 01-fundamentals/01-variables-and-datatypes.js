// var gives scope issues.
let name = "vikas";
const pi = 3.14;

// Primitive datatypes
let number = 22; // Number
let myName = "Vikas"; // String
let veryLargeNumber = 22n; // Bigint
let binaryValue = true; // Boolean
let nothing = null; // Object
let notDefined = undefined; // Undefined
let symbolVar = Symbol(); // Symbol

// Non Primitive datatypes
let myObject = {
    name: "vikas",
    age: 22,
    currentGF: null,
};

// Web = Pages (send to user), Forms (data that user enters and sends to server) and Session (isLoggedIn? then authority)

function printLine() {
    console.log(`--------------------------------------------------------------------------`);
}

function printApproachResultType(directUserData,weirdUserData1,weirdUserData2,convertedDirectUserData,convertedWeirdUserData1,convertedWeirdUserData2,approach) {
    console.log(`'${directUserData}' converted to '${convertedDirectUserData}' using ${approach} approach`);
    console.log(`'${weirdUserData1}' converted to '${convertedWeirdUserData1}' using ${approach} approach`);
    console.log(`'${weirdUserData2}' converted to '${convertedWeirdUserData2}' using ${approach} approach`);
    console.log(`Type of '${convertedDirectUserData}' is '${typeof convertedDirectUserData}'`);
    console.log(`Type of '${convertedWeirdUserData1}' is '${typeof convertedWeirdUserData1}'`);
    console.log(`Type of '${convertedWeirdUserData2}' is '${typeof convertedWeirdUserData2}'`);
    printLine();
}

// Type conversion (data usually comes in formats that aren't what we need):
let directUserData = "69";
let weirdUserData1 = "69a123";
let weirdUserData2 = "a69b";

let convertedDirectUserData = Number(directUserData);
let convertedWeirdUserData1 = Number(weirdUserData1);
let convertedWeirdUserData2 = Number(weirdUserData2);
printApproachResultType(directUserData,weirdUserData1,weirdUserData2,convertedDirectUserData,convertedWeirdUserData1,convertedWeirdUserData2,"Number()");
// NaN is not a datatype its a response, so if you wanted number then of NaN prohibit user from further processing etc.

convertedDirectUserData = +directUserData;
convertedWeirdUserData1 = +weirdUserData1;
convertedWeirdUserData2 = +weirdUserData2;
printApproachResultType(directUserData,weirdUserData1,weirdUserData2,convertedDirectUserData,convertedWeirdUserData1,convertedWeirdUserData2,"Unary Operator");

convertedDirectUserData = parseInt(directUserData);
convertedWeirdUserData1 = parseInt(weirdUserData1);
convertedWeirdUserData2 = parseInt(weirdUserData2);
printApproachResultType(directUserData,weirdUserData1,weirdUserData2,convertedDirectUserData,convertedWeirdUserData1,convertedWeirdUserData2,"ParseInt");

console.log(`Recommended Method for convertion is Number() approach`);

directUserData = 69;
convertedDirectUserData = String(directUserData);
console.log(`${directUserData} converted to '${convertedDirectUserData}' using String() approach`);
console.log(`Type of '${convertedDirectUserData}' is ${typeof convertedDirectUserData}`);
printLine();

// Operations
let num1 = 10
let num2 = 5

let sum = num1 + num2
let difference = num1 - num2
let quotient = num1 / num2
let remainder = num1 % num2
let product = num1 * num2
let power = num1 ** num2

// comparison always returns boolean
console.log(num1 == num2); // Equal to
console.log(num1 != num2); // Not Equal to
console.log(num1 < num2); // Less Than
console.log(num1 > num2); // Greater Than
console.log(num1 <= num2); // Less Than Equal to

// Libraries -> for coreJS: Math and Date/Time, for nodeJS: crypto and http
printLine();

// # String
let str = 'This is a string'
console.log("String concatination" + " " + str);
console.log(str.length);
console.log(str.toUpperCase())
console.log(str.indexOf(' ')); //index of any substring
console.log(str.slice(0,4)); // get substring from starting index to 1 less than end index
console.log(`Your message is : ${str}`); // template literal
printLine();
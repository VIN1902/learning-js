/*
Conversion = Changing value from ont datatype to another, either explicitly by the programmer or implicitly by the JS engine automatically.
Coercion = Specifically the implicit conversion of a value from one datatype to another.
Typcasting = Spcecifically the explicit conversion of a value from one datatype to another.
*/

// Coercion
let res

res = "20" + 25 // 25 number converted to 25 string cause '+' operator is overloaded and performs concatination.
console.log(res) // "2025"

res = "20" * 25 // 20 string converted to 20 number cause '*' is an operator for only numbers
console.log(res) // 500

res = false + true // 1

res = "vikas" * 20 
console.log(res, typeof res) // NaN number

/*
NaN (not-a-number) is a numeric value.
NaN is treated as flasy value.

NaN happens when:
    1. failed number conversion
        ex: Number("abc")
    2. unrespresentable math operation with invalid operands - either operands involved were not valid numbers or result is an undefined outcome.
        ex: 'a' * 2, 0 / 0, Math.sqrt(-1)

NaN checking:
NaN === NaN is false
so we need isNaN() or Number.isNaN() methods
isNaN() performs a coercion to number before checking but Number.isNaN() strictly checks without any coercion.
isNaN("abc")        // true (because "abc" → NaN)
Number.isNaN("abc") // false (no coercion)
*/

// '!' operator first converts the operand into a boolean and then negates it.
// only ever use ! directly on an operand when its already a boolean.
// '!!' is often used to explicitly convert a value to boolean

// '==' is converting before checking and '===' is strict checking without conversion.
1 == "1" // true
1 === "1" // false
// only ever use == when you want to check for both null and undefined at the same time.
    // null == null is true and undefined == null is true and null == undefined is true
    // “If I only care that a variable has no value (either null or undefined), I’ll use == null. Otherwise, always use ===.”

// Typecasting

Number('10')
String(200)
Boolean('')
!!(404) // true
+"22" // 22 number

// Falsy values: [false, 0, -0, 0n, "", null, undefined, NaN]
// Truthy values: everything else not in falsy
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
checkTruthyValue(NaN)

// when you want to use object as number or string in a operation, use valueOf() and toString() methods

const obj = {
    valueOf() {
        return 10
    },
    toString() {
        return "69"
    }
}

console.log(obj * 5) // 50
console.log(String(obj) + " is best") // 69 is best

// Anomalies
/*
[] + []          // ""
[] + {}          // "[object Object]"
{} + []          // 0   <-- (depends on parsing context)
*/

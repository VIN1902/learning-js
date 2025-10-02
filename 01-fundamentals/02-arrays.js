const arr = [1,2,3,4,5,6,7,8,9]
console.log(`Total items: ${arr.length}`);
arr.push(10)
arr.pop()
arr.length
arr.slice(0,2) // [1,2]
arr.indexOf(7) // if '7' exits then its index return else return -1

let index = arr.indexOf(3)
if (index !== -1){
    console.log(arr.splice(index, 1));
}

arr.forEach((value, index)=>{
    console.log(`${index + 1}: ${value}`);
})

// concatination
let newArr = [10,11,12,13]
arr.concat(newArr)
let joinedArr = [...arr, ...newArr, 14,15,16]
console.log(joinedArr);

// array destructuring -> no need to rename, array is sequential
let [num1, num2] = arr;
console.log(num1, num2); // 1 2
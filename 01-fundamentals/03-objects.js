// object literals
let myData = {
    name: 'vikas',
    age: 22,
    isLonely: true,
    address: {
        flat: 68,
        block: 'A',
        apartment: 'Parwana',
        city: 'Mayur Vihar',
        state: 'Delhi',
        pincode: 110091,
        landmark: ['ASN School', 'Samachar Apartment']
    }
}
console.log(myData.address.landmark[0]);

//copy objects
let newData = myData // doesn't copy 'newData' has same address as 'myData' pointing to same mem. space in heap, so any change in one changes other.
newData = {
    ...myData,
    oldAddress: {
        flat: 91,
        block: null,
        apartment: 'Sadar',
        city: 'Mayur Vihar',
        state: 'Delhi',
        pincode: 110091,
        landmark: ['ASN School', 'Samachar Apartment']
    }
}
console.log(newData);
/*
NOT destructuring
let name = myData.name
let age = myData.age
*/
let {name: userName, age} = myData; // object destructuring -> renaming using 'originalName : newName'
console.log(userName + ' ' + age);
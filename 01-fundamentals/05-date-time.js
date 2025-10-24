const d = new Date()

console.log(d); // 2025-10-24T18:16:06.219Z
console.log(`.toLocaleString => `, d.toLocaleString()); // 24/10/2025, 11:46:06 pm
console.log(`.toLocaleDateString => `, d.toLocaleDateString()); // 24/10/2025
console.log(`.toLocaleTimeString => `,d.toLocaleTimeString()); // 11:46:06 pm

console.log(`.toString => `,d.toString()); // Fri Oct 24 2025 23:46:06 GMT+0530 (India Standard Time)
console.log(`.toDateString => `, d.toDateString()); // Fri Oct 24 2025
console.log(`.toTimeString => `, d.toTimeString()); // 23:46:06 GMT+0530 (India Standard Time)

console.log(`.toUTCString => `,d.toUTCString()); // Fri, 24 Oct 2025 18:16:06 GMT

console.log(`.toJSON => `,d.toJSON()); // 2025-10-24T18:16:06.219Z
console.log(`.toISOString => `, d.toISOString()); // 2025-10-24T18:16:06.219Z

//----------
console.log(d.getDate());
console.log(d.getMonth()); // jan is 0
console.log(d.getFullYear());

console.log(d.getDay()); // day in the week

console.log(d.getHours()); // 24-hour format
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());

//----------
let d1 = new Date(2025, 0, 23, 3, 33, 33) // yyyy/mm/dd h/m/s
console.log(d1.toLocaleString());

let d2 = new Date("01-04-2025") // mm/dd/yyyy
console.log(d2.toLocaleDateString());

//----------
let timestamp = Date.now()
console.log(timestamp) // in milliseconds
console.log(Math.floor(timestamp/1000)) // in seconds

//----------
let dateObj = new Date()
console.log(dateObj.toLocaleString('default', {
    weekday: "long"
}));

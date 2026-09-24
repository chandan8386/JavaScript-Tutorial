// Date convert to string 


let date = new Date();
console.log(date.toString()); // Sat Jun 15 2024 12:34:56 GMT+0000 (Coordinated Universal Time)
console.log(date.toDateString()); // Sat Jun 15 2024
console.log(date.toTimeString());
console.log(date.toISOString()); // 2024-06-15T12:34:56.789Z
console.log(date.toUTCString()); // Sat, 15 Jun 2024 12:34:56 GMT
console.log(date.toLocaleString()); // 6/15/2024, 12:34:56 PM
console.log(date.toLocaleDateString()); // 6/15/2024
console.log(date.toLocaleTimeString()); // 12:34:56 PM
console.log(date.valueOf()); // 1718470496789
console.log(date.getTime()); // 1718470496789
console.log(date.getFullYear()); // 2024
console.log(date.getMonth()); // 5 (June, zero-based index)
console.log(date.getDate()); // 15

// let myCreatedDate = new Date(2026, 10, 25); // Note: Month is zero-based (10 = November)
// let myCreatedDate = new Date(2026, 10, 25, 10, 33); // Year, Month (0-11), Day, Hour, Minute, Second, Millisecond
let myCreatedDate = new Date(2026-08-24); // Year, Month (0-11), Day, Hour, Minute, Second, Millisecond
console.log(myCreatedDate.toLocaleString());
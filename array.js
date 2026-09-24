// Array

const myArr = [0,1,2,3,4,5];
const myArr2 = ["Chandan", "Chaudhary"];

const myArr3 = new Array(1,2,3,4,5);
// console.log(myArr [1]);


// Array Methods

myArr.push(6); // add element at the end
myArr.push(7);
myArr.pop(); // remove element from the end

myArr.unshift(9); // add element at the beginning
myArr.shift(); // remove element from the beginning
// console.log(myArr); // [0, 1, 2, 3, 4, 5, 6]
const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// console.log(fruits.toString());


// console.log(myArr.includes(5)); // true
// console.log(myArr.indexOf(10)); // -1


// const myNewArr = myArr.join();
// console.log(myArr);
// console.log(myNewArr);


// Slice and Splice

console.log("A", myArr);
const myn1 = myArr.slice(1, 4); // [1, 2, 3]

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3); // [1, 2, 3, 4]
console.log(myn2);
console.log("C", myArr);
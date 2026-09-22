// Primitive Type data

// 7 Types: String, Number, Boolean, null, undefined, Symbol, BigInt




// const score = 100
// const scoreValue = 100.3
// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123');
// const anotherId = Symbol('123');
// console.log(id === anotherId); 
// false

// const bigNumber = 3456789012345678901234567890n;



// Reference (Non primitive)

// Array, Objects, Functions

// const heros = ['shaktiman', 'naagraj', 'doga'];
// let myObj = {
//     name: 'shaktiman',
//     age: 30,
// }

// const myFunction = function() {
//     console.log('Hello World');
// }

// console.log(typeof anotherId); 
// symbol

// Stack (Permitive) vs Heap (Non Permitive)

let myYoutubename = 'Chandanchaudharydotcom';
let anotherName = myYoutubename;
anotherName = 'saanvi211119';
console.log(myYoutubename, anotherName); 

// {myYoutubename: 'Codevolution', anotherName: 'Codevolution'}

let userOne = { 
    email: "google@gmail.com",
    upi: "user@ybl" 
}

let userTwo = userOne
userTwo.email = "chandan@gmail.com"
console.log(userOne.email); // chandan@gmail.com
console.log(userTwo.email); // chandan@gmail.com

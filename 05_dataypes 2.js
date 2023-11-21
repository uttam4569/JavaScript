// 1.Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);
//const bigNumber = 334455213456678946n







// 2.Reference (Non-Primitive)

// Array, Objects, Function// Non-primitive check data types is  function

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Uttam",
    age: 23,
}

const myFunction = function(){
    //console.log("Heloo world");
}

//console.log(typeof outsideTemp);

//+++++++++++++++++++Memory management+++++++++++++++++++//

// They are two types of memory management
// 1. Stack (Primitive)
// 2. Heap  (Non-Primitive)

let myYoutubename ="www.youtube.com/@fitnessninja00"

let anothername = myYoutubename;
anothername = "gym short video"

// console.log(anothername);
// console.log( myYoutubename);

let userOne = {
    email: "user@google.com",
    user: "user@ybl"
    
}

let userTwo = userOne

userTwo.email = "Uttam@google.com"

console.log(userOne.email);
console.log(userTwo.email);









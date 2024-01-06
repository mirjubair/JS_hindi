// Primitive (i.e call by value)

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 90.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('1234')
const anotherId = Symbol('1234')

// console.log(id == anotherId)

const bigNumber = 2435645787848n


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["superman","naagraj","doga"]

let myobj = {
    name:"jubair",
    age : 22,
}

const myFunction=function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof id);
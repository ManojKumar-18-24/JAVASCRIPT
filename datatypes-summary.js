//Based on memory storage and access datatypes are divided into
//2 types primitive and non-premitive

// Primitive 7 categories:(call by value)

// 7 are: String ,Number ,Boolean ,null ,undefined ,Symbol
// BigInt

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId)

console.log(id);

console.log(anotherId);

console.log(typeof id);

const bigNumber = 345678900245n ;

console.log(typeof bigNumber) ;
//Reference (Non primitive)

//are: Array ,Objects ,Functions

const heros = ["shaktiman","nagraj","doga"];

let myObj = {
    name: "hitesh" ,
    age : 22
}

// null is object  
//undefined gives "undefined"

// *****************************************************  //

// Stack (Primitive) ,Heap (Non-Primitive)

let myName = "ManojKumar" ;

let AnotherName = myName ;

AnotherName = "ManojKumar Samudrala" ;

console.log(AnotherName);

console.log(myName);

let userOne = {
    email: "user@google.com",
    upi : "nenuchepppa@ybl"
}

let userTwo = userOne ;

userTwo.email = "user2@google.com" ;

console.log(userOne);

console.log(userTwo);

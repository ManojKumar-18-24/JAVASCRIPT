// Dates

let myDate = new Date();

console.log(myDate.toString());

console.log(myDate.toLocaleString());

//Date type object exists in js

//let myCreatedDate = new Date(2023, 0, 23);
let myCreatedDate = new Date(2023,0,23,5,3);
console.log(myCreatedDate.toLocaleString());

myCreatedDate = new Date("01-14-2023"); //use formats and check.....

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
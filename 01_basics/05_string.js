const name = "hitesh"

const repoCount = 50 

console.log(name+repoCount);

console.log(`Hello my name id ${name} and my repoCount is ${repoCount}`);

console.log(typeof name) ; //object

const gameName = new String("hitesh");

console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName);

console.log(gameName.charAt(2));

console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4); // 4 index does not come....

console.log(newString);

const anotherString = gameName.slice(-8,4); 
//slice takes -ve values but substring if given negative
// starts from 0...

const newStringOne = "   hitesh         ";

console.log(newStringOne);

console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudary"

console.log(url.replace('%20','-'));

console.log(url.includes('https'));

console.log(gameName.split('-'));
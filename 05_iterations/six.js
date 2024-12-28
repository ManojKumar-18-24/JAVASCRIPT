const coding = ['js','ruby','java','python','cpp']

const values = coding.forEach( (item) => {
    return item;
})

console.log(values) // undefined..doesn't return

const myNums = [1,2,3,4,5,6,7,8,9,10]

let newNums = myNums.filter( (num) => num > 4)

console.log(newNums);
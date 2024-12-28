const myObject = {
    js: 'JavaScript' ,
    cpp : 'C++',
}

for (const key in myObject) {
    console.log(`${key} and ${myObject[key]}`)
}

const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {
    console.log(key)
    console.log(programming[key])
}
// Array specialized loops: Kuch loops specialized hote hai for arrays
// as most data from DN and API get returned in form of arrays

// arrays : for of, etc
// objects: for in
//1. for of (can be implemented on "strings",{objects},[arrays], etc)

// ["", "", ""]
// [{}, {}, {}]

// const numbers = [1, 2, 3, 4, 5]
// for (const num of numbers) { // no need to increment or give end condition, this loop will do all that by itself
//     // console.log(num);
// }

// const greetings = "Himanshu Bharti!"
// for (const greet of greetings) {
//     if (greet == " ") {
//         continue
//     }
//     console.log(greet);
// }

//2. Maps: DataStructure:-(similar to arrays but it is an object:- it does not contain any Duplicate values(UNIQUE VALUES) and it remembers ORDER of INSERTION)

const map = new Map() // map ek Object hai, so Methods honge
map.set('IN', "India")
map.set('PAK', 'Pakistan')
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('PAK', "chutiya")
// console.log(map);

// # for of on MAP 
// for (const key of map) {
// for (const [key,value] of map) { // [ ] :- Destructures the array, thus it do not return alag-alag arrays for each K-V pair
//     console.log(key, ":-", value);
// }

// # for of on- OBJECT (Object isnt iterable normally with ForOf)
// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }
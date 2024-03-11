// # for
// for (variable declaretion(happens only once); condition check(after this loop runs); increment/decrement(after running through loop, control comes here each time))

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is best number");
//     }//else 
//     console.log(element);
    
// }

// console.log(element); // element bahar accessible nahi hai(as its block scoped)

// #
// for (let i = 1; i <= 10; i++) {
//     // console.log(`Outer loop value: ${i}`);
//     console.log(`Table of ${i}`);
//    for (let j = 1; j <= 10; j++) {
//     // console.log(`Inner loop value ${j} and outer loop ${i}`);
//     console.log(i + '*' + j + ' = ' + i*j );
//    }
    
// }

// # Array pe loop lagane ke liye aur better loops hai in JS than For
// let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) { // "<=" will result in additional undefined value, that can be a great problem(In js we dont have "out of bounds" errors) 
//     const element = myArray[index];
//     console.log(element);
    
// }


// # break and continue (in cases in which we dont have to necessarily run all the code)

//1. break
for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`${i} is best number... BYE BYE`);
        break // loop/control flow ko break karne ke liye use hota hai
    }
    console.log(`value of i is ${i}`);
}

//2. continue (ek bar ignore krdo)
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue // 5 log nahi karega as continue SKIP kr deta hai is case ko
    }
   console.log(`Value of i is ${index}`);
    
}
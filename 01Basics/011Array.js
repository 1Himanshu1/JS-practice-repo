// Array

const myArr = [0, 1, 2, 3, 4, 5] // standard way to initialize array
console.log(myArr);
/* => The Array OBJECT, stores a collection of multiplt=e items under a single var name, and has members for performing common array operations
 1. JS arrays are re-sizable and can contain a mix of different data types
 2.  JS arrays are not associative arrays, i.e only integers value can be treated as indexes to access the elements of array
 3.  JS array are 0-indexed
 4.  JS array-COPY operations create SHALLOW-COPIES.(all std built-in Copy ops w/ JS OBJECTS create shallow copies, rather than DEEP-COPIES) 
  SHALLOW COPY => Original and Copy both Point to same reference (any change in either will affect both of them)
  DEEP COPY => Original and Copy do not point to same reference(treated as two different values)
 5. Each JS array has  length and Prototype{Array(0)} properties associated with it
*/

const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4) //(Object)
// console.log(myArr[1]);
// console.log(myArr2.length);
// console.log(typeof(myArr)); // object
// console.log(typeof(myArr2)); // object

// +++++++++++ Array methods ++++++++++++++
// ****** 1 . push()  adds a element to the last index
// myArr.push(6)
// myArr.push(7)
// console.log(myArr);

// // 2. pop() removes last element from array
// myArr.pop()
// console.log(myArr);

// // 3. unshift() shifts all elements of array to right and adds an ele in the 0 index
// // very time consuming in large db
// myArr.unshift(9)
// console.log(myArr);

// 4. shift() removes 1 ele from the array(0-indexed ele gets deleted)
// myArr.shift()
// console.log(myArr);

// // 5. includes() - questionnaire methods=> gives true or false(boolean)
// console.log(myArr.includes(9));

//6. indexOf(ele) - gives -1 if ele is not in the array
// myArr.shift()
// console.log(myArr.indexOf(3));

// 7. join() - converts all ele of array into string format
// const newArr = myArr.join()
// const newArr = myArr.join("-")

// console.log(myArr);
// console.log( newArr);


// 8. slice(DO NOT Mutate original array), splice(Mutates original array)

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);

console.log("B ", myArr); // original array is still intact after using slice

const myn2 = myArr.splice(1, 3)

console.log("C ", myArr); // original array has changed, i.e the splice range was deleted from the array
console.log(myn2);
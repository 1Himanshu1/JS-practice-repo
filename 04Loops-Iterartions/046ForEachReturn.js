// #
//  const coding = ['js', 'ruby','cpp','java', 'c', 'python'];

// ForEach does not return values properly, it returns undefin3d
// const values = coding.forEach( (item)=>{
//     // console.log(item);
//     return item
// }  )

// console.log(values);

// # Filter() -> TAKES A CALLBACK, returns values properly

const nums = [1,2,3,4,5,6,7,8,9,10]
// takes a filter condition, acc to which it returns the values
const myNums = nums.filter( (num)=> num>5) // .filter( ()=>{} ) -> along with { }, return keyword is essential
console.log(myNums);
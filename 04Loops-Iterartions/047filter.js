// # MAP -> auto returns a value same as filter but without checking if its true
const nums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = nums.map( (num)=>{ return num+10} )
// console.log(newNums);

// # METHOD CHAINING -> methods used subsequently

// const newNums2 = nums
//                     .map( (num)=>num*10 ) // Value from this map will get chained to the NEW MAP follwing this MAP
//                     .map( (num)=> num+1 )
//                     .filter( (num)=> num>=50)
// console.log(newNums2);
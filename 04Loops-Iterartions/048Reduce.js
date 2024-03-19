// # REDUCE METHOD -> reduces an array(for e.g,) to a single number/value
// 2 para + 1 para

const nums = [1,2,3,4]
// const result = nums.reduce( function(acc,currVal){
//     console.log(` acc : ${acc}, currval : ${currVal}`);
//     return acc+currVal;
// },2);
// // initial value(, 2) gets given to accumulator as its starting value
// console.log(result);

// #

// const total = nums.reduce( (acc, currval)=>{
//     return acc + currval
// }, 0)

// console.log(total);

// #
const course = [
    {  
        item: 'js',
        price:299
    },
    {  
        item: 'cpp',
        price:199
    }, 
    {  
        item: 'python',
        price:199
    }
];

const sum = course.reduce( (acc,item)=> ( acc + item.price), 0);
console.log(sum);
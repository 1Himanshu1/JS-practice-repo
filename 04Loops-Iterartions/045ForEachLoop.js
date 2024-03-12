const coding = ['js','cpp','java','python','ruby'];

// some loops ko directly Array ke properties me add kr diya jate hai 
// e.g, foreach, map, length, keys

// # forEach (higher-order function)

// coding.forEach( function(item){
// coding.forEach( (item)=>{
//     console.log(item);
// } );

// # giving a function to forEach's callabck parameter
// function printMe(i) {
//     // console.log(i);
// }

// coding.forEach(printMe) // we're ony giving reference here, not directly EXECUTING it

// # differnet params available in forEach=3
// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// } )

// # strong loop for DB op:- objects inside an array ( necessary as data from DB comes in this form mainly )
const arrObj = [
    {
        name:'Himanshu',
        age:26,
        language: 'js',
        stack: 'MERN'
    },
    {
        name:'Shudhanshu',
        age:27,
        language: 'js',
        stack: 'MERN'
    },
    {
        name:'p3',
        age:25,
        language: 'java',
        stack: 'java FS'
    }
]

arrObj.forEach( (item,index)=>{
    console.log(index,"is for", item);
    // console.log(`${index} is for ${item} item`); check this why not working
    // console.log(item.name);
})
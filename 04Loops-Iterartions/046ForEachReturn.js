// #
//  const coding = ['js', 'ruby','cpp','java', 'c', 'python'];

// ForEach does not return values properly, it returns undefin3d
// const values = coding.forEach( (item)=>{
//     // console.log(item);
//     return item
// }  )

// console.log(values);

// # Filter() -> TAKES A CALLBACK, returns values properly
// auto returns a value if TRUE
const nums = [1,2,3,4,5,6,7,8,9,10]
// // takes a filter condition, acc to which it returns the values
// // const myNums = nums.filter( (num)=> num>5) 
// const myNums = nums.filter( (num)=>{return num>5}) // .filter( ()=>{} ) -> along with { return }, return keyword is essential
// console.log(myNums);

//  # same as above
const newNums = []

nums.forEach( (num)=>{
    if(num>4){
        newNums.push(num)
    }
} );
console.log(newNums);

//  #

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// const user1 = books.filter( (book)=>( book.genre === 'History') );
// console.log(userBook);

// const user2 = books.filter( (book)=>( book.publish >= 2000) );
const user2 = books.filter( (book)=>{
    return book.publish >= 1990 && book.genre === 'History'
} );
console.log(user2);
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// 1. CONCAT
// BAD WAY TO CONCAT TWO ARRAYS

// marvel_heros.push(dc_heros) // SLICE PUSHES INTO THE MAIN existing ARRAY
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// GOOD WAY TO CONCAT TWO ARRAYS
// const allHeros = marvel_heros.concat(dc_heros) // CONCAT returns new array,i.e CONCAT joins ele from two arrays and PUT THEM INTO A NEW ARRAY(which we have to catch in a variable)
// console.log(allHeros);


// 2. SPREAD OPERATOR

// PROFESSIONAL WAY ( use spread operator[...])
// const all_new_heros = [...marvel_heros, ...dc_heros] // Analogy: kanch ka glass tut gya and all the ele inside it Bikhar gye by using [...arr_name]
//        var       = [ first arr ke bikhare hue ele + second arr ke bhikhare ele ]
// console.log(all_new_heros);


// 3. flat(depth)
// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// console.log(another_array);
// const real_another_array = another_array.flat(Infinity) // flat(depth-lvl) just gives all nested arr elements into 1-single array
// console.log(real_another_array);

//4. Array methods
// [.isArray,.from,.of]

// console.log(Array.isArray("Hitesh")) // checks if given ele is array? = returns boolean
// console.log(Array.from("Hitesh")) // makes an array from given element
// console.log(Array.from({name: "hitesh"})) // interesting(if it can't convert into array it returns EMPTY ARRAY = [])

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // makes an array from given elements
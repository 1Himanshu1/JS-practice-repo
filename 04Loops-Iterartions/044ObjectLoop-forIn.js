const myLang = {
    JS: 'javascript',
    Rb: 'Ruby',
    CPP: 'C++'
}

// for-in loop ()

// #
for (const key in myLang) {
    // console.log(`${key} is key for ${myLang[key]}`);
}

// #
const Programming = ['js','cpp','python','java']
for (const key in Programming) {
    // console.log(key, Programming[key]); // key gives index of arrays in case of Arrays(as "key=index in array" and "value = actual value of that index")
}

// # map isnt iterable, so for-in does not work

const map = new Map()
map.set('IN', "India")
map.set('PAK', 'Pakistan')
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('PAK', "chutiya")

for (const key in map) {
   console.log(key);
}

// #
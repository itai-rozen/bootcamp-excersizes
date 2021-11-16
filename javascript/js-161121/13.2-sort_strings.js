const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

// a.1. Sort the array of strings from descending to ascending
// order
// a.2. Sort the array of strings from ascending to descending
// order.

console.log('in ascending order: ', foods.sort())
console.log('in descending order: ', foods.sort().reverse())

const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
];

// b.1. Sort the array of strings from descending to ascending
// order.
// b.2. Sort the array of strings from ascending to descending
// order.

console.log('ascending order: ')
console.log(foodsWithUpperCase.sort((a,b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1))
console.log('descending order: ')
console.log(foodsWithUpperCase.sort((a,b) => a.toLowerCase() > b.toLowerCase() ? -1 : 1))

const words = ["apple", "supercalifragilisticexpialidocious",
"hi", "zoo"];

// c.1. Sort the array of strings from the longest word to the
// shortest word only using the sort function

console.log('original ordered array: ',words)
console.log('after sorting by words length (longest to shortest): ',words.sort((a,b) => b.length - a.length))
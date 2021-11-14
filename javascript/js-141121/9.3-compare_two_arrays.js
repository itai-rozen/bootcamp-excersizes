// You are given two arrays:
// Create a function that takes these two arrays as
// arguments.
// Compare these two arrays using 2 for loops and return the
// items that are the same. If none are the same return false.

const food = ["Noodle", "Pasta", "Ice-cream", "Meat",
"Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives",
"Hamburgers"];

const compareArrays = (arr1,arr2) => {
let sameItems = []
for (let i = 0; i < arr1.length; i++){
    for (let j = 0 ; j < arr2.length; j++){
        if (arr1[i] === arr2[j]) sameItems.push(food[i])
    }
}
return (sameItems.length > 0)? sameItems : false
}

console.log('1st array: ', food)
console.log('2nd array: ', food1)
console.log('Items that are the same: ', compareArrays(food,food1))

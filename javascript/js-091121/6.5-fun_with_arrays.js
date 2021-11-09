// 1. Fill an array with 100 of a same object using array fill
// method.
// 2. Create an array with numbers ranging from 1-100 using
// the Array.from method.
// 3. Convert only values of an object into one array.
// 4. Convert an array into one object.
// 5. Find out if an array is an array.
// 6. Copy an array.
// • Create a copy of an array that won’t effect the original
// array if modified.
// • Create a copy of an array that will effect the original
// array if modified.

const obj = {value: 1}
const filledArray = new Array(100)
filledArray.fill(obj,0,100)
console.log('filled array: ',filledArray)

const rangedArray = Array.from(Array(100).keys(), x => x+1)
console.log('array with numbers ranged from 1 to 100: ', rangedArray)

const objects = [
    {a:'a'},{a:'f'},{a:3},{a:456},{a:undefined}
]
let onlyValues = []

for (let i = 0; i < objects.length; i++){
    let value = Object.values(objects[i])
    onlyValues.push(...value)
}

console.log('objects array : ', objects)
console.log('only values array : ',onlyValues)
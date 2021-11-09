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

const arr2 = [234,2345,'michael',90]
let objArr = Object.assign({},arr2)
console.log('original array: ',arr2)
console.log('array turned to object: ',objArr)

console.log('is the original array is an array? ', Array.isArray(arr2))
console.log('is the original array is an array? ', Array.isArray(2))

console.log('change on copied array affects on original array:')
let originalArr = [1,2,3,4]
let copyArr = originalArr
copyArr.push(5)
console.log('original array: ',originalArr)
console.log('copied array: ',copyArr)

console.log('change on copied array DOESNT affect original array')
let secondCopy = originalArr.slice()
secondCopy.push(6)
console.log('original array: ',originalArr)
console.log('copied array: ',secondCopy)






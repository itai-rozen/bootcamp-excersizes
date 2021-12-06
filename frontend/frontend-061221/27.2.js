// Write two functions that use Promises that you can chain.
// The first function, makeAllCaps(), will take in an array of words and capitalize
// them, and then the second function, sortWords(), will sort the words in
// alphabetical order. If the array contains anything but strings, it should throw
// an error.
// Call the functions once with an array of words and call it once with an array
// that includes at least one item that is not a word. Print the resolve and reject
// in a .then, .catch.


const makeAllCaps = wordsArr => wordsArr.map(word => word.toUpperCase()) 
const sortWords = wordsArr => wordsArr.sort()
const checkNonWords = arr => arr.every(word => typeof word === 'string')



const arr1 = ['all','words','are','strings']
const arr2 = ['not','all','words','are','strings',1]

const modifyArr = function(arr) {
      new Promise((resolve,reject) => {
        if (checkNonWords(arr)) resolve(arr)
        else reject('array has some non-words in it!!')
    })
    .then(res => makeAllCaps(res))
    .then(res => console.log(sortWords(res)))
    .catch(err => console.log(arr,err))
}

console.log(modifyArr(arr1))
console.log(modifyArr(arr2))


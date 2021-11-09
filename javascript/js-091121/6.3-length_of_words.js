// Write a function that will receive an array of strings and will return a new
// array containing all the lengths of all the strings in the array it got as a
// parameter.
// So that if you call this function with this array for example:
// ["boo", "doooo", "hoo","ro"]
// it will return this array: [3, 5, 3, 2].

const getStringsLength = arr => {
    const lengthsArr = []
    for (let i = 0 ; i < arr.length; i++){
        lengthsArr.push(arr[i].length)
    }
    return lengthsArr
}
console.log('for the array : ["boo", "doooo", "hoo","ro"]')
console.log('strings length: ',getStringsLength(["boo", "doooo", "hoo","ro"]))
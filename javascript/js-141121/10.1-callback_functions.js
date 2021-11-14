// 1. Write a a function called ‘isString’ that receives 2
// arguments, a string and a callback function.
// The function checks that the string is indeed a string.
// If the string is a string, pass the string to a callback
// function which logs that string to the console.

const logger = str => console.log(str)

const isString = (str, callback) => {
    if (typeof str === 'string') callback(str)
    else console.log('not a string!')
}

let aString = 'wow im a string'
let notAstring = 234

isString(aString,logger)
isString(notAstring, logger)

// 2. Create a function called ‘firstWordUpperCase’ that
// receives 2 arguments, a string and a callback function.
// The function will capitalize the first word in the sentence
// and pass the string to a callback function which will create
// dashes between the words.
const dashTheSentence = str => str.replace(/\s+/g, '-')
const firstWordUpperCase = (str, callback) => {
    console.log('original string: ',str)
    let firstWhiteSpaceIdx = str.indexOf(' ') 
    str = str.slice(0,firstWhiteSpaceIdx).toUpperCase() + str.slice(firstWhiteSpaceIdx)
    console.log('string after capitalizing first word:  ',str)
    let modifiedStr =  callback(str)

    return modifiedStr
}
let string = "im a regular string with lowercase letters and white spaces and shit"
console.log('string after modfying: ', firstWordUpperCase(string,dashTheSentence))

// 3. Call the ‘firstWordUpperCase’ function with a callback of
// your choice.
string = 'capitalize first word and reverse the string'
const reverseStr = str => str.split('').reverse().join('')
console.log('original string: ', string)
console.log('string after using a callback function to reverse the string \n',firstWordUpperCase(string,reverseStr))

// Create your own function that will receive from one of its
// arguments a callback function.
const firstFn = str => str + ' with the first function'
const secondFn = str => str + ' with the second function'
const modifyStr = (str, fn) => fn(str)

let string2 = 'now the string works'
console.log('original string: ', string2)
console.log(modifyStr(string2,firstFn))
console.log(modifyStr(string2,secondFn))
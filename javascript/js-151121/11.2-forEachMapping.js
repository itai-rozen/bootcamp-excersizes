// 1. Write a function called doubleValues which accepts an
// array of integers and returns a new array with all the
// values in the array passed to the function doubled.
const array = [1,2,3,4,5,6,7,8,9,10]

const doubleValue = arr => arr.map(n => n * 2)

console.log('original array: ',array)
console.log('doubles (using map):' , doubleValue(array))
// Write a function called onlyEvenValues which accepts an
// array and returns a new array with only the even values in
// the array passed to the function.

const onlyEvenValues = arr => {
    const onlyEvens = []
    arr.forEach(n => {
        if (n % 2 === 0) onlyEvens.push(n)
    })
    return onlyEvens
}
console.log('only even values (using forEach): ',onlyEvenValues(array))

// Write a function called showFirstAndLast which accepts
// an array as an argument and returns a new array with only
// the first and last elements from the function’s argument
// array. The returned array should only contain elements that
// are strings.

const showFirstAndLast = arr => {
    const onlyStrs = []
    let newStr = ''
    arr.forEach((el) => {
        newStr = ''
        if (typeof el !== 'string' || el.length < 2) return
        else {
            newStr += el.charAt(0) + el.charAt(el.length-1)
            onlyStrs.push(newStr)
        }
    })
    if (onlyStrs.length < 2) return
    else return [onlyStrs[0], onlyStrs[onlyStrs.length-1]]
}

let otherArray = [1,'basda',3,4,5,'gabap']
console.log('original array: ',otherArray)
console.log(showFirstAndLast(otherArray))

// Write a function called vowelCount which accepts a
// string as an argument. The function should return an object
// which has the count of the number of vowel’s that are in
// the string. The key should be the vowel and the value
// should be the count. e.g. {a:3, o:2,u:4}.
// Should not be case sensitive.

const vowelCount = str => {
    let strLowerCaseArr = [...str.toLowerCase()]
    let vowelsMap = {}
    strLowerCaseArr.forEach(letter => {
        if (letter.match(/[aeiou]/)){
        (vowelsMap[letter]) ? vowelsMap[letter]++ : vowelsMap[letter] = 1
        }
    })
    return vowelsMap   
}

console.log('string: "alPaca ubuntu lol". vowel count: ',vowelCount('alPaca ubuntu lol'))

// Write a function capitalize that takes a string as an
// argument and will return the whole string capitalized

const capitalize = str => [...str].map(letter => letter.toUpperCase()).join('')

console.log('string: "im so lowercased". after capitalizing: ',capitalize('im so lowercased'))

// Write a function called shiftLetters that takes a string as
// an argument and return’s an encoded string with each
// letter shifted down the alphabet by one.

const shiftLetters = str => {
    const shiftedLetters = [...str].map((letter,i) => {
        if (letter !== ' '){
            let charCode = letter.charCodeAt()
            let nextCharCode = (charCode === 65 || charCode === 97) ? charCode + 25 : charCode - 1   
            letter = String.fromCharCode(nextCharCode)
        }
        return letter
    })
    return shiftedLetters.join('')
}

console.log('original string: "dad jokes". after shiftig: ',shiftLetters('dad jokes'))

// Create a function called swapCase that takes a string as
// an argument and returns a string that every other word is
// capitalized. (you can use the fifth’s exercise's function to
// keep it dry)

const swapCase = str => {
    return str.split(' ').map((word,i) =>  (i % 2 === 0)? capitalize(word): word).join(' ')
}

let originalStr = 'all the cases are lower!'
console.log(`original string:\n ${originalStr}. string after seapCase: \n ${swapCase(originalStr)}`)
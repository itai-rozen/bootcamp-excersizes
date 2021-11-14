// Create a function that takes one argument, an array.
// Use this array:
// to count over all the letters and return an object with the
// letter as the key and the letter count as the value.
// Expected output:
// { h: 3, e: 4, l: 3, o: 7, g: 3, d: 3, a: 2, y: 2, u: 2, r: 3, w: 1, c:
// 1, m: 2, t: 1, b: 1, s: 1 }
// Note:
// that it shouldn’t be case sensitive

const array = ["Hello", "Good Day", "Your Welcome", "hotdog",
    "hamburgers"];

const countLetters = arr => {
    const lettersMap = {}
    arr.forEach(word => {
        word = word.toLowerCase()
        for (letter of word) {
            if (lettersMap[letter]) lettersMap[letter]++
            else lettersMap[letter] = 1
        }
    })

    // Extra: return the letter with the most occurrences as well
    let maxOccurences = 0
    let maxOccurencesLetter
    for (letter in lettersMap) {
        if (lettersMap[letter] > maxOccurences) {
            maxOccurences = lettersMap[letter]
            maxOccurencesLetter = letter
        }

    }
    return { lettersMap, maxOccurencesLetter }
}

let letterObj = countLetters(array)
console.log('letters map: ', letterObj.lettersMap)
console.log('mostly occured letter: ', letterObj.maxOccurencesLetter)
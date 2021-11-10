// you have this string:
// const string = "The more you know, the more you know that you
// don't know";
// We want to get the index of the last occurrence of the word
// “you”. It should give you 42.
// You can solve this problem without the method indexOf. But
// if you can manage to do it also with indexOf you will get a
// cookie.

const string = "The more you know, the more you know that you don't know";
console.log('without using indexOf')
console.log('index of the last occurence of "you"', string.lastIndexOf('you'))

console.log('using indexOf because i want that damn because cookie')
let copyString = string.slice()
let indexOfYou = 0
let lastOccurenceIndex = 0

// while (indexOfYou !== -1){
    indexOfYou = string.indexOf('because',lastOccurenceIndex+1)
    lastOccurenceIndex = (indexOfYou !== -1)? indexOfYou : lastOccurenceIndex
// }


console.log('index of the last occurence of "because"', lastOccurenceIndex)
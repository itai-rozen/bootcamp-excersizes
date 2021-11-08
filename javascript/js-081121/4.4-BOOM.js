// Write a function that takes one argument n, an integer.
// Print out all the numbers between 1 to n.
// If the number is only divisible by 7 print “BOOM”
// If the number is divisible by 7 and also includes the digit 7 print “BOOMBOOM”
// If either of the above cases print the number.
// Example of numbers between 1 to 18:
// 1,2,3,4,5,6, BOOM-BOOM,8,9,10,11,12,13,BOOM,15,16,17,18

const sevenBoomer = n => {
    let numString = ''
    for (let i = 1; i <= 18; i++){
        if (i % 7 === 0){
            numString += ((i+'').includes(7)) ? 'BOOM-BOOM' : 'BOOM'
        } else numString += i
        numString += ','
    }
    return numString
}

console.log(sevenBoomer(18))
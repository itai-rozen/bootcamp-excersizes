const printToN = n => {
    [...Array(10)].forEach((n, i) => console.log(++i))
}
printToN(10)

const countX = (n, t) => {
    for (let i = 0; i < n; i = i + t) {
        console.log(i)
    }
}
countX(10, 3)

const countEven = n => {
    return [...n + ''].reduce((acc, n) => {
        if (+n % 2 === 0) acc++
        return acc
    }, 0)
}

console.log(countEven(1462))

const countEvenOnRange = n => {
    let arr = []
    for (let i = 111; i <= n; i++) {
        arr.push(i)
    }

    let result = arr.reduce((acc, n) => {
        return acc += countEven(n)
    }, 0)
    return result
}
console.log(countEvenOnRange(114))

const printReverse = () => {
    for (let i = 100; i > -1; i = i - 2) {
        console.log(i)
    }
}

printReverse()

const countABC = str => {
    let lettersMap = [...str].reduce((acc, char) => {
        return (acc[char]) ? acc[char]++ : acc[char] = 1
    }, {})
}

const toUpper = str => [...str].map(char => String.fromCharCode(char.charCodeAt(0) - 32)).join('')
console.log(toUpper('hello'))

const checkEmail = email => {
    let regex = /[\d\w]+@[A-Z]+\.[A-Z]+/i
    return regex.test(email)
}

console.log('check email: ',checkEmail('itai@mail.com'))

const checkPassword = pass => {
    let passArr = [...pass]
    let passNums = passArr.filter(char => !isNaN(+char)).length
    let passUpper = passArr.filter(char => /[A-Z]/.test(char)).length
    let passLower = passArr.filter(char => /[a-z]/.test(char)).length
    console.log(passLower)
    console.log(passUpper)
    console.log(passNums)
    return (passNums >= 3 && passUpper >= 2 && passLower >= 1)
}

console.log(checkPassword('Z14Ar2'))

const isStrike = num => [...num + ''].sort((a, b) => a - b).join('')
console.log(isStrike(143))

const aba = str => {
    let strArr = [...str]
    let revStr = [...strArr].reverse()
    let isPoli = strArr.every((char,i) => char === revStr[i] )    
    return isPoli
}

console.log(aba('aba'))

const numPalindrom = num => {
    let numArr = [...num+'']
    while (numArr.length > 1){
        if (numArr[0] !== numArr[numArr.length-1]) return false
        numArr.shift()
        numArr.pop()
    }
    return true
}
console.log(numPalindrom(12241))
console.log(numPalindrom(1221))
console.log(numPalindrom(121))

const countChar = s => {
    let strArr = [...s]
    let count = 0
    let maxCount = 0
    for (let i = 0; i < strArr.length-1; i++){
        if (strArr[i] === strArr[i+1]) count++
        else {
            if (count > maxCount) maxCount = count
            count = 1
        }
    }
    if (count > maxCount) maxCount = count
    return maxCount
}

console.log(countChar('ssaaaaabbbbbbb'))

const countBigAndSmall = s => {
    let strArr = [...s]
    let upperRegex = /[A-Z]/
    let lowerRegex = /[a-z]/
    let upperThenLowerCount = 0
    for (let i = 0; i < strArr.length-1; i++){
        if ((upperRegex).test(strArr[i]) && (lowerRegex.test(strArr[i+1]))) upperThenLowerCount++
    }
    return upperThenLowerCount
}

console.log('for str aBssDsKj', countBigAndSmall('aBssDsKj'))

const beforeNumber = nums => {
    let followNumCount = 0
    for (let i = 0; i < nums.length-1; i++){
        if (+nums.charAt(i)+1 === +nums.charAt(i+1)) followNumCount++
    }
    return followNumCount
} 
console.log(beforeNumber('785289154'))

const countIncrement = num => {
    let strNum = [...num+'']
    let strNumCopy = [...strNum].sort((a,b) => a-b)
    console.log(strNum)
    console.log(strNumCopy)
    for (let i = 0; i < strNum.length; i++){
        if (strNum[i] !== strNumCopy[i]) return false
    }
    return true
}

console.log(countIncrement(123657))
console.log(countIncrement(123567))


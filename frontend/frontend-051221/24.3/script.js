function Arr(n1, n2, n3, n4, n5) {
    this.array = [n1, n2, n3, n4, n5]
}

const arr1 = new Arr(1, 2, 3, 4, 5)
console.log('instance of Arr: ',arr1.array)
Arr.prototype.filter = function () {
    const newArr = []
    this.array.forEach(n => {
        if (n % 2 === 0) newArr.push(n)
    })
    return newArr
}
Arr.prototype.find = function (idx) {
    let foundNum
    this.array.forEach((n, i) => {
        if (i === idx) foundNum = n
    })
    return foundNum
}
Arr.prototype.reduce = function(){
    let sum = 0
    this.array.forEach(n => sum += n)
    return sum
}
const filteredArr = arr1.filter()
const idx3OfArr = arr1.find(3)
const arrSum = arr1.reduce()
console.log('filter onlt even nums: ',filteredArr)
console.log('find the number in the array at the index 3:',idx3OfArr)
console.log('sum of array: ', arrSum)
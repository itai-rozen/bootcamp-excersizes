const removeDuplicates = arr => {
    let arrWithoutDuplicates = []
    arr.forEach(n => { if (arrWithoutDuplicates.indexOf(n) === -1) arrWithoutDuplicates.push(n)} )
    return arrWithoutDuplicates
}

let arrWithDuplicates = [1,2,2,1,2,1,1,2,1,4,4,2,4,3,3]
let modifiedArr = removeDuplicates(arrWithDuplicates)
console.log('original array: ', arrWithDuplicates)
console.log('array after removing duplicates: ', modifiedArr)

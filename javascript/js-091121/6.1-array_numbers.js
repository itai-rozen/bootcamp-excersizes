// Create array with numbers :

// 1. Print with for loop all the number.
// 2. Create function “arrayLength” that return the array length (don’t use arr.length)
// 3. Create function “arraySum” , the function return the sum of all elements in array.
// 4. Create function “arrayMulti” , the function return the multiplication of all the
// elements in array.


const arr = [1,7,3,0,-5,7,3,9];

const printNums = arr => {
    console.log('the contents of the array: ')
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}

const arrayLength = arr => {
    let count = 0

    for (num of arr){
        count++
    }

    return count
}

const arraySum = arr => {
    let sum = 0
    for (let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}

const arrayMulti = arr => {
    let multi = 1
    for (let i = 0; i < arr.length; i++){
        multi *= arr[i]
    }
    return multi
}

printNums(arr)
console.log('Array length: ',arrayLength(arr))
console.log('Array sum: ',arraySum(arr))
console.log('Array multiplication: ',arrayMulti(arr))

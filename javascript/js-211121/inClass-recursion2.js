const powNum = (n,power) => {
    if (power === 1) return n
    n *= powNum(n, power-1)
    return n
}

console.log(powNum(5,3))


const searchRecursion = (arr,n) => {
    let length = arr.length
    let middle = Math.floor(length/2)
    if (arr[middle] === n) return middle
     middle = (n > arr[middle])? 
        middle + searchRecursion(arr.slice(middle),n) :
        searchRecursion(arr.slice(0,middle),n)
    return middle
} 
const searchLoop = (arr,n) => {
    for (let i = 0, length = arr.length; length > 0; length = Math.ceil(length /2)){
        let middle = Math.floor(length/2)
        if (n < arr[middle]){
            arr = arr.slice(0, middle)
        } else if (n > arr[middle]) {
            arr = arr.slice(middle)
            i += middle
        } else{
            i += middle
            return i
        } 
    }
}
const array = [1,2,4,6,8,10,56];
// console.log('expected 2. got:',searchLoop(array,4))
console.log('expected 4. got:',searchRecursion(array,8))
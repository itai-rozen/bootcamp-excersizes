// Write the following functions using the reduce built-in function.
const nums = [1,2,3,4,5,6,2]
// 1. max
console.log('original array: ',nums)
let ans = nums.reduce((max, num) => max = (num > max)? num : max)
console.log('biggest number: ',ans)
// 2. sum of even numbers
ans = nums.reduce((sum, num) =>  {
 return sum += (num % 2 === 0) ? num : 0 
} ,0)
console.log('sum of even numbers: ',ans)
// 3. average
ans =  nums.reduce((sum,num) => {
    return sum += (num / nums.length)
},0)
console.log('average: ',ans)





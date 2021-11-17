
function getSumOfEven(arr){
    return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
}
let result = getSumOfEven([1,2,3,4,5,6,7,8,9,10]);
console.log(result)
// [1,2,3,4,5,6,7,8,9,10]   => 2+4+6+8+10 = 30

// we want to sum all numbers in even cells in arrays of size 10:
 
// 1. First find the line that contains the problem. Write it down.
//      line 3
// 2. Which debug method did you use to find the bug?
//      DevTools debugger
// 3. Explain the bug in your own words.
//      The elements in the function were of odd cells and not even. in the debugger
//      when i hovered over the cells i saw the values are not the ones from the right cells
// 4. Fix the code and submit it all.
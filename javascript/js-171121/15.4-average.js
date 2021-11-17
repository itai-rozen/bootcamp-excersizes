
function calcAverage(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    } return sum / arr.length;
}
let result2 = calcAverage([85, 90, 92]);
console.log(result2)

// 1. First find the line that contains the problem. Write it down.
//      line 3
// 2. Which debug method did you use to find the bug?
//      console.log + devtools debugger
// 3. Explain the bug in your own words.
//      the sum variable wasnt initialized and was undefined. therefore the returned value was NaN
//      also the function is called "calcAverage" but it doesnt calaulate average, but rather 
//      sum the array. fixed it by adding "/ arr.length" after the returned "sum"
// 4. Fix the code and submit it all.
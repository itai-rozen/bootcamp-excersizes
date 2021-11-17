
function countOccurrences(str, char) {
    let counter = 0; debugger
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            counter = counter + 1;
        }
    } return counter;
}
let result3 = countOccurrences("ini mini miny moe", "n");
console.log(result3)

// 1. First find the line that contains the problem. Write it down.
//      line 6
// 2. Which debug method did you use to find the bug?
//      console.log + devtools debugger
// 3. Explain the bug in your own words.
//      the counter wasnt assigned with the new value, therefore it remained 0
//      fixed it by addin "counter = " before "counter + 1"
// 4. Fix the code and submit it all.
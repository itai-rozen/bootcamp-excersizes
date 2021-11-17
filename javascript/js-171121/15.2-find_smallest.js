
function findSmallest(a, b, c) {
    if (a > c && b > c) {
        return c;
    } else if (b > a && c > a) {
        return a;
    } else {
        return b;
    }
}
findSmallest(52, 66, 2)

// 1. First find the line that contains the problem. Write it down.
//      line 11
//      lines 3 and 5
// 2. Which debug method did you use to find the bug?
//      i noticed 3 dots beneath the function call. when i hovered  over it it said 
//      "Could not find name 'findSmalest'. Did you mean 'findSmallest'?"   
//      second - you cannot compare numbers like this, you need to put it in a separated
//      (&&) statements
//      third - the function returns the biggest number and not the smallest
// 3. Explain the bug in your own words.
//      function call was mispelled.
// 4. Fix the code and submit it all.
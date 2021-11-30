var b = 1; // b is assigned with a value of 1
function someFunction(number) {
    function otherFunction(input) {
        return b;
    }
    console.dir('inside the function',otherFunction)
   var b = 5;  // b value is reassigned and saved as closure of otherFunction
    
    return otherFunction;
}
var firstResult = someFunction(9); // function is returned with b stored in closure
console.log('first result: (someFunction(9)) ', firstResult) // returns otherFunction
var result = firstResult(); // b returns with the value of 5

var a = 1;
function b2() {
    a = 10;
    console.log('a inside b2: ', a)
    return
    function  a(){ }
}
b2();
console.log('a:', a); // 1
// The function declaration in b2 is hoisted to the beginning of the b2 function. declaring a local
// function with the name a. after that, the local function is being changed to a local variable a
// with the value of 10. after the function finish executing, the local variables no longer exist
// and were left with the global variable a with the value of 1

let i;
for (i = 0; i < 3; i++) {
    const log = () => {
        console.log(i);
    }
    setTimeout(log, 100);
}
// i is declared in the global scope and therefore is a global variable.
// the asynchronous function (setTimeOut) is popped out of the event flow and runs only
// after the loop is finished. i is being incremented by the loop but remains "alive" because
// it is global. at the end of the loop it reaches the value of three and exits the loop.
// then the log function runs three times (because its being called three times) with the
// i value of 3.



function funcA() {
    console.log(a);
    console.log(foo());
    var a = 1;
    function foo() {
        return 2;
    }
}
funcA();
// 'a' will be equal to undefined. the variable is declared after its been logged to the console
// so it will be hoisted but without value/
// the 2nd console.log will return 2 because the function is hoisted and you can call it before
// it is actually declared
// Without running the code below, explain in your own words what the result
// of each block of code will be and why.
// If there are any faulty outputs, please write on how we can fix them.

var fullName = 'John Doe';
var obj = {
    fullName: 'Colin Ihrig',
    prop: {
        fullName: 'Aurelio De Rosa',
        getFullName: function () {
            return this.fullName;
        }
    }
};
console.log(obj.prop.getFullName());
// this will return the closest scope full name: Aurelio De Rosa
var test = obj.prop.getFullName;
// without running the function from the object path, the full name of the window object
// will be logged : John Doe
console.log(test());

function funcB() {
    let a = b = 0;
    a++;
    return a;
}
funcB();
console.log(typeof a);
console.log(typeof b);
// when you assign variables this way, the a is assigned locally and b is assigned globally.
// thats why type of a will be undefined (it is out of the function scope)
// type of b will be number.

function funcC() {
    console.log("1");
}
funcC();
function funcC() {
    console.log("2");
}
funcC();

// in both cases the console will log "2" because it is the latest funcC definition 

function funcD1() {
    d = 1;
}
funcD1();
console.log(d);
// declaring a variable without const, let or var will make it global. this will log 1
function funcD2() {
    var e = 1;
}
funcD2();
// console.log(e); // e is declared in the function scope and wont be seen in the global scope
console.log(funcD2())

function funcE() {
    console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();
// the console.log begins before the variable declarations, so it will log undefined.
// then, when the function is called, the global variable will be logged - 1
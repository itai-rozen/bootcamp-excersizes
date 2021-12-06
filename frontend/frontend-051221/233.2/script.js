// Your Task: Edit the storm object. Invoke the printSuperPower function using
// the storm object as the context of the function.
// So your output should be: my super power is flying.
// Well, Storm also controls the weather, so, whatever you choose!
// You cannot change the printSuperPower function
// Submit the file to Hive.
const storm = {
// add code here
superPower: 'flying',
print: printSuperPower
}
storm.print()


function printSuperPower() {
    console.log("my superpower is " + this.superPower);
}


let miliSecs = 0
let secs = 0
let minutes = 0
const func = () => {
    miliSecs += 100
    if (miliSecs === 1000){
        secs += 1
        miliSecs = 0
    }
    if (sec = 60) mins += 1
    if (mins === 60) stop()
}
document.querySelector('button').addEventListener('click', stop)
function stop(){
    clearInterval()
}

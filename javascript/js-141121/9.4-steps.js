// Write a function that has one argument, a positive integer.
// Lets call it N.
// The function should console log a step shape.
// With N levels using the # character. Make sure the step has
// spaces on the right hand side if empty!

const steps = N => {
    
    let stepsArr = []
    for (let i = 0; i < N ; i++){
        stepsArr.push(' ')
    }
    for (let i = 0; i < N; i++){
        stepsArr[i] = '#'
        console.log(stepsArr.join(''),'<- notice the spaces?')
    }

}

console.log(steps(3))
const countDownWithFor = n => {
    for (let i = n; i > 0; i--){
        console.log(i)
    }
}
countDownWithFor(5)

const countDownRecursion = n => {
    if (n === 0) return
    console.log(n)
    countDownRecursion(n-1)
    console.log('after recursion" ',n)
}

const countDownImplicit = n => {
    if (n > 0) {
        console.log('n implicit: ',n)
        countDownImplicit(n-1)
    }
}

countDownRecursion(5)
countDownImplicit(5)
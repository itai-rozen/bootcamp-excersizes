const greaterThan10 = n => { 
      new Promise((resolve,reject) => {
        (n > 10)? resolve(`${n} is larger han 10!!!`) : reject( ` ${n} is not larger than 10:(`)
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
}
console.log('i run before greather than 10 func')
greaterThan10(2)
greaterThan10(20)
console.log('i run after greather than 10 func')



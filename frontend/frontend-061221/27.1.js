const greaterThan10 = n => { 
      new Promise((resolve,reject) => {
        (n > 10)? resolve(`${n} is larger han 10!!!`) : reject( ` ${n} is not larger than 10:(`)
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
}
greaterThan10(2)
greaterThan10(20)



// Create a simple password validation function that takes a
// password string as an argument.
// If the passwords length is more than 7 characters return
// “Strong”. If it is less than 7 characters long return “Weak.
// 1) Create a function that uses a if/else conditional
// expression.
// 2. Create a function that uses a ternary conditional
// expression.
// 3. Create a function that uses a && logical operator.
// 4. Create an “advanced” password validation function that
// takes a password string as an argument.
// If the password length is more than 7 characters long and
// has at least one capital letter return “Very Strong”.
// If the password length in only 7 characters long return
// “Strong”.
// If the password length is less than 7 characters long return
// “Weak”
// Use only a ternary conditional expression.

const passwordValidator1 = pasword => {
    if (password.length > 7) return 'Strong'
    else return 'Weak'
}
const passwordValidator2 = pasword => {
    return (password.length > 7) ?   'Strong' : 'Weak'    
}

const advancedPasswordValidatr = password => {
    console.log('The password you entered: ',password)
    return (isContainingCapital2(password) && (password.length > 7)) ? 'very strong ' :
            (password.length === 7) ? 'Strong' :
            'Weak'
}

// solution using regex

const isContainingCapital1 = password => {
    // Turning the input to string in case it isnt
    password += ''
    console.log('password: ',password)
    return password.match(/[A-Z]/)
}

// solution using loop

const isContainingCapital2 = password => {
    // Turning the input to string in case it isnt
    password += ''
    for (let i = 0; i < password.length; i++){
        if (password[i].toUpperCase() === password[i] &&
            isNaN(+password[i])) return true
    }    
    return false
}

console.log(advancedPasswordValidatr('De123456'))
console.log(advancedPasswordValidatr('de123456'))
console.log(advancedPasswordValidatr('D123456'))
console.log(advancedPasswordValidatr('D12345'))
console.log(advancedPasswordValidatr(12345678))
console.log(advancedPasswordValidatr(1234567))
console.log(advancedPasswordValidatr(123456))
console.log(advancedPasswordValidatr('1234Da56'))


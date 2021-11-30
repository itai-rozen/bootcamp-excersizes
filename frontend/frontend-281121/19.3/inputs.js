const CODE = '123456'
const inputs = document.querySelectorAll('.input')

const getFirsstEmptyInput = () => [...inputs].find(input => (!input.value.length))


const insertVals = (inputsArr, lettersArr) => {
    inputsArr.forEach((el, i) => {
        el.value = ''
        el.value = lettersArr[i]
    })
}

const moveToNextInput = (index, arr) => {
    if (index < arr.length - 1) arr[index + 1].focus()
    else return
}

inputs.forEach((input,i) => {
    input.addEventListener('click', () => {
        let firstInput = getFirsstEmptyInput()
        if (!firstInput) return
        firstInput.focus()
    })
    input.addEventListener('input', (e) => {
        let value = e.target.value
        if (value.length === 1) {
            moveToNextInput(i, inputs)
        }
    })
    input.addEventListener('paste', e => {
        e.preventDefault()
        let data = e.clipboardData.getData('text/plain')
        if (data.length < 6) {
            alert('password must contain 6 digits')
            return
        }

        let digits = data.split('')
        let regex = /\w/i
        let isLetter = digits.some(digit => digit.match(regex))
        if (isLetter) {
            alert('only digits!')
            return
        }
        insertVals(inputs, digits)
    })
})




let passwordCheckBtn = document.querySelector('.check-pass-btn')
passwordCheckBtn.addEventListener('click', () => {
    let password = [...inputs].map(input => input.value).join('')
    alert(password === CODE ? 'thats right! come on in' : 'GTFO')
})

let clrInputBtn = document.querySelector('.clr-inputs-btn')
clrInputBtn.addEventListener('click', () => {
    inputs.forEach(input => input.value = '')
    inputs[0].focus()
})







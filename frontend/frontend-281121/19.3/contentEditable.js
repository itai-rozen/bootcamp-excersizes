window.addEventListener('load', () => {
    // first p autofocus
    document.querySelector('.focus-0').focus()
})

let userInput = ''


const focusNextElement = (index, elArr) => {
    if (index < elArr.length - 1) document.querySelector(`.focus-${index + 1}`).focus()
}

const submitInput = input => {
    let submitBtn = document.querySelector('.submit-btn')
    submitBtn.click()
}

let focusElements = document.querySelectorAll('.focus')
focusElements.forEach((el, i) => {
    el.addEventListener('input', () => {
        let text = el.textContent
        if (text.length === 1) {
            userInput += text
            if (userInput.length < 6) focusNextElement(i, focusElements)
            else submitInput(userInput)
        } else return
    })
})

document.querySelector('.clr-btn').addEventListener('click', () => {
    document.querySelectorAll('.focus').forEach(el => el.textContent = '')
    document.querySelectorAll('.input').forEach(el => el.textContent = '')
    userInput = ''
    document.querySelector('.focus-0').focus()
})

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    alert('submitted!')
})

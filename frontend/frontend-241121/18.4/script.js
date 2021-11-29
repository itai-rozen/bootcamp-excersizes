let elBtn = document.querySelector('.btn')
let elInput = document.getElementById('smiley')

let elContainer = document.querySelector('.smileys-container')
elBtn.addEventListener('click', () => {
    elContainer.innerHTML = ''
    let inputValue = elInput.value
    if (/\D/.test(inputValue) || inputValue > 1000) return
    for (let i = 0; i < inputValue; i++) {
        let img = document.createElement('img')
        img.src = './smiley.png'
        elContainer.appendChild(img)
    }
})
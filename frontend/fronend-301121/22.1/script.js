const form = document.querySelector('form')
const inputs = document.querySelectorAll('.input')
const modal = document.querySelector('.modal-container')

form.addEventListener('submit', e => {
    e.preventDefault()
    const ul = document.querySelector('.details-list')
    ul.innerHTML = ''
    const listElements = [...inputs].map(input => {
    const { id, value } = input
    let li = document.createElement('li')
    let span = document.createElement('span')
    span.textContent = id.charAt(0).toUpperCase() + id.slice(1) + ':'
    let span2 = document.createElement('span')
    span2.textContent = value
    li.appendChild(span)
    li.appendChild(span2)
    ul.appendChild(li)
})
modal.classList.add('show')
})
const changeButton = document.querySelector('.change-btn')
const confirmButton = document.querySelector('.confirm-btn')
changeButton.addEventListener('click', () => {
modal.classList.remove('show')
})
confirmButton.addEventListener('click', () => {
modal.classList.remove('show')
const h1 = document.querySelector('h1')
h1.classList.add('show')
})
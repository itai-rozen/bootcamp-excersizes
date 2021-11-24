// 1. Change the text from “title 2” to “main title”
// 2. Add another sub title with the text “sub title 4”
// 3. Delete the last <li> element from the list.
// 4. Change the <title> element text to “Master Of The Dom”.
// 5. Change the text of the <p> element ot something else of your


let ulElement = document.querySelector('ul')
ulElement.querySelector('.start-here').textContent = 'main title'
let liElement = document.createElement('li')
liElement.textContent = "sub title 4"
let childUl = ulElement.querySelector('ul')
console.log(childUl)
childUl.appendChild(liElement)
let listElements = document.querySelectorAll('li')
console.log(listElements)
ulElement.removeChild(listElements[listElements.length-1])
document.title = "Master of the Dom"
document.querySelector('p').textContent = 'Shalom Olam'
// 1. Change the text from “title 2” to “main title”
// 2. Add another sub title with the text “sub title 4”
// 3. Delete the last <li> element from the list.
// 4. Change the <title> element text to “Master Of The Dom”.
// 5. Change the text of the <p> element ot something else of your


let liElement = document.querySelector('ul')
liElement.querySelector('.start-here').textContent = 'main title'
let anotherLiElement = document.createElement('li')
anotherLiElement.textContent = "sub title 4"
let childUl = liElement.querySelector('ul')
console.log(childUl)
childUl.appendChild(anotherLiElement)
let listElements = document.querySelectorAll('li')
let ulElement = document.querySelector('ul')
ulElement.removeChild(listElements[listElements.length-1])
document.title = "Master of the Dom"
document.querySelector('p').textContent = 'Shalom Olam'
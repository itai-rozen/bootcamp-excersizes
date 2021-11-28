const dqs = (selector) => document.querySelector(selector)
const dqsa = (selector) => document.querySelectorAll(selector)
const create = el => document.createElement(el)
const append = (el,parent) =>{
    if (parent === 'body')document[parent].append(el)
    else dqs(parent).append(el)
}
let interval
const addClass = (el,className) => el.classList.add(className)
const gifSources = [
    'https://media.giphy.com/media/3o85xsGXVuYh8lM3EQ/giphy.gif',
    'https://media.giphy.com/media/3o85xsGXVuYh8lM3EQ/giphy.gif',
    'https://media.giphy.com/media/IMDSOJvLn9RaU/giphy.gif',
    'https://media.giphy.com/media/l3V0x6kdXUW9M4ONq/giphy.gif',
    'https://media.giphy.com/media/xUA7b2S7SxhM1cGdsQ/giphy.gif',
    'https://media.giphy.com/media/xUA7b2S7SxhM1cGdsQ/giphy.gif',
    'https://media.giphy.com/media/AhQvSi0Kc0XbrS0B9C/giphy-downsized-large.gif',
    'https://media.giphy.com/media/89Eko49m84Ja/giphy.gif',
    'https://media.giphy.com/media/ai54771DmS5P2/giphy.gif',
    'https://media.giphy.com/media/RE5iREBNhI0Ok/giphy.gif',
    'https://media.giphy.com/media/QENnRdIEiXwA0/giphy.gif',
    'https://media.giphy.com/media/AEsUINFBsRVN6/giphy.gif',
    'https://media.giphy.com/media/p4xp4BjHIdane/giphy.gif',
    'https://media.giphy.com/media/IcifS1qG3YFlS/giphy.gif',
    'https://media.giphy.com/media/krI1lBPsluByg/giphy.gif',
    'https://media.giphy.com/media/8R7GUZWaydcOY/giphy.gif',
    'https://media.giphy.com/media/TfuqtbENcq2Z8R3pv1/giphy.gif',
    'https://media.giphy.com/media/3oz8xNsdIIrnMdUhLa/giphy.gif',
    'https://media.giphy.com/media/2nrr1SrkVEdpK/giphy.gif',
    'https://media.giphy.com/media/3o72F8t9TDi2xVnxOE/giphy.gif'
    

]

const getRandomCoordinates = () =>{
    return {
        x:Math.floor(Math.random() * 1000 -500),
        y:Math.floor(Math.random() * 1000 -500)
    }
}

const GifShower = () => {

    let img = create('img')
    img.src = gifSources.pop()
    img.classList.add('absolute')
    append(img,'body')
    dqsa('img').forEach(img => {
        let coords = getRandomCoordinates()
        console.log(coords)
        img.style.transform = `translateX(${coords.x}px)`
        img.style.transform += `translateY(${coords.y}px)`
        console.log(img.style)
    })
}

const showStopBtn = () => stopBtn.classList.remove('hide')

let header = create('header')
append( header,'body')
let h1 = create('h1')
h1.textContent = 'Welcome to my homePage!'
let h2 = create('h2')
h1.textContent = 'Welcome to my homePage!'
h2.textContent = 'Made strictly outta js!'
append(h1,'header')
append(h2,'header')
let nav = create('nav')
let list = create('ul')
console.log(list)
append(nav,'body')
append(list,'nav')
let items = []
for (i = 0; i < 3; i++){
    append(create('li'),'ul')
}

dqsa('li')[0].textContent = 'About'
dqsa('li')[1].textContent = 'Projects'
dqsa('li')[2].textContent = 'Contact'
addClass(nav,'nav-bar')
addClass(header,'header')
let div = create('div')
div.innerHTML = "what a <b>Treat</b>"
append(div,'body')
let btn = create('button')
btn.addEventListener('click', () => {
    addClass(btn,'dissappear')
    interval = setInterval(GifShower, 3000)
    setTimeout(showStopBtn,20000)
    
})
btn.textContent = 'click ME!'
append(btn,'body')
let stopBtn = create('button')
stopBtn.addEventListener('click', () => clearInterval(interval))
stopBtn.textContent = 'ok you can stop'
addClass(stopBtn,'hide')
append(stopBtn,'body')
let stylesheet = new CSSStyleSheet()
stylesheet.replaceSync('.header {height: 6rem; width:100vw; background-color: #c1c1c1;}')
document.adoptedStyleSheets = [stylesheet]

let style = create('style')
style.type = 'text/css'
style.innerText = ('.header{text-align: center;}')
style.innerText += ('.nav-bar ul {display:flex; list-style: none;  justify-content: space-around;}')
style.innerText += 'li {font-size: 2rem; cursor:pointer;} li:hover {color: #f1f1f1; transition: 0.3s; }'
style.innerText += 'body { background: radial-gradient(#1d3, #3f4); text-align: center; }'
style.innerText += '* {margin: 0; padding: 0; box-sizing: border-box;}'
style.innerText += 'div { font-size: 2rem; border-bottom: 3px solid black; text-align:center;}'
style.innerText += 'button { font-size: 2rem; border-radius: 50%;height: 150px; width: 150px; text-align:center;}'
style.innerText += 'button { opacity: 1;margin: 30px; cursor: pointer; background: linear-gradient(orange, yellow);}'
style.innerText += '.absolute { position: absolute;}'
style.innerText += 'img { transition: 0.5s; width: 200px; height: 200px; border-radius: 50%}'
style.innerText += '.hide { display:none; }'
style.innerText += '.dissappear { opacity:0; transition: 1s; }'

document.head.append(style)
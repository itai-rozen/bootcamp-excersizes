const jokeButton = document.querySelector('.get-joke-btn')
const imageHolder = document.querySelector('.random-gif')
const jokeHeaderEl = document.querySelector('.joke-header')
const jokeEl = document.querySelector('.joke')

const getJoke = async () => {
    const url = "https://api.jokes.one/jod"
    try {
        const data = await (await fetch(url)).json();
        // const data = await response.json();
        jokeHeaderEl.textContent = data.contents.jokes[0].joke.title;
        jokeEl.textContent = data.contents.jokes[0].joke.text;
        imageHolder.src = getRandomGif();
    }
    catch (err) {
        console.log(err);
    }
}

jokeButton.addEventListener('click',  getJoke)
// Below is same function before refactoring
// jokeButton.addEventListener('click',  getJoke2) 
const getRandomGif = () => {
    let currentGif = imageHolder.src
    let randomGifIdx = Math.floor(Math.random() * gifs.length) 
    let nextGifSrc = gifs[randomGifIdx]
    if (nextGifSrc === currentGif) getRandomGif()
    return nextGifSrc
}
const gifs = [
    'https://media.giphy.com/media/xUA7aM09ByyR1w5YWc/giphy.gif',
    'https://media.giphy.com/media/88iYsvbegSUn9bSTF8/giphy.gif',
    'https://media.giphy.com/media/3i7zenReaUuI0/giphy.gif',
    'https://media.giphy.com/media/lszAB3TzFtRaU/giphy.gif',
    'https://media.giphy.com/media/swPH6f77yLk2I/giphy.gif',
    'https://media.giphy.com/media/gE6IUBRWZd744/giphy.gif'
]

// Before Refactoring to new syntax

function getJoke2(){
    const url = "https://api.jokes.one/jod"
        fetch(url)
        .then(res => res.json())
        .then(data => {
            jokeHeaderEl.textContent = data.contents.jokes[0].joke.title
            jokeEl.textContent = data.contents.jokes[0].joke.text
            imageHolder.src = getRandomGif()
        })
        .catch(err => console.log(err))
}




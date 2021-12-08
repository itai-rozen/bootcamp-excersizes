const getButton = document.querySelector('.get-user-btn');
const userInput = document.getElementById('username-input');
const cardContainerElement = document.querySelector('.card-container');
const bodyElement = document.querySelector('body');
const msgElement = document.querySelector('.msg');
const cardIds = [];
document.addEventListener('DOMContentLoaded', () => {
    userInput.focus();
})

const cleanInput = () => {
    userInput.value = ''
    userInput.focus()
}

const getGithubUser = async () => {
    const username = userInput.value
    msgElement.innerHTML = ''
    try {
        const inputValue = userInput.value
 

        const url = `https://api.github.com/users/${username}`;
        const data = await (await fetch(url)).json();
        console.log(data);
        const isAlreadyExist = cardIds.indexOf(data.id) !== -1
        if (isAlreadyExist) {
            cleanInput()
            throw new Error('card already exist')
        }
        if (!inputValue) {
            cleanInput()
            throw new Error('must enter user name')
        }
        if (data.message === 'Not Found') {
            cleanInput()
            throw new Error('username does not exist')
        }
        cardIds.push(data.id)
        const strHtml = `
    <a class="card-link" target="_blank" data-id="${data.id}" href="${data.html_url}">
        <div class="card" >
        <img class="avatar" src="${data.avatar_url}" alt="">
        <h2 class="username">${(data.name) ? data.name : data.login}</h2>
        <p class="repos-amount">public repos: ${data.public_repos}</p>
        <p>last activity: ${data.updated_at}</p>
        </div>
    </a>`;
        cardContainerElement.innerHTML += strHtml
        cleanInput()
    }

    catch (err) {
        msgElement.innerHTML = err
    }
};

getButton.addEventListener('click', getGithubUser)
userInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') getGithubUser()
})

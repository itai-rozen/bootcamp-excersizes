    function init(){
        msgDiv.textContent = ''
        msgDiv.classList.remove('red')
        msgDiv.classList.remove('green')
        modal.classList.add('hide')
        userPrevGuesses = []
        listOfGuessesElement = ''
        input.value = ''
        input.focus()
        letter = getRandomLetter()
    }

    const getRandomLetter = () => {
        let lettersStr = 'abcdefghijklmnopqrstuvwxyz'
        let letterIdx = Math.floor(Math.random() * lettersStr.length)
        return  lettersStr.charAt(letterIdx)
    }
    
    let letter = getRandomLetter()
    console.log(letter)
    let input = document.querySelector('input')
    input.focus()
    const submitButton = document.querySelector('.submit-btn')
    let msgDiv = document.querySelector('.msg')
    let userPrevGuesses = []    
    let listOfGuessesElement = document.querySelector('.guessed-letters-list')
    let modal = document.querySelector('.modal')
    
    submitButton.addEventListener('click', () => {
        let userGuess = input.value
        let regex = /[a-z]/i
        if (!regex.test(userGuess)){
            console.log('hi')
            input.value = ''
            msgDiv.textContent = 'You can only guess letters!'
            msgDiv.classList.add('red')
            return
        }
        userGuess = userGuess.toLocaleLowerCase()

        if (userGuess === letter){
            // User guessed it!
            msgDiv.textContent = `You\'re Right! It was ${letter}!`
            msgDiv.classList.remove('red')
            msgDiv.classList.add('green')
            modal.classList.remove('hide')
            modal.classList.remove('hide')
        } else {
            // user didnt guess it!

            if (userPrevGuesses.includes(userGuess)){
            // user already tried this letter
                msgDiv.textContent = 'Already tried this letter!'
                input.value = ''
                input.focus()
                return
            }
            msgDiv.textContent = 'Wrong!'
            msgDiv.classList.add('red')
            userPrevGuesses.push(userGuess)
            input.value = ''
            listOfGuessesElement.innerHTML += `<li> ${userGuess} </li>`
            input.focus()
        }

    })

    let playAgainButton = document.querySelector('.confirm-btn')
    playAgainButton.addEventListener('click', () => {
        init()
    })


const game = {
    player1: {
        name: 'Itai Shumacher',
        track: document.querySelectorAll('#player1-race > td')
    },
    player2: {
        name: 'Snaily the snale',
        track: document.querySelectorAll('#player2-race > td')
    },
    isFinished: false,
    domElements: {
        winnerContainerEl: document.querySelector('.winner-container'),
        winnerSpanEl: document.querySelector('.winner'),
        resetButton: document.querySelector('.reset-btn')
    }
}

const init = () => {
    let { player1, player2, domElements } = game
    game.isFinished = false
    domElements.winnerContainerEl.classList.add('hide')
    player1.track.forEach(trackPiece => trackPiece.classList.remove('active'))
    player2.track.forEach(trackPiece => trackPiece.classList.remove('active'))
    player1.track[0].classList.add('active')
    player2.track[0].classList.add('active')


}

const endGame = playerName => {
    let { winnerContainerEl, winnerSpanEl, resetButton } = game.domElements
    winnerSpanEl.textContent = playerName
    winnerContainerEl.classList.remove('hide')
    resetButton.addEventListener('click', () => {
        init()
    })
}

const movePlayer = player => {
    let { track, name } = player
    let trackLength = track.length
    let currPositionIdx = [...track].findIndex((trackPiece, i) => trackPiece.classList.contains('active'))
    track[currPositionIdx].classList.toggle('active')
    track[currPositionIdx + 1].classList.toggle('active')
    if (currPositionIdx + 1 === trackLength - 1) {
        game.isFinished = true
        endGame(name)
    }

}

document.body.addEventListener('keyup', ({ key }) => {
    if (!game.isFinished) {
        const { player1, player2 } = game
        if (key === 'ArrowRight' || key === 'd') {
            let movingPlayer = key === 'd' ? player2 : player1
            movePlayer(movingPlayer)
        }
    }
})


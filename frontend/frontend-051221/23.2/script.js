let miliSecs = 0
let secs = 0
let mins = 0
let timerInterval = null
const startButton = document.querySelector('.start-btn')
const stopButton = document.querySelector('.stop-btn')
const minutesEl = document.querySelector('.minutes')
const secondsEl = document.querySelector('.seconds')
const milisecsEl = document.querySelector('.milisecs')
milisecsEl.textContent = '00'
secondsEl.textContent = '00'
minutesEl.textContent = '00'
const startTimer = () => {
    miliSecs += 100

    if (miliSecs === 1000){
        secs +=1
        miliSecs = 0
    }
    if (secs === 60){
        mins += 1
        secs = 0
    }
    minutesEl.textContent = (mins < 10)? '0'+mins : mins
    secondsEl.textContent = (secs < 10)? '0'+secs: secs 
    milisecsEl.textContent = (miliSecs === 0)? '00': miliSecs / 10
    if (mins === 60) stopTimer()
}

const startWatch = () => {
    timerInterval =  setInterval(startTimer, 100)
}
const stopWatch = () => {
    clearInterval(timerInterval)
} 

startButton.addEventListener('click', startWatch)
stopButton.addEventListener('click',stopWatch)


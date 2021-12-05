

const updateClock = () => {
    const hours = new Date().getHours()
    const mins = new Date().getMinutes()
    const secs = new Date().getSeconds()
    const hoursEl = document.querySelector('.hours')
const minutesEl = document.querySelector('.minutes')
const secondsEl = document.querySelector('.seconds')
hoursEl.textContent = hours
minutesEl.textContent = mins
secondsEl.textContent = secs
}

const clockInterval = setInterval(updateClock, 1000)

const stopButton = document.querySelector('.stop-btn')
stopButton.addEventListener('click', ()=> {
    clearInterval(clockInterval)
})

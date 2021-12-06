

const updateClock = () => {
    const d = new Date()
    const hours = d.getHours()
    const mins = d.getMinutes()
    const secs = d.getSeconds()
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

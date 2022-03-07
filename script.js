function updateTime(){
    const display = document.querySelector(".displayClock")
    const info = new Date()
    const time = `${addZero(info.getHours())}:${addZero(info.getMinutes())}:${addZero(info.getSeconds())}`
    display.textContent = time
}

let addZero = (num) => num < 10 ? num = "0" + num : num

updateTime()
setInterval(updateTime, 1000)

let darkMode = () => document.documentElement.classList.toggle("darkMode")
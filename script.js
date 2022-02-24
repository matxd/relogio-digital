function updateTime(){
    const display = document.querySelector(".displayClock")
    const info = new Date()
    const time = addZero(info.getHours()) + ":" + addZero(info.getMinutes()) + ":" + addZero(info.getSeconds())
    display.textContent = time
}

let addZero = (number) => { return number < 10 ? number += "0" : number }

updateTime()
setInterval(updateTime, 1000)

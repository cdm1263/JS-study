// 내가 임의로 작성해 본 시계

const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours<10) {
        hours = `0${hours}`;
    }
    if (minutes<10) {
        minutes = `0${minutes}`;
    }
    if (seconds<10) {
        seconds = `0${seconds}`;
    }
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
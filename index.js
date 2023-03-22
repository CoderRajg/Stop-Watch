const time_elem = document.querySelector('.watch .time');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('stop');
const reset_btn = document.getElementById('reset');

let seconds = 0;
let interval = null;

// here we will make event listener
start_btn.addEventListener('click',start);
stop_btn.addEventListener('click',stop);
reset_btn.addEventListener('click',reset);


// here we will update the timer
function timer(){
    seconds++;

    // format out time
    let hours = Math.floor(seconds / 3600);
    let minuts = Math.floor((seconds-(hours * 3600)) / 60);
    let second = seconds % 60;

    if(second<10) second = '0' + second;
    if(minuts<10) minuts = '0' + minuts;
    if(hours<10) hours = '0' + hours;

    time_elem.innerText = `${hours}:${minuts}:${second}`
}

function start(){
    if(interval){
        return;
    }
    interval = setInterval(timer, 1000);
}

function stop(){
    clearInterval(interval);
    interval = null;
}

function reset(){
    stop();
    seconds = 0;
    time_elem.innerText = '00:00:00';
}
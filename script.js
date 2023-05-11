const workTime = document.querySelector('work-time');
const breakTime = document.querySelector('break-time');
const  currentTime=document.getElementById('cirlce-lower');
const workMinute =document.getElementById('w_minutes');
const workSecond =document.getElementById('w_seconds');
const breakMinute =document.getElementById('b_minutes');
const breakSecond =document.getElementById('b_seconds');
const start =document.getElementById('start');
const reset =document.getElementById('reset');
const stop =document.getElementById('stop');
const counter =document.getElementById('counter');
const workPlusButton =document.getElementById('work-plus-btn');
const workMinusButton =document.getElementById('work-minus-btn');
const breakPlusButton =document.getElementById('break-plus-btn');
const breakMinusButton =document.getElementById('break-minus-btn');





setInterval(function () {
const currentDate = new Date();
currentTime.innerHTML = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
}, 100);



let startTimer;

start.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
    } else {
        alert("Timer is already running");
    }
})

reset.addEventListener('click', function(){
    workMinute.innerText = 25;
    workSecond.innerText = "00";

    breakMinute.innerText = 5;
    breakSecond.innerText = "00";

    counter.innerText = 0;
    stopInterval()
    startTimer = undefined;
})

stop.addEventListener('click', function(){
    stopInterval()
    startTimer = undefined;
})

workPlusButton.addEventListener('click', function(){
    if(startTimer === undefined){
        workMinute.innerText++;
    } else {
        alert("Timer is already running");
    }
})

workMinusButton.addEventListener('click', function(){
    if(startTimer === undefined){
        workMinute.innerText--;
    }else {
        alert("Timer is already running");
    }
})


breakPlusButton.addEventListener('click', function(){
    if(startTimer === undefined){
        breakMinute.innerText++;
    } else {
        alert("Timer is already running");
    }
})

breakMinusButton.addEventListener('click', function(){
    if(startTimer === undefined){
        breakMinute.innerText--;
    } else {
        alert("Timer is already running");
    }
})


function timer() {
    //Work Timer Countdown
    if(workSecond.innerText !=0){
        workSecond.innerText--;
    }
    else if(workMinute.innerText != 0 && workSecond.innerText == 0){
        workSecond.innerText = 59;
        workMinute.innerText--;
    }
    //Break Timer Countdown
    if(workMinute.innerText ==0 && workSecond.innerText == 0){
        if(breakSecond.innerText != 0){
            breakSecond.innerText--;
        }
        else if(breakMinute.innerText!= 0 && workSecond.innerText == 0){
            breakSecond.innerText = 59;
            breakMinute.innerText--;
        }
    }
    //Increment Counter by one if one full cycle is completed
    if(workMinute.innerText == 0 && workSecond.innerText == 0 && breakMinute.innerText == 0 && workSecond.innerText == 0){
        workMinute.innerText =25;
        workSecond.innerText = "00";

        breakMinute.innerText = 5;
        breakSecond.innerHTML = "00";

        document.getElementById('counter').innerText ++;
    }
}

//Stop Timer
function stopInterval() {
    clearInterval(startTimer);
}
let minutes = 25;
let seconds = 60;
let sendButton = document.querySelector('#start');
let timerId;
let resetButton = document.querySelector("#reset");
let timer = document.getElementById("pomodoro-time");

sendButton.addEventListener('click', function() {
    
    if (sendButton.textContent == 'stop') {
        clearInterval(timerId);
        sendButton.textContent = 'start';
    }else {
        sendButton.textContent = 'stop';
    
        timerId = setInterval(() => {   
            seconds --;
        
            if (seconds <= 0 && minutes <= 0) {

                clearInterval(timerId);
                timer.textContent = "25:00";
                sendButton.textContent = 'start';

                return;

            }else if (seconds == 0) {
                minutes --;
                seconds = 59;
            }

           timer.innerHTML = addZero(minutes) + ":" + addZero(seconds);
        
        }, 10);
    
    }

} );

function addZero(val) {
    return val < 10 ? `0${val}` : val;
};




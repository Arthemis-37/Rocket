'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
const firingButton = document.getElementById('firing-button');
const cancelButton = document.getElementById('cancel-button');
const billboardSpan = document.querySelector('#billboard span');
const rocket = document.getElementById('rocket');
const main = document.querySelector('main');
const resetButton = document.getElementById('reset-button');

let countdown = 10;
let intervalId = null;
let isCountingDown = false;


/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/
function createStars() {
    const sizes = ['tiny', 'normal', 'big'];
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        const size = sizes[Math.floor(Math.random() * sizes.length)];
        star.classList.add(size);
        star.style.top = Math.random() * window.innerHeight + 'px';
        star.style.left = Math.random() * window.innerWidth + 'px';
        main.appendChild(star);
    }
}

function updateCountdownDisplay(value) {
    billboardSpan.textContent = value;
}
function startCountdown() {
    if (isCountingDown) return;
    isCountingDown = true;
    firingButton.classList.add('disabled');
    firingButton.removeEventListener('click', startCountdown);
    cancelButton.classList.remove('disabled');
    cancelButton.addEventListener('click', cancelCountdown);
    countdown = 10;
    updateCountdownDisplay(countdown);
    rocket.src = 'images/rocket2.gif';
    intervalId = setInterval(() => {
        countdown--;
        updateCountdownDisplay(countdown);
        if (countdown === 0) {
            clearInterval(intervalId);
            isCountingDown = false;
            cancelButton.classList.add('disabled');
            cancelButton.removeEventListener('click', cancelCountdown);
            rocket.src = 'images/rocket3.gif';
            rocket.classList.add('tookOff');
        }
    }, 1000);
}
function cancelCountdown() {
    if (!isCountingDown) return;

    clearInterval(intervalId);
    isCountingDown = false;
    updateCountdownDisplay('');
    rocket.src = 'images/rocket1.png';
    rocket.classList.remove('tookOff');
    firingButton.classList.remove('disabled');
    firingButton.addEventListener('click', startCountdown);
    cancelButton.classList.add('disabled');
    cancelButton.removeEventListener('click', cancelCountdown);
}

function resetLaunch() {
    clearInterval(intervalId);
    countdown = 10;
    isCountingDown = false;
    updateCountdownDisplay('');
    rocket.src = 'images/rocket1.png';
    rocket.classList.remove('tookOff');
    firingButton.classList.remove('disabled');
    firingButton.addEventListener('click', startCountdown);
    cancelButton.classList.add('disabled');
    cancelButton.removeEventListener('click', cancelCountdown);
}


/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/
createStars();

firingButton.addEventListener('click', startCountdown);
cancelButton.addEventListener('click', cancelCountdown);
rocket.classList.remove("tookOff")
resetButton.addEventListener('click', resetLaunch);

cancelButton.classList.add('disabled'); 
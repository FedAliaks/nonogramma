import './timer.css';

let timerStarted = false;
let timerId;
let currentTime = 0;

function startTimer() {
  currentTime = 0;

  const timerSection = document.querySelector('.timer-section');

  timerId = setInterval(() => {
    currentTime += 1;
    const secTemp = `0${currentTime % 60}`;
    const sec = secTemp.slice(-2);
    timerSection.innerText = `Time: ${Math.floor(currentTime / 60)}:${sec}                 `;
  }, 1000);
}

export function createTimerSection() {
  const timerSection = document.querySelector('.timer-section');

  timerSection.innerText = 'Time: 0:00';
}

export function checkStartTimer() {
  if (!timerStarted) startTimer();
  timerStarted = true;
}

export function getCurrentTimeFromTimer() {
  return currentTime;
}

export function resetTimer() {
  clearInterval(timerId);
  createTimerSection();
  timerStarted = false;
}

export function stopTimer() {
  clearInterval(timerId);
  timerStarted = false;
}

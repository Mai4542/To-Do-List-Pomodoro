let timerDisplay = document.getElementById("timer");
let startBtn = document.getElementById("startBtn");
let resetBtn = document.getElementById("resetBtn");
const pauseBtn = document.getElementById('pause');

let duration = 25 * 60; 
let timeLeft = duration;
let isPaused = false;
let countdown;
let isRunning = false;

function updateDisplay() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function startTimer() {
  if (isRunning) return;

  isRunning = true;
  countdown = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(countdown);
      alert("Time's up! Take a break 🎉");
      isRunning = false;
      timeLeft = duration;
      updateDisplay();
      return;
    }
    timeLeft--;
    updateDisplay();
  }, 1000);
}

function resetTimer() {
  clearInterval(countdown);
  timeLeft = duration;
  updateDisplay();
  isRunning = false;
}
pauseBtn.addEventListener("click", () => {
  if (!isRunning) return;

  if (!isPaused) {
    clearInterval(countdown);
    isPaused = true;
    pauseBtn.textContent = "Resume";
  } else {
    countdown = setInterval(() => {
      if (timeLeft <= 0) {
        clearInterval(countdown);
        alert("Time's up! Take a break 🎉");
        isRunning = false;
        timeLeft = duration;
        updateDisplay();
        pauseBtn.textContent = "Pause";
        return;
      }
      timeLeft--;
      updateDisplay();
    }, 1000);
    isPaused = false;
    pauseBtn.textContent = "Pause";
  }
});

startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);


updateDisplay();

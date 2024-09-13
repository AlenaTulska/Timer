
let initTime = 85;

const timerElement = document.getElementById('timer');

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  }

  const updateTimerDisplay = () => {
    timerElement.textContent = formatTime(initTime);
};

const timerId = setInterval(() => {
    if (initTime <= 0) {
        clearInterval(timerId); 
        timerElement.textContent = '00:00'; 
    } else {
        initTime -= 1;
        updateTimerDisplay(); 
    }
}, 1000); 

updateTimerDisplay();

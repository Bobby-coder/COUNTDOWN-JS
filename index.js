let hour = document.querySelector(".hours input");
let second = document.querySelector(".seconds input");
let minute = document.querySelector(".minutes input");
let startBtn = document.querySelector(".start button");
let stopBtn = document.querySelector(".stop button");
let resetBtn = document.querySelector(".reset button");

let countdownTimer = null;

const timer = () => {
  if (second.value > 60) {
    minute.value = `${minute.value <= 10 ? "0" : ""}${minute.value + 1}`;
    second.value -= 59;
  }

  if (minute.value > 60) {
    hour.value = `${hour.value <= 10 ? "0" : ""}${hour.value + 1}`;
    minute.value -= 60;
  }

  if (second.value == 0 && minute.value == 0 && hour.value == 0) {
    second.value = "";
    minute.value = "";
    hour.value = "";
    stop();
  }
  if (second.value != 0) {
    second.value = `${second.value <= 10 ? "0" : ""}${second.value - 1}`;
  } else if ((second.value == 0) & (minute.value != 0)) {
    second.value = 59;
    minute.value = `${minute.value <= 10 ? "0" : ""}${minute.value - 1}`;
  } else if ((minute.value == 0) & (hour.value != 0)) {
    minute.value = 60;
    hour.value = `${hour.value <= 10 ? "0" : ""}${hour.value - 1}`;
  }
  return;
};

const start = () => {
  if (hour.value == 0 && minute.value == 0 && second.value == 0) return;
  const startInterval = () => {
    document.querySelector(".start").style.display = "none";
    document.querySelector(".stop").style.display = "initial";
    countdownTimer = setInterval(() => timer(), 1000);
  };
  startInterval();
};

const stop = () => {
  clearInterval(countdownTimer);
  document.querySelector(".start").style.display = "initial";
  document.querySelector(".stop").style.display = "none";
};

const reset = () => {
  second.value = "";
  minute.value = "";
  hour.value = "";
  stop();
};

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

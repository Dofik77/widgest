const hourElement = document.querySelector(".hour");
const minuteElement = document.querySelector(".minute");
const secondElement = document.querySelector(".second");
const milisecondElement = document.querySelector(".milisecond");

const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const pauseButton = document.querySelector(".pause");

startButton.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});

pauseButton.addEventListener("click", () => {
  clearInterval(interval);
});

stopButton.addEventListener("click", () => {
  clearInterval(interval);
  (hour = 00), (minute = 00), (second = 00), (milisecond = 00);
  hourElement.textContent = "00";
  minuteElement.textContent = "00";
  secondElement.textContent = "00";
  milisecondElement.textContent = "00";
});

let hour = 00,
  minute = 00,
  second = 00,
  milisecond = 00,
  interval;

function startTimer() {
  milisecond++;

  if (milisecond < 9) {
    milisecondElement.textContent = "0" + milisecond;
  }

  if (milisecond > 9) {
    milisecondElement.innerText = milisecond;
  }

  if (milisecond > 99) {
    second++;
    secondElement.innerText = "0" + second;
    milisecond = 0;
    milisecondElement.innerText = "0" + milisecond;
  }

  if (second < 9) {
    secondElement.innerText = "0" + second;
  }
  if (second > 9) {
    secondElement.innerText = second;
  }
  if (second > 60) {
    minute++;
    minuteElement.innerText = "0" + minute;
    second = 0;
    secondElement.innerText = "0" + second;
  }

  if (minute < 9) {
    minuteElement.innerText = "0" + minute;
  }
  if (minute > 9) {
    minuteElement.innerText = minute;
  }
  if (minute > 60) {
    hour++;
    hourElement.innerText = "0" + hour;
    minute = 0;
    minuteElement.innerText = "0" + minute;
  }
}

//Пытался на свитче, но что то не так.

function startTimer2() {
  milisecond++;

  switch (true) {
    case milisecond < 9:
      milisecondElement.textContent = "0" + milisecond;
      break;
    case milisecond > 9:
      milisecondElement.innerText = milisecond;
      break;
    case milisecond > 99:
      second++;
      secondElement.innerText = "0" + second;
      milisecond = 0;
      milisecondElement.innerText = "0" + milisecond;
      break;

    case second < 9:
      secondElement.textContent = "0" + second;
      break;
    case second > 9:
      secondElement.innerText = second;
      break;
    case second > 60:
      minute++;
      minuteElement.innerText = "0" + minute;
      second = 0;
      secondElement.innerText = "0" + second;
      break;

    case minute < 9:
      minuteElement.textContent = "0" + minute;
      break;
    case minute > 9:
      minuteElement.innerText = minute;
      break;
    case minute > 60:
      hour++;
      hourElement.innerText = "0" + hour;
      minute = 0;
      minuteElement.innerText = "0" + minute;
      break;
  }
}

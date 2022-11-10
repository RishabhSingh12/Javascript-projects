const time = document.querySelector(".time");
// console.log(time);

const startbtn = document.getElementById("btn1");
const stopbtn = document.getElementById("btn2");
const pausebtn = document.getElementById("btn3");
const resumebtn = document.getElementById("btn4");

let seconds = 0;
let interval = null;

//start function
startbtn.addEventListener("click", () => {
  if (interval || seconds > 0) {
    return;
  }

  interval = setInterval(start, 1000);
});

function start() {
  seconds++;

  let hrs = Math.floor(seconds / 3600);
  let secs = seconds % 60;
  let mins = Math.floor(hrs / 60);

  if (hrs < 10) {
    hrs = "0" + hrs;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (secs < 10) {
    secs = "0" + secs;
  }

  time.textContent = `${hrs} : ${mins} : ${secs}`;
}

//stop function
stopbtn.addEventListener("click", stop);

function stop() {
  if (!seconds) {
    return;
  }

  clearInterval(interval);
  interval = null;
  seconds = 0;
  time.textContent = "00 : 00 : 00";
}

//pause function
pausebtn.addEventListener("click", pause);

function pause() {
  if (interval && seconds > 0) {
    clearInterval(interval);
    interval = null;
  } else {
    return;
  }
}

//resume function

resumebtn.addEventListener("click", () => {
  if (!seconds) {
    return;
  }

  clearInterval(interval);

  interval = setInterval(start, 1000);
});

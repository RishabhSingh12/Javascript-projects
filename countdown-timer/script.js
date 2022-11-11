const start = document.getElementById("start");
const reset = document.getElementById("reset");
const pause = document.getElementById("pause");

let hrs = document.getElementById("hour");
let mins = document.getElementById("minute");
let secs = document.getElementById("sec");

let interval = null;

function timer() {
  if (secs.value <= 0 && mins.value <= 0 && hrs.value <= 0) {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
    return;
  }

  if (secs.value != 0) {
    secs.value--;
  } else if (mins.value != 0 && secs.value == 0) {
    secs.value = 59;
    mins.value--;
  } else if (hrs.value != 0 && mins.value == 0) {
    mins.value = 60;
    hrs.value--;
  }
}

function pausetimer() {
  clearInterval(interval);
  interval = null;
}

function stoptimer() {
  clearInterval(interval);
  interval = null;
}

start.addEventListener("click", () => {
  if (!interval) {
    interval = setInterval(timer, 1000);
  }
});

pause.addEventListener("click", pausetimer);

reset.addEventListener("click", () => {
  hrs.value = 0;
  mins.value = 0;
  secs.value = 0;
  stoptimer();
});

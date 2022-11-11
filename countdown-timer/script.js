const start = document.getElementById("start");
const reset = document.getElementById("reset");

let hrs = document.getElementById("hour");
let mins = document.getElementById("minute");
let secs = document.getElementById("sec");

let interval = null;

function timer() {}

function stoptimer() {
  clearInterval(interval);
}

start.addEventListener("click", timer);
reset.addEventListener("click", () => {
  hrs.value = 0;
  mins.value = 0;
  secs.value = 0;
  stoptimer();
});

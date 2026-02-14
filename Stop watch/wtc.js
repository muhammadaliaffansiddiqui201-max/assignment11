let hours = 0;
let minutes = 0;
let seconds = 0;
let timer = null;

function start() {
  if (timer !== null) {
    return;
  }

  timer = setInterval(function () {
    seconds++;

    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }

    if (minutes == 60) {
      minutes = 0;
      hours++;
    }

    document.getElementById("display").innerHTML =
      addZero(hours) + ":" +
      addZero(minutes) + ":" +
      addZero(seconds);
  }, 1500);
}

function stop() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  stop();
  hours = 0;
  minutes = 0;
  seconds = 0;
  document.getElementById("display").innerHTML = "00:00:00";
}

function addZero(time) {
  if (time < 10) {
    return "0" + time;
  } else {
    return time;
  }
}

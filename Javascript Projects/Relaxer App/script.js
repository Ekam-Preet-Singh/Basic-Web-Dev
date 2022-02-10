const container = document.getElementById("container");
const text = document.getElementById("text");
const pointer = document.querySelector(".pointer");

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = "Breathe In!";
  container.className = "container grow";
  pointer.style.backgroundColor = "#4ca493";

  setTimeout(() => {
    text.innerText = "Hold";
    pointer.style.backgroundColor = "#fa873d";

    setTimeout(() => {
      text.innerText = "Breathe Out!";
      container.className = "container shrink";
      pointer.style.backgroundColor = "#2a5b52";
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);

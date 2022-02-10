const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex distinctio magnam quos aut nam nulla laboriosam exercitationem nemo maiores molestiae, fugit possimus quod porro voluptate minus, cum ea at asperiores ipsam voluptas! Laborum rem commodi, molestiae vero aliquam id aut. ";
let idx = 1;
let speed = 300 / speedEl.value;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);

  idx++;

  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}

speedEl.addEventListener("input", (e) => (speed = 300 / e.target.value));

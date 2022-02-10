const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

// For the first element only
checkBoxes();

function checkBoxes() {
    const triggerBottom = (window.innerHeight / 5) * 4;
//   const triggerBottom = window.innerHeight;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    // console.log(boxTop, triggerBottom);
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

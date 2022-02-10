const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const btn2 = document.querySelector(".btn2");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});

btn2.addEventListener("click", () => {
  search.classList.toggle("dark");
  btn2.classList.toggle("dark");
  if (btn2.classList.contains("dark")) {
    btn2.innerText = "Light Mode ";
  } else {
    btn2.innerHTML = "Dark Mode";
  }
  input.focus();
});

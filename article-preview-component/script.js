let button =  document.querySelector(".share-btn");
let share = document.querySelector(".share-box");
let svgShareIcon = document.querySelector(".share-icon");

button.addEventListener("click", () => {
  share.classList.toggle("hidden");
  svgShareIcon.classList.toggle("share-icon-fill");
  button.classList.toggle("share-active")
});
const prevBtn = document.querySelectorAll(".prev");
const nextBtn = document.querySelectorAll(".next");
const slides = document.querySelectorAll(".slide");

let index = 0;

function active(index) {
  slides.forEach(item => {
    item.style.display = "none";
  });
  slides[index].style.display = "grid";
}

function nextSlide () {
  index++;
  if(index > slides.length-1){
    index = 0;
  }
  active(index);
}

function prevSlide () {
  index--;
  if(index < 0) {
    index = slides.length-1;
  }
  active(index);
}

active(index);
nextBtn.forEach((item) => item.addEventListener("click", nextSlide));
prevBtn.forEach((item) => item.addEventListener("click", prevSlide));

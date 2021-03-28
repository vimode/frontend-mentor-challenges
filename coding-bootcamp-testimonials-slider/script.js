const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const slides = document.querySelectorAll(".slide");

let index = 0;

// active(index);

function active(index) {
  slides.forEach(item => {
    item.style.display = "none";
  });
  slides[index].style.display = "grid";
}

function nextSlide () {
  index++;
  if(index > slides.length-1) {
    index = 0;
  }
  console.log('clicked next')
  active(index);
}

function prevSlide () {
  index--;
  console.log('clicked prev')
  if(index < 0) {
    index = slides.length-1;
  }
  active(index)
  
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
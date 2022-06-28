let header_wrapper = document.querySelector('.header_inner_wrapper');
let navBtn = document.querySelector('.nav_buttons');
let body = document.querySelector('body');

navBtn.addEventListener('click', () => {
  header_wrapper.classList.toggle('active');
  body.classList.toggle('nav_open');
});
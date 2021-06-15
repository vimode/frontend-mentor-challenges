const nav = document.querySelector('.navbar');
const navOpen = document.querySelector('.nav_open');

navOpen.addEventListener('click', () => {
  nav.classList.toggle("open");
})
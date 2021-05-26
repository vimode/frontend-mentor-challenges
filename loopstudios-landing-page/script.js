// body  position fixed or 100vh or touchaction none

const nav = document.querySelector('nav');
const navOpen = document.querySelector('.nav_open');
const navClose = document.querySelector('.nav_close');
const body = document.querySelector('body');


navOpen.addEventListener('click', () => {
  nav.classList.add("open_nav");
  body.style.overflowY= "hidden";
  // body.style.position = "fixed";
  
})

navClose.addEventListener('click', () =>{
  nav.classList.remove("open_nav");
  body.style.overflowY= "scroll";
  // body.style.position = "unset";
})

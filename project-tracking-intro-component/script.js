const navOpen = document.querySelector('.nav_open');
const navItems = document.querySelector('nav ul');
const navClose = document.querySelector('.nav_close')


navOpen.addEventListener('click', () => {
  navItems.style.display= "flex";
  navOpen.style.display= "none";
  navClose.style.display = "block";
})

navClose.addEventListener('click', () =>{
  navItems.style.display = "none";
  navOpen.style.display= "block";
  navClose.style.display = "none";
})

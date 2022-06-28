const nav = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav_toggle');
const navItem = document.querySelectorAll('.primary_nav_items');
const primaryNav = document.querySelector('.primary_nav');



navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
})

navItem.forEach((item, index) => {
  item.addEventListener('click', () => {
    item.parentNode.classList.toggle('openItem')
  })
})

// let navSelection = "";
// primaryNav.addEventListener('click', (e) => {
//   let selectedOption = e.target;

//   if (navSelection) {
//     navSelection.parentNode.classList.remove('openItem');
//   }
//   navSelection = selectedOption
//   if (selectedOption.parentNode.classList.contains == 'openItem') {
//     console.log("contains")
//     selectedOption.parentNode.classList.remove('openItem');
//   } else {
//     console.log("does not")
//     selectedOption.parentNode.classList.add('openItem');
//   }
// })
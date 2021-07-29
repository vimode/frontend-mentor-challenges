const nav = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav_toggle');
const navItem = document.querySelectorAll('.primary_nav_items');



navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
})

navItem.forEach((item, index) => {
  item.addEventListener('click', () => {
    removeClass()
    item.parentNode.classList.toggle('openItem')
  })
})

let removeClass = function () {
  for (item of navItem) {
    item.parentNode.classList.remove('openItem')
  }
}


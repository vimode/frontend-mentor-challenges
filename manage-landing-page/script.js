// mobile nav 🍔

const navBtn = document.querySelector('.nav_buttons');
const nav = document.querySelector('nav');
const navItems = document.querySelectorAll('.nav_links')
const body = document.querySelector('body');

navBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
  body.classList.toggle('open')
})

navItems.forEach(item => {
  item.addEventListener('click', () => {
    nav.classList.toggle('open')
    body.classList.toggle('open')
  })
})

// mobile slider

const imgCard = document.querySelectorAll('.card_item');
const dotNav = document.querySelectorAll('.dots');


dotNav.forEach((dot, index) => {
  dot.addEventListener('click', () => {

    dotNav.forEach(dot => dot.classList.remove('active'))

    !dot.classList.contains('active') ?
      dot.classList.add('active') : console.log('💩')

    imgCard.forEach((card) => card.classList.remove('active_card'))
    imgCard[index].classList.add('active_card');

  })
})
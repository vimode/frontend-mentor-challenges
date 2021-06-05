const toggleSwitch = document.querySelector('.toggle_theme');
const switchInput = document.querySelector('.switch');

const body = document.querySelector('body');
const titleOne = document.querySelector('.title');
const titleTwo = document.querySelector('.active_title');
const cardOne = document.querySelector('.social_proof_cards');
const cardTwo = document.querySelector('.social_today_stats');
const footer = document.querySelector('footer')


toggleSwitch.addEventListener('change', toggleTheme)

function toggleTheme () {
  switchInput.classList.toggle('toggle');
  switchInput.classList.toggle('dark');
  
  body.classList.toggle('dark');
  titleOne.classList.toggle('dark');
  titleTwo.classList.toggle('dark');
  cardOne.classList.toggle('dark');
  cardTwo.classList.toggle('dark');
  footer.classList.toggle('dark');
}
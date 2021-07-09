// mini nav
const nav = document.querySelector("nav");
const navToggle = document.querySelector(".nav_toggle");

navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
})


// Bookmark-ed
const bookmarkBtn = document.querySelector("#bookmark");
const bookmarkText = document.querySelector("#bookmark span")

bookmarkBtn.addEventListener('click', () => {
  bookmarkBtn.classList.toggle('saved');
  bookmarkBtn.classList.contains('saved') ? bookmarkText.innerText = "Bookmarked" : bookmarkText.innerText = "Bookmark";
})


// Numbers game
const backed = document.getElementById('backed');
const backers = document.getElementById('backers');
const daysLeft = document.getElementById('days_left');
const progressBar = document.querySelector('.progress_card_bar_inner');

let backedAmount = 89914;
let numBackers = 5007;
let days = 56;

function updateNumbers() {
  backed.innerText = `${backedAmount.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 })}`;
  backers.innerText = `${numBackers.toLocaleString('en-US')}`;
  daysLeft.innerText = `${days}`;
  let barIncrease = ((backedAmount / 100000) * 100).toFixed(2);
  barIncrease >= 100 ? progressBar.style.width = `100%` :
    progressBar.style.width = `${barIncrease}%`;
}
updateNumbers();


// Modal Operandi
const form = document.querySelectorAll('.modal_form');
const successOne = document.querySelector('.successClickOne');
const successTwo = document.querySelector('.successClickTwo');
const modalItem = document.querySelectorAll('.modal_card');
const modalButton = document.querySelectorAll('.btn_modal');
const radioItem = document.querySelectorAll('.radioInput');
const inputAmount = document.querySelectorAll('#amount');
const modalSpots = document.querySelectorAll('.modal_number span');

const spots = document.querySelectorAll('.card_item_footer span');
const contentCard = document.querySelectorAll('.content_card_item');

function removeClass() {
  for (item of modalItem) {
    item.classList.remove('checkedItem');
  }
}

modalItem.forEach((item, index) => {
  if (!item.classList.contains('disabled_item')) {
    item.addEventListener('click', () => {
      radioItem[index].checked = true;
      // radioItem[index].checked ? item.classList.add("checkedItem") : modalItem.classList.remove("checkedItem")
      removeClass();
      item.classList.add("checkedItem")
    })
  }
})

modalButton.forEach((button, index) => {

  button.addEventListener('click', (e) => {
    e.preventDefault();
    backedAmount += +form[index].elements[0].value;
    numBackers++;
    updateNumbers()

    // spots[index - 1].textContent = spots[index - 1].textContent - 1;
    // modalSpots[index - 1].textContent = modalSpots[index - 1].textContent - 1;

    successOne.click()
    successTwo.click()
  })
})


// modalSpots.forEach((item, index) => {
//   if (item.innerText <= 0) { modalItem[index + 1].classList.add('disabled_item') }
// })

// spots.forEach((item, index) => {
//   if (item.innerText <= 0) { contentCard[index].classList.add('disabled_item') }
// })

// form.forEach((form, index) => {
//   form.addEventListener("submit", (event) => {
//     // event.preventDefault();
//   });
// })






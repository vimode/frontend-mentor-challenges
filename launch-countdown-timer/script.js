// Countdown --------------------------------- 00:00:00:00 //

const days_view = document.querySelectorAll('.number_days');
const hours_view = document.querySelectorAll('.number_hours');
const minutes_view = document.querySelectorAll('.number_minutes');
const seconds_view = document.querySelectorAll('.number_seconds');

// Today's date
let today = new Date();

// Today + 14/15 days
let showcaseDate = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() + 15
);

// Calculate time for the countdown to display
function showcaseCountdown() {
  let endTime = showcaseDate.getTime() - new Date().getTime();

  let days = Math.floor(endTime / (1000 * 60 * 60 * 24))
  let hours = Math.floor((endTime / (1000 * 60 * 60)) % 24)
  let minutes = Math.floor((endTime / 1000 / 60) % 60)
  let seconds = Math.floor((endTime / 1000) % 60)

  return { days, hours, minutes, seconds }
};

// DOM changes
let timeInterval = setInterval(function () { }, 1000);

function updateCountdown() {
  let time = showcaseCountdown();

  if (+time.seconds >= 0) {
    seconds_view.forEach(view => {
      view.textContent = ('0' + time.seconds).slice(-2)
    })
    let flipTopCardS = document.querySelector('.seconds .flip_card .flip_card_top');
    let flipBottomCardS = document.querySelector('.seconds .flip_card .flip_card_bottom');
    animateCard(flipTopCardS, flipBottomCardS);
  }

  if (+minutes_view[0].textContent !== time.minutes && time.minutes >= 0) {
    minutes_view.forEach(view => {
      view.textContent = ('0' + time.minutes).slice(-2)
    })
    let flipTopCardM = document.querySelector('.minutes .flip_card .flip_card_top');
    let flipBottomCardM = document.querySelector('.minutes .flip_card .flip_card_bottom');
    animateCard(flipTopCardM, flipBottomCardM);
  }

  if (+hours_view[0].textContent !== time.hours && time.hours >= 0) {
    hours_view.forEach(view => {
      view.textContent = ('0' + time.hours).slice(-2)
    })
    let flipTopCardH = document.querySelector('.hours .flip_card .flip_card_top');
    let flipBottomCardH = document.querySelector('.hours .flip_card .flip_card_bottom');
    animateCard(flipTopCardH, flipBottomCardH);
  }

  if (+days_view[0].textContent !== time.days && time.days >= 0) {
    days_view.forEach(view => {
      view.textContent = ('0' + time.days).slice(-2)
    })
    let flipTopCardD = document.querySelector('.days .flip_card .flip_card_top');
    let flipBottomCardD = document.querySelector('.days .flip_card .flip_card_bottom');
    animateCard(flipTopCardD, flipBottomCardD);
  }

}

// Animate the card
function animateCard(topCard, bottomCard) {
  topCard.style.animation = "0.5s linear flipDown";
  bottomCard.style.animation = "0.5s linear flipLower"
  let removeAnimation = function () {
    topCard.style.animation = "";
    topCard.removeEventListener("animationed", removeAnimation);
    bottomCard.style.animation = "";
    bottomCard.removeEventListener("animationed", removeAnimation);
  }
  topCard.addEventListener("animationend", removeAnimation);
  bottomCard.addEventListener("animationend", removeAnimation)
}


timeInterval = setInterval(function () {
  updateCountdown();
}, 1000);
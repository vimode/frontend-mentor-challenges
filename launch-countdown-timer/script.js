
// Countdown --------------------------------- 00:00:00:00 //

const days_view = document.querySelectorAll('.number_days');
const hours_view = document.querySelectorAll('.number_hours');
const minutes_view = document.querySelectorAll('.number_minutes');
const seconds_view = document.querySelectorAll('.number_seconds');

// Todays daye
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

  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  }
};

// DOM changes
let timeInterval = setInterval(function () { }, 1000);

function updateCountdown() {
  let time = showcaseCountdown();

  if (time.seconds >= 0) {

    seconds_view.forEach(view => {
      view.innerHTML = ('0' + time.seconds).slice(-2)
    })

    // let flipTopCardS = document.querySelector('.seconds .flip_card .flip_card_top');
    // let flipBottomCardS = document.querySelector('.seconds .flip_card .flip_card_bottom');
    // animateCard(flipTopCardS, flipBottomCardS);
  }

  if (minutes_view[0].textContent !== time.minutes && time.minutes >= 0) {
    minutes_view.forEach(view => {
      view.innerHTML = ('0' + time.minutes).slice(-2)
    })
  }

  if (hours_view[0].textContent !== time.hours && time.hours >= 0) {
    hours_view.forEach(view => {
      view.innerHTML = ('0' + time.hours).slice(-2)
    })
  }

  if (days_view[0].textContent !== time.days && time.days >= 0) {
    days_view.forEach(view => {
      view.innerHTML = ('0' + time.days).slice(-2)
    })
  }

}

timeInterval = setInterval(function () {
  updateCountdown();
}, 1000);



// Animate the card
function animateCard(topCard, bottomCard, time) {
  topCard.style.animation = "1s linear flipDown";
  bottomCard.style.animation = "1st linear flipLower"

  // let removeAnimationTop = function () {

  // }

  // remove animation or add animation once animation is done
  // topCard.addEventListener("animationed", removeAnimationTop);
  // bottomCard.addEventListener("animationed", removeAnimationBottom)
}


// First attempt method to update without animating via JS

// let activeCountdown = setInterval(function () {
//   let today = new Date();

//   let diff = showcaseDate.getTime() - today.getTime();

//   updateTimer(days_view, Math.floor(diff / (1000 * 60 * 60 * 24)));
//   updateTimer(hours_view, Math.floor((diff / (1000 * 60 * 60)) % 24));
//   updateTimer(minutes_view, Math.floor((diff / 1000 / 60) % 60));
//   updateTimer(seconds_view, Math.floor((diff / 1000) % 60));
//   ;
// }, 1000)



// function updateTimer(fragment, calc) {
//   fragment.forEach(item => {
//     item.textContent = calc;
//   })
// }


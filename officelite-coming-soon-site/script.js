const countdownDate = document.querySelector('.launch_date');
const countdownDays = document.querySelector('.timer_days');
const countdownHours = document.querySelector('.timer_hours');
const countdownMins = document.querySelector('.timer_mins');
const countdownSec = document.querySelector('.timer_secs');

let today = new Date();

let launchDate = new Date(
  today.getFullYear(),
  today.getMonth() + 1,
  today.getDate()
);

countdownDate.textContent = `${launchDate.getDate()} ${launchDate.toLocaleString("en", { month: "short" })} ${launchDate.getFullYear()}`

let runCountdown = setInterval(function () {

  let today = new Date();

  let diff = launchDate.getTime() - today.getTime();

  countdownDays.textContent = Math.floor(diff / (1000 * 60 * 60 * 24));
  countdownHours.textContent = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  countdownMins.textContent = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  countdownSec.textContent = Math.floor((diff % (1000 * 60)) / 1000);


}, 1000);



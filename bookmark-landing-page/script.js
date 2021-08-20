let question = document.querySelectorAll(".faq_question");


// FAQ accordion like thingy
question.forEach((item) => item.addEventListener("click", () => {

  if (item.parentNode.classList.contains("active")) {
    item.parentNode.classList.toggle("active")
  } else {
    question.forEach(item => item.parentNode.classList.remove("active"));
    item.parentNode.classList.add("active");
  }
}))

// Nav
// todo : try body position fixed or 100vh or touchaction none

const nav = document.querySelector('nav');
const navOpen = document.querySelector('.nav_open_icon');
const navClose = document.querySelector('.nav_close_icon');
const body = document.querySelector('body');


navOpen.addEventListener('click', () => {
  nav.classList.add("open_nav");
  body.style.position = "fixed";
})

navClose.addEventListener('click', () => {
  nav.classList.remove("open_nav");
  body.style.position = "unset";
})


// Features

const featureTitle = document.querySelectorAll('.features_title li');

const featureItem = document.querySelectorAll('.features_content li')

const featureTitleParent = document.querySelectorAll('.features_title');


// featureTitleParent.forEach((item) => item.addEventListener('click', () => {

// }))

featureTitle.forEach((item, index) => item.addEventListener('click', () => {

  item.classList.toggle('selected_feature')

  featureItem.forEach((item) => item.classList.remove('selected_feature'))
  featureItem[index].classList.add('selected_feature');

}))
// mobile nav
const nav = document.querySelector('nav');
const navButton = document.querySelector('.mobile_nav_buttons');
const navItems = document.querySelectorAll('.nav_links')

navButton.addEventListener('click', () => {
  nav.classList.toggle('open');
})

navItems.forEach(item => {
  item.addEventListener('click', () => {
    nav.classList.toggle('open')
  })
})

// sliiider

const slider_content = [
  {
    heading: `Brand naming & guidelines`,
    title: `Lean Product Roadmap`,
    date: `2019 project`,
    imgMobileSrc: '/creative-single-page-site/images/mobile/image-slide-1.jpg',
    imgTabletSrc: '/creative-single-page-site/images/tablet/image-slide-1.jpg',
    imgDesktopSrc: '/creative-single-page-site/images/desktop/image-slide-1.jpg'
  },
  {
    heading: `Brand identity & merchandise`,
    title: `New Majestic Hotel`,
    date: `2018 Project`,
    imgMobileSrc: '/creative-single-page-site/images/mobile/image-slide-2.jpg',
    imgTabletSrc: '/creative-single-page-site/images/tablet/image-slide-2.jpg',
    imgDesktopSrc: '/creative-single-page-site/images/desktop/image-slide-2.jpg'
  },
  {
    heading: `Brand identity & web design`,
    title: `Crypto Dashboard`,
    date: `2016 Project`,
    imgMobileSrc: '/creative-single-page-site/images/mobile/image-slide-3.jpg',
    imgTabletSrc: '/creative-single-page-site/images/tablet/image-slide-3.jpg',
    imgDesktopSrc: '/creative-single-page-site/images/desktop/image-slide-3.jpg'
  }
];

const prev = document.querySelector('.prev_arrow');
const next = document.querySelector('.next_arrow');
const sliderButtons = document.querySelector('.arrow_img');
const itemTitle = document.querySelector('.services_b_title');
const itemDate = document.querySelector('.services_b_date');
const itemHeading = document.querySelector('.item_heading');
const itemMobileImg = document.querySelector(".slider_mobile_img");
const itemTabletImg = document.querySelector(".slider_tablet_img");
const itemDesktopImg = document.querySelector(".slider_desktop_img");

let slideStatus = 0;

sliderButtons.addEventListener('click', (e) => {
  let clickedArrow = e.target.classList.value;

  let slideData = function (slideNumber) {
    itemHeading.textContent = slider_content[slideNumber].heading;
    itemTitle.textContent = slider_content[slideNumber].title;
    itemDate.textContent = slider_content[slideNumber].date;
    itemMobileImg.src = `${slider_content[slideNumber].imgMobileSrc}`;
    itemTabletImg.src = `${slider_content[slideNumber].imgTabletSrc}`;
    itemDesktopImg.src = `${slider_content[slideNumber].imgDesktopSrc}`;
  }

  switch (clickedArrow) {
    case "next_arrow":
      slideStatus++;
      if (slideStatus < slider_content.length) {
        slideData(slideStatus)
      } else {
        slideStatus = 0;
        slideData(slideStatus)
      }
      break;
    case "prev_arrow":
      slideStatus--;
      if (slideStatus >= 0) {
        slideData(slideStatus)
      } else {
        slideStatus = slider_content.length - 1;
        slideData(slideStatus)
      }
      break;
    default:
      console.log("⚠")
  }

}
)

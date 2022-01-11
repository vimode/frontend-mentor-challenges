const navBtn = document.querySelector('.navbar_buttons');
const body = document.querySelector('body');
const navItems = document.querySelectorAll('.nav_item')

const arrowButtons = document.querySelector('.hero_buttons')

const headerImgDesktop = document.querySelector('.desktop_image');
const headerImgMobile = document.querySelector('.mobile_image');
const heroTitle = document.querySelector('.hero_title');
const heroText = document.querySelector('.hero_text');

//data
const data = [
  {
    "title": "Discover innovative ways to decorate",
    "text": "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing yor vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    "imgDesktop": "/room-homepage/images/desktop-image-hero-1.jpg",
    "imgMobile": "/room-homepage/images/mobile-image-hero-1.jpg"
  },
  {
    "title": "We are available all across the globe",
    "text": "With stores all over the world, it's easy for you to find furniture for your home or place of business.  Locally, we’re in most major cities throughout the country. Find the branch nearest you using ourstore locator. Any questions? Don't hesitate to contact us today.",
    "imgDesktop": "/room-homepage/images/desktop-image-hero-2.jpg",
    "imgMobile": "/room-homepage/images/mobile-image-hero-2.jpg"
  },
  {
    "title": "Manufactured with the best materials",
    "text": "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology   to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    "imgDesktop": "/room-homepage/images/desktop-image-hero-3.jpg",
    "imgMobile": "/room-homepage/images/mobile-image-hero-3.jpg"
  }
]

// slider
let itemCount = 0;
arrowButtons.addEventListener('click', (e) => {
  if (e.target.className.includes("arrow_right")) {
    if (itemCount < data.length - 1) {
      itemCount++
    } else {
      itemCount = 0
    }
  } else {
    if (itemCount <= 0) {
      itemCount = data.length - 1
    } else {
      itemCount--
    }
  }

  headerImgDesktop.src = data[itemCount].imgDesktop;
  headerImgMobile.src = data[itemCount].imgMobile;
  heroTitle.textContent = data[itemCount].title
  heroText.textContent = data[itemCount].text
})


// nav
navBtn.addEventListener('click', () => {
  body.classList.toggle('open')
})

//close nav when link is clicked 
navItems.forEach(item => {
  item.addEventListener('click', () => {
    body.classList.remove('open')
  })
})


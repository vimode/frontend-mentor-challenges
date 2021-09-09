const nav = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav_toggle');
const navItem = document.querySelectorAll('.primary_nav_items');
const primaryNav = document.querySelector('.primary_nav');



navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
})


navItem.forEach((item, index) => {
  item.addEventListener('click', () => {
    item.parentNode.classList.toggle('openItem')
  })
})






// x
// const showDrop = (e) => {
//   if (!e.target.parentElement.classList.contains('open')) {
//     navLinks.forEach((navLink) => {
//       navLink.classList.remove('open')
//     })

//     e.target.parentElement.classList.add('open')
//   } else {
//     e.target.parentElement.classList.remove('open')
//   }
// }


// let navSelection = "";
// primaryNav.addEventListener('click', (e) => {
//   // console.log(primaryNav.children.item(0).classList)
//   // console.log(primaryNav.children.item(e))

//   if (navSelection) {
//     for (let index = 0; index < primaryNav.children.length; index++) {
//       primaryNav.children.item(index).classList.remove('openItem');
//       console.log("removed")



//     }
//   }

//   let selectedOption = e.target;
//   navSelection = selectedOption

//   if (navSelection.parentNode.classList.contains('openItem')) {
//     navSelection.parentNode.classList.remove('openItem')
//   } else {
//     navSelection.parentNode.classList.add('openItem')
//   }



  // navSelection = selectedOption
  // if (selectedOption.parentNode.classList.contains == 'openItem') {
  //   console.log("contains")
  //   selectedOption.parentNode.classList.remove('openItem');
  // } else {
  //   console.log("does not")
  //   selectedOption.parentNode.classList.add('openItem');
  // }

  // navItem.forEach((item, index) => {
  //   item.addEventListener('click', () => {
  //     item.parentNode.classList.toggle('openItem')
  //   })
  // })
// })
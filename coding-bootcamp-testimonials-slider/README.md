#  Coding bootcamp testimonials slider

Solution : [Live Site URL](https://frontend-mentor-challenges-ecru.vercel.app/coding-bootcamp-testimonials-slider/)

This is a solution to the [Coding bootcamp testimonials slider challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/coding-bootcamp-testimonials-slider-4FNyLA8JL).

![Design preview for the Coding bootcamp testimonials slider coding challenge](./design/desktop-preview.jpg)

## The challenge

Your challenge is to build out this testimonial slider and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to: 

- View the optimal layout for the component depending on their device's screen size
- Navigate the slider using either their mouse/trackpad or keyboard


## Experience

### Built with
- HTML5
- CSS3
- Vanilla JS
- Grid
- Flexbox

### What I learned

When creating a slider do not create buttons for each slide, there is a reason everyone keeps the slider buttons common across slides. Even though I made individual buttons on each slide work for the slider its a little messy way to do it. Not the most efficient way to do it. 

`place-content` is a shorthand for `align-content` and `justify-content` - [MDN Link](https://developer.mozilla.org/en-US/docs/Web/CSS/place-content)

`place-items`  is a shorthand for `align-items` and `justify-items`  - [MDN Link](https://developer.mozilla.org/en-US/docs/Web/CSS/place-items)

Not sure how I missed these shorthands while learning about grid. But these are really handy. 

### Challenges

While positioning the background images, I messed up the height of other elements and that caused changing heights of almost wrapper element. At the end I managed to fixed most issues but on every small height devices like less than 700px height, my body overflows and the footer is below the background image too. 

Background images are still very tricky to move around the canvas especially when these images are expected to be responsive for all device sizes. 

### Continued development  & Learning

I will be fixing the background images sooner or later once I have better  grasp of manipulating background images. I might change the slider buttons to be common among all the slides instead of having them as individual buttons on all slides but I might even keep this an example to learn for my future reference. 
 
---

###### Pending Tasks 

- Update README
- Adjust the background images properly. 
- Adjust the height for small screen devices.
- Quote img flickering issue on button click
- Final challenge screenshot(s) (desktop and mobile)
- Submit the challenge at frontendmentor.
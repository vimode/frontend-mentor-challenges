# Manage landing page

Solution : [Live Site URL](https://frontend-mentor-challenges-ecru.vercel.app/manage-landing-page)

This is a solution to the [Manage landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5).

![Design preview for the Manage landing page coding challenge](./design/desktop-preview.jpg)

## The challenge

Your challenge is to build out this landing page and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- See all testimonials in a horizontal slider
- Receive an error message when the newsletter sign up `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

## Built with

- Semantic HTML5 markup
- CSS Variables
- CSS Flexbox
- CSS Grid
- JavaScript

## Experience, Challenges and Learning

_This will be updated periodically while the pending tasks are being worked on._
The backgorund patterns always have me in the bind as they are responsive but not implemented the best way by adjusting them in each media query. Doing it that way will simply give undesirable view of the pattern's position at some obscure viewport size.
The horizontal slider was a little confusing for me, as per the design specs the slider doesn't have its dots to represent the active card but only shows 3 cards out of 4 cards in total. having them animated would simply create a whitespace when the cards end. So I chose to have the horizontal slider on mobile view but removed it as slider in desktop view. On desktop view it simply is a list of items horizontally positioned.
I am getting using to using utlity classes and find them really helpful now. Although I struggled with the proper usage of inner_wrapper but I tried my best to use it wherever I can.

---

##### Pending tasks

- Email validation pending
- Fix button box-shadows
- Gap between button and bold cta
- Fix list alignment (with itself and hero)
- Fix bold cta text position in iPad
- Live solution screenshot(s)
- On submit update README with : Solution submitted at Frontend Mentor - [Submission Link]()

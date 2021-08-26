# Bookmark landing page

Solution : [Live Site URL](https://frontend-mentor-challenges-ecru.vercel.app/bookmark-landing-page)

This is a solution to the [Bookmark landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158).

![Design preview for the Bookmark landing page coding challenge](./design/desktop-preview.jpg)

## The challenge

Your challenge is to build out this landing page and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the newsletter form is submitted if:
  - The input field is empty
  - The email address is not formatted correctly

For this challenge you'll need to:

- Create the rounded blue background shape with code
- Change the `fill` and `stroke` color of the SVGs at specific points (the challenge can be completed using the single `logo-bookmark.svg` file provided)

## Built with

- HTML
- CSS
- CSS Grid
- CSS Flexbox
- JavaScript

## Experience, Challenges and Learning

_This will be updated periodically while the pending tasks are being worked on._
The idea of having a utlitiy class is to use it for layout or for repeated CSS propeties, it really does save a lot of time. I have started using them and used a few in this one was for creating flex item and it saved a lot of repeated typing but when using for layout like adding max-width to every element's inner items to keep them centered on widescreen, I failed using it properly here as the background image patterns required in this would not break out of the restricions I set with my inner_layout, so I need to figure out how to use ultility classes efficiently and not adandon them halfway through the project.  
The form elements are a little messed up and I am yet to figure out why.

---

##### Pending tasks

- Paddings on all elements need to be fixed.
- Nav bug > mobile nav : When nav is opened the body scroll is restricted, but figure out a better way so that in active state if screen size is changed the body scroll is switched back to normal/unset
- Nav bug > mobile nav : Clicking on any link should close the nav.
- Email validation
- In the `features` section fix the highlight when clicked, currently its on/off whereas it need to be coordinated with the item being displayed.
- Live solution screenshot(s)
- On submit update README with : Solution submitted at Frontend Mentor - [Submission Link]()

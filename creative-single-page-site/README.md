# Creative agency single page site

Solution : [Live Site URL](https://frontend-mentor-challenges-ecru.vercel.app/creative-single-page-site/)

This is a solution to the [Creative agency single page site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/creative-agency-singlepage-site-Pq6V3I2RM).

![Design preview for the Creative agency single page site coding challenge](./preview.jpg)

## The challenge

Your challenge is to build out this single-page website and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

## Built with

- HTML
- CSS
- CSS Grid
- CSS Flexbox
- JavaScript

## Experience, Challenges and Learning

_This will be updated periodically while the pending tasks are being worked on._

In the world of flex and grid to streamline the position of elements on the page, overlapping patterns and elements are truly challening. I started with the intention of using grid for the complete layout but really struggled with it so ended up not using 100% grid for the elements. The overlap was tricky to work with to make it responsive. But I think it does not look that bad.

The floating wave patterns definitely need more work as their positioning is not very responsive friendly.

For most of my challenges, the typography ends up being the most neglected part so I worked on it from the beginning and played around updating the root variables for typography in the media queries. I think it turned out alright. Might need some more tinkering.

For numbering the ordered item list I used `counter-increment` which was fun to use and makes the list items reusable in some ways. Read on [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/counter-increment) or Josh Comeau's [article](https://www.joshwcomeau.com/css/styling-ordered-lists-with-css-counters/) about that, he explains it in a fun way.

The js slider works well but the images have to completely switch for the mobile, tablet and desktop view. I couldn't figure out how to do that in a more streamline way so I ended up switching applying them all on click but only showing the relevant ones with the help of CSS. It worked out well but not sure it is the most elegant way to do that.

The mobile nav is badly positioned, with absolute values all around. Not the best way to it. The elegant way would hav been to position the overlay first and then move the navitems inside it to position them accordingly. So that needs to be updated.

---

##### Pending tasks

- Mobile view footer element padding
- 950px whitespace between hero and next element
- slider title alignment fix
- Add animations to the mobile nav and horizontal slider.
- Fix wave pattern positioning.
- Fix mobile nav positioning.
- Live solution screenshot(s)
- On submit update README with : Solution submitted at Frontend Mentor - [Submission Link]()

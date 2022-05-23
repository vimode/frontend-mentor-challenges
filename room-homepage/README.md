# Room homepage

Solution : [Live Site URL](https://frontend-mentor-challenges-ecru.vercel.app/room-homepage/)

This is a solution to the [Room homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq).

![Design preview for the Room homepage coding challenge](./design/desktop-preview.jpg)

## The challenge

Your challenge is to build out this e-commerce homepage and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

## Built with

- HTML
- CSS
- CSS Flexbox
- CSS Grid
- JavaScript

## Experience, Challenges and Learning

Learnt from the previous challenge I am using grid shorthand once again to understand it better. Its very intuitive the way areas, rows and columns can be defined together in one.

The layout of this one was a little challenging as the image which his part of the navigation/header had to change and the complete layout was full width not leaving much whitespace between elements. But by forcing grid items to overlap/stack on each other, it became a little easy. Read at [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#control_of_overlapping_content)

```css
.brand_header > * {
  grid-column: 1/2;
  grid-row: 1/2;
}
```

---

##### Pending tasks

- Fix the scroll issue for laptop view.
- Typography fixes
- Live solution screenshot(s)
- Submit to frontendmentor and add Solution submitted at Frontend Mentor - [Submission link]()

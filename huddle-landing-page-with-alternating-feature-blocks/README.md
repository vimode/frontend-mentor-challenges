# Huddle landing page with alternating feature blocks

Solution : [Live Site URL](https://frontend-mentor-challenges-ecru.vercel.app/huddle-landing-page-with-alternating-feature-blocks/)

This is a solution to the [Huddle landing page with alternating feature blocks challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/huddle-landing-page-with-alternating-feature-blocks-5ca5f5981e82137ec91a5100).

![Design preview for the Huddle landing page with alternating feature blocks coding challenge](./design/desktop-preview.jpg)

## The challenge

Your challenge is to build out this landing page and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

## Built with

- HTML
- CSS
- CSS Grid
- CSS Flexbox

## Experience, Challenges and Learning

Surprisingly the only thing that I struggled with was having a circle around font awesome icons.
The easier way would be to utilise [stacking icons](https://fontawesome.com/v5.15/how-to-use/on-the-web/styling/stacking-icons) but its result isn't very elegant and the circle is very thick so had to do custom CSS instead, which turned out to be not very straightforward.

I started with adding ```

```CSS
border:1px solid white;
padding:1em;
border-radius:50%;
```

That usually does it for most elements but fontawesome icons are icons that behave like fonts so we end up with an ellipse with the above trick instead of a proper circle. Okay. So the circle needs a fixed width and a fixed height, doing that gives us a perfect cirle but now the icons are pushed to the top left corner of the circle. `text-align:center` brings them to the middle and then some `line-height` creates enough gap to push them to the center.
This is what I ended up with that worked perfectly.

```CSS
  border: 1px solid var(--clr-white);
  border-radius: 50%;
  text-align:center;
  width: 2.3em;
  height: 2.3em;
  line-height: 2.3em;
```

---

##### Pending tasks

- Fix typography on all views.
- Add map icon for the address in footer.
- Tablet view add % width to the images, they look too big.
- Laptop view add some more padding to the content.
- footer icons in a list instead of div.
- Live solution screenshot(s)

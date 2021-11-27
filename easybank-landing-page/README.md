# Easybank landing page

Solution : [Live Site URL](https://frontend-mentor-challenges-ecru.vercel.app/easybank-landing-page/)

This is a solution to the [Easybank landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN).

![Design preview for the Time tracking dashboard coding challenge](./design/desktop-preview.jpg)

## The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

## Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- CSS Flexbox
- JavaScript

## Experience, Challenges and learning

_outline_

Learning : Effectively create and use utlity classes for layout. (inner*container, grid*, flex\_ )

Learning : Slowly building my own CSS reset.

Learnt : The beautiful and elegant `padding-block`, `padding-inline`, `margin-block`, `margin-inline` properties.

Experience : Used object-fit and object-position to create the background images that cut off the viewport for some views.

Learning : `grid` shorthand for defining grid tracks + to use tracks and grid-areas together.

```css
grid:
  "img" 200px
  "small" auto
  "title" auto
  "content" auto / 1fr;
```

```css
grid: repeat(2, 1fr) / repeat(2, 1fr);
```

Learning : `grid-area` shorthand for tracks

```css
grid-area: 2 / 1 / 3 / 2;
```

Learning : Worked on detailed typography.

Experience : Desktop first CSS feels more comfortable to use and creating the mobile nav is much easier this way.

--

#### Pending tasks

- Hero section alignment with the rest of sections. Its off because of the image, find a better way to create a layout that aligns with rest of the sections.

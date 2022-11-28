# Minimalist portfolio website

[Live Link](https://fm-minimalist-portfolio-website-react.vercel.app/)

This is a solution to the [Minimalist portfolio website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/minimalist-portfolio-website-LMy-ZRyiE)

![Design preview for the Minimalist portfolio website coding challenge](./design/preview.jpg)


### The challenge

Your challenge is to build out this multi-page portfolio website and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Click the "About Me" call-to-action on the homepage and have the screen scroll down to the next section
- Receive an error message when the contact form is submitted if:
  - The `Name`, `Email Address` or `Message` fields are empty should show "This field is required"
  - The `Email Address` is not formatted correctly should show "Please use a valid email address"

If you would like to make your contact form actually send you the data, you could use a service like [Formspree](https://formspree.io/) to hook it up.


## Experience and Challenges

### Built with

- Semantic HTML5 markup
- Styled Components
- ReactJS
- ViteJS

### What I learned and continuous development

Creating reusable components with React Router component and   styled components is a little tricky. 

While using SC in a router project, styling a link can be done in its scope within that styled component but this isn't a viable option if its a reusable Link component, it was tricky to figure out a solution but I eventually did. 
This requires importing the router's Link component in the  styles, and export the styled Link component as a styled component instead.

```js
import {Link} from  "react-router-dom

export const StyledLink = styled(Link)`

`
```

The provided assets include images of multiple resolutions to be used differently for mobile and desktop view. Instead of switching them based on media queries, I used [<picture>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture) tag instead.

The project asked for individual form validation errors but I did a bulk validation error i.e. the error  shows up at the bottom of the form instead of showing up under each input.


### Useful resources

- [ViteJS](https://vitejs.dev)
- [Styled Components](https://styled-components.com/)
- [React Router Docs](https://reactrouterdotcom.fly.dev/docs/en/v6/getting-started/overview)
- [useParams](https://reactrouterdotcom.fly.dev/docs/en/v6/hooks/use-params)

# Frontend Mentor - Profile card component

This is a solution to the [Profile card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ).

![Design preview for the Profile card component coding challenge](./design/desktop-preview.jpg)


## The challenge

Your challenge is to build out this profile card component and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Variables
- Flexbox
- CSS Animation using keyframes

### What I learned

**CSS Variables **: This is my first project which incorporates the usage of  CSS variables. This being a very small challenge, it was fairly easy to setup the limited set of variables required for the complete challenge. 

```css
:root {
  --ff-sans:'Kumbh Sans', sans-serif;
  
  --fw-light: 300;
  --fw-reg: 400;
  --fw-bold: 700;

  --fs-body : 18px;
  --fs-att: 11px;

  --clr-primary-cyan: hsl(185, 75%, 39%);
  --clr-primary-dark-blue: hsl(229, 23%, 23%);
  --clr-primary-gray-blue: hsl(227, 10%, 46%);
  --clr-neutral-gray: hsl(0, 0%, 59%);
  --clr-link : hsl(228, 45%, 44%);
}
```

**CSS Animations** : This is the first time I am using CSS animations in a project, outside the sandbox. It always been very tricky for me to decide where to use animations on a website, too many or too slow animations looks too much, too little or too fast animations gets ignored. So this small challenge was a good opportunity to try out some keyframe animations for the background images. They blend in well with the background color and are not very obtrusive. 

```css
@keyframes bg-circles {
  0% {opacity: 0;}
  100% {
    opacity: 1;
    transform:translate(0);
  }
}
```

### Challenges

I struggled with positioning the background images properly. They are close to the design but I am not happy how I positioned them. There has to be a better way. I do not like positioning elements using negative values as they do not scale properly for all screen sizes. 


#### Pending Tasks 

[] Final challenge screenshot(s) (desktop and mobile)
[] Background image positioning fixes.
[] Submit the challenge at frontendmentor

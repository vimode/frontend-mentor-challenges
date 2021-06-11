# Social media dashboard with theme switcher

Solution : [Live Site URL](https://frontend-mentor-challenges-ecru.vercel.app/social-media-dashboard-with-theme-switcher/)

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H)

![Design preview for the Social media dashboard with theme switcher coding challenge](./design/desktop-preview.jpg)

## The challenge

Your challenge is to build out this Social Media Dashboard and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

## Built with
- HTML 
- CSS 
- CSS Grid
- CSS Flexbox
- JavaScript

## Experience, Challenges and Learning

The layout standard and had too many cards so too many repetitive lines of codes.  

This was my first attempt at doing a theme switcher. So I was not prepared to name the classes and have the structure of the markup in such a way that least amount of changes will be required when the theme is switched. So it ended up being about 15-20lines of extra code to switch themes which isn't very bad.

I also learned about CSS media feature `prefers-color-scheme` 
```CSS
@media(prefers-color-scheme: dark) 
.....
```

So if your system is set to show dark theme, the site should load dark theme by default. 

My implementation might not the best but it works very well I think. 

MDN [prefers-color-sceheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)

-----
 ##### Pending tasks
 
- Live solution screenshot(s)
- Submit to frontendmentor and add Solution submitted  at Frontend Mentor - [Submission link]()
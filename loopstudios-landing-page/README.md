# Loopstudios landing page

Solution : [Live Site URL](https://frontend-mentor-challenges-ecru.vercel.app/loopstudios-landing-page/)

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw).

Solution submitted at Frontend Mentor - [Submission link](https://www.frontendmentor.io/solutions/loopstudios-landing-page-ZxD_qpHsg)

![Design preview for the Loopstudios landing page coding challenge](./design/desktop-preview.jpg)


## The challenge

Your challenge is to build out this landing page and get it looking as close to the design as possible.

This challenge focuses mostly on HTML & CSS. There's a tiny bit of JS included for the mobile navigation toggle. But you could also choose to do this without JS!

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page


## Built with
- HTML 
- CSS 
- CSS Grid
- CSS Flexbox
- CSS Animations
- JavaScript

## Experience, Challenges and Learning

The layout of the challenge was very intuitive, liner and fun. Almost all the images had some type of different effect on them. Enjoyed manipulating images by using filter for some, had to create a overlay for few images and even a color box for an image. 
The positioning of the hero image is not exactly as per the specs but very close to it and I am quite happy about it working  responsively. 
Despite adding minimal gap and margin to the grid of images, I could not make it line up with the rest of the content of the site. It looks a little offset to me. And on widescreen the grid adds a lot of gap between the images which I could not fix despite having a max-width to everything. 

The mobile nav in here is very different than I usually do. I wanted to fix a few things in my usual implementation of mobile navigation
- Remove the body scroll when nav is open. This was done by adding `overflowY:hidden` to the body when nav is opened. Other approach is to add `position:fixed` to the body which works too. 
- Add some animation when the nav is opened like nav slides in from outside the viewport. To achieve this effect I opted to rotate from `transform:rotate(-90deg)` to `transform:rotate(0deg)` but it isn't possible to do by simply adding transition effects to the element which changes from `display:none` to any other display property. The transition effects do not take place from nothing to 100%, it needs to be in 0% state for which `visibility:hidden` is perfect but that only hides the element from the view while taking up space in the canvas like invisible units in a game. So instead of transition animations, I added `@keyframes` CSS animations which I am still learning about. Now it works as intended but it does not work as beautifully as transition does. I think its the timing that needs to the tweaked. 

-----
 ##### Pending tasks
 
- Live solution screenshot(s)

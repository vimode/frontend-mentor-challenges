# Clipboard landing page

Solution : [Live Site URL](https://frontend-mentor-challenges-ecru.vercel.app/clipboard-landing-page/)

This is a solution to the [Clipboard landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/clipboard-landing-page-5cc9bccd6c4c91111378ecb9).

![Design preview for the Clipboard landing page coding challenge](./design/desktop-preview.jpg)

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

Challenge was long but done much easier with grid. 
I forced myself to use a lot of general styling so not to repeat myself further along. I think it helped a lot as at the end as my CSS ended being very short for such a long landing/home page like this. 
I also added some transitions and some extra hover effects on the buttons. 

I learned a really nice way to position images in anyway you want using `object-position` [MDN Link](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position)

In this challenge, the image in the desktop view had to be cut off, I used the following CSS properties to move it off the viewport as per the design specs. 
```
.itemOne .itemOne_content_list:nth-child(2) img {
    object-fit:cover;
    object-position: -50px top;
  }
  ```

---
##### Pending tasks

- BUG :  Beyond 2200px width, the grid starts having margin on both sides and messes up the image position  with `object-position` by floating it in the canvas instead of touching the viewport, for now added a media query to unset `object-position` beyond 2000px. But need to investigate  why it stops touching the viewport beyond 2200px without having a max-width or any sort of margin. 
- Live solution screenshot(s)
- Submit to frontendmentor and add Solution submitted  at Frontend Mentor - [Submission link]()
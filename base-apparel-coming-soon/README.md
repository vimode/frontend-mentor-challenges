# Base Apparel coming soon page

Solution : [Live Site URL](https://frontend-mentor-challenges-ecru.vercel.app/base-apparel-coming-soon/)

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0).

![Design preview for the Base Apparel coming soon page coding challenge](./design/desktop-preview.jpg)


## The challenge

Your challenge is to build out this coming soon page and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

## Experience

### Built with
 
 - HTML
 - CSS
 - Flexbox
 - Vanilla JavaScript

### Challenges
The layout was a little difficult to understand as in the desktop view the image  takes the right side of the page but in the mobile view the hero mobile image is different and is between the logo and the main content. This would have been easy with grid but the logo area and the main content area share a common background image and background color gradient which meant the hero image would have to be on top of the these grids but grid elements don't collapse on each other. So that had think over about the layout. 

At the end I used flexbox, two separate hero images each only visible in the expected screen sizes. 

For form validation I used regex to check if the email is valid. The basic validation is done by HTML5 itself. 

### Continued development & Learning

I learned some more ways of using CSS animations. 

Accessibility wise I am no happy with the way I designed the form elements and hiding outline is not the way to go so will read up more about accessibility options for form elements and try to fix it. 

---

###### Pending Tasks 

- Update README
- Final challenge screenshot(s) (desktop and mobile)
- Submit the challenge at frontendmentor.
# 3-column preview card component

Solution : [Live Site URL](https://frontend-mentor-challenges-ecru.vercel.app/3-column-preview-card-component/)

This is a solution to the [3-column preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-). 

![Design preview for the 3-column preview card component coding challenge](./design/desktop-preview.jpg)
 
## The challenge

Your challenge is to build out this 3-column preview card component and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Built with
- HTML
- CSS
- Grid
- Flexbox

### Experience & Challenges
This challenge has a simple layout to follow. And required very little CSS too for the layout, most of the CSS code is towards the design of typography and design of the cards itself. 

So I decide to have a little fun with it, I stuck to the design specs provided by the challenge on mobile and desktop. 

But between 600px and 900px I used grid to make a little a different design choice for provided cards by adding some hover effects. I experimented with `tabindex` for each card (terrible idea, [MDN & accessbility doesn't approve](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex#accessibility_concerns)), I also added hover state for each card div (another accessiblity concern) and with the help of z-index made each card/div expand their grid values on hover. This is just to experiment some CSS properties and try different possbilities of overlapping grid items. Most of the experiment parameters I set were a success, only thing I wasn't happy about was the transition animation effects I wanted to add to the card's hover, the effects weren't very pleasant because the padding would make the text dance around differently in each card on hover.

### Continued Development & Learning

Learn more about animation and transition to make it look consistent and linear across similar elements.

---

###### Pending Tasks 

- Update README
- Final challenge screenshot(s) (desktop and mobile)
- Submit the challenge at frontendmentor.
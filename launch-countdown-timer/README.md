# Launch countdown timer

Solution : [Live Site URL](https://frontend-mentor-challenges-ecru.vercel.app/launch-countdown-timer)

This is a solution to the [Launch countdown timer challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-).

![Design preview for the Launch countdown timer coding challenge](./design/desktop-preview.jpg)

## The challenge

Your challenge is to build out this countdown timer and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- See hover states for all interactive elements on the page
- See a live countdown timer that ticks down every second (start the count at 14 days)
- **Bonus**: When a number changes, make the card flip from the middle

## Built with

- Semantic HTML5 markup
- CSS Variables
- CSS Flexbox
- CSS Grid
- JavaScript

## Experience, Challenges and Learning

_This will be updated periodically while the pending tasks are being worked on._

This was trickier than I expected it to be, for the animation to work on any change in the countdown number my solution was to add two indetical cards on top of each other.
The countdown card and an indentical card have the same properities and show the same number via the countdown js the only difference being that the flip box animates on change. T
Each card is then further divived into two halves, top and the bottom part, on change (with the help of CSS animation) the top and the bottom part flips.
With the help of `rotate3d()` the top card flips from top to the middle and the bottom card flips from middle to the end of the card.
The animation still doesn't look perfect tand looks a little sticky and needs some work.

The javascript too was fun, the logic is simple. Start the countdown, watch for change in the number and only then animate. For the animation part, it requires to add the animation and remove it otherwise it doesn't work continuously. So there is a callback function which is fired when `"animationend"` event happens.
I really enjoyed learning about `animationend` at [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/animationend_event) had never heard of it or used it anyhwere. This opens a new possiblities of various quick CSS animations I could add via JavaScript.

---

##### Pending tasks

- The numbers still look very stick in the animation.
- Live solution screenshot(s)
- On submit update README with : Solution submitted at Frontend Mentor - [Submission Link]()

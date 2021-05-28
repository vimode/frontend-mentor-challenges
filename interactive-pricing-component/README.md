#   Interactive pricing component

Solution : [Live Site URL](https://frontend-mentor-challenges-ecru.vercel.app/interactive-pricing-component/)

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8).

![Design preview for the Interactive pricing component coding challenge](./design/desktop-preview.jpg)

## The challenge

Your challenge is to build out this interactive pricing component and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers (details provided below)

Want some support on the challenge? [Join our Slack community](https://www.frontendmentor.io/slack) and ask questions in the **#help** channel.

### Page view and pricing totals

Here are the different page view ranges and the corresponding monthly price totals:

- 10K pageviews / $8 per month
- 50K pageviews / $12 per month
- 100K pageviews / $16 per month
- 500k pageviews / $24 per month
- 1M pageviews / $36 per month

If the visitor switches the toggle to yearly billing, a 25% discount should be applied to all prices.
## Built with
- HTML
- CSS
- CSS Grid
- CSS Flexbox
- JavaScript 

## Experience, Challenges and Learning

I learned a lot about input elements and input events in this challenge. 

[appearance](https://developer.mozilla.org/en-US/docs/Web/CSS/appearance)

```CSS
appearance: none;
-moz-appearance: none;
-webkit-appearance: none;
```

Using this I was able to hide the input element's default styling and display it with custom styling for toggle and range slider. 

Customising [range](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range) slider is a very complicated process but in this challenge I learned how to customise the range track as well as the thumb control which the user interacts with. 
This [CSS-Tricks](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/) article was a great resource for that. Since this requires vendor prefixes it sure has its risks and I did not do the IE vendor prefix for now. 

There are few more resources that helped with during this challenge,

Managing the [range events](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oninput) as I had never used them before. 

[animate()](https://developer.mozilla.org/en-US/docs/Web/API/Element/animate) method to create new animations through javascript. I used this to show a visual change in the values which are updated in the DOM by the javascript funtions for toggle and slider. I use this method in a very basic way to change the font-color of the updates values.

```javascript
  pageviews.animate([
    {color:'var(--clr-neutral-cta-bg)'},
    {color:'initial'}
  ], 1000)

  cost.animate([
    {color:'var(--clr-primary-slider-bg)'},
    {color:'initial'}
  ], 1500)
  ```


-----
 ##### Pending tasks

- Live solution screenshot(s)
- Submit to frontendmentor and add Solution submitted  at Frontend Mentor - [Submission link]()
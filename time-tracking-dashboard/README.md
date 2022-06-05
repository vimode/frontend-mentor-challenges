# Time tracking dashboard

Solution : [Live Site URL](https://frontend-mentor-challenges-ecru.vercel.app/time-tracking-dashboard/)

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw).

![Design preview for the Time tracking dashboard coding challenge](./design/desktop-preview.jpg)

## The challenge

Your challenge is to build out this dashboard and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

If you would like to practice working with JSON data, we provide a local `data.json` file for the activities. This means you'll be able to pull the data from there instead of using the content in the `.html` file.

Your users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Expected behaviour

The text for the previous period's time should change based on the active timeframe.

For Daily, it should read "Yesterday" e.g "Yesterday - 2hrs".

For Weekly, it should read "Last Week" e.g. "Last Week - 32hrs".

For monthly, it should read "Last Month" e.g. "Last Month - 19hrs".

## Built with

- HTML
- CSS
- CSS Grid
- CSS Flexbox
- JavaScript
- Local JSON

## Experience, Challenges and Learning

I am trying out various methods to do the same/similar problems in this challenge. The easiest way to change data onClick in the DOM is to associate that clicked item to a set of related classes which needs to be updated and update them. So this time I tried with some functions which on click, fetches the data (from local JSON file), takes the data and runs through some more functions to populate the DOM. I ended up confusing myself with some nested functions 🤣 but eventually all worked out well.
This JS definitely needs some refactoring but for now this works fine.

---

##### Pending tasks

- Refactor JS
- Figure out the space issue for `prevTitle`
- Live solution screenshot(s)

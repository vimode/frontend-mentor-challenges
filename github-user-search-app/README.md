# GitHub user search app

Solution : [Live Site URL](https://frontend-mentor-challenges-ecru.vercel.app/github-user-search-app/)

This is a solution to the [GitHub user search app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6).

![Design preview for the GitHub user search app coding challenge](./preview.jpg)

## The challenge

Your challenge is to build out this GitHub user search app using the [GitHub users API](https://docs.github.com/en/rest/reference/users#get-a-user) and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Search for GitHub users by their username
- See relevant user information based on their search
- Switch between light and dark themes
- **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.

## Built with

- HTML
- CSS
- CSS Grid
- CSS Flexbox
- JavaScript
- Github API

## Experience, Challenges and Learning

_This will be updated periodically while the pending tasks are being worked on._

This challenge was supposed to be a practice for using an API but with the dark mode it turned out solid CSS learning experieince for me.
The API call and handling its response was fairly simple ( with my very basic implemention) but the dark mode especailly with `prefers-color-sceheme` meant it had to be done systematically.

I learned a lot of new things in CSS. This Google/web.dev [article](https://web.dev/prefers-color-scheme) was epsecially very helpful. I learned about `window.matchMedia` [MDN link](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) and how it can be used to switch media queries or trigger an action based on the browser setting.  
Using the same function I did the toggle switch for dark and light mode.

And surprisingly a new thing about `toggle()` method, how it accepts an optional token too! [MDN for `toggle()`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/toggle)

---

##### Pending tasks

- Toggle is buggy
- read todo in js
- change text color if data received is null
- Live solution screenshot(s)
- On submit update README with : Solution submitted at Frontend Mentor - [Submission Link]()

# Dictionary web app

[Live Link](https://dictionary-web-app-orcin.vercel.app/)

This is a solution to the [Dictionary web app challenge](https://www.frontendmentor.io/challenges/dictionary-web-app-h5wwnyuKFL). 

![Design preview for Dictionary web app coding challenge](./design/preview.jpg)

### The challenge

Your challenge is to build out this dictionary web app using the [Free Dictionary API](https://dictionaryapi.dev/) and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- Search for words using the input field
- See the Free Dictionary API's response for the searched word
- See a form validation message when trying to submit a blank form
- Play the audio file for a word when it's available
- Switch between serif, sans serif, and monospace fonts
- Switch between light and dark themes
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.

## Experience and Challenges

### Built with

- SCSS
- React
- TypeScript

### What I learned

Being my first TS React project this was a little challenging, with a fairly strict TS config file the linting errors made me learn types for React far quickly than any other reading material. 

This API wasn't really that good and required a lot of conditional rendering for various results. The phonetics and its audio file turned out to be far trickier than I thought.

The audio file (for phonetics) is a HTMLMediaElement with all its events but I couldn't figure out by TS would not recognize its event so won't accept it as that type. 

Theme switcher and Font Switch uses Context which is a fairly clean but the TS errors are something I don't understand regarding those. Will fix them soon.

My current theme switching logic (using SCSS) is unnecessarily complicated. I was later was introduced to the new-ish`data-theme attribute which seems to be far more straightforward and easier to implement and expand.

I mistook the design to searching the dictionary API as soon as the user enters the keyword, but the design expects the user to hit Enter/Submit to do the search. I implemented onChange with debounched Search input this way the API calls are limited to a degree but still my mistake to not understand the challenge properly and ended up creating not-so-good UX.

Some bugs to fix
- Fix all the TS errors, which are currently being ignored. ref: a bad commit 😬
- `playing` audio file should not accept another `play` event until the previous event is finished.
- CSS for `<select>` is to be figured out and match the design.
- some titles are italic.

## Useful Resources

`data-theme` usage - https://web.dev/articles/building/a-theme-switch-component

`HTMLMediaElement` - https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement

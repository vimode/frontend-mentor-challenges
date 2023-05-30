#  Multi-step form
This is a solution to the Multi-Step Form challenge on Frontend Mentor.

[Live Link](https://multi-step-form-vimo.vercel.app/)

[!Design Preview](./design/desktop-preview.jpg)

## The challenge

Your users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

## Experience and Challenges

### Built with
- Semantic HTML5 markup
- SCSS
- React

### What I learned and continued development

This project heavily relies on usage of `localStorage`. This would have been best served  with the usage of React's `ContextAPI` as passing data from one step to another would be much easier with `useContext` instead I use a custom hook to use the `localStorage` data for each step and update the local state.

I learned more about SCSS to nest CSS properties, adding suffixes to parent selector and some basic SCSS aspects for organizing CSS which I was unaware of.   

The datafile does some filtering of data but most of the javascript to calculate the grandtotal is done in the FormSummary page. Its a little too confusing and can be refactored to make it more readable. In hindsight, the data file could have more data to help with the calculation at the summary page.

### Useful Resources

- [Sass Docs](https://sass-lang.com/documentation/style-rules)
- [SCSS file structure](https://sharkcoder.com/tools/scss)
- [Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)
- [createContext](https://react.dev/reference/react/createContext)

### TODO

- Add proper form validation
- Disable next/prev buttons wherever needed (based on form data)
- Fix mobile view button positions


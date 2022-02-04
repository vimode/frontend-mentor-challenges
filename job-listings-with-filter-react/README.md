# Job Listing with filtering

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt).

![Design preview for the Job listings with filtering coding challenge](./design/desktop-preview.jpg)

## The challenge

Your challenge is to build out this job listing page and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Filtering

#### Option 1

Filter job listings based on the categories using the HTML `data-` attribute. In this option, you'd use the hardcoded content that already exists in the [index.html](./index.html) file.

The categories are:

- Role: Frontend, Backend, Fullstack
- Level: Junior, Midweight, Senior
- Languages: Python, Ruby, JavaScript, HTML, CSS
- Tools: React, Sass, Vue, Django, RoR (Ruby on Rails)

So, if a job listing is for has the following categories `Frontend, Junior, JavaScript, React` your HTML data attributes would look like this `data-role="frontend" data-level="junior" data-languages="javascript" data-tools="react"`.

#### Option 2

Use the [data.json](./data.json) file to pull the data and then dynamically add the content. This would be perfect if you're looking to practice a JS library/framework like React, Vue, or Svelte.

To add a filter, the user needs to click on the tablets on the right-side of the listing on desktop or the bottom on mobile. For each filter added, only listings containing all selected filters should be returned.

## Experience and Challenges

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library
- Snowpack

### What I learned and continuous development

_WIP_

Fulfilling the option 2 of the challenge.

Using snowpack was fun. Its easy and as much as I like the CRA to spin up a quick React project it always feels like a blackbox which I cannot probe to fully understand.

Snowpack on the other hand gives a lot of freedom + also helps understanding whats happening under the hood.

In this current project build, the hover state on click is retained for the tag. Unable to fix it as of now.

### Useful resources

> ✨ Bootstrapped with Create Snowpack App (CSA).

- [Snowpack : Getting Started with React](https://www.snowpack.dev/tutorials/react)
- [.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

##### Pending Tasks

- Make the listing generation dynamic. currently its just filtering and updating the DOM.
- Fix typography.
- Fix tablet view.

# Scoot Multi-page Website

This is a solution to the [Scoot website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/scoot-multipage-website-N76alNPRJ).

![Design preview for the Planets fact site coding challenge](./preview.jpg)

## The challenge

Your challenge is to build out this multi-page website and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site

### Expected Behaviour

#### All Pages

- When the "Get Scootin" call-to-action in the header is clicked, scroll down to the app download section at the bottom of the page

#### Home

- When the "Get Scootin" call-to-action in the intro section is clicked, scroll down to the app download section at the bottom of the page
- When the "Learn More" call-to-action is clicked in the "Easy to use riding telemetry" component navigate to the About page
- When the "Learn More" call-to-action is clicked in the "Coming to a city near you" component navigate to the Locations page
- When the "Learn More" call-to-action is clicked in the "Zero hassle payments" component navigate to the About page

#### Careers

- When the "Say Hello" and "Apply" call-to-actions are clicked, don't navigate anywhere

#### Locations

- When the "Message Us" call-to-action is clicked, don't navigate anywhere

## Experience and Challenges

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- CSS Flexbox
- [React](https://reactjs.org/) - JS library
- react router dom
- Snowpack

### What I learned and continuous development

_WIP_

This was my first multipe pages react project, I think I ended up creating way too many components than required but it also made things very easy when it came to the CSS as having common classes for shared components made it easy to just tweak things per page if required otherwise most CSS for common components worked properly.
Still unsure if smaller components like Buttons need to be created as buttons or not. (>re)

React router dom is fairly simpler but internal linking is a challenge, especially anchor tags to scroll within the page, my current approaches (tried multiple ways) might not be the best but it works fine.

Creating the FAQ component and its functionality (show open item open all the time but have an accordion style of questions) was a little tricky, I tried various methods but I think I managed to settle the most simplest way by doing it in multiple ways.

With shared components on multiple pages comes the challenge of conditional rendering of certain parts of the components based on the requirement of the page. I ended up going back and editing a lot of shared components to accomodate those edits.

Sharing navigation component with using NavLink from react-router-dom caused a weird bug I haven't tried to fix nor investigated properly. (>re)
Bug : The `isActive` prop with NavLink does not get shared in different variants of the Navigation component so the links in footer and header does not show the CSS of active item properly. It only shows for active nav items of the header not the footer even if footer items are clicked, the CSS changes only shows up on the header navitem. (>re)

As always mobile navs are tricky to handle for me and this one was not different. It took more time than it should have. So the navbar component and its CSS has the most hacky stuff to make it work properly.(>re)

Creating data objects or adding data to props certainly helps a lot with bringing in data than filling all the data in the markup. Keeps the component very easy to modify and re-use if required.

Background images and patterns need a lot of work and fixes. They are not responsive as they should be. (>re)

PENDING TASKS

- Background images, patterns, location page background needs fixing.
- Widescreen approach.

### Useful resources

> ✨ Bootstrapped with Create Snowpack App (CSA).

- [Snowpack : Getting Started with React](https://www.snowpack.dev/tutorials/react)

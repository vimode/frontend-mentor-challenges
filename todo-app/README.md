# Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW).

![Design preview for the Minimalist portfolio website coding challenge](./design/desktop-preview.jpg)

### The challenge

Your challenge is to build out this todo app and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.
Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list
- **Bonus**: Build this project as a full-stack application

## Experience and Challenges 

### Built with

#### Frontend
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- React - JS library
- Axios
- Redux
- Redux Toolkit(RTK)

#### Backend
- Nodejs
- Expressjs
- MongoDB
- Mongoose

#### Tooling
- ViteJS

### What I learned and continued development

_WIP_ - Currently being used as project brain dump, a project todolist, a rough draft for everything I learn and/or want to add to README while building it.

This is an unnecessarily complex implementation of a Todo app. The technologies used for this todo app are overkill and I am fully aware but the best way to reinforce what you have learned is by using it to build something. 
So here we are, an overengineered Todo App.

This app uses React for the frontend with Redux and Redux Toolkit for state management. 

Usage of onMouse events   
The hack for axios delete, backend delete route and deleteMany

As of now jwt token will be stored on client side so current expiry is set to 24hrs
But the other better solution would be to save token on backend, check for each API request to validated token and access can be revoked anytime. (Server side session)

Terrible CSS. Super rusty CSS, SCSS can be better. Refactor, re-organize and use base css to add more defaults and resets.

Learn to commit more and more often. New feature additions should be commited. New render logic should be committed. Big CSS changes, should be committed.

How am I deploying it? 

Since I didn't think of setting up a proper monorepo beforehand I am currently serving my static files from the node server directly. The `dist` folder is build into the backend folder, and the express server serves the static files along with the backend API on the same origin.

changes to the app.js I did for production

```javascript
const path = require('path')

app.use(express.static(path.join(__dirname, 'dist')))

app.get('/', (request, response) => {
    response.send(path.join(__dirname, 'dist', 'index.html'))
  })

```


### Useful resources

https://css-tricks.com/custom-styling-form-inputs-with-modern-css-features/
https://expressjs.com/en/4x/api.html#router.use
https://reactjs.org/docs/events.html#mouse-events
https://redux.js.org/tutorials/essentials/part-1-overview-concepts
https://mongoosejs.com/docs/api/model.html#model_Model-deleteMany
https://sass-lang.com/documentation/


## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

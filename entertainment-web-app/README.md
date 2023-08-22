# Entertainment web app

This is a solution to the Entertainment web app challenge on Frontend Mentor.

![Design Preview](./design/preview.jpg)

## The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate between Home, Movies, TV Series, and Bookmarked Shows pages
- Add/Remove bookmarks from all movies and TV series
- Search for relevant shows on all pages
- **Bonus**: Build this project as a full-stack application
- **Bonus**: If you're building a full-stack app, we provide authentication screen (sign-up/login) designs if you'd like to create an auth flow

### Expected Behaviour

- General
  - The navigation menu should be fixed to the left for larger screens. Use the "Desktop - Home" page in the design as a visual reference.
- Home
  - The trending section should scroll sideways to reveal other trending shows
  - Any search input should search through all shows (i.e. all movies and TV series)
- Movies
  - This page should only display shows with the "Movie" category
  - Any search input should search through all movies
- TV Series
  - This page should only display shows with the "TV Series" category
  - Any search input should search through all TV series
- Bookmarked Shows
  - This page should display all bookmarked shows from both categories
  - Any search input should search through all bookmarked shows

## Experience and Challenges

### Built with

#### Frontend

- Vite + React
- SASS
- npm workspaces

#### Backend

- NodeJS
- ExpressJS
- Cache-Manager
- Mongoose
- MongoDB

## How to Setup this Project Locally

### Project root folder structure

```
|-client\           # Frontend
|-design\           # Design preview
|-server\           # Backend
|-package.json      # Workspace setup and  root scripts
```

### Install

Install dependencies from the project root, this will install all the dependencies for frontend and the backend

```bash
npm install --workspaces
```

Rename .env.sample to .env and update the necessary details.

### Run

To run the project, open the root folder in your terminal and run this command

For Linux/Mac users

```bash
npm run start:app
```

For Windows users

```bash
npm run start:all
```

### What I learned and continued development

### Useful Resources

### TODO

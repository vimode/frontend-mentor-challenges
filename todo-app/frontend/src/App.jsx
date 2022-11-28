import TodoWrapper from "./components/Todowrapper.jsx";
import "./App.scss"

// Header component
function Header() {
  return (
    <header>
      <h1>TODO</h1>
      {/* maybe a radio input
      <button>theme toggle</button> */}
    </header>
  );
}

// Footer component
function Footer () {
  return (
  <footer>
    Created by <a href="#">vimo</a>
  </footer>
  )
}

// App Component
function App() {
  return (
    <div className="App">
      <Header />
      <TodoWrapper />
      <Footer />
    </div>
  );
}

export default App;

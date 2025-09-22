import Header from "./components/header/Header.jsx";
import Search from "./components/Search/Search.jsx";
import WeatherPanels from "./components/Weather/WeatherPanels.jsx";

function App() {
  return (
    <div className="p-4">
      <a
        href="#main"
        className="absolute left-0 text-midnight-neutral-0 underline text-xl sr-only focus:not-sr-only"
      >
        Skip to main
      </a>
      <Header />
      <div>
        <h1 className="text-preset-2">How's the sky looking today?</h1>
        <main id="main">
          <Search />
          <WeatherPanels />
        </main>
      </div>
    </div>
  );
}

export default App;

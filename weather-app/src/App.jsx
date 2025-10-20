import { useEffect, Suspense } from "react";
import Header from "./components/header/Header.jsx";
import Search from "./components/Search/Search.jsx";
import WeatherPanels from "./components/Weather/WeatherPanels.jsx";
import { getWeatherData } from "./utils/getWeather.js";
import { useWeather } from "./weatherContext.jsx";

function App() {
  const { city, weatherData, setWeatherData } = useWeather();

  useEffect(() => {
    let isMounted = true;
    async function fetchingWeatherData() {
      setWeatherData(null);
      const result = await getWeatherData();
      if (isMounted) {
        setWeatherData(result);
      }
    }
    fetchingWeatherData();
    return () => {
      isMounted = false;
    };
  }, [city, setWeatherData]);

  return (
    <div className="p-4 flex flex-col gap-12 max-w-7xl m-auto">
      <a
        href="#main"
        className="absolute left-0 text-midnight-neutral-0 underline text-xl sr-only focus:not-sr-only"
      >
        Skip to main
      </a>
      <Header />
      <h1 className="text-center text-preset-2 p-2">
        How's the sky looking today?
      </h1>
      <main id="main" className="flex flex-col gap-8 w-full self-center">
        <Search />
        {/* TODO:Replace suspense fallback with loading skeleton? */}
        <Suspense fallback={<div>Loading Weather Data...</div>}>
          <WeatherPanels weatherData={weatherData} />
        </Suspense>
      </main>
    </div>
  );
}

export default App;

import { createContext, useContext, useState, useEffect } from "react";
import { getWeatherData } from "./utils/getWeather";

const WeatherDataContext = createContext();

export function WeatherDataProvider({ children }) {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Berlin");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchingWeatherData() {
      try {
        setLoading(true);
        setWeatherData(null);
        const result = await getWeatherData();
        setWeatherData(result);
      } catch (err) {
        setError(`Failed to fetch weather data: ${err}`);
      } finally {
        setLoading(false);
      }
    }
    fetchingWeatherData();
  }, [city]);

  return (
    <WeatherDataContext.Provider
      value={{ city, setCity, weatherData, loading, error }}
    >
      {children}
    </WeatherDataContext.Provider>
  );
}

export function useWeatherDataContext() {
  const context = useContext(WeatherDataContext);
  if (!context) {
    throw new Error(
      `useWeatherDataContext must be used within a WeatherDataProvider`,
    );
  }
  return context;
}

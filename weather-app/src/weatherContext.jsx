import { createContext, useContext, useState, useEffect } from "react";
import { getWeatherData } from "./utils/getWeather";
import { getLocation } from "./utils/getLocation";

const WeatherDataContext = createContext();

export function WeatherDataProvider({ children }) {
  const [weatherData, setWeatherData] = useState(null);
  const [currentCity, setCurrentCity] = useState({
    name: "Berlin",
    lat: 40.73,
    long: -73.93,
    country: "Germany",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchingWeatherData() {
      try {
        setLoading(true);
        setWeatherData(null);
        const geocodes = await getLocation(currentCity.name);
        const { lat, long, city, country } = geocodes.data;
        setCurrentCity((prev) => ({ ...prev, lat, long, name: city, country }));
        const result = await getWeatherData({ ...currentCity, lat, long });
        setWeatherData(result);
      } catch (err) {
        setError(`Failed to fetch weather data: ${err}`);
      } finally {
        setLoading(false);
      }
    }
    fetchingWeatherData();
  }, [currentCity.name]);

  return (
    <WeatherDataContext.Provider
      value={{ currentCity, setCurrentCity, weatherData, loading, error }}
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

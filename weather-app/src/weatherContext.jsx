import { createContext, useContext, useState } from "react";

const WeatherContext = createContext();

export function useWeather() {
  return useContext(WeatherContext);
}

export function WeatherProvider({ children }) {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Berlin");

  return (
    <WeatherContext.Provider
      value={{ city, setCity, weatherData, setWeatherData }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

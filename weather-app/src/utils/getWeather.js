import { fetchWeatherApi } from "openmeteo";

export async function getWeatherData(city, metricUnits) {
  // TODO: Convert this to a try catch
  //
  const temperature_unit = metricUnits ? "celsius" : "fahrenheit";
  const params = {
    latitude: city.lat, // static data for testing
    longitude: city.long, // static data for testing
    daily: ["temperature_2m_max", "temperature_2m_min", "weather_code"],
    hourly: ["temperature_2m", "weather_code"],
    current: [
      "temperature_2m",
      "relative_humidity_2m",
      "apparent_temperature",
      "precipitation",
      "weather_code",
      "is_day",
      "wind_speed_10m",
    ],
    timezone: "auto",
    temperature_unit,
  };
  const url = "https://api.open-meteo.com/v1/forecast";
  const responses = await fetchWeatherApi(url, params);

  // Process first location. Add a for-loop for multiple locations or weather models
  const response = responses[0];

  // Attributes for timezone and location
  const latitude = response.latitude();
  const longitude = response.longitude();
  const elevation = response.elevation();
  const timezone = response.timezone();
  const timezoneAbbreviation = response.timezoneAbbreviation();

  console.log(
    `\nCoordinates: ${latitude}°N ${longitude}°E`,
    `\nElevation: ${elevation}m asl`,
    `\nTimezone: ${timezone} ${timezoneAbbreviation}`,
  );

  const current = response.current();
  const hourly = response.hourly();
  const daily = response.daily();

  // Note: The order of weather variables in the URL query and the indices below need to match!
  const weatherData = {
    current: {
      time: new Date(Number(current.time()) * 1000),
      timeraw: current.time(),
      timezone,
      temperature_2m: current.variables(0).value(),
      relative_humidity_2m: current.variables(1).value(),
      apparent_temperature: current.variables(2).value(),
      precipitation: current.variables(3).value(),
      weather_code: current.variables(4).value(),
      is_day: current.variables(5).value(),
      wind_speed_10m: current.variables(6).value(),
    },
    hourly: {
      time: [
        ...Array(
          (Number(hourly.timeEnd()) - Number(hourly.time())) /
            hourly.interval(),
        ),
      ].map(
        (_, i) =>
          new Date((Number(hourly.time()) + i * hourly.interval()) * 1000),
      ),
      temperature_2m: hourly.variables(0).valuesArray(),
      weather_code: hourly.variables(1).valuesArray(),
    },
    daily: {
      time: [
        ...Array(
          (Number(daily.timeEnd()) - Number(daily.time())) / daily.interval(),
        ),
      ].map(
        (_, i) =>
          new Date((Number(daily.time()) + i * daily.interval()) * 1000),
      ),
      temperature_2m_max: daily.variables(0).valuesArray(),
      temperature_2m_min: daily.variables(1).valuesArray(),
      weather_code: daily.variables(2).valuesArray(),
    },
  };

  // 'weatherData' now contains a simple structure with arrays with datetime and weather data
  // console.log(
  //   `\nCurrent time: ${weatherData.current.time}`,
  //   `\nCurrent temperature_2m: ${weatherData.current.temperature_2m}`,
  //   `\nCurrent relative_humidity_2m: ${weatherData.current.relative_humidity_2m}`,
  //   `\nCurrent apparent_temperature: ${weatherData.current.apparent_temperature}`,
  //   `\nCurrent precipitation: ${weatherData.current.precipitation}`,
  //   `\nCurrent weather_code: ${weatherData.current.weather_code}`,
  //   `\nCurrent is_day: ${weatherData.current.is_day}`,
  //   `\nCurrent wind_speed_10m: ${weatherData.current.wind_speed_10m}`,
  // );
  // console.log("\nHourly data", weatherData.hourly);
  // console.log("\nDaily data", weatherData.daily);
  return weatherData;
}

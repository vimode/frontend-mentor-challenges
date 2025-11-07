import WeatherDetailsCard from "./WeatherDetailCard";

function WeatherDetailsPanel({ weatherData }) {
  return (
    <section className="flex flex-wrap gap-4">
      <WeatherDetailsCard
        label="Feels like"
        value={weatherData?.current?.apparent_temperature.toFixed(0)}
        unit="&#176;"
      />
      <WeatherDetailsCard
        label="Humidity"
        value={weatherData?.current?.relative_humidity_2m.toFixed(0)}
        unit="%"
      />
      <WeatherDetailsCard
        label="Wind"
        value={weatherData?.current?.wind_speed_10m.toFixed(0)}
        unit="&nbsp;km/h"
      />
      <WeatherDetailsCard
        label="Precipitation"
        value={weatherData?.current?.precipitation.toFixed(0)}
        unit="&nbsp;mm"
      />
    </section>
  );
}

export default WeatherDetailsPanel;

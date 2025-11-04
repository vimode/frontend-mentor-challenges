import { weatherIcon } from "../../../utils/weatherIcon";

const DailyWeatherPanel = ({ weatherData }) => {
  const dailyWeatherData = weatherData?.daily;
  return (
    <div className="flex flex-wrap md:flex-nowrap gap-4">
      {dailyWeatherData &&
        dailyWeatherData.time.map((daily, index) => {
          const dailyIcon = weatherIcon(dailyWeatherData.weather_code[index]);
          const day = new Intl.DateTimeFormat("en-US", {
            weekday: "short",
          }).format(new Date(daily));
          const highTemp =
            dailyWeatherData.temperature_2m_max[index].toFixed(0);
          const lowTemp = dailyWeatherData.temperature_2m_min[index].toFixed(0);

          return (
            <div className="dailyCard" key={daily.toString()}>
              <p className="text-preset-6">{day}</p>
              <img src={dailyIcon["src"]} alt={dailyIcon["alt_text"]} />
              <div>
                <p className="text-preset-7">{highTemp}&#176;</p>
                <p className="text-preset-7">{lowTemp}&#176;</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default DailyWeatherPanel;

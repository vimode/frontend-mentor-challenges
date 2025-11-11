export default function HourlyForecastCard({ src, src_alt, time, temp }) {
  return (
    <div className="hourlyCard">
      <div>
        <img src={src} alt={src_alt} />
        <p className="text-preset-5-semibold">{time}</p>
        <p className="text-present-7">{temp}&#176;</p>
      </div>
    </div>
  );
}

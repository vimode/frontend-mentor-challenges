function HourlyCard({ imgSrc, imgAlt, time, temp, dayPeriod }) {
  return (
    <div className="hourlyCard">
      <div>
        <img src={imgSrc} alt={imgAlt} />
        <p className="text-preset-5-semibold">
          {time}&nbsp;{dayPeriod}
        </p>
      </div>
      <p className="text-present-7">{temp}&#176;</p>
    </div>
  );
}

export default HourlyCard;

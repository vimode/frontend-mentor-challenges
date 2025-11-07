function WeatherDetailsCard({ label, value, unit }) {
  return (
    <div className="detailsCard basis-(--xs-basis) md:basis-(--md-basis) lg:basis-(--lg-basis)">
      <p className="text-preset-6 text-midnight-neutral-200">{label}</p>
      <p className="text-preset-3 text-midnight-neutral-0">
        {value}
        {unit}
      </p>
    </div>
  );
}

export default WeatherDetailsCard;

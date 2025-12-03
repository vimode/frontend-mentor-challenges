import HourlyCard from "./HourlyCard";
import { getTimeAndDateValues } from "../../../utils/timeAndDate";

function HourlyRow({ hourlyData, userTZ }) {
  // TODO: Replace with skeleton
  if (!hourlyData?.time?.length) {
    return <p className="text-sm text-gray-400">Loading hourly forecast…</p>;
  }

  const hourlyEntries = hourlyData?.time?.map((t, idx) => {
    const timeData = getTimeAndDateValues(t, userTZ);
    return {
      time: timeData.hour,
      temperature: hourlyData.temperature[idx].toFixed(0),
      icon: hourlyData.weatherCode[idx],
    };
  });

  console.log("hourlyEntries", hourlyEntries);

  return (
    <>
      {hourlyEntries &&
        hourlyEntries.map((entry) => (
          <HourlyCard
            key={entry.time}
            imgSrc={entry.icon.src}
            imgAlt={entry.icon.alt_text}
            time={entry.time}
            temp={entry.temperature}
          />
        ))}
    </>
  );
}

export default HourlyRow;

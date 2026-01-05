export default function DayDropdownModal({ updateDropdownDay, displayDay }) {
  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <>
      {weekdays.map((weekday) => (
        <button
          key={weekday}
          className={`block w-full text-left text-preset-7 px-2 py-[10px] cursor-pointer transition-colors duration-300 hover:bg-midnight-neutral-700 rounded-xl ${weekday === displayDay ? "bg-midnight-neutral-700 rounded-xl" : ""}`}
          onClick={() => updateDropdownDay(weekday)}
        >
          {weekday}
        </button>
      ))}
    </>
  );
}

import { useState } from "react";

export default function DayDropdownModal({ onClose }) {
  // TODO: Move this to context
  const [displayDay, setDisplayDay] = useState("Monday");

  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  function updateDay(selectedDay) {
    setDisplayDay(selectedDay);
    onClose();
  }

  return (
    <div className="absolute top-[10%] right-[calc(var(--spacing)*4)] bg-midnight-neutral-800 border-1 border-midnight-neutral-600 rounded-xl w-1/2 p-2 z-10 flex flex-col gap-1 cursor-pointer">
      {weekdays.map((weekday) => (
        <button
          key={weekday}
          className={`block w-full text-left text-preset-7 px-2 py-[10px] cursor-pointer transition-colors duration-300 hover:bg-midnight-neutral-700 rounded-xl ${weekday === displayDay ? "bg-midnight-neutral-700 rounded-xl" : ""}`}
          onClick={() => updateDay(weekday)}
        >
          {weekday}
        </button>
      ))}
    </div>
  );
}

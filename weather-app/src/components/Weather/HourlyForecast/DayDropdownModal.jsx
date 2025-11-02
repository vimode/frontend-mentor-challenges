import { useState } from "react";

export default function DayDropdownModal({ onClose }) {
  // TODO: Move this to context
  const [currentDay, setCurrentDay] = useState("Monday");

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  function updateDay(day) {
    setCurrentDay(day);
    onClose();
  }

  return (
    <div className="absolute top-[10%] right-[calc(var(--spacing)*4)] bg-midnight-neutral-800 border-1 border-midnight-neutral-600 rounded-xl w-1/2 p-2 z-10 flex flex-col gap-1 cursor-pointer">
      {days.map((day) => (
        <button
          key={day}
          className={`block w-full text-left text-preset-7 px-2 py-[10px] cursor-pointer transition-colors duration-300 hover:bg-midnight-neutral-700 rounded-xl ${currentDay === day ? "bg-midnight-neutral-700 rounded-xl" : ""}`}
          onClick={() => updateDay(day)}
        >
          {day}
        </button>
      ))}
    </div>
  );
}

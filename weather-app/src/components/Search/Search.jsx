import { useState } from "react";
import { getLocation } from "../../utils/getLocation";
import { useWeatherDataContext } from "../../weatherContext";

export default function Search() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [queryData, setQueryData] = useState(null);
  const [queryHistory, setQueryHistory] = useState([]);
  const { setCurrentCity } = useWeatherDataContext();

  async function searchLocation(formData) {
    const query = formData.get("query").trim().toLowerCase();
    setLoading(true);
    setError(null);

    const result = await getLocation(query);
    setLoading(false);

    if (result.status === "success") {
      setQueryData(result.data);
      if (!queryHistory.includes(query)) {
        setQueryHistory((prev) => [...prev, query]);
        setCurrentCity((prev) => ({ ...prev, name: query }));
      }
    } else {
      setError(result);
    }
  }

  return (
    <form
      action={searchLocation}
      className="flex flex-col md:flex-row place-content-center gap-3 md:gap-4 lg:w-1/2 lg:m-auto"
    >
      <div className="relative w-full">
        <img
          className="absolute top-0 bottom-0 my-auto left-4"
          src="./assets/images/icon-search.svg"
        />
        <input
          className="bg-midnight-neutral-800 px-6 py-4 pl-11 rounded-xl w-full text-midnight-neutral-200 placeholder-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-midnight-neutral-900 focus-visible:ring-midnight-neutral-0 hover:cursor-pointer"
          type="search"
          placeholder="Search for a place..."
          name="query"
        />
      </div>
      <button
        className="bg-royal-blue-500 px-6 py-4 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-midnight-neutral-900 focus-visible:ring-royal-blue-500 hover:cursor-pointer hover:bg-royal-blue-700 transition"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}

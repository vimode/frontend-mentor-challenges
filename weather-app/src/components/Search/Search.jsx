import { useRef, useState } from "react";
import { getLocation } from "../../utils/getLocation";
import { useWeatherDataContext } from "../../weatherContext";

export default function Search() {
  const [error, setError] = useState(null);
  const [queryData, setQueryData] = useState(null);
  const [queryHistory, setQueryHistory] = useState([]);
  const { setCurrentCity, loading } = useWeatherDataContext();
  const inputRef = useRef(null);

  async function searchLocation(formData) {
    const query = formData.get("query").trim().toString().toLowerCase();
    setError(null);

    const result = await getLocation(query);

    if (result.status === "success") {
      setQueryData(result.data);
      if (
        !queryHistory.some(
          (city) => city.toLowerCase() === result.data.city.toLowerCase(),
        )
      ) {
        setQueryHistory((prev) => [...prev, result.data.city]);
      }
    } else {
      setError(result);
    }
    setCurrentCity((prev) => ({ ...prev, name: result?.data?.city }));
    // Remove focus from input after searching. To not show the search history dropdown
    inputRef.current.blur();
  }

  async function handleHistorySearch(event) {
    const query = event.target.textContent.toString().trim().toLowerCase();
    const result = await getLocation(query);
    setQueryData(result.data);
    setCurrentCity((prev) => ({ ...prev, name: result?.data?.city }));
  }

  return (
    <>
      <form
        action={searchLocation}
        className="flex flex-col md:flex-row place-content-center gap-3 md:gap-4 lg:w-1/2 lg:m-auto"
      >
        <div className="relative w-full group/search">
          <label htmlFor="location-search" className="sr-only">
            Search for a place
          </label>
          <img
            className="absolute top-0 bottom-0 my-auto left-4"
            src="./assets/images/icon-search.svg"
            alt="Search Icon"
          />
          <input
            className="bg-midnight-neutral-800 px-6 py-4 pl-11 rounded-xl w-full text-midnight-neutral-200 placeholder-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-midnight-neutral-900 focus-visible:ring-midnight-neutral-0 hover:cursor-pointer "
            type="search"
            placeholder="Search for a place..."
            name="query"
            ref={inputRef}
            id="location-search"
          />
          {/* Loading spinner */}
          {loading && (
            <div className="absolute mt-3 bg-midnight-neutral-800 rounded-xl border-midnight-neutral-700 w-full text-preset-7 p-3 h-full content-center z-30">
              <img
                src="./assets/images/icon-loading.svg"
                alt="Loading..."
                className="animate-spin inline"
              />
              &nbsp; Search in progress
            </div>
          )}
          {/* search history dropdown */}
          {queryHistory.length > 0 && (
            <div className="absolute mt-3 bg-midnight-neutral-800 rounded-xl border-midnight-neutral-700 w-full text-preset-7 p-2 h-auto hidden group-focus-within/search:block z-20">
              <div className="flex flex-col items-start gap-1">
                {queryHistory.map((query) => (
                  <button
                    key={query}
                    className="px-2 py-3 hover:bg-midnight-neutral-700 rounded-lg border-midnight-neutral-600 w-full text-left cursor-pointer"
                    onClick={(event) => handleHistorySearch(event)}
                  >
                    {query}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        <button className="bg-royal-blue-500 px-6 py-4 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-midnight-neutral-900 focus-visible:ring-royal-blue-500 hover:cursor-pointer hover:bg-royal-blue-700 transition">
          Search
        </button>
      </form>
    </>
  );
}

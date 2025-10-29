function Search() {
  return (
    <div className="flex flex-col md:flex-row place-content-center gap-3 md:gap-4 lg:w-1/2 lg:m-auto">
      <div className="relative w-full">
        <img
          className="absolute top-0 bottom-0 my-auto left-4"
          src="./assets/images/icon-search.svg"
        />
        <input
          className="bg-midnight-neutral-800 px-6 py-4 pl-11 rounded-xl w-full text-midnight-neutral-200 placeholder-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-midnight-neutral-900 focus-visible:ring-midnight-neutral-0 hover:cursor-pointer"
          type="search"
          placeholder="Search for a place..."
        />
      </div>
      <button className="bg-royal-blue-500 px-6 py-4 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-midnight-neutral-900 focus-visible:ring-royal-blue-500 hover:cursor-pointer hover:bg-royal-blue-700 transition">
        Search
      </button>
    </div>
  );
}

export default Search;

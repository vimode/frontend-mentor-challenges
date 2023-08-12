import { useState, useEffect, useCallback } from "react";
import { useLoaderData } from "react-router-dom";
import { getPopularMovies } from "../services/movies";
import MediaCard from "../components/MediaCard";
import Search from "../components/Search";
import { searchMovies } from "../services/search";
import debounce from "lodash.debounce";

export async function loader() {
  //TODO: Add defer data
  return getPopularMovies();
}

const MoviesPage = () => {
  const moviesData = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchData, setSearchData] = useState([]);

  const searchFilter = async (searchQuery) => {
    if (!searchQuery) return null;

    const query = searchQuery.toLowerCase().trim();
    const data = await searchMovies(query);
    setSearchData(data);
  };

  useEffect(() => {
    searchFilter(searchQuery);
  }, [searchQuery]);

  const renderSearchResults = () => {
    return (
      <section className="grid_listing_wrapper">
        <h1>Search Results</h1>
        <div className="grid_listing">
          {searchData.map((media) => (
            <MediaCard
              type={media.type}
              key={media.id}
              id={media.id}
              media={media}
            />
          ))}
        </div>
      </section>
    );
  };

  // const debounceFilter = useCallback(
  //   debounce((query) => {
  //     setFilteredMoviesData(
  //       filteredMoviesData.filter((movie) =>
  //         movie.title.toLowerCase().includes(query.toLowerCase())
  //       )
  //     );
  //   }, 3000),
  //   []
  // );
  //
  // const searchMovies = (e) => {
  //   e.preventDefault();
  //   const { value } = e.target;
  //   if (value.length === 0) return setFilteredMoviesData(moviesData);
  //   if (value.length >= 1) debounceFilter(value);
  // };
  //
  return (
    <>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <main>
        {searchQuery.length > 1 ? (
          renderSearchResults()
        ) : (
          <section>
            <h1>Movies</h1>
            <div className="grid_listing">
              {moviesData.map((media) => (
                <MediaCard
                  key={media.id}
                  id={media.id}
                  type="Movie"
                  media={media}
                />
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
};

export default MoviesPage;

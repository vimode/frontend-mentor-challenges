import { useLoaderData } from "react-router-dom";
import { getPopularMovies } from "../services/movies";
import MediaCard from "../components/MediaCard";
import Search from "../components/Search";
import { useCallback, useState } from "react";
import debounce from "lodash.debounce";

export async function loader() {
  //TODO: Add defer data
  return getPopularMovies();
}

const MoviesPage = () => {
  const moviesData = useLoaderData();

  const [filteredMoviesData, setFilteredMoviesData] = useState(moviesData);

  const debounceFilter = useCallback(
    debounce((query) => {
      setFilteredMoviesData(
        filteredMoviesData.filter((movie) =>
          movie.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    }, 3000),
    []
  );

  const searchMovies = (e) => {
    e.preventDefault();
    const { value } = e.target;
    if (value.length === 0) return setFilteredMoviesData(moviesData);
    if (value.length >= 1) debounceFilter(value);
  };

  return (
    <>
      <form className="search_form">
        <input
          type="search"
          placeholder="Search for Movies or TV Series"
          onKeyUp={(e) => searchMovies(e)}
        />
      </form>
      {/* <Search /> */}
      <main>
        <section>
          {" "}
          <h1>Movies</h1>
          <div className="grid_listing">
            {filteredMoviesData.map((media) => (
              <MediaCard
                key={media.id}
                id={media.id}
                type="Movie"
                media={media}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default MoviesPage;

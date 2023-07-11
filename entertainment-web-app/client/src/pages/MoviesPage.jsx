import { useLoaderData } from "react-router-dom";
import { getPopularMovies } from "../services/movies";
import MediaCard from "../components/MediaCard";
import Search from "../components/Search";

export async function loader() {
  // TODO: Add defer data
  return getPopularMovies();
}

const MoviesPage = () => {
  const moviesData = useLoaderData();

  return (
    <>
      <Search />
      <main>
        <section>
          {" "}
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
      </main>
    </>
  );
};

export default MoviesPage;

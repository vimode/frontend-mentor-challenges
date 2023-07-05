import { useLoaderData } from "react-router-dom";
import MediaCard from "../components/MediaCard";
import { getTrendingMovies } from "../services/movies";
import Search from "../components/Search";

export async function loader() {
  return getTrendingMovies();
}

const HomePage = () => {
  const moviesData = useLoaderData();
  console.log(moviesData[0]);

  return (
    <>
      <Search />
      <main>
        <section>
          <h1>Trending</h1>
          <div className="grid_trending">
            {moviesData.slice(0, 5).map((media) => (
              <MediaCard type="Movie" key={media.id} trending media={media} />
            ))}
          </div>
        </section>
        <section className="grid_listing_wrapper">
          <h1>Recommended for you</h1>
          <div className="grid_listing">
            {moviesData.slice(8).map((media) => (
              <MediaCard type="Movie" key={media.id} media={media} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;

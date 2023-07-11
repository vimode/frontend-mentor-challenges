import { Suspense } from "react";
import { useLoaderData, defer, Await } from "react-router-dom";
import MediaCard from "../components/MediaCard";
import { getTrendingMovies } from "../services/movies";
import Search from "../components/Search";

export async function loader() {
  // return getTrendingMovies();
  return defer({ moviesData: getTrendingMovies() });
}

const HomePage = () => {
  const movies = useLoaderData();

  return (
    <>
      <Search />
      <main>
        <section>
          <h1>Trending</h1>
          {/* TODO: Create a loading component */}
          <Suspense fallback={<>Loading...</>}>
            <Await resolve={movies.moviesData}>
              {(movies) => {
                return (
                  <div className="grid_trending">
                    {movies.slice(0, 5).map((media) => (
                      <MediaCard
                        type="Movie"
                        key={media.id}
                        id={media.id}
                        trending
                        media={media}
                      />
                    ))}
                  </div>
                );
              }}
            </Await>
          </Suspense>
        </section>
        <section className="grid_listing_wrapper">
          <h1>Recommended for you</h1>
          <Suspense fallback={<>Loading...</>}>
            <Await resolve={movies.moviesData}>
              {(movies) => {
                return (
                  <div className="grid_listing">
                    {movies.slice(8).map((media) => (
                      <MediaCard
                        type="Movie"
                        key={media.id}
                        id={media.id}
                        media={media}
                      />
                    ))}
                  </div>
                );
              }}
            </Await>
          </Suspense>
        </section>
      </main>
    </>
  );
};

export default HomePage;

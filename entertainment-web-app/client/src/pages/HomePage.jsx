import { Suspense } from "react";
import { useLoaderData, defer, Await } from "react-router-dom";
import MediaCard from "../components/MediaCard";
import { getTrendingMoviesAndShows } from "../services/movies";
import Search from "../components/Search";

export async function loader() {
  let trendingData = await getTrendingMoviesAndShows();
  return defer({ trendingData });
}

const HomePage = () => {
  const trending = useLoaderData();

  return (
    <>
      <Search />
      <main>
        <section>
          <h1>Trending</h1>
          {/* TODO: Create a loading component */}
          <Suspense fallback={<>Loading...</>}>
            <Await resolve={trending}>
              {(movies) => {
                return (
                  <div className="grid_trending">
                    {movies.trendingData.moviesData.slice(0, 5).map((media) => (
                      <MediaCard
                        type={media.type}
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
          <h1>Trending Movies</h1>
          <Suspense fallback={<>Loading...</>}>
            <Await resolve={trending}>
              {(movies) => {
                return (
                  <div className="grid_listing">
                    {movies.trendingData.moviesData
                      .slice(6, 14)
                      .map((media) => (
                        <MediaCard
                          type={media.type}
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
        <section className="grid_listing_wrapper">
          <h1>Trending TV Shows</h1>
          <Suspense fallback={<>Loading...</>}>
            <Await resolve={trending}>
              {(shows) => {
                return (
                  <div className="grid_listing">
                    {shows.trendingData.showsData.slice(0, 8).map((media) => (
                      <MediaCard
                        type={media.type}
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

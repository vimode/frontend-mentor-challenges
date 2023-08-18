import { Suspense, useEffect, useState } from "react";
import { useLoaderData, defer, Await, Link } from "react-router-dom";
import MediaCard from "../components/MediaCard";
import { getTrendingMoviesAndShows } from "../services/movies";
import { searchAllData } from "../services/search";
import Search from "../components/Search";

export async function loader() {
  let trendingData = await getTrendingMoviesAndShows();
  return defer({ trendingData });
}

const HomePage = () => {
  const trending = useLoaderData();
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");

  const [searchQuery, setSearchQuery] = useState(query || "");
  const [searchData, setSearchData] = useState([]);

  const searchFilter = async (searchQuery) => {
    if (!searchQuery) return null;

    const query = searchQuery.toLowerCase().trim();
    const data = await searchAllData(query);
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
            <Link
              to={`${
                media.type === "movie"
                  ? `movies/${media.id}`
                  : `tvshows/${media.id}`
              }`}
              className="media_link"
              aria-label={`Read more about ${media.title}`}
              key={media.id}
            >
              <MediaCard
                type={media.type}
                key={media.id}
                id={media.id}
                media={media}
              />
            </Link>
          ))}
        </div>
      </section>
    );
  };

  return (
    <>
      <Search
        value={searchQuery ?? ""}
        onChange={(value) => setSearchQuery(value)}
      />
      <main>
        {searchQuery?.length > 1 ? (
          renderSearchResults()
        ) : (
          <>
            <section className="grid_trending_wrapper">
              <h1>Trending</h1>
              {/* TODO: Create a loading component */}
              <Suspense fallback={<>Loading...</>}>
                <Await resolve={trending}>
                  {(movies) => {
                    return (
                      <div className="grid_trending">
                        {movies.trendingData.moviesData
                          .slice(0, 5)
                          .map((media) => (
                            <Link
                              to={`movies/${media.id}`}
                              className="media_link"
                              aria-label={`Read more about ${media.title}`}
                              key={media.id}
                            >
                              <MediaCard
                                type={media.type}
                                id={media.id}
                                trending
                                media={media}
                              />
                            </Link>
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
                            <Link
                              to={`movies/${media.id}`}
                              className="media_link"
                              aria-label={`Read more about ${media.title}`}
                              key={media.id}
                            >
                              <MediaCard
                                type={media.type}
                                id={media.id}
                                media={media}
                              />
                            </Link>
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
                        {shows.trendingData.showsData
                          .slice(0, 8)
                          .map((media) => (
                            <Link
                              to={`tvshows/${media.id}`}
                              className="media_link"
                              aria-label={`Read more about ${media.title}`}
                              key={media.id}
                            >
                              <MediaCard
                                type={media.type}
                                id={media.id}
                                media={media}
                              />
                            </Link>
                          ))}
                      </div>
                    );
                  }}
                </Await>
              </Suspense>
            </section>
          </>
        )}
      </main>
    </>
  );
};

export default HomePage;

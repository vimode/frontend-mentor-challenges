import { useLoaderData, defer, Await } from "react-router-dom";
import { getPopularTVShows } from "../services/tvshows";
import MediaCard from "../components/MediaCard";
import Search from "../components/Search";
import { Suspense, useEffect, useState } from "react";
import { searchTVshows } from "../services/search";

export async function loader() {
  let popularShowsData = await getPopularTVShows();
  return defer({ popularShowsData });
}

const TVShowsPage = () => {
  const tvShowData = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchData, setSearchData] = useState([]);

  const searchFilter = async (searchQuery) => {
    if (!searchQuery) return null;

    const query = searchQuery.toLowerCase().trim();
    const data = await searchTVshows(query);
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

  return (
    <>
      <Search
        value={searchQuery ?? ""}
        onChange={(value) => setSearchQuery(value)}
      />
      <main>
        {searchQuery.length > 1 ? (
          renderSearchResults()
        ) : (
          <section className="grid_listing_wrapper">
            <h1>TV Shows</h1>
            <Suspense fallback={<>Loading...</>}>
              <Await resolve={tvShowData}>
                {(tvshows) => {
                  return (
                    <div className="grid_listing">
                      {tvshows.popularShowsData.map((media) => (
                        <MediaCard key={media.id} id={media.id} media={media} />
                      ))}
                    </div>
                  );
                }}
              </Await>
            </Suspense>
          </section>
        )}
      </main>
    </>
  );
};

export default TVShowsPage;

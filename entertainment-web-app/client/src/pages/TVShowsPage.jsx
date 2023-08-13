import { useLoaderData } from "react-router-dom";
import { getPopularTVShows } from "../services/tvshows";
import MediaCard from "../components/MediaCard";
import Search from "../components/Search";
import { useEffect, useState } from "react";
import { searchTVshows } from "../services/search";

export async function loader() {
  // TODO: Add defer data
  return getPopularTVShows();
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
          <section>
            <h1>TV Shows</h1>
            <div className="grid_listing">
              {tvShowData.map((media) => (
                <MediaCard key={media.id} id={media.id} media={media} />
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
};

export default TVShowsPage;

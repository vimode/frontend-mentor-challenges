import { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import MediaCard from "../components/MediaCard";
import Search from "../components/Search";

function BookmarksPage() {
  const [userBookmark, setUserBookmark] = useOutletContext();
  const [searchQuery, setSearchQuery] = useState("");

  const filterBookmarks = (bookmarks, searchQuery) => {
    if (!searchQuery) return bookmarks;
    let query = searchQuery.toLowerCase().trim();

    const movieData = bookmarks.movieData.filter((movie) =>
      movie.title.toLowerCase().includes(query)
    );
    const tvData = bookmarks.tvData.filter((tv) =>
      tv.name.toLowerCase().includes(query)
    );

    return { movieData, tvData };
  };

  const filteredBookmarks = filterBookmarks(userBookmark, searchQuery);

  if (!userBookmark) {
    return (
      <main className="error_wrapper">
        <h2>No bookmarks saved</h2>
      </main>
    );
  }

  return (
    <>
      <Search
        value={searchQuery ?? ""}
        onChange={(value) => setSearchQuery(value)}
      />
      <main>
        <>
          <section className="grid_listing_wrapper">
            <h1>Bookmarked Movies</h1>
            <div className="grid_listing">
              {filteredBookmarks.movieData.map((media) => {
                return (
                  <MediaCard
                    type={media.type}
                    key={media.id}
                    id={media.id}
                    media={media}
                  >
                    <Link
                      to={`/movies/${media.id}`}
                      className="media_link"
                      aria-label={`Read more about ${media.title}`}
                    />
                  </MediaCard>
                );
              })}
            </div>
          </section>
          <section className="grid_listing_wrapper">
            <h1>Bookmarked Shows</h1>
            <div className="grid_listing">
              {filteredBookmarks.tvData.map((media) => {
                return (
                  <MediaCard
                    type={media.type}
                    key={media.id}
                    id={media.id}
                    media={media}
                  >
                    <Link
                      to={`/tvshows/${media.id}`}
                      className="media_link"
                      aria-label={`Read more about ${media.title}`}
                    />
                  </MediaCard>
                );
              })}
            </div>
          </section>
        </>
      </main>
    </>
  );
}

export default BookmarksPage;

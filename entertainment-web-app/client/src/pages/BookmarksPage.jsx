import { useLoaderData } from "react-router-dom";
import Search from "../components/Search";
import { getUserBookmarks } from "../services/movies";
import { useState } from "react";
import MediaCard from "../components/MediaCard";

export async function loader() {
  const userId = localStorage.getItem("UUID");
  const userBookmarkData = await getUserBookmarks(userId);
  return userBookmarkData;
}

// TODO: Handle error page when there are no bookmarks to show.
// TODO: defer data

function BookmarksPage() {
  const userBookmarkData = useLoaderData();
  const [userBookmark, setUserBookmark] = useState(userBookmarkData);
  const [allBookmarks, setAllBookmarks] = useState([
    ...userBookmarkData.movieData,
    ...userBookmarkData.tvData,
  ]);
  const [isSearch, setIsSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredBookmarks = allBookmarks.filter((bookmark) =>
    bookmark.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* <Search /> */}
      <>
        <form className="search_form">
          <input
            type="search"
            placeholder="Search for Movies or TV Series"
            value={searchQuery}
            onChange={handleSearch}
          />
        </form>
      </>
      <main>
        {filteredBookmarks.length > 1 ? (
          <section className="grid_listing_wrapper">
            <h1>Your Bookmarks</h1>
            <div className="grid_listing">
              {filteredBookmarks.map((media) => {
                return (
                  <MediaCard
                    type={media.type}
                    key={media.id}
                    id={media.id}
                    media={media}
                  />
                );
              })}
            </div>
          </section>
        ) : (
          <>
            <section className="grid_listing_wrapper">
              <h1>Bookmarked Movies</h1>
              <div className="grid_listing">
                {userBookmarkData.movieData.map((media) => {
                  return (
                    <MediaCard
                      type={media.type}
                      key={media.id}
                      id={media.id}
                      media={media}
                    />
                  );
                })}
              </div>
            </section>
            <section className="grid_listing_wrapper">
              <h1>Bookmarked Shows</h1>
              <div className="grid_listing">
                {userBookmarkData.tvData.map((media) => {
                  return (
                    <MediaCard
                      type={media.type}
                      key={media.id}
                      id={media.id}
                      media={media}
                    />
                  );
                })}
              </div>
            </section>
          </>
        )}
      </main>
    </>
  );
}

export default BookmarksPage;

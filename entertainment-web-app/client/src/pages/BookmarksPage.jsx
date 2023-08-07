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

function BookmarksPage() {
  const [userBookmark, setUserBookmark] = useState(useLoaderData());
  const filteredUserBookmarks = userBookmark;
  return (
    <>
      <Search />
      <main>
        <section className="grid_listing_wrapper">
          <h1>Bookmarked Movies</h1>
          <div className="grid-listing">
            {filteredUserBookmarks.movieData.map((media) => {
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
          <div className="grid-listing">
            {filteredUserBookmarks.tvData.map((media) => {
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
      </main>
    </>
  );
}

export default BookmarksPage;

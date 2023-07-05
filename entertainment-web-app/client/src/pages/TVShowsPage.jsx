import { useLoaderData } from "react-router-dom";
import { getPopularTVShows } from "../services/tvshows";
import MediaCard from "../components/MediaCard";
import Search from "../components/Search";

export async function loader() {
  return getPopularTVShows();
}

const TVShowsPage = () => {
  const tvShowData = useLoaderData();
  console.log(tvShowData[0]);

  return (
    <>
      <Search />
      <main>
        <section>
          <h1>TV Shows</h1>
          <div className="grid_listing">
            {tvShowData.map((media) => (
              <MediaCard key={media.id} type="TV Series" media={media} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default TVShowsPage;

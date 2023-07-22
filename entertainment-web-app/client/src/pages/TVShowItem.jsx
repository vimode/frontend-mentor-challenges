import { useLoaderData } from "react-router-dom";
import CastGrid from "../components/CastGrid";
import MediaDetails from "../components/MediaDetails";
import MediaPage from "../components/MediaPage";

export default function TVShowItem() {
  const mediaData = useLoaderData();
  let poster_size = "w185";

  const videoEmbedId = mediaData.videos.results.filter(
    (video) =>
      video.name === "Official Trailer" ||
      (video.name.includes("Trailer") && video.site === "YouTube")
  )[0];

  return (
    <MediaPage>
      <h1 className="media_title">
        {mediaData.original_name}
        <span>
          {" "}
          ({mediaData.first_air_date.slice(0, 4)} -{" "}
          {mediaData.last_air_date.slice(0, 4)} )
        </span>
      </h1>
      <img
        className="posterImg"
        src={`https://image.tmdb.org/t/p/${poster_size}/${mediaData.poster_path}`}
      />
      <MediaDetails>
        <li>
          <h2>TV Network</h2>
          <p>{mediaData.networks[0].name}</p>
        </li>
        <li>
          <h2>Seasons</h2>
          <p>{mediaData.number_of_seasons}</p>
        </li>
        <li>
          <h2>Episodes</h2>
          <p>{mediaData.number_of_episodes}</p>
        </li>
        <li>
          <h2>Rating</h2>
          <p>{mediaData.vote_average.toFixed(1)}</p>
        </li>
        <li>
          <h2>Language</h2>
          <p>English</p>
        </li>
      </MediaDetails>
      <div className="video-player">
        <iframe
          src={`https://www.youtube.com/embed/${videoEmbedId.key}`}
          frameBorder="0"
          width="560"
          height="315"
          allowFullScreen
          title="Embedded video player"
          allow="accelerometer; clipboard-write; autoplay; encrypted-media"
        ></iframe>
      </div>
      <div className="media_data">
        <div>
          <h2>Created by</h2>
          <p>{mediaData.created_by[0].name}</p>
        </div>
        <div>
          <h2>Description</h2>
          <p>{mediaData.overview}</p>
        </div>
        <div>
          <h2>Cast</h2>
          <CastGrid cast={mediaData.credits.cast} />
        </div>
      </div>
    </MediaPage>
  );
}

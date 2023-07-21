export default function CastGrid({ cast }) {
  let profileImg_size = "h632";

  let gridSize = cast.length > 12 ? 10 : cast.length;

  console.log(gridSize);

  return (
    <ul>
      {cast.slice(0, gridSize).map((cast) => (
        <li key={cast.id}>
          <img
            className="castImg"
            src={`https://image.tmdb.org/t/p/${profileImg_size}/${cast.profile_path}`}
          />
          <p>{cast.original_name}</p>
        </li>
      ))}
    </ul>
  );
}

export default function CastGrid({ cast }) {
  let profileImg_size = "h632";

  let gridSize = cast.length > 12 ? 10 : cast.length;

  return (
    <ul>
      {cast.slice(0, gridSize).map((cast) => (
        <li key={cast.id}>
          {cast.profile_path ? (
            <img
              className="castImg"
              src={`https://image.tmdb.org/t/p/${profileImg_size}/${cast.profile_path}`}
            />
          ) : (
            <img
              className="castImg"
              src={`https://ui-avatars.com/api/?size=512&font-size=0.25&background=171e31&color=fff&&name=${cast.original_name}`}
            />
          )}
          <p>{cast.original_name}</p>
        </li>
      ))}
    </ul>
  );
}

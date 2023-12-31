function Movie({ movie, onSelectMovie }) {
  return (
    <li
      onClick={() => onSelectMovie(movie.imdbID)}
      className="relative flex cursor-pointer items-center gap-x-10 px-[3.2rem] py-[1.6rem] text-xl transition-all hover:bg-[#343a40]"
    >
      {movie.Poster === 'N/A' ? (
        <div className="row-[1/-1] flex h-20 w-20 shrink-0 rounded bg-slate-600">
          <span className="m-auto text-4xl">?</span>
        </div>
      ) : (
        <img
          src={movie.Poster}
          alt={`${movie.Title} poster`}
          className="row-[1/-1] w-20 object-cover"
        />
      )}
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold">{movie.Title}</h3>
        <p className="flex items-center gap-2">
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  )
}

export default Movie

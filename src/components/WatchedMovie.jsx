function WatchedMovie({ movie }) {
  return (
    <li className="relative flex cursor-pointer items-center gap-x-10 px-[3.2rem] py-[1.6rem] text-xl transition-all hover:bg-[#343a40]">
      {movie.poster === 'N/A' ? (
        <div className="row-[1/-1] flex h-20 w-20 shrink-0 rounded bg-slate-600">
          <span className="m-auto text-4xl">?</span>
        </div>
      ) : (
      <img
        src={movie.poster}
          alt={`${movie.title} poster`}
        className="row-[1/-1] w-20 object-cover"
      />
      )}
      <div className="space-y-3">
        <h3 className="text-2xl font-semibold">{movie.title}</h3>
        <div className="flex items-center gap-[2.4rem]">
          <p className="flex items-center gap-2">
            <span>⭐️</span>
            <span>{movie.imdbRating}</span>
          </p>
          <p className="flex items-center gap-2">
            <span>🌟</span>
            <span>{movie.userRating}</span>
          </p>
          <p className="flex items-center gap-2">
            <span>⏳</span>
            <span>{movie.runtime} min</span>
          </p>
        </div>
      </div>
    </li>
  )
}

export default WatchedMovie

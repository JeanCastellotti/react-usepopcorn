function WatchedMovie({ movie, onDeleteWatchedMovie }) {
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
            <span>{movie.imdbRating ? movie.imdbRating : '-'}</span>
          </p>
          <p className="flex items-center gap-2">
            <span>🌟</span>
            <span>{movie.userRating ? movie.userRating : '-'}</span>
          </p>
          <p className="flex items-center gap-2">
            <span>⏳</span>
            <span>{movie.runtime ? `${movie.runtime} min` : '-'}</span>
          </p>
        </div>
      </div>
      <button
        onClick={() => onDeleteWatchedMovie(movie.imdbID)}
        className="absolute right-8 flex aspect-square w-8 cursor-pointer items-center justify-center rounded-full bg-[#fa5252] font-bold text-[#212529] transition hover:bg-[#e03131]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </li>
  )
}

export default WatchedMovie

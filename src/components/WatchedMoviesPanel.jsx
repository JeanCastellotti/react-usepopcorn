const average = (arr) =>
  arr.reduce((acc, curr, i, arr) => acc + curr / arr.length, 0)

function WatchedMoviesPanel({
  watchedMovies,
  showWatchedMovies,
  onShowWatchedMovies,
}) {
  const avgImdbRating = average(watchedMovies.map((movie) => movie.imdbRating))
  const avgUserRating = average(watchedMovies.map((movie) => movie.userRating))
  const avgRuntime = average(watchedMovies.map((movie) => movie.runtime))

  return (
    <div className="relative w-[42rem] max-w-[42rem] overflow-y-auto rounded-[0.9rem] bg-[#2b3035]">
      <button
        onClick={() => onShowWatchedMovies((o) => !o)}
        className="absolute right-[0.8rem] top-[0.8rem] z-50 aspect-square h-[2.4rem] cursor-pointer rounded-full border-none bg-[#212529] text-[1.4rem] font-bold text-[#dee2e6]"
      >
        {showWatchedMovies ? '-' : '+'}
      </button>
      {showWatchedMovies && (
        <>
          <div className="rounded-[0.9rem] bg-[#343a40] p-[2.2rem_3.2rem_1.8rem_3.2rem] shadow-[0_1.2rem_2.4rem_rgba(0,0,0,0.2)]">
            <h2 className="mb-[0.6rem] text-2xl font-semibold uppercase">
              Movies you watched
            </h2>
            <div className="flex items-center gap-[2.4rem] text-xl">
              <p className="flex items-center gap-2">
                <span>#️⃣</span>
                <span>{watchedMovies.length} movies</span>
              </p>
              <p className="flex items-center gap-2">
                <span>⭐️</span>
                <span>{avgImdbRating}</span>
              </p>
              <p className="flex items-center gap-2">
                <span>🌟</span>
                <span>{avgUserRating}</span>
              </p>
              <p className="flex items-center gap-2">
                <span>⏳</span>
                <span>{avgRuntime} min</span>
              </p>
            </div>
          </div>

          <ul className="divide-y divide-[#343a40] py-[0.8rem]">
            {watchedMovies.map((movie) => (
              <li
                key={movie.imdbID}
                className="relative flex cursor-pointer items-center gap-x-10 px-[3.2rem] py-[1.6rem] text-xl transition-all hover:bg-[#343a40]"
              >
                <img
                  src={movie.Poster}
                  alt={`${movie.Title} Poster`}
                  className="row-[1/-1] w-20 object-cover"
                />
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold">{movie.Title}</h3>
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
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default WatchedMoviesPanel
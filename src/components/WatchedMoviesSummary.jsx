const average = (arr) =>
  arr.reduce((acc, curr, i, arr) => acc + curr / arr.length, 0)

function WatchedMoviesSummary({ watchedMovies }) {
  const avgImdbRating = average(watchedMovies.map((movie) => movie.imdbRating))
  const avgUserRating = average(watchedMovies.map((movie) => movie.userRating))
  const avgRuntime = average(watchedMovies.map((movie) => movie.runtime))

  return (
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
  )
}

export default WatchedMoviesSummary

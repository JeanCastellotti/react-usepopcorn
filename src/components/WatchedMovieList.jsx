import WatchedMovie from './WatchedMovie'

function WatchedMovieList({ watchedMovies, onDeleteWatchedMovie }) {
  if (!watchedMovies.length)
    return <p className="mt-20 text-center text-xl">No movies</p>

  return (
    <ul className="divide-y divide-[#343a40] py-[0.8rem]">
      {watchedMovies.map((movie) => (
        <WatchedMovie
          key={movie.imdbID}
          movie={movie}
          onDeleteWatchedMovie={onDeleteWatchedMovie}
        />
      ))}
    </ul>
  )
}

export default WatchedMovieList

import WatchedMovie from './WatchedMovie'

function WatchedMovieList({ watchedMovies }) {
  return (
    <ul className="divide-y divide-[#343a40] py-[0.8rem]">
      {watchedMovies.map((movie) => (
        <WatchedMovie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  )
}

export default WatchedMovieList
